import React, { Fragment, useEffect, useState } from "react"
import Dashboard from "../Admin Dashboard/Dashboard"
import '../Courses/stylecourses.css'
import '../Header/stylenavbar.css'
import API from '../../services'
import moment from 'moment'

export const UsersData = () => {

  const [data, setData] = useState()

  useEffect(() => {
    API.getUsersTransaction()
    .then(res => {
      console.log(res)
      setData(res)
    })
  }, [])

  const renderUsers = () => {
    let render = data.map(val => {
      return (
        <tr key={val.id}>
          <td>{val.id}</td>
          <td>{val.email}</td>
          <td>{val.TOEFL}</td>
          <td>{val.IELTS}</td>
          <td>{val.GMAT}</td>
          <td>{val.jumlahTransaksi}</td>
          <td>{moment(val.LastTransaction).format('YYYY-MM-DD HH:mm:ss')}</td>
        </tr>
      )
    })
    return render
  }

    if (!data) return <h1>Loading</h1>
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
                    <th>Toefl</th>
                    <th>Ielts</th>
                    <th>Gmat</th>
                    <th>Total Transactions</th>
                    <th>Last Transactions</th>
                  </tr>
                </thead>
                <tbody>
                    {renderUsers()}
                </tbody>
            </table>
          </div>
        </Fragment>
    )
}

export default UsersData
