import React from 'react'
import Layout from '../../Dashboard/Layout/Layout'
import { useState } from 'react';
import "./create.scss"
import { Col, Row } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { createkudumpashriApi } from '../../../Store/api/kudumpashri';
import { lgsConstituencyApi, lgsDistrictApi, lgsPanchayathApi } from '../../../Store/api/lgs';
import { useEffect } from 'react';


const Create = () => {

  const dispatch = useDispatch();
  const navigate = useNavigate();

	const {loading}=useSelector((state)=>({loading:state.authSlice.loading}))  
  const [createData,setCreateData]=useState({name:"",postoffice:"",pinCode:"",wardName:"",place:"",district:"",constituency:"",panchayat:"",wardCouncilor:""
  ,councilorContact:"",logo:"",joinedDate:"",weeklyPayableAmount:"",isPaid:false, isActive:false});
  // console.log(createData);

const kudumpashriCreateSubmit=(e)=>{
 e.preventDefault();
 const data = {
  state: createData,
  navigate,
  };
 dispatch(createkudumpashriApi(data))
}
// const {panchayaths}=useSelector((state)=>state.lgsSlice.panchayaths)

const {panchayats} = useSelector((state)=> ({
  panchayats:state.lgsSlice.panchayaths
}))

console.log(panchayats);

 useEffect(()=>{ 
  dispatch(lgsPanchayathApi())
},[])

 const {districts}=useSelector((state)=>state.lgsSlice.districts)

 useEffect(()=>{ dispatch(lgsDistrictApi())},[])
 const {constituencys}=useSelector((state)=>state.lgsSlice.constituencys)
 
 useEffect(()=>{ dispatch(lgsConstituencyApi())},[])

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
        <input className="form-input" type="text" name="name"  onChange={(e)=>setCreateData({
					...createData,name:e.target.value
				})} required />
      </label>
      <br />
      <label className="form-label">
        Post Office:
        <input className="form-input" type="text" name="postoffice"  onChange={(e)=>setCreateData({
					...createData,postoffice:e.target.value
				})}  required/>
      </label>
      <br />
      <label className="form-label">
        Pin Code:
        <input className="form-input" type="number" name="pinCode"  onChange={(e)=>setCreateData({
					...createData,pinCode:e.target.value
				})} required/>
      </label>
      <br />
      <label className="form-label">
        Ward Name:
        <input className="form-input" type="text" name="wardName" onChange={(e)=>setCreateData({
					...createData,wardName:e.target.value
				})} required />
      </label>
      <br />
      <label className="form-label">
        Place:
        <input className="form-input" type="text" name="place"  onChange={(e)=>setCreateData({
					...createData,place:e.target.value
				})} required/>
      </label>
      <br />
      {/* <label className="form-label">
        District:
        <input className="form-input" type="Schema.Types.ObjectId" name="district" onChange={(e)=>setCreateData({
					...createData,place:e.target.value
				})}/>
      </label>
      <br /> */}
      <label className="form-label">
      District:
            <select name="district"   className="form-input" required>
              <option value="">Select District:</option>
              {districts?.map((district) => (
                <option key={district?.id} value={district?.name}>
                  {district?.name}
                </option>
              ))}
            </select>
          </label>
          <br />
      {/* <label className="form-label">
        Constituency:
        <input className="form-input" type="Schema.Types.ObjectId" name="constituency"  onChange={(e)=>setCreateData({
					...createData,constituency:e.target.value
				})}/>
      </label>
      <br /> */}
      <label className="form-label">
      Constituency:
            <select name="constituency"    className="form-input" required>
              <option value="">Select Panchayat</option>
              {constituencys?.map((constituency) => (
                <option key={constituency?.id} value={constituency?.name}>
                  {constituency?.name}
                </option>
              ))}
            </select>
          </label>
          <br />
      </Col>
        <Col> 
       
      {/* <label className="form-label">
        Panchayat:
        <input className="form-input" type="Schema.Types.ObjectId" name="panchayat"  onChange={(e)=>setCreateData({
					...createData,panchayat:e.target.value
				})}/>
      </label> */}
       <label className="form-label">
            Panchayat:
            <select name="panchayat"  type="select" className="form-input" required>
              <option>Select Panchayat</option>
              {panchayats?.list?.map((panchayath, key) => (
                <option key={key} value={panchayath?._id}>
                  {panchayath?.name}
                </option>
              ))}
            </select>
          </label>
          <br />
      <label className="form-label">
        Ward Councilor:
        <input className="form-input" type="text" name="wardCouncilor"  onChange={(e)=>setCreateData({
					...createData,wardCouncilor:e.target.value
				})} />
      </label>
      <br />
      <label className="form-label">
        Councilor Contact:
        <input className="form-input" type="number" name="councilorContact"  onChange={(e)=>setCreateData({
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
        <input type="date" className="form-input" name="joinedDate"  onChange={(e)=>setCreateData({
					...createData,joinedDate:e.target.value
				})} />
      </label>
      <br />
      <label className="form-label">
        Weekly Payable Amount:
        <input type="number" className="form-input" name="weeklyPayableAmount"  onChange={(e)=>setCreateData({
					...createData,weeklyPayableAmount:e.target.value
				})} />
      </label> <br /></Col>
      
      
     
     
      <label className="form-label">
        Is Paid:
        <input className="form-input" type="checkbox" name="isPaid"  onChange={(e)=>setCreateData({
					...createData,isPaid:e.target.value
				})} />
      </label>
      <br />
      <label className="form-label">
        Is Active:
        <input className="form-input" type="checkbox" name=" isActive"  onChange={(e)=>setCreateData({
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