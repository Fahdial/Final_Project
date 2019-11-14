import React, { Fragment, useState, useEffect } from 'react'
import ReactPlayer from 'react-player'
import {Route, Link} from 'react-router-dom'
import '../Courses/stylecourses.css'
import '../Header/stylenavbar.css'

const Dashboard = () => {

    return (
        
        <Fragment>
              <div id="sidebarrr">
                <div>
                  <ul>
                    {/* <Link to="/toefl/toefl_writing/" ><button className='searchcolor1'> Back to Syllabus</button> </Link> */}
                    {/* menampilkan id, nama/email, 3 subject (free atau premium), dan waktu membernya  */}
                    <li>Users</li>
                    {/* menampilkan id, nama/email, waktu upload, pic, pymnt method, plan, action(approve /reject) */}
                    <li>Approval</li>
                    {/* menampilkan id,nama/email, plan, harga member, total(pada bagian plaing bawah) */}
                    <li>Report</li>
                    {/* menampilkan id, title, subject, episode,link/filename, desc, waktu upload, action(add, edit, delete)*/}
                    <li>TOEFL</li>
                    <li>IELTS</li>
                    <li>GMAT</li>
                    {/* <Link to="/toefl/toefl_writing/introduction"><li>Introduction</li></Link> */}
                  </ul>
                </div>
              </div>

            <div>

                <div id="title" className="title-back-font">
                  
                </div>
            </div>
            
        </Fragment>
        
    )
}

export default Dashboard
