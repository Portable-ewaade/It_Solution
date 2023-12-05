import React from "react";
// import { TbSettingsStar } from "react-icons/tb";
import { Col, Row } from "react-bootstrap";
import styles from '../../styles/Home.module.css'

const Offers = () => {
  return (
    <>
      <main className="grid-container position-absolute top-50 mt-5 pt-5">
        <section className={`${styles.home_container} wrapper pt-3`}>
          <Row className="mt-5 pt-5">
            <Col md={3}>
              <div className="card px-2 py-2 border-0 text-center">
                <div className="text-center">
                  <img
                    src="/assets/web.png"
                    alt="offers"
                    className="img_icons img-fluid mt-3 text-center"
                  />
                  {/* <TbSettingsStar className="fs-1" /> */}
                </div>
                <h4 className="text-color"> Web Development </h4>
                <p className="fs_small mt-3">
                  Creating websites and web applications with a focus on user
                  experience and functionality.
                </p>
              </div>
            </Col>
            <Col md={3}>
              <div className="card p-3 border-0 text-center">
                <div className="text-center">
                  <img
                    src="/assets/consulting.png"
                    alt="offers"
                    className="img_icons img-fluid"
                  />
                </div>
                <h4 className="text-color"> IT Consulting </h4>
                <p className="fs_small mt-3">
                  Providing expert advice and guidance on IT strategies,
                  infrastructure, and technology adoption.
                </p>
              </div>
            </Col>
            <Col md={3}>
              <div className="card p-3 border-0 text-center">
                <div className="text-center">
                  <img
                    src="/assets/cyber.png"
                    alt="offers"
                    className="img_icons img-fluid mb-1"
                  />
                </div>
                <h4 className="text-color"> Cybersecurity</h4>
                <p className="fs_small mt-3">
                  Implementing measures to protect systems and data, including
                  threat detection, vulnerability assessments, and security
                  consulting.
                </p>
              </div>
            </Col>
            <Col md={3}>
              <div className="card p-3 border-0 text-center">
                <div className="text-center">
                  <img
                    src="/assets/management.png"
                    alt="offers"
                    className="img_icons img-fluid mb-2"
                  />
                </div>
                <h4 className="text-color"> Project Management</h4>
                <p className="fs_small mt-3">
                  Efficient project planning, execution, and coordination to
                  deliver IT solutions within specified timelines and budgets
                </p>
              </div>
            </Col>
          </Row>
        </section>
      </main>
    </>
  );
};

export default Offers;
