import React, { Fragment, useEffect, useState } from "react"
import Dashboard from "../Admin Dashboard/Dashboard"
import API from '../../services'
import Swal from 'sweetalert2'
import moment from 'moment'
import '../Courses/stylecourses.css'
import '../Header/stylenavbar.css'

const Approval = (props) => {
  console.log(props);
  
  const [data,setData] = useState ({
    
    email:"",
    phone:"",
    plan:"",
    type:"",
    totalprice:"",
    status:"",
    proof:"",

  })

  const [loading, setLoading] = useState(true)
  console.log(data);
  
  useEffect(() => {
    getPendingUser()
  }, [loading])
  
  const getPendingUser = () => {
    API.getPendingUser()
        .then(res => {
          setData(res)
          setLoading(false)
        })
  }

  const approveHandler = (cond, id, email, plan) => {
    if (cond == 'approve') {
      let datestart = moment().format('YYYY-MM-DD HH:mm:ss')
      let dateend = moment().add(2,'month').format('YYYY-MM-DD HH:mm:ss')
      API.premium({
        id,email,plan,datestart,dateend
      })
      .then(res => {
        Swal.fire(
          'Approve Success',
          '',
          'success'
        )
        setLoading(true)
      })
    }else {
      API.reject({
        id,plan,email
      })
      .then(res => {
        Swal.fire(
          'Reject Success',
          '',
          'success'
        )
        setLoading(true)
      })
    }
  }
       
  const renderPending =()=> {
    const pending = data.map(val=>{
      return(
        <tr>
          <td>{val.id}</td>
          <td>{val.email}</td>
          <td>{val.phone}</td>
          <td>{val.plan}</td>
          <td>{val.type}</td>
          <td>{val.totalprice}</td>
          <td>{val.status}</td>
          <td>{
          val.paymentproof ?
            <a href={API.RootPath +'/paymentproof/'+ val.paymentproof} target='_blank'>
              image
            </a>
            :
            null
          }</td>
          <td>
            <button className="btn btn-outline-primary" onClick={()=>{approveHandler('approve',val.id,val.email,val.plan)}}>Approve</button>
            <button className="btn btn-danger" onClick={()=>{approveHandler('reject',val.id,val.email,val.plan)}}>Reject</button>
          </td>          
        </tr>
      )
    })
    return pending
  }
  if(loading) return <p>Loading</p>
    else {
      return (
        <Fragment>
          <Dashboard/>
            <div className= "dashboardq">
              <h3 className="text-center py-4">Approval</h3>
                <table className="table text-center">
                  <thead>
                    <tr>
                      <th>P.ID</th>
                      <th>Email</th>
                      <th>Phone</th>
                      <th>Plan</th>
                      <th>Type</th>
                      <th>Total Price</th>
                      <th>Status</th>
                      <th>Proof</th>
                      <th>Action</th>
                    </tr>
                  </thead>
                  <tbody>
                      {renderPending()}
                  </tbody>
              </table>
            </div>
          </Fragment>
      )
    }
}
export default Approval