import { linkData } from "@/data/mockData";
import Link from "next/link";
import { useState } from "react";
import { BiMenu } from "react-icons/bi";
// import { RiArrowRightUpLine } from "react-icons/ri";
import { useRouter } from "next/router"; // Import the useRouter hook from Next.js
import { Col, Row } from "react-bootstrap";
// import styles from "./common.module.css";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const router = useRouter(); // Use the useRouter hook

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <main className="grid-container">
        <section className="navbar_container">
          <Row>
            <nav className="navbar navbar-expand-lg pt-2 text-black ">
              <div className="container-fluid mt-2">
                <Col md={7} className="mx-auto ">
                  <Link href="/" className="navbar-brand" passHref>
                    <img
                      src="/assets/logo.png"
                      alt="logo"
                      // className=" mt-2"
                      style={{ width: "6rem", height: "1.6rem" }}
                    />
                  </Link>
                  <button
                    className="navbar-toggler fs-medium p-0 border-0"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarSupportedContent"
                    aria-controls="navbarSupportedContent"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                  >
                    <BiMenu className="border-none" />
                  </button>
                </Col>
              </div>

              <Col md={7}>
                <div
                  className="collapse navbar-collapse mt-3 px-3 me-5"
                  id="navbarSupportedContent"
                >
                  <ul className="navbar-nav nav-fs">
                    {linkData.map((link, index) => (
                      <li className="nav-item" key={index}>
                        <Link
                          href={link.url}
                          className={`nav-laptop-link nav-link mx-3 ${
                            router.pathname === link.url ? "active" : ""
                          }`}
                          passHref
                        >
                          {link.title}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </Col>

              <Col
                md={1}
                className='btnn me-5 mt-2'
              >
                <Link href="/contact">
                  Contact us
                </Link>
              </Col>
            </nav>
          </Row>
        </section>

        {/* mobile view */}
      </main>
    </>
  );
};

export default Navbar;
