import React, { Component } from 'react'
import '../Courses/stylecourses.css'
import '../Header/stylenavbar.css'

export class GMAT extends Component {
    render() {
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
                                        <a className="masukkls" href="/toeflwriting">Enter Writing Task ></a>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <h2>READING</h2>
                                    </td>
                                    <td>
                                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Alias asperiores doloribus porro dolores facere perferendis, repellendus laudantium? Tempora odit voluptate a enim placeat dolor dolore explicabo id. Error cumque nesciunt doloremque, libero a, ea velit delectus, rem nulla facere hic.</p>
                                        <br/>
                                        <a className="masukkls" href="/toelreading">Enter Reading Task ></a>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <h2>SPEAKING</h2>
                                    </td>
                                    <td>
                                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus quasi dolores officia saepe sed facilis mollitia debitis pariatur ullam quos voluptas consequuntur, similique esse, quas placeat autem ex cupiditate ad aliquam libero sint fugiat numquam labore. Et, voluptates! Nostrum, numquam.</p>
                                        <br/>
                                        <a className="masukkls" href="/toeflspeaking">Enter Speaking Task ></a>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <h2>LISTENING</h2>
                                    </td>
                                    <td>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Excepturi, tempora enim? Ullam mollitia vero vitae assumenda laudantium sint quia rem aspernatur excepturi eos ipsa, unde ea quo similique aliquid nam? Aliquam, necessitatibus culpa voluptatibus recusandae eveniet nostrum in a rerum.</p>
                                        <br/>
                                        <a className="masukkls" href="/toefllistening">Enter Listening  Task ></a>
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
}

export default GMAT