import React, { useEffect, useState } from "react";
import { Col, Row } from "react-bootstrap";
import Layout from "../Dashboard/Layout/Layout";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { UpdatekudApi, singleViewApi } from "../../Store/api/kudumpashri";
import moment from "moment";
import {
  lgsPanchayathApi,
  lgsconstituencyApi,
  lgsdistrictApi,
} from "../../Store/api/lgs";

const Update = () => {
  const dispatch = useDispatch();
  const params = useParams();
  const navigate = useNavigate();
  // Update

  // useEffect(() => {
  //   dispatch(UpdatekudApi(params.id));
  // }, [dispatch]);
  // Update
  const [updateDetails, setUpdateDetails] = useState({});
  const { SingleView } = useSelector((state) => ({
    SingleView: state.kudumbashri.Singleview,
  }));
  useEffect(() => {
    dispatch(singleViewApi(params?.id));
  }, [dispatch, params?.id]);
  useEffect(() => {
    setUpdateDetails(SingleView?.kudumbashree);
  }, [SingleView]);
  const Handle = (e) => {
    setUpdateDetails({
      ...updateDetails,
      [e.target.name]: e.target.value,
    });
  };
  const upId = params?.id;
  const HandleUpdateStudent = (e, v) => {
    e.preventDefault();

    const data = {
      id: upId,
      state: updateDetails,
      navigate,
    };

    dispatch(UpdatekudApi(data));
  };
  // Select option selection
  const { panchayats } = useSelector((state) => ({
    panchayats: state.lgsSlice.panchayats,
  }));
  useEffect(() => {
    dispatch(lgsPanchayathApi());
  }, []);
  const { districts } = useSelector((state) => ({
    districts: state.lgsSlice.districts,
  }));
  useEffect(() => {
    dispatch(lgsdistrictApi());
  }, []);
  const { constituencys } = useSelector((state) => ({
    constituencys: state.lgsSlice.constituencys,
  }));
  useEffect(() => {
    dispatch(lgsconstituencyApi());
  }, []);

  return (
    <div>
      <Layout>
        <form
          className="form-container"
          onSubmit={(e, v) => HandleUpdateStudent(e, v)}
        >
          <Row>
            <Col>
              <label className="form-label">
                Name:
                <input
                  className="form-input"
                  type="text"
                  name="name"
                  defaultValue={SingleView?.kudumbashree?.name}
                  onChange={(e) => Handle(e)}
                />
              </label>
              <br />
              <label className="form-label">
                Post Office:
                <input
                  className="form-input"
                  type="text"
                  name="postoffice"
                  defaultValue={SingleView?.kudumbashree?.postoffice}
                  onChange={(e) => Handle(e)}
                />
              </label>
              <br />
              <label className="form-label">
                Pin Code:
                <input
                  className="form-input"
                  type="Number"
                  name="pinCode"
                  defaultValue={SingleView?.kudumbashree?.pinCode}
                  onChange={(e) => Handle(e)}
                />
              </label>
              <br />
              <label className="form-label">
                Ward Name:
                <input
                  className="form-input"
                  type="text"
                  name="wardName"
                  defaultValue={SingleView?.kudumbashree?.wardName}
                  onChange={(e) => Handle(e)}
                />
              </label>
              <br />
              <label className="form-label">
                Place:
                <input
                  className="form-input"
                  type="text"
                  name="place"
                  defaultValue={SingleView?.kudumbashree?.place}
                  onChange={(e) => Handle(e)}
                />
              </label>
              <br />
              <label className="form-label">
                District:
                <select
                  name="district"
                  type="select"
                  className="form-input"
                  onChange={(e) => Handle(e)}
                >
                  <opion>{SingleView?.kudumbashree?.district?.name}</opion>
                  {districts?.list?.map((districts, key) => (
                    <option key={key} value={districts?._id}>
                      {districts?.name}
                    </option>
                  ))}
                </select>
              </label>
              <br />
              <label className="form-label">
                constituency:
                <select
                  name="district"
                  type="select"
                  className="form-input"
                  onChange={(e) => Handle(e)}
                >
                  <opion>{SingleView?.kudumbashree?.constituency?.name}</opion>
                  {constituencys?.list?.map((districts, key) => (
                    <option key={key} value={districts?._id}>
                      {districts?.name}
                    </option>
                  ))}
                </select>
              </label>
              <br />
            </Col>
            <Col>
              <label className="form-label">
                punchayath:
                <select
                  name="district"
                  type="select"
                  className="form-input"
                  onChange={(e) => Handle(e)}
                >
                  <opion>{SingleView?.kudumbashree?.panchayat?.name}</opion>
                  {panchayats?.list?.map((districts, key) => (
                    <option key={key} value={districts?._id}>
                      {districts?.name}
                    </option>
                  ))}
                </select>
              </label>
              <br />
              <label className="form-label">
                Ward Councilor:
                <input
                  className="form-input"
                  type="text"
                  name="wardCouncilor"
                  defaultValue={SingleView?.kudumbashree?.wardCouncilor}
                  onChange={(e) => Handle(e)}
                />
              </label>
              <br />
              <label className="form-label">
                Councilor Contact:
                <input
                  className="form-input"
                  type="Number"
                  name="councilorContact"
                  defaultValue={SingleView?.kudumbashree?.councilorContact}
                  onChange={(e) => Handle(e)}
                />
              </label>
              <br />
              <label className="form-label">
                Logo:
                <input
                  className="form-input"
                  type="Buffer"
                  name="logo"
                  defaultValue={SingleView?.service?.log}
                  onChange={(e) => Handle(e)}
                />
              </label>
              <br />
              <label className="form-label">
                Joined Date:
                <input
                  type="Date"
                  className="form-input"
                  name="joinedDate"
                  defaultValue={moment(SingleView?.service?.joinedDate).format(
                    "YYYY-MM-DD"
                  )}
                  onChange={(e) => Handle(e)}
                />
              </label>
              <br />
              <label className="form-label">
                Weekly Payable Amount:
                <input
                  type="Number"
                  className="form-input"
                  name="weeklyPayableAmount"
                  defaultValue={SingleView?.service?.weeklyPayableAmount}
                  onChange={(e) => Handle(e)}
                />
              </label>{" "}
              <br />
            </Col>

            <label className="form-label">
              Is Paid:
              <input
                className="form-input"
                type="checkbox"
                name="isPaid"
                defaultValue={SingleView?.service?.isActive}
                onChange={(e) => Handle(e)}
              />
            </label>
            <br />
            <label className="form-label">
              Is Active:
              <input
                className="form-input"
                type="checkbox"
                name="isActive"
                defaultValue={SingleView?.service?.ispaid}
                onChange={(e) => Handle(e)}
              />
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
