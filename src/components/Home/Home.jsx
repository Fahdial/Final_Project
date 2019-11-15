import React, { useState, Fragment, useEffect } from 'react';
import ReactPlayer from 'react-player'
import Header from "../Header/Header"
import { Route, Link } from 'react-router-dom'
import API from '../../services'
import '../Home/stylehomepic.css'
import '../Home/stylesearch.css'

const Home = () => {

  const [ data, setData ] = useState({
    link : ''
  })

  // const [ data, setData ] = useState()

  const getAboutLink = () => {
  API.getAboutLink()
      .then(res => setData(res))
  }

    useEffect(() => {
    getAboutLink()
  }, [])

console.log(data);

  return (
        <Fragment>
          <Header/> 
            {/* page 1 */}
            <div className="backgroundd">
                <div className='container'>
                    <div className="centered">
                        <h1 className="judulhome">
                            Become smart people with smart preparation with us
                        </h1>
                    <br></br>
                        <div className="text-center">
                            {/* <button onClick={this.onSearchClick} className='searchcolor'>WHAT IS PREPANATION</button> */}
                        </div>  
                    </div>
                </div>
            </div>
            {/* page 2 */}
            <div className="container">
              <div className="judul">
                <h3>You can simply join out program to fulfill your needs of education</h3>
                <br/>  
                <ReactPlayer url={data.link} width='100%' height ="500px" playing controls/>
              </div>
            </div>
        </Fragment>
    )
}


export default Home

