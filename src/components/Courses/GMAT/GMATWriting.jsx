import React, { Component, Fragment } from 'react'
import ReactPlayer from 'react-player'
import {Route, BrowserRouter, Link} from 'react-router-dom'
import Header from "../../Header/Header"
import '../../Courses/stylecourses.css'
import '../../Header/stylenavbar.css'

const urlApi = 'http://localhost:2000'


const GMATWriting = () => {
        return (
            <Fragment>
                <Header/>
                    <div className="container">
                        <div className='row mt-5' >
                            <div className='col-8'>
                                <h3>Writing Course Summary</h3>
                                    <div>
                                    {/* <ReactPlayer url='https://www.youtube.com/watch?v=m2DolwMqErc' width='100%' height="500px" playing controls/> */}
                                    </div>
                                <br/>
                                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Esse quaerat dolores odio odit quia sint facilis, possimus tenetur sit culpa recusandae quibusdam earum praesentium aliquam reprehenderit quas impedit itaque nobis saepe quam eligendi ea maxime illo. Minima quia vel repellendus dignissimos rem ut officia facilis, nobis harum aliquam cum saepe.</p>
                                <br/>
                                <h3>What Will I Learn?</h3>
                                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nemo voluptatum nisi error beatae eligendi quos libero et dolore praesentium at!</p>
                                <br/>
                                <h3>Syllabus</h3>
                                <br/>
                                <div>
                                    <h5>Lesson 1: What We Know Now</h5>
                                        <ul className="pl-5">
                                            <li>Lorem ipsum dolor sit amet consectet</li>
                                            <li>Lorem ipsum dolor sit amet consecte</li>
                                            <li>Lorem ipsum dolor sit amet consectetur </li>
                                        </ul> 
                                    <h5>Lesson 2: What We Know Now</h5>
                                        <ul className="pl-5">
                                            <li>Lorem ipsum dolor sit amet consectetur ad</li>
                                            <li>TLorem ipsum dolor sit amet consectetu</li>
                                            <li>Lorem ipsum dolor sit amet consectetur </li>
                                        </ul> 
                                    <h5>Lesson 3: What We Know Now</h5>
                                        <ul className="pl-5">
                                            <li>CLorem ipsum dolor sit amet consectetur a</li>
                                            <li>Lorem ipsum dolor sit amet consectetur</li>
                                            <li>Lorem ipsum dolor sit amet consectetur </li>
                                        </ul> 
                                    <h5>Lesson 4: What We Know Now</h5>
                                        <ul className="pl-5">
                                            <li>CLorem ipsum dolor sit amet consectetur a</li>
                                            <li>Lorem ipsum dolor sit amet consectetur</li>
                                            <li>MLorem ipsum dolor sit amet consectetur</li>
                                        </ul> 
                                </div>  
                            </div>

                            <div className='col-3'>
                                {/* <div class="col-sm-6"> */}
                                    <div className="card">
                                        <div className="card-body">
                                            <h5 className="card-title">Access Courses Material</h5>
                                            <h5 className="card-title">What you get?</h5> 
                                                <ul className="pl-5">
                                                    <li>CLorem ipsum dolor sit amet consectetur a</li>
                                                    <li>Lorem ipsum dolor sit amet consectetur</li>
                                                    <li>MLorem ipsum dolor sit amet consectetur</li>
                                                    <li>MLorem ipsum dolor sit amet consectetur</li>
                                                </ul> 
                                                <Link to="/gmat/gmat_writing/introduction" ><button className='searchcolor1'>Start This Course >></button> </Link>
                                                
                                        </div>
                                    </div>
                                    <br/>
                                    <div className="card">
                                        <h1>ADS</h1>
                                    </div>
                                    <br/>
                                    <div className="card">
                                        <h1>ADS</h1>
                                    </div>
                            </div>
                        </div>
                    </div>
            </Fragment>
        )
    
    }

export default GMATWriting