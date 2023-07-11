import React, { useEffect } from 'react'
import Layout from '../../Dashboard/Layout/Layout'
import { useState } from 'react';
import "./create.scss"
import { Col, Row } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { createkudumpashriApi } from '../../../Store/api/kudumpashri';
import { lgsPanchayathApi, lgsconstituencyApi, lgsdistrictApi } from '../../../Store/api/lgs';


const Create = () => {

  const dispatch = useDispatch();
  const navigate = useNavigate();

	const {loading}=useSelector((state)=>({
    loading:state.lgsSlice.loading,
  }))  

  
 
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
// const {panchayaths}=useSelector((state)=>state.lgsSlice.panchayaths);

const { districts} = useSelector((state)=> ({
  districts:state.lgsSlice.districts
}))
useEffect(()=>{ 
  dispatch(lgsdistrictApi())
},[])
const { constituencys} = useSelector((state)=> ({
  constituencys:state.lgsSlice.constituencys
}))
useEffect(()=>{ 
  dispatch(lgsconstituencyApi())
},[])
const { panchayats} = useSelector((state)=> ({
  panchayats:state.lgsSlice.panchayats
}))
useEffect(()=>{ 
  dispatch(lgsPanchayathApi())
},[])
 return(
  <div>
    <Layout>



    <form onSubmit={kudumpashriCreateSubmit} className="form-container">
      <Row>
        <Col>
        <label className="form-label">
        Name:
        <input className="form-input" type="text" name="name"  onChange={(e)=>setCreateData({
					...createData,name:e.target.value
				})} />
      </label>
      <br />
      <label className="form-label">
        Post Office:
        <input className="form-input" type="text" name="postoffice"  onChange={(e)=>setCreateData({
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
        <input className="form-input" type="text" name="wardName" onChange={(e)=>setCreateData({
					...createData,wardName:e.target.value
				})}  />
      </label>
      <br />
      <label className="form-label">
        Place:
        <input className="form-input" type="text" name="place"  onChange={(e)=>setCreateData({
					...createData,place:e.target.value
				})}/>
      </label>
      <br />
      <label className="form-label">
            District:
            <select name="district"  type="select" className="form-input" onChange={(e)=>setCreateData({
					...createData,district:e.target.value
				})} required>
              <option>Select District</option>
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
            <select name="constituency"  type="select" className="form-input" required
            onChange={(e)=>setCreateData({
              ...createData,constituency:e.target.value
            })}>
            
              <option>Select constituency</option>
              {constituencys?.list?.map((constituencys, key) => (
                <option key={key} value={constituencys?._id}>
                  {constituencys?.name}
                </option>
              ))}
            </select>
          </label>
      <br />
      </Col>
        <Col> 
       
        <label className="form-label">
      punchayath:
            <select name="panchayat"  type="select" className="form-input" required 
            onChange={(e)=>setCreateData({
              ...createData,panchayat:e.target.value
            })}>
              <option>Select punchayath</option>
              { panchayats?.list?.map(( panchayats, key) => (
                <option key={key} value={ panchayats?._id}>
                  { panchayats?.name}
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
        <input className="form-input" type="checkbox" name="isPaid"  onChange={(e)=>setCreateData({
					...createData,isPaid:e.target.checked
				})} />
      </label>
      <br />
      <label className="form-label">
        Is Active:
        <input className="form-input" type="checkbox" name="isActive"  onChange={(e)=>setCreateData({
					...createData,isPaid:e.target.checked
				})}  />
      </label>
      <br />
      <button style={{width:"130px",marginLeft:"330px"}} className='submitbtnform' type="submit">{loading? 'loading':'Submit'}</button>
      </Row>
    </form>
  

   </Layout>
  </div>
  )
}

export default Create