import React from "react";
import Navbar from "../common/Navbar";
import Link from "next/link";
import Offers from "./Offers";
import styles from '../../styles/Home.module.css'

const Banner = () => {
  return (
    <>
      <main
        style={{
          backgroundImage: 'url("/assets/bg-img.png")',
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center",
          height: "79vh",
        }}
        className="position-relative"
      >
        <Navbar />
        <section className={`${styles.home_container} wrapper`}>
          <div className="mt-5 pt-5">
            <h1 className="fw-bolder fs_large mt-2 ">
              Creative and Innovative <br />
              <span className="text-color">Digital</span> Solutions
            </h1>

            <p className="fs_normal fw-light mt-4 mb-5">
              We are set to become the best IT agency ever
            </p>
            <div>
              <Link
                href="/contact"
                className="btnn btnn_big fw-semibold text-white "
              >
                Discover more
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Offers />
    </>
  );
};

export default Banner;
