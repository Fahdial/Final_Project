import React, { Fragment } from "react"
import Dashboard from "../Admin Dashboard/Dashboard"
import '../Courses/stylecourses.css'
import '../Header/stylenavbar.css'
export const UsersData = () => {
    return (
        <Fragment>
        <Dashboard/>
          <div className= "dashboardq">
            <h3 className="text-center py-4">Users</h3>
              <table className="table text-center">
                <thead>
                  <tr>
                    <th>No.</th>
                    <th>Nama/Email</th>
                    {/* free/premium pada tiap plan */}
                    <th>Toefl</th>
                    <th>Ielts</th>
                    <th>Gmat</th>
                    <th>Expiry Date</th>
                    {/* edit, save, delete */}
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                    {/* {this.checkoutList()} */}
                    <tr>
                      {/* <th colSpan="4">
                        Total
                      </th> */}
                    {/* {this.totalPrice()} */}
                    </tr>
                </tbody>
            </table>
          </div>
        </Fragment>
    )
}

export default UsersData
