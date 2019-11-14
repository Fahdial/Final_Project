import React, { Fragment } from "react"
import Dashboard from "../Admin Dashboard/Dashboard"
import '../Courses/stylecourses.css'
import '../Header/stylenavbar.css'

export const Income = () => {
    return (
        <Fragment>
        <Dashboard/>
          <div className= "dashboardq">
            <h3 className="text-center py-4">Income</h3>
              <table className="table text-center">
                <thead>
                  <tr>
                    <th>ID</th>
                    <th>Nama/Email</th>
                    <th>Upload Time</th>
                    <th>Method</th>
                    <th>Jumlah</th>
                  </tr>
                </thead>
                <tbody>
                    {/* {this.checkoutList()} */}
                    <tr>
                      <th colSpan="4">
                        Total
                      </th>
                    {/* {this.totalPrice()} */}
                    </tr>
                </tbody>
            </table>
          </div>
        </Fragment>
    )
}
export default Income