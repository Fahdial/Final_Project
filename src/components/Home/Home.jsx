import React, { useState, Fragment, useEffect } from 'react';
import ReactPlayer from 'react-player'
import Header from "../Header/Header"
import { Route, Link } from 'react-router-dom'
import API from '../../services'
import '../Home/stylehomepic.css'
import '../Home/stylesearch.css'

const Home = () => {

  const [ data, setData ] = useState({
    link : '',
    thumbnails: ''
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
            
            <footer className="pt-10 my-md-2 pt-md-3 border-top">
            <div className="row">
              <div className="col-6 col-md">
                <h5>Features</h5>
                <ul className="list-unstyled text-small">
                  <li><Link className="text-muted" to="#">Cool stuff</Link></li>
                  <li><Link className="text-muted" to="#">Random feature</Link></li>
                  <li><Link className="text-muted" to="#">Team feature</Link></li>
                  <li><Link className="text-muted" to="#">Stuff for developers</Link></li>
                  <li><Link className="text-muted" to="#">Another one</Link></li>
                  <li><Link className="text-muted" to="#">Last time</Link></li>
                </ul>
              </div>
              <div className="col-6 col-md">
                <h5>Resources</h5>
                <ul className="list-unstyled text-small">
                  <li><Link className="text-muted" to="#">Resource</Link></li>
                  <li><Link className="text-muted" to="#">Resource name</Link></li>
                  <li><Link className="text-muted" to="#">Another resource</Link></li>
                  <li><Link className="text-muted" to="#">Final resource</Link></li>
                </ul>
              </div>
              <div className="col-6 col-md">
                <h5>About</h5>
                <ul className="list-unstyled text-small">
                  <li><Link className="text-muted" to="#">Team</Link></li>
                  <li><Link className="text-muted" to="#">Locations</Link></li>
                  <li><Link className="text-muted" to="#">Privacy</Link></li>
                  <li><Link className="text-muted" to="#">Terms</Link></li>
                </ul>
              </div>
            </div>
          </footer>        
        </Fragment>
    )
}


export default Home

{/* div untuk search */}
                    {/* <div className='col-4 mt-25vh'>
                        <div className='card p-3'>
                            <div className='text-center'>
                                <h1>Ujian terasa sulit?</h1>
                                    <p>"MAMPUS"</p>
                            </div>

                            <form className='form-group mb-2 fa'>
                                <input placeholder = "&#xf002; Mau belajar apa?"
                                ref={(input) => {this.name =input}} type='text' className='form-control'/>
                            </form>

                                <button onClick={this.onSearchClick} className='searchcolor'>Search</button>
                        </div>
                    </div> */}
                {/* div untuk list */}
                {/* <div className='row col-9'>
                    {this.renderList()} */}
                