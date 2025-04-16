"use client";

import React, { useState } from "react";
import Image from "next/image";
import { CiSearch } from "react-icons/ci";
import { CgShoppingCart } from "react-icons/cg";
import logo from "../src/assets/olivra.png";
import Link from "next/link";
import { RiMenu3Line, RiCloseLine } from "react-icons/ri";
import { useStateContext } from "../context/StateContext";
import { usePathname } from "next/navigation";

const Navbar = ({ Searchproducts }) => {
  const { showCart, setShowCart, totalQty } = useStateContext();
  const [toggleMenu, setToggleMenu] = useState(false);
  const pathname = usePathname();
  // const [searchTerm, setSearchTerm] = useState("");

  const navLinks = [
    { href: "/female", label: "Female" },
    { href: "/male", label: "Male" },
    { href: "/kids", label: "Kids" },
    { href: "/products", label: "All Products" },
  ];

  return (
    <nav className="navbar">
      <Link href="/">
        <div
          style={{
            display: "flex",
            alignItems: "center",
            textDecoration: "none",
            color: "inherit",
          }}
        >
          <Image src={logo} width={100} height={100} alt="logo" />
          <span
            style={{
              fontSize: "2.5rem",
              fontWeight: 700,
              color: "#8ea092",
            }}
          >
            Olivra
          </span>
        </div>
      </Link>
      <ul className="nav-links">
        {navLinks.map((link) => (
          <li key={link.href}>
            <Link
              href={link.href}
              className={`nav-link ${
                pathname === link.href ? "active-link" : ""
              }`}
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>

      <div className="search-bar">
        <CiSearch />
        <input
          type="text"
          placeholder="What you looking for"
          // value={searchTerm}
          // onChange={(event) => {
          //   const value = event.target.value;
          //   setSearchTerm(value);
          //   Searchproducts(value);
          // }}
        />
      </div>
      {/* onChange={(event) => {
              setSearchTerm(event.target.value); //new
          }} */}

      {showCart ? (
        <Link href="/cart">
          <button className="cart" onClick={() => setShowCart(false)}>
            <CgShoppingCart size={22} />
            <span className="cart-item-qty">{totalQty}</span>
          </button>
        </Link>
      ) : (
        <button className="cart" onClick={() => setShowCart(true)}>
          <CgShoppingCart size={22} />
          <span className="cart-item-qty">{totalQty}</span>
        </button>
      )}
      <div className="navbar-smallscreen">
        <RiMenu3Line
          color="#8ea092"
          fontSize={27}
          onClick={() => setToggleMenu(true)}
        />
        {toggleMenu && (
          <div className="navbar-smallscreen_overlay">
            <Link href="/">
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  textDecoration: "none",
                  color: "inherit",
                }}
              >
                <Image src={logo} width={100} height={100} alt="logo" />
                <span
                  style={{
                    fontSize: "2.5rem",
                    fontWeight: 700,
                    color: "#8ea092",
                  }}
                >
                  Olivra
                </span>
              </div>
            </Link>
            <RiCloseLine
              color="black"
              fontSize={27}
              className="close_icon"
              onClick={() => setToggleMenu(false)}
            />
            <ul className="navbar-smallscreen_links">
              <Link href="/cart">
                <button
                  className="cart-small-screen"
                  onClick={() => setShowCart(false)}
                >
                  <CgShoppingCart size={22} />
                  <span className="cart-item-qty">{totalQty}</span>
                </button>
              </Link>
              <Link href="/female">
                <li>Female</li>
              </Link>
              <Link href="/male">
                <li>Male</li>
              </Link>
              <Link href="/kids">
                <li>Kids</li>
              </Link>
              <Link href="/products">
                <li>All Products</li>
              </Link>
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
