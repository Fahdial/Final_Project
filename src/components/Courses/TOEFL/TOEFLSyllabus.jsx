import React, { Component } from 'react'
import '../../Courses/stylecourses.css'
import '../../Header/stylenavbar.css'


const TOEFLSyllabus = () => {
    
        return (
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
                                        <a className="masukkls" href="/toefl/writing">Enter Writing Task ></a>
                                    </td>
                                </tr>
                                
                            </table>
                            <button 
                                className="searchcolor1"
                                onClick={this.onLoginClick}
                            >Mulai Dari Awal</button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

export default TOEFLSyllabus