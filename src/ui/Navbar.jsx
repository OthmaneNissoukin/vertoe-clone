"use client";

// import Link from "next/link";
import { Navbar } from "flowbite-react";

function Component() {
  return (
    <Navbar container rounded className="lg:max-w-5xl m-auto">
      <Navbar.Brand href="https://flowbite-react.com">
        <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">Flowbite React</span>
      </Navbar.Brand>
      <Navbar.Toggle />
      <Navbar.Collapse>
        <Navbar.Link href="/" active>
          Homepage
        </Navbar.Link>
        <Navbar.Link href="/locations">Our Locations</Navbar.Link>
        <Navbar.Link href="/sign-in">Sign In</Navbar.Link>
        {/* <Navbar.Link href="#">Pricing</Navbar.Link> */}
        {/* <Navbar.Link href="#">About</Navbar.Link> */}
        {/* <Navbar.Link href="#">Contact</Navbar.Link> */}
      </Navbar.Collapse>
    </Navbar>
  );
}

export default Component;
