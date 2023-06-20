import React from 'react'
import "./Dsidebar.scss";
import Form from 'react-bootstrap/Form';


const Dsidebar = () => {
  return (
    <div>
      <div class="msb" id="msb">
		<nav class="navbar navbar-default" role="navigation">
			{/* <!-- Brand and toggle get grouped for better mobile display --> */}
			<div class="navbar-header">
				<div class="brand-wrapper">
					{/* <!-- Brand --> */}
				

				</div>

			</div>

			{/* <!-- Main Menu --> */}
			<div class="side-menu-container">
			<a href="#" className='alink'> <Form className='form'> Dashboard</Form></a>
				<ul class="nav navbar-nav">

			
					<li>
						<Form.Select aria-label="Default select example">
						<option>Kudumpashree</option>
						<option value="1">All List</option>
						<option value="2">Create</option>
						
						</Form.Select>
					</li>
					<li>
						<Form.Select aria-label="Default select example">
						<option>Admin</option>
						<option value="1">Create</option>
						<option value="2">Delete</option>
						
						</Form.Select>
					</li>
				</ul>
			</div>
      {/* <!-- /.navbar-collapse --> */}
		</nav>  
</div>

    </div>
  )
}

export default Dsidebar