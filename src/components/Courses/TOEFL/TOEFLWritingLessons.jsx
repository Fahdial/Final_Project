import React, { Component, Fragment, useState, useEffect } from 'react'
import ReactPlayer from 'react-player'
import {Route, Link} from 'react-router-dom'
import API from '../../../services'
import Header from "../../Header/Header"
import '../../Courses/stylecourses.css'
import '../../Header/stylenavbar.css'
import TOEFLVideo from './TOEFLVideo'

const TOEFLWritingLessons = (props) => {
  console.log(props.match.path.split('/')[2]);

  const [showSidebar,setSidebar] = useState(true)
  const [data,setData] = useState({
    title: "",
    episode: "",
    link: "",
    description: ""
  })
  const [loading, setLoading] = useState(true)

  const dinamis = () => {
      let mapLesson = data.map((val,index)=> {
        if (val.title != 'Introduction') {
        return (
          <Fragment>
            <Link to={`/toefl/toefl_writing/${index}`}><li>{val.title}</li></Link>
          </Fragment>
        )
      }
      })
      return mapLesson
  }

  const getVideoData = () => {
    API.getVideoData({subject_id: props.match.path.split('/')[2]})
        .then(res => {          
          setData(res)
          setLoading(false)
        })
    }
    
    useEffect(() => {
      getVideoData()
    }, [])

    console.log(data);
    

  const toggleSidebar=()=> {
    console.log('masuk gak sih u')
    setSidebar(!showSidebar)
      document.getElementById("sidebarr").classList.toggle('active')
      document.getElementById("videobar").classList.toggle('active')
      document.getElementById("deskripsi").classList.toggle('active')
      document.getElementById("title").classList.toggle('active')
  }
    if (!loading) {
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
                  <Link to="/toefl/toefl_writing/introduction"><li>Introduction</li></Link>
                  {dinamis()}
                </ul>
              </div>
            </div>

            <div className="title-back">
              {/* <div id="deksripsi"> */}
                <div id="title" className="title-back-font">
                  <p className="mb-0">Introduction</p>
                </div>
              </div>
            {/* </div>*/}
              <TOEFLVideo props={props} data={data} showSidebar={showSidebar}/>
            <Link to="/toefl/toefl_writing/introduction" ><button className='nextcolor float-right mr-5'>NEXT >></button> </Link>
        </Fragment>
)
    } else {
      return <h1>Loading</h1>
    }
}

export default TOEFLWritingLessons