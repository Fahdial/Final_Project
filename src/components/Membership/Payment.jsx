import React, { Fragment, useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {Redirect, Link} from 'react-router-dom'
import API from '../../services'
import {changeState} from '../../actions/userAction'
import Swal from 'sweetalert2'
import ovobarcode from '../Uploads/ovo_barcode.jpg'
import danabarcode from '../Uploads/dana_barcode.jpg'
import Header from "../Header/Header"
import moment from "moment"

const Payment = (props) => {

  console.log(props);
  
  const [data,setData] = useState({
    type: 'OVO',
    file: null,
    phone: "",
    plan: props.location.state,
    gambar:null,
    totalprice:50000
  })
  const [payment,setPayment] =useState(false)
  const dispatch = useDispatch()
  const user = useSelector( state => state.auth )
  console.log(user);
  
  const uploadHandler=(event)=>{
      setData({...data, gambar: URL.createObjectURL(event.target.files[0]), file:event.target.files[0]
      })
    }

      // console.log(event.target.files[0]);

  const onSubmit = ()=> {
    console.log(data);
    
      var fd = new FormData()

      var DATA ={
        email: user.email,
        phone: data.phone,
        plan: data.plan,
        type: data.type,
        totalprice: data.totalprice,
        dateupload: moment().format('YYYY-MM-DD HH:mm:ss')
      }
      console.log((DATA));
      
        fd.append('img', data.file, data.file.name)
        fd.append('data', JSON.stringify(DATA))
        API.transactionUpload(fd)
        .then(res => {
          API.pendingAccount(DATA)
          .then (() => {
            Swal.fire(
              'Congratulations!',
              'Your transaction is complete, please wait 24 hours for payment confirmation',
              'success'
            )
            dispatch(changeState(user.id))
            setPayment(true)
          })
        })
        // .catch((err)=>{
        //   console.log(err);
          
        // })
  }
    console.log(data.type);
    console.log(data.file);
    
    if(!payment){
      return (      
          <Fragment>
            <Header/>
            <div className="container pt-md-5 pb-md-4 mx-auto text-center">
              <h1 className="display-5 mt-4">Your Billing Info</h1>
              <br/>
              <p className="lead">Please choose your payment mehtod </p>
            </div>
                <div className="container">
                  <div className="card-deck mb-2 mt-2 text-center">
                    <div className="card">
                      <div className="card-body">
                        <div className="row">
                          <div className="col-4">
                        
                      <h5 className="pb-md-3 mt-2">{user.email}</h5>
  
                        <div style={{display:"flex"}}>
                              <ul className="list-unstyled mt-3 mb-3 text-left col-7 align-middle">
                                <li className="mb-4">Membership Plan: </li>
                                <li className="mb-3">Time Length:</li>
                                <br/>
                                <li className="mb-3">Payment Method:</li>
                              </ul>
                              <ul className="list-unstyled mt-3 mb-4 text-right col-5">
                                <li className="mb-3">{props.location.state}</li>
                                <li className="mb-3">{moment().format('DD-MM-YYYY')} - {moment().add(2,'month').format('DD-MM-YYYY')}</li>
                                <li>
                                  <select onChange ={e => setData({...data, type: e.target.value})} className="mb-3 align-middle">
                                  <option value='OVO'>OVO</option>
                                  <option value='DANA'>DANA</option>
                                  </select>
                                </li>                 
                              </ul>
                        </div>       
  
                      <h3 className="mt-2 mb-3">Total: Rp.50.000,-</h3>
                          <Link to="/membership"><button type="button" className="searchcolor1">Change Plan</button></Link>
                      </div>
                      <div classname="col-3">
                        <div>
                            <img style={{width:"75%", marginBottom:"2%"}} src={data.type == 'OVO' ? ovobarcode : danabarcode} alt=""/>
                        </div> 
                        <div>
                            <p>Please use camera to scan code and pay</p>
                        </div>
                      </div>
                      <div className="col-3"> 
                    
                      <div className="md-form mt-1">
                          <input placeholder="       input phone number" type="text" id="form1" onChange={ e => setData({...data, phone: e.target.value.replace(/\D/,'') })} className="form-control" value={data.phone}></input>
                          <img style={{width:"70%", marginTop:"5%"}} src={data.gambar} alt=""/>
                      </div>
                      <br/>
                      <label className="custom-file">
                        <input  type="file" id="file" classname="custom-file-input" onChange={(e)=> {uploadHandler(e)}}></input>
                        <span className="custom-file-control"></span>
                      </label>
                    {
                      user.email && data.file && data.gambar && data.phone && data.plan && data.type ?
                      <button type="button" className="searchcolor1" onClick={onSubmit}>Submit</button>
                      :
                      <button type="button" className="searchcolor3" disabled onClick={onSubmit}>Submit</button> 
                    }
  
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
        </Fragment>
      )
    } else{
      return <Redirect to='/'/>
    } 
}


export default Payment

