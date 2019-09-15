import React, { Component } from 'react';
import './stylehomepic.css'


class Home extends Component {

render(){
    return (
        <div className="py-5 backgroundd">
        <div className='container'>
                <div className='row'>
                {/* div untuk search */}
                <div className='col-4 mt-5'>
                    <div className='card p-3'>
                        <div className='text-center'>
                            <h2>Ujian terasa sulit?</h2>
                            <p>Kami buat menjadi simpel</p>
                        </div>
                        <form className='form-group mb-2 fa'>
                            <input placeholder = "&#xf002; Mau belajar apa?"
                            ref={(input) => {this.name =input}} type='text' className='form-control'/>
                        </form>
                        <button onClick={this.onSearchClick} className='btn btn-primary'>Search</button>
                    </div>
                </div>
                {/* div untuk list */}
                {/* <div className='row col-9'>
                    {this.renderList()} */}
                </div>
            </div>
            </div>
        
    )
}
}

export default Home