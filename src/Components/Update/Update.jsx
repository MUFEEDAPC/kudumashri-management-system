import React from "react";
import { Col, Row } from "react-bootstrap";
import Layout from "../Dashboard/Layout/Layout";


const Update = () => {
  return (
    <div>
      <Layout>
        <form className="form-container">
          <Row>
            <Col>
              <label className="form-label">
                Name:
                <input className="form-input" type="text" name="name" />
              </label>
              <br />
              <label className="form-label">
                Post Office:
                <input className="form-input" type="text" name="postoffice" />
              </label>
              <br />
              <label className="form-label">
                Pin Code:
                <input className="form-input" type="Number" name="pinCode" />
              </label>
              <br />
              <label className="form-label">
                Ward Name:
                <input className="form-input" type="text" name="wardName" />
              </label>
              <br />
              <label className="form-label">
                Place:
                <input className="form-input" type="text" name="place" />
              </label>
              <br />
              <label className="form-label">
                District:
                <input className="form-input" type="text" name="place" />
              </label>
              <br />
              <label className="form-label">
                constituency:
                <input className="form-input" type="text" name="place" />
              </label>
              <br />
            </Col>
            <Col>
              <label className="form-label">
                punchayath:
                <input className="form-input" type="text" name="place" />
              </label>
              <br />
              <label className="form-label">
                Ward Councilor:
                <input
                  className="form-input"
                  type="text"
                  name="wardCouncilor"
                />
              </label>
              <br />
              <label className="form-label">
                Councilor Contact:
                <input
                  className="form-input"
                  type="Number"
                  name="councilorContact"
                />
              </label>
              <br />
              <label className="form-label">
                Logo:
                <input className="form-input" type="Buffer" name="logo" />
              </label>
              <br />
              <label className="form-label">
                Joined Date:
                <input type="Date" className="form-input" name="joinedDate" />
              </label>
              <br />
              <label className="form-label">
                Weekly Payable Amount:
                <input
                  type="Number"
                  className="form-input"
                  name="weeklyPayableAmount"
                />
              </label>{" "}
              <br />
            </Col>

            <label className="form-label">
              Is Paid:
              <input className="form-input" type="checkbox" name="isPaid" />
            </label>
            <br />
            <label className="form-label">
              Is Active:
              <input className="form-input" type="checkbox" name="isActive" />
            </label>
            <br />
            <div className="divbutton">
              <button
                style={{ width: "130px", backgroundColor: "green" }}
                className="submitbtnform"
                type="submit"
              >
                Update
              </button>
              <button
                style={{
                  width: "130px",
                  backgroundColor: "rgb(39 39 34)",
                  marginLeft: "30PX",
                }}
                className="submitbtnform"
                type="submit"
              >
                Back
              </button>
            </div>
          </Row>
        </form>
      </Layout>
    </div>
  );
};

export default Update;
