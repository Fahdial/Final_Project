import React, { Component, Fragment } from 'react';
import '../Home/stylehomepic.css'
import '../Home/stylesearch.css'

class Home extends Component {

render(){
    return (
        <Fragment>
        {/* page 1 */}
        <div className="backgroundd">
            <div className='container'>
                <div className="centered">
                    <h1 className="judulhome">
                        Become smart people with smart preparation with us
                    </h1>
                <br></br>
                    <div className="text-center">
                        <button onClick={this.onSearchClick} className='searchcolor'>WHAT IS PREPANATION</button>
                    </div>  
                </div>
            </div>
            <div className="judulhome2">
                <h1>Jamban</h1>
            </div>
        </div>
        {/* page 2 */}
        <div className="judul">
           <h3>You can simply join out program to fulfill your needs of education</h3>
        </div>
        </Fragment>
    )
}
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
                