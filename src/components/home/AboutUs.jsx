import React from "react";
import { Col, Row } from "react-bootstrap";
import styles from "../../styles/Home.module.css";

const AboutUs = () => {
  return (
    <>
      <main className="mt-5 pt-5">
        <section
          className={`${styles.home_container} wrapper`}
          style={{
            paddingTop: "9.3rem",
          }}
        >
          <div className="text-center mb-5">
            <Row>
              <Col md={5}>
                <img
                  src="/assets/line-icon.png"
                  className={`${styles.line_img} img-fluid`}
                  alt=""
                />
              </Col>

              <Col md={2}>
                <h3 className="text-color">About Us</h3>
              </Col>

              <Col md={5}>
                <img
                  src="/assets/line-icon2.png"
                  className="img-fluid"
                  alt=""
                />
              </Col>
            </Row>

            <h2 className="fw-semibold secondary-color">
              Get to know about us
            </h2>
          </div>
          <Row>
            <Col md={6}>
              <div className="card border-0">
                <img src="/assets/laptop-img.png" className="" alt="" />
              </div>
            </Col>
            <Col md={6}>
              <h2 className="fw-bold tetary-color">
                Best IT Service Agency, Commitment to Excellence, Transparency,
                and Customer Satisfaction
              </h2>
              <div>
                <Row>
                  <Col md={1}>
                    <img
                      src="/assets/straight-dot.png"
                      className="img-fluid"
                      style={{
                        height: "13rem",
                        marginTop: "0.2rem",
                      }}
                      alt=""
                    />
                  </Col>
                  <Col md={11} className="me-0">
                    <p className="fs_normal">
                      <span className="text-color">Expertise</span>: Our team
                      comprises seasoned professionals with extensive expertise
                      in software development, web solutions, and IT consulting.
                    </p>
                    <p className="fs_normal mt-4">
                      <span className="text-color">Quality Assurance</span>:
                      Rigorous testing processes and quality assurance measures
                      are integral to our service delivery, ensuring robust and
                      reliable solutions.
                    </p>
                    <p className="fs_normal">
                      <span className="text-color">Innovation</span>: We are at
                      the forefront of technological advancements, ensuring that
                      your business stays ahead in the ever-evolving digital
                      landscape.
                    </p>
                  </Col>
                </Row>
              </div>
            </Col>
          </Row>
        </section>
      </main>
    </>
  );
};

export default AboutUs;
