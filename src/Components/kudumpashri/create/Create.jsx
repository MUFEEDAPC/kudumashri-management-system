import React from 'react'
import Layout from '../../Dashboard/Layout/Layout'
import { useState } from 'react';
import "./create.scss"
import { Col, Row } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { createkudumpashriApi } from '../../../Store/api/kudumpashri';


const Create = () => {

  const dispatch = useDispatch();
  const navigate = useNavigate();

	const {loading}=useSelector((state)=>({loading:state.authSlice.loading}))  
  const [createData,setCreateData]=useState({name:"",postoffice:"",pinCode:"",wardName:"",place:"",district:"",constituency:"",panchayat:"",wardCouncilor:""
  ,councilorContact:"",logo:"",joinedDate:"",weeklyPayableAmount:"",isPaid:false, isActive:false});
  console.log(createData);

const kudumpashriCreateSubmit=(e)=>{
 e.preventDefault();
 const data = {
  state: createData,
  navigate,
  };
 dispatch(createkudumpashriApi(data))
}

  // const [formData, setFormData] = useState({
  //   name: '',
  //   postoffice: '',
  //   pinCode: '',
  //   wardName: '',
  //   place: '',
  //   district: '',
  //   constituency: '',
  //   panchayat: '',
  //   wardCouncilor: '',
  //   councilorContact: '',
  //   logo: '',
  //   joinedDate: '',
  //   weeklyPayableAmount: '',
  //   isPaid: false,
  //   isActive: false,
  // });
 
  // const handleChange = (e) => {
  //   const { name, value, type, checked } = e.target;
  //   const newValue = type === 'checkbox' ? checked : value;

  //   setFormData((prevData) => ({
  //     ...prevData,
  //     [name]: newValue,
  //   }));
  // };

  // const handleSubmit = (e) => {
  //   e.preventDefault();

  //   // Perform form submission or validation logic here
  //   console.log(formData);
  // };
  return (
    <div>
    <Layout>



    <form onSubmit={kudumpashriCreateSubmit} className="form-container">
      <Row>
        <Col>
        <label className="form-label">
        Name:
        <input className="form-input" type="String" name="name"  onChange={(e)=>setCreateData({
					...createData,name:e.target.value
				})} />
      </label>
      <br />
      <label className="form-label">
        Post Office:
        <input className="form-input" type="String" name="postoffice"  onChange={(e)=>setCreateData({
					...createData,postoffice:e.target.value
				})}  />
      </label>
      <br />
      <label className="form-label">
        Pin Code:
        <input className="form-input" type="Number" name="pinCode"  onChange={(e)=>setCreateData({
					...createData,pinCode:e.target.value
				})} />
      </label>
      <br />
      <label className="form-label">
        Ward Name:
        <input className="form-input" type="String" name="wardName" onChange={(e)=>setCreateData({
					...createData,wardName:e.target.value
				})}  />
      </label>
      <br />
      <label className="form-label">
        Place:
        <input className="form-input" type="String" name="place"  onChange={(e)=>setCreateData({
					...createData,place:e.target.value
				})}/>
      </label>
      <br />
      <label className="form-label">
        District:
        <input className="form-input" type="Schema.Types.ObjectId" name="district" onChange={(e)=>setCreateData({
					...createData,place:e.target.value
				})}/>
      </label>
      <br />
      <label className="form-label">
        Constituency:
        <input className="form-input" type="Schema.Types.ObjectId" name="constituency"  onChange={(e)=>setCreateData({
					...createData,constituency:e.target.value
				})}/>
      </label>
      <br />
      </Col>
        <Col> 
       
      <label className="form-label">
        Panchayat:
        <input className="form-input" type="Schema.Types.ObjectId" name="panchayat"  onChange={(e)=>setCreateData({
					...createData,panchayat:e.target.value
				})}/>
      </label>
      <br />
      <label className="form-label">
        Ward Councilor:
        <input className="form-input" type="String" name="wardCouncilor"  onChange={(e)=>setCreateData({
					...createData,wardCouncilor:e.target.value
				})} />
      </label>
      <br />
      <label className="form-label">
        Councilor Contact:
        <input className="form-input" type="Number" name="councilorContact"  onChange={(e)=>setCreateData({
					...createData,councilorContact:e.target.value
				})} />
      </label>
      <br />
      <label className="form-label">
        Logo:
        <input className="form-input" type="Buffer" name="logo"  onChange={(e)=>setCreateData({
					...createData,logo:e.target.value
				})} />
      </label>
      <br />
      <label className="form-label">
        Joined Date:
        <input type="Date" className="form-input" name="joinedDate"  onChange={(e)=>setCreateData({
					...createData,joinedDate:e.target.value
				})} />
      </label>
      <br />
      <label className="form-label">
        Weekly Payable Amount:
        <input type="Number" className="form-input" name="weeklyPayableAmount"  onChange={(e)=>setCreateData({
					...createData,weeklyPayableAmount:e.target.value
				})} />
      </label> <br /></Col>
      
      
     
     
      <label className="form-label">
        Is Paid:
        <input className="form-input" type="Boolean" name="isPaid"  onChange={(e)=>setCreateData({
					...createData,isPaid:e.target.value
				})} />
      </label>
      <br />
      <label className="form-label">
        Is Active:
        <input className="form-input" type="Boolean" name=" isActive"  onChange={(e)=>setCreateData({
					...createData,isPaid:e.target.value
				})}  />
      </label>
      <br />
      <button className='submitbtnform' type="submit">{loading? 'loading':'Submit'}</button>
      </Row>
    </form>
  

   </Layout></div>
  )
}

export default Create