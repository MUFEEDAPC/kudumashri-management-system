import React, { useEffect } from "react";
import Layout from "../../Dashboard/Layout/Layout";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { allListkudumpashriApi } from "../../../Store/api/kudumpashri";
import { BsFillEyeFill } from "react-icons/bs";
import "./allList.scss";
const AllList = () => {
  const dispatch = useDispatch();
  const { tableData } = useSelector((state) => ({
    tableData: state.kudumpashriSlice.kudumpashries,
  }));
  console.log(tableData);

  useEffect(() => {
    dispatch(allListkudumpashriApi());
  }, [dispatch]);

  return (
    <div>
      <Layout>
        <table class="table">
          <thead>
            <tr>
              <th scope="col">SI</th>
              <th scope="col">Name</th>
              <th scope="col">Ward Name</th>
              <th scope="col">Ward Councilor</th>
              <th scope="col">Councilor Contact</th>
              <th scope="col">joining Date</th>
              <th scope="col">View</th>
            </tr>
          </thead>
          <tbody>
            {tableData?.list?.map((tableData, key) => (
              <tr key={key}>
                <td>{key + 1}</td>
                <td>{tableData.name}</td>
                <td>{tableData.wardName}</td>
                <td>{tableData.wardCouncilor}</td>
                <td>{tableData.councilorContact}</td>
                <td>{tableData.joinedDate}</td>
                <td>
                  <BsFillEyeFill />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </Layout>
    </div>
  );
};

export default AllList;
