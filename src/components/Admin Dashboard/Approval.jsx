import React, { Fragment, useEffect, useState } from "react"
import Dashboard from "../Admin Dashboard/Dashboard"
import API from '../../services'
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
  console.log(data);
  
  const getPendingUser = () => {
    API.getPendingUser()
        .then(res => setData(res))
    }
      useEffect(() => {
      getPendingUser()
    }, [])
  
    return (
      <Fragment>
        <Dashboard/>
          <div className= "dashboardq">
            <h3 className="text-center py-4">Approval</h3>
              <table className="table text-center">
                <thead>
                  <tr>
                    <th>No.</th>
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
                    <tr>
                      
                    </tr>
                </tbody>
            </table>
          </div>
        </Fragment>
    )
}
export default Approval