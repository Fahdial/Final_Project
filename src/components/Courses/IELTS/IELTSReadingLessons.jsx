import React, { Component, Fragment, useState, useEffect } from 'react'
import ReactPlayer from 'react-player'
import {Route, Link} from 'react-router-dom'
import API from '../../../services'
import Header from "../../Header/Header"
import '../../Courses/stylecourses.css'
import '../../Header/stylenavbar.css'
import TOEFLVideo from '../GlobalVideo'

const urlApi = "http://localhost:2000/"

const IELTSReadingLessons = (props) => {
  // menerima data dari getvideodata
console.log("TCL: IELTSReadingLessons -> props", props)
  
  console.log(props.match.path);
  // ielts/ielts_Reading/:id

  const [showSidebar,setSidebar] = useState(true)
  const [data,setData] = useState({
    title: "",
    episode: "",
    link: "",
    description: "",
    material:""
  })
  console.log(data)
  const [loading, setLoading] = useState(true)

  // render semua lesson di subject_id
  const renderLesson = () => {
      // state data mau diubah dengan map 
      let mapLesson = data.map((val,index)=> {
        if (val.title != 'Introduction') {
        return (
          <Fragment>
            <Link to={`/ielts/ielts_reading/${index}`}><li>{val.title}</li></Link>
          </Fragment>
        )
      }
      })
      return mapLesson
  }

  //tombol next dan dibuat penkodisian agar tidak lebih dari lesson yang ada
  const nextLesson =(params)=> {
    let nextLess = 0 
    if(params == 'introduction'){
      return nextLess = 1
    }else if (params > data.length - 1 ) {
      console.log(params);
      
      return nextLess = null
    }else{
      nextLess = parseInt(params) + 1
    }
    console.log(data.length);
    console.log(nextLess)
    return nextLess
  }

  // get data awal
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
  
    // burger
  const toggleSidebar=()=> {
    console.log('masuk gak sih u')
    setSidebar(!showSidebar)
      document.getElementById("sidebarr").classList.toggle('active')
      document.getElementById("videobar").classList.toggle('active')
      document.getElementById("deskripsi").classList.toggle('active')
      document.getElementById("title").classList.toggle('active')
  }

    if (!loading) {
      if(props.match.params.id > data.length)
        return null
      console.log(props)
      console.log(data)
      return (
        <Fragment>
            <div id ="sidebarr">
              <div className="toggle-btn" onClick={ toggleSidebar }>
                <span></span>
                <span></span>
                <span></span>
              </div>
              <div>
                <ul>
                <Link to="/ielts/ielts_reading/" ><button className='searchcolor1'> Back to Syllabus</button> </Link>
                  {/* <li>search</li> */}
                  <div className= "textdetil">
                  <Link to="/ielts/ielts_reading/introduction"><li>Introduction</li></Link>
                  {renderLesson()}
                    </div>
                </ul>
              </div>
            </div>

            <div className="title-back">
              {/* <div id="deksripsi"> */}
                <div id="title" className="title-back-font">

                  {
                    props.match.params.id !== 'introduction' && props.match.params.id < data.length ?
                    <p className="mb-0">{data[props.match.params.id].title}</p>
                    :
                    <p className="mb-0">{data[0].title}</p>
                  }
                  
                </div>
              </div>
            {/* </div>*/}
              <TOEFLVideo props={props} data={data} showSidebar={showSidebar}/>
              {
              nextLesson(props.match.params.id) !== null ?
              <div>
              {
                  nextLesson(props.match.params.id) == data.length ?
                  null
                  :
                  <Link to={`/ielts/ielts_reading/${nextLesson(props.match.params.id)}`} ><button className='nextcolor float-right mr-5 mb-3'>NEXT >></button> </Link>
              }
              {
                props.match.params.id == 'introduction' ?
                <a href={API.RootPath +'/material/'+ data[0].material} target='_blank'><button className='nextcolor float-right mr-5 mb-3'>Download PDF</button> </a>
                :
                <a href={API.RootPath +'/material/'+ data[props.match.params.id].material} target='_blank'><button className='nextcolor float-right mr-5 mb-3'>Download PDF</button> </a>
              }
              </div>
              :
              null
            }
        </Fragment>
)
    } else {
      return <h1>Loading</h1>
    }
}

export default IELTSReadingLessons