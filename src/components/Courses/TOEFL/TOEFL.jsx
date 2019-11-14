import React, { Fragment } from "react"
import { Route, Link } from 'react-router-dom'
import Header from "../../Header/Header"
import '../../Courses/stylecourses.css'
import '../../Header/stylenavbar.css'

const TOEFL = () => {
    
        return (

            <Fragment>
            <Header/>
            <div>
                <div className="judul">
                    <div>
                        <h1 className="col-8 offset-2">
                            Pilih salah satu dari 4 kebutuhan dalam meraih nilai terbaik TOEFL anda
                        </h1>
                    </div>
                    <br/>
                    <br/>
                    <br/>
                    <div className="row">
                        <div className="col-10 offset-1">
                            <table className="judull table p-5 ">
                                <tr>
                                    <td>
                                        <h2>WRITING</h2>
                                    </td>
                                    <td>
                                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis, facilis vero. Deserunt ipsa necessitatibus natus, voluptate quos itaque minus. Illum totam labore, necessitatibus repudiandae porro laudantium qui, accusamus velit perspiciatis perferendis quae quos saepe est, voluptates eligendi iusto deserunt nesciunt.</p>
                                        <br/>
                                        <Link className="masukkls" to="/toefl/toefl_writing">Enter Writing Task ></Link>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <h2>READING</h2>
                                    </td>
                                    <td>
                                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Alias asperiores doloribus porro dolores facere perferendis, repellendus laudantium? Tempora odit voluptate a enim placeat dolor dolore explicabo id. Error cumque nesciunt doloremque, libero a, ea velit delectus, rem nulla facere hic.</p>
                                        <br/>
                                        <Link className="masukkls" to="/toeflreading">Enter Reading Task ></Link>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <h2>SPEAKING</h2>
                                    </td>
                                    <td>
                                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus quasi dolores officia saepe sed facilis mollitia debitis pariatur ullam quos voluptas consequuntur, similique esse, quas placeat autem ex cupiditate ad aliquam libero sint fugiat numquam labore. Et, voluptates! Nostrum, numquam.</p>
                                        <br/>
                                        <Link className="masukkls" to="/toeflspeaking">Enter Speaking Task ></Link>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <h2>LISTENING</h2>
                                    </td>
                                    <td>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Excepturi, tempora enim? Ullam mollitia vero vitae assumenda laudantium sint quia rem aspernatur excepturi eos ipsa, unde ea quo similique aliquid nam? Aliquam, necessitatibus culpa voluptatibus recusandae eveniet nostrum in a rerum.</p>
                                        <br/>
                                        <Link className="masukkls" to="/toefllistening">Enter Listening  Task ></Link>
                                    </td>
                                </tr>
                            </table>
                            <button 
                                className="searchcolor1"
                                // onClick={this.onLoginClick}
                            >Mulai Dari Awal</button>
                        </div>
                    </div>
                </div>
            </div>
            </Fragment>
        )
    }

export default TOEFL