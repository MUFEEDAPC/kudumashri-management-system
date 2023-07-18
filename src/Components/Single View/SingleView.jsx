import React, { useEffect } from "react";
import { Button, Table } from "react-bootstrap";
import "./SingleView.css";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import {
  UpdatekudApi,
  deletekudApi,
  singleViewApi,
} from "../../Store/api/kudumpashri";
import moment from "moment";

const SingleView = () => {
  // Single View
  const dispatch = useDispatch();
  const params = useParams();
  const navigate = useNavigate();
  const { SingleView } = useSelector((state) => ({
    SingleView: state.kudumbashri.Singleview,
  }));

  useEffect(() => {
    dispatch(singleViewApi(params?.id));
  }, [dispatch, params?.id]);
  console.log(SingleView);
  // DElete
  const deleteData = () => {
    const deleteData = {
      kudId: SingleView?.kudumbashree?._id,
      navigate,
    };
    dispatch(deletekudApi(deleteData));
  };

  return (
    <div>
      <Table borderless style={{ marginLeft: "35%" }}>
        <tbody>
          <tr>
            <th scope="row">Name</th>

            <td>:</td>
            <td>{SingleView?.kudumbashree?.name}</td>
          </tr>
          <tr>
            <th scope="row">Panchayath</th>

            <td>:</td>
            <td>{SingleView?.kudumbashree?.panchayat?.name}</td>
          </tr>
          <tr>
            <th scope="row">Post Office</th>

            <td>:</td>
            <td>{SingleView?.kudumbashree?.postoffice}</td>
          </tr>
          <tr>
            <th scope="row">Ward Councilor</th>

            <td>:</td>
            <td>{SingleView?.kudumbashree?.wardCouncilor}</td>
          </tr>
          <tr>
            <th scope="row">Pin Code</th>

            <td>:</td>
            <td>{SingleView?.kudumbashree?.pinCode}</td>
          </tr>
          <tr>
            <th scope="row">Councilor Contact</th>

            <td>:</td>
            <td>{SingleView?.kudumbashree?.councilorContact}</td>
          </tr>
          <tr>
            <th scope="row">Ward Name</th>

            <td>:</td>
            <td>{SingleView?.kudumbashree?.wardName}</td>
          </tr>
          <tr>
            <th scope="row">Logo</th>

            <td>:</td>
            <td>{SingleView?.kudumbashree?.log}</td>
          </tr>
          <tr>
            <th scope="row">Place</th>

            <td>:</td>
            <td>{SingleView?.kudumbashree?.place}</td>
          </tr>
          <tr>
            <th scope="row">Joining Date</th>

            <td>:</td>
            <td>
              {moment(SingleView?.kudumbashree?.joinedDate).format("MMM Do YY")}
            </td>
          </tr>
          <tr>
            <th scope="row">District</th>

            <td>:</td>
            <td>{SingleView?.kudumbashree?.district?.name}</td>
          </tr>
          <tr>
            <th scope="row">Weekly Payment</th>

            <td>:</td>
            <td>{SingleView?.kudumbashree?.weeklyPayableAmount}</td>
          </tr>

          <tr>
            <th scope="row">Constituency</th>

            <td>:</td>
            <td>{SingleView?.kudumbashree?.constituency.name}</td>
          </tr>
        </tbody>
      </Table>
      <div style={{ display: "flex", marginLeft: "45%" }}>
        <div>
          <Button
            style={{ backgroundColor: "green" }}
            onClick={() => navigate(`/Update/${params.id}`)}
          >
            Update
          </Button>
        </div>
        <div>
          <Button
            style={{ backgroundColor: "red", marginLeft: "20px" }}
            onClick={deleteData}
          >
            Delete
          </Button>
        </div>
      </div>
    </div>
  );
};

export default SingleView;
