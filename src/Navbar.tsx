"use client";

import Link from "next/link";
import logo from "../public/logo.png";
import { useRef, useState, useEffect } from "react";
import Image from "next/image";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [toggler, setToggler] = useState(false);

  const dropdownRef = useRef(null);
  const navLinksRef = useRef(null);
  
  const handleClick = () => {
    if (navLinksRef.current) {
      const currentDisplay = (navLinksRef.current as HTMLElement).style.display;
      (navLinksRef.current as HTMLElement).style.display = currentDisplay === 'none' ? 'block' : 'none';
    }
  };

  useEffect(() => {
    const handleDocumentClick = (event: MouseEvent) => {
      closeDropdownOnClickOutside(event);
    };
    if (open) {
      document.addEventListener("click", handleDocumentClick);
    }

    return () => {
      document.removeEventListener("click", handleDocumentClick);
    };
  }, [open]);

  function closeDropdownOnClickOutside(event: MouseEvent) {
    if (
      dropdownRef.current &&
      !(dropdownRef.current as HTMLElement).contains(event.target as Node)
    ) {
      setOpen(false);
    }
  }

  return (
    <>
      <nav className="nav_container">
        <a href="/">
          <Image
            src={logo}
            alt="logo"
            style={{ backgroundColor: "black" }}
            width={50}
            height={50}
          />
        </a>
        <button onClick={handleClick} className="toggler">&#9776;</button>
        <ul className="nav_links" ref={navLinksRef}>
          <li>
            <Link href="#home">Home</Link>
          </li>
          <li>
            <Link href="#about">About</Link>
          </li>
          <li>
            <Link href="#skills">Skills</Link>
          </li>
          <li>
            <Link href="#projects">Projects</Link>
          </li>
          <li>
            <a
              href="/resume/Frontend_Developer_Manthan.pdf"
              download="Frontend_Developer_Manthan.pdf"
            >
              Resume
            </a>
          </li>
          <li>
            <button ref={dropdownRef} onClick={() => setOpen(!open)}>
              Links
            </button>
            {open && (
              <div className="links_container">
                <a href="https://github.com/Manthan0786">Github</a>
                <a href="https://www.linkedin.com/in/manthan-bhardwaj/">
                  LinkedIn
                </a>
              </div>
            )}
          </li>
        </ul>
      </nav>
    </>
  );
}
