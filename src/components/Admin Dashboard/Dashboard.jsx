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
                  <Link to="/" ><button className='searchcolor1'> Home</button> </Link>
                    {/* <Link to="/toefl/toefl_writing/" ><button className='searchcolor1'> Back to Syllabus</button> </Link> */}
                    {/* menampilkan id, nama/email, 3 subject (free atau premium), dan waktu membernya  */}
                    <li>
                    <Link to="/dashboard/allusers">Users Transaction</Link>
                    </li>
                    
                    {/* menampilkan id, nama/email, waktu upload, pic, pymnt method, plan, action(approve /reject) */}
                    <li>
                    <Link to="/dashboard/approval">Approval</Link>
                      </li>
                    {/* menampilkan id, title, subject, episode,link/filename, desc, waktu upload, action(add, edit, delete)*/}
                    <li><Link to="/dashboard/toefldash">TOEFL</Link></li>
                    <li><Link to="/dashboard/ieltsdash">IELTS</Link></li>
                    <li><Link to="/dashboard/gmatdash">GMAT</Link></li>
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
