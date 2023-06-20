import React from "react";
import "./Dsidebar.scss";
import Form from "react-bootstrap/Form";
import Dropdown from "react-bootstrap/Dropdown";

const Dsidebar = () => {
  return (
    <div>
      <div class="msb" id="msb">
        <nav class="navbar navbar-default" role="navigation">
          {/* <!-- Brand and toggle get grouped for better mobile display --> */}
          <div class="navbar-header">
            <div class="brand-wrapper">{/* <!-- Brand --> */}</div>
          </div>

          {/* <!-- Main Menu --> */}
          <div class="side-menu-container">
            <a href="#" className="alink" >
            <h1 className="maindash">Dashboard</h1>
            </a>
            <ul class="nav navbar-nav">
              <Dropdown style={{marginBottom:'2rem'}}>
                <Dropdown.Toggle variant="success" id="dropdown-basic" style={{minWidth:'195px'}}>
                  Kudumpashree
                </Dropdown.Toggle>

                <Dropdown.Menu>
                  <Dropdown.Item href="#/action-1">All List</Dropdown.Item>
                  <Dropdown.Item href="#/action-2">Create</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>

              <Dropdown style={{minWidth:"180px"}}>
                <Dropdown.Toggle variant="success" id="dropdown-basic" style={{minWidth:'195px'}}>
				Admin
                </Dropdown.Toggle>

                <Dropdown.Menu>
                  <Dropdown.Item href="#/action-1">Create</Dropdown.Item>
                  <Dropdown.Item href="#/action-2">Delete</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
              {/* <li>
						<Form.Select aria-label="Default select example">
						<option>Kudumpashree</option>
						<option value="1">All List</option>
						<option value="2">Create</option>
						
						</Form.Select>
					</li> */}
              {/* <li>
                <Form.Select aria-label="Default select example">
                  <option>Admin</option>
                  <option value="1">Create</option>
                  <option value="2">Delete</option>
                </Form.Select>
              </li> */}
            </ul>
          </div>
          {/* <!-- /.navbar-collapse --> */}
        </nav>
      </div>
    </div>
  );
};

export default Dsidebar;
