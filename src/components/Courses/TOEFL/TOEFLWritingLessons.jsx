import React, { Component, Fragment,useState } from 'react'
import ReactPlayer from 'react-player'
import {Route, BrowserRouter, Link} from 'react-router-dom'
import Header from "../../Header/Header"
import '../../Courses/stylecourses.css'
import '../../Header/stylenavbar.css'

const TOEFLWritingLessons = () => {

  const [showSidebar,setSidebar] = useState(true)

  const toggleSidebar=()=> {
    console.log('masuk gak sih u')
    setSidebar(!showSidebar)
      document.getElementById("sidebarr").classList.toggle('active')
      document.getElementById("videobar").classList.toggle('active')
  }
        return (
          <Fragment>
              <div id ="sidebarr">
                <div className="toggle-btn" onClick={ toggleSidebar }>
                  <span></span>
                  <span></span>
                  <span></span>
                </div>
                <div className= "textdetil">
                  <ul>
                    <li>Search</li>
                    <li>Lesson 2</li>
                    <li>Lesson 3</li>
                    <li>Lesson 4</li>
                    <li>Lesson 5</li>
                    <li>Lesson 6</li>
                    <li>Lesson 7</li>
                  </ul>
                </div>
              </div>

              <div className="navv">
                <div>
                  <p>Lesson 1</p>
                </div>
              </div>          
              <div id ="videobar"> 
                <div className="containerr ">
                    <ReactPlayer url='https://www.youtube.com/watch?v=m2DolwMqErc' width={showSidebar? '1100px': "1400px" } height={showSidebar? "550px" : "705px"} playing controls/>
                </div>
              </div>
          </Fragment>
  )
}

export default TOEFLWritingLessons