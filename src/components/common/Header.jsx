import React from "react";
import styles from "./common.module.css";
import { Col, Row } from "react-bootstrap";
import { IoLocationOutline } from "react-icons/io5";
import { TbMailPlus } from "react-icons/tb";
import { FiPhoneCall } from "react-icons/fi";
import { FaSlack } from "react-icons/fa";
import { LiaTelegram } from "react-icons/lia";
import { FaFacebookF } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const Header = () => {
  return (
    <>
      <main className="grid_container">
        <section className={`${styles.header}`}>
          <div className={`${styles.header_tag}`}>
            <Row>
              <Col md={7}>
                <Row>
                  <Col md={4}>
                    <span>
                      <IoLocationOutline className={`${styles.icons} m-2`} />
                    </span>
                    <span className="fs-6">Avenue plaza, Lagos.</span>
                  </Col>

                  <Col md={4}>
                    <span>
                      <TbMailPlus className={`${styles.icons} m-2`} />
                    </span>
                    <span className="fs-6">
                      <a href="mailto:testingcode@yahoo.com">
                        testingcode@yahoo.com
                      </a>
                    </span>
                  </Col>

                  <Col md={4}>
                    <span>
                      <FiPhoneCall className={`${styles.icons} m-2`} />
                    </span>
                    <span className="fs-6">
                      <a href="tel:+234-90-28-29-12-13" className="fs-6">
                        +234-90-28-29-12-13
                      </a>
                    </span>
                  </Col>
                </Row>
              </Col>

              <Col md={5}>
                <Row className="justify-content-end">
                  <Col md={1}>
                    <FaSlack className="fs-4 my-2" />
                  </Col>
                  <Col md={1}>
                    <LiaTelegram className="fs-3 my-2" />
                  </Col>
                  <Col md={1}>
                    <FaFacebookF className="fs-4 my-2" />
                  </Col>
                  <Col md={1}>
                    <FaLinkedin className="fs-4 my-2" />
                  </Col>
                  <Col md={1}>
                    <FaXTwitter className="fs-4 my-2" />
                  </Col>
                </Row>
              </Col>
            </Row>

           
          </div>
        </section>
      </main>
    </>
  );
};

export default Header;
