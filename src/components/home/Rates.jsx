import React from "react";
import { Col, Row } from "react-bootstrap";
import styles from '../../styles/Home.module.css'

const Rates = () => {
  return (
    <>
      <main className="grid_container">
        <section
          className={`${styles.home_container} wrapper`}
          style={{
            paddingTop: "11rem",
          }}
        >
          <Row className="text-center">
            <Col md={3}>
              <div
                className="card rounded text-white"
                style={{
                  backgroundColor: "#032376",
                }}
              >
                <h1>100</h1>
                <p>Hours Saved Annually</p>
              </div>
            </Col>
            <Col md={3}>
              <div
                className="card rounded text-white"
                style={{
                  backgroundColor: "#03762A",
                }}
              >
                <h1>+10.000</h1>
                <p>Projects completed</p>
              </div>
            </Col>
            <Col md={3}>
              <div
                className="card rounded text-white"
                style={{
                  backgroundColor: "#3498DB",
                }}
              >
                <h1>200K</h1>
                <p>APR</p>
              </div>
            </Col>
            <Col md={3}>
              <div
                className="card rounded text-white"
                style={{
                  backgroundColor: "#660376",
                }}
              >
                <h1>250</h1>
                <p>Unique Users</p>
              </div>
            </Col>
          </Row>
        </section>
      </main>
    </>
  );
};

export default Rates;
