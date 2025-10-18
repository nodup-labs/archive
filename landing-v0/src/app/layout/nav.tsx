"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { IconMenu2, IconX } from "@tabler/icons-react";

const Navpage = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => setIsOpen(!isOpen);

  const navLinks = [
    { name: "خانه", href: "/" },
    { name: "مجله", href: "/about" },
    { name: "پروژه ها", href: "/projects" },
    { name: "خدمات", href: "/blog" },
    { name: "تماس با ما", href: "/projects" },
    { name: "درباره ما", href: "/about-us" },
  ];

  return (
    <div className="container mx-auto rounded-4xl p-4 shadow-sm shadow-blue-100 mt-10 bg-white z-10 mb-10  ">
      <div className="flex items-center justify-between ">
        <Link href="/" className="font-bold text-xl">
          <p className="text-lg flex items-center gap-1">
            <span className="text-primary">&lt;</span>
            NODUP
            <span className="text-primary">&gt;</span>
          </p>
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex gap-3 items-center">
          {navLinks.map((link, idx) => (
            <span key={link.name} className="flex items-center gap-1">
              <Link href={link.href} className="text-sm font-medium">
                {link.name}
              </Link>
              {idx !== navLinks.length - 1 && (
                <span className="text-blue-500">.</span>
              )}
            </span>
          ))}
        </div>
        <div className="hidden md:block">
          <Button variant="default" size="sm">
            مشاوره رایگان
          </Button>
        </div>

        {/* Mobile Menu Icon */}
        <div className="md:hidden">
          {!isOpen && (
            <button onClick={toggleSidebar}>
              <IconMenu2 size={24} />
            </button>
          )}
        </div>
      </div>

      {/* Sidebar */}
      <div
        className={`fixed top-0 right-0 h-full w-64 bg-white shadow-lg p-6 transform transition-transform duration-300 ease-in-out z-50 ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex justify-between items-center mb-6">
          <span className="font-bold text-xl">NODUP</span>
          <button onClick={toggleSidebar}>
            <IconX size={24} />
          </button>
        </div>
        <nav className="flex flex-col gap-4">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-base font-medium"
              onClick={() => setIsOpen(false)}
            >
              {link.name}
            </Link>
          ))}
        </nav>
        <div className="mt-6">
          <Button variant="default" size="sm" onClick={() => setIsOpen(false)}>
            مشاوره رایگان
          </Button>
        </div>
      </div>

      {/* Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black opacity-30 z-40 backdrop-blur-sm"
          onClick={toggleSidebar}
        ></div>
      )}
    </div>
  );
};

export default Navpage;
