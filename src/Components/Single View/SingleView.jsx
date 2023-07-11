import React from "react";
import { Button, Table } from "react-bootstrap";
import "./SingleView.css";

const SingleView = () => {
  return (
    <div>
      <Table borderless style={{ marginLeft: "35%" }}>
        <tbody>
          <tr>
            <th scope="row">Name</th>

            <td>:</td>
            <td>@mdo</td>
          </tr>
          <tr>
            <th scope="row">Panchayath</th>

            <td>:</td>
            <td>@mdo</td>
          </tr>
          <tr>
            <th scope="row">Post Office</th>

            <td>:</td>
            <td>@mdo</td>
          </tr>
          <tr>
            <th scope="row">Ward Councilor</th>

            <td>:</td>
            <td>@mdo</td>
          </tr>
          <tr>
            <th scope="row">Pin Code</th>

            <td>:</td>
            <td>@mdo</td>
          </tr>
          <tr>
            <th scope="row">Councilor Contact</th>

            <td>:</td>
            <td>@mdo</td>
          </tr>
          <tr>
            <th scope="row">Ward Name</th>

            <td>:</td>
            <td>@mdo</td>
          </tr>
          <tr>
            <th scope="row">Logo</th>

            <td>:</td>
            <td>@mdo</td>
          </tr>
          <tr>
            <th scope="row">Place</th>

            <td>:</td>
            <td>@mdo</td>
          </tr>
          <tr>
            <th scope="row">Joining Date</th>

            <td>:</td>
            <td>@mdo</td>
          </tr>
          <tr>
            <th scope="row">District</th>

            <td>:</td>
            <td>@mdo</td>
          </tr>
          <tr>
            <th scope="row">Weekly Payment</th>

            <td>:</td>
            <td>@mdo</td>
          </tr>
          <tr>
            <th scope="row">Weekly Payment</th>

            <td>:</td>
            <td>mmm</td>
          </tr>
          <tr>
            <th scope="row">Constituency</th>

            <td>:</td>
            <td>mmm</td>
          </tr>
        </tbody>
      </Table>
      <div style={{ display: "flex", marginLeft: "45%" }}>
        <div>
          <Button style={{ backgroundColor: "green" }}>Update</Button>
        </div>
        <div>
          <Button style={{ backgroundColor: "red", marginLeft: "20px" }}>
            Delete
          </Button>
        </div>
      </div>
    </div>
  );
};

export default SingleView;
