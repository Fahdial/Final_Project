import React, { Fragment } from "react"
import Dashboard from "../Admin Dashboard/Dashboard"
import '../Courses/stylecourses.css'
import '../Header/stylenavbar.css'

export const GmatDash = () => {
    return (
        <Fragment>
        <Dashboard/>
          <div className= "dashboardq">
            <h3 className="text-center py-4">GMAT Dashboard</h3>
              <table className="table text-center">
                <thead>
                  <tr>
                    <th>No.</th>
                    <th>Subject</th>
                    <th>Title</th>
                    <th>Episode</th>
                    <th>Link</th>
                    <th>PDF</th>
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

export default GmatDash