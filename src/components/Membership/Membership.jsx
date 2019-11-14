import React, { Fragment, useState, useEffect } from 'react'
import Header from "../Header/Header"
import {Redirect} from 'react-router-dom'
import {useSelector} from 'react-redux'
import Swal from 'sweetalert2'
import ovo from '../Uploads/ovo.jpg'
import dana from '../Uploads/dana.jpg'
import ovobarcode from '../Uploads/ovo_barcode.jpg'
import danabarcode from '../Uploads/dana_barcode.jpg'
import moment from "moment"

const Membership = ()=> {

const [plan, setPlan] = useState('')
const [unLogin, setunLogin] =useState(false)
const {GMAT, IELTS, TOEFL,id} = useSelector(state => {
  return{
    id: state.auth.id,
    GMAT: state.auth.GMAT,
    IELTS: state.auth.IELTS,
    TOEFL: state.auth.TOEFL,
  }
})

console.log(TOEFL);


const belomLogin = ()=>{
  Swal.fire(
    'Please Login!',
    'You have to be logged in to continue the membership',
    'error'
  )
  setunLogin(true)
}
  if(unLogin) return <Redirect to="/login"/>
  if (!plan) {
        return (
          <Fragment>
          <Header/>
        <div className="container pricing-header px-3 py-3 pt-md-5 pb-md-5 mx-auto text-center">
          <h1 className="display-5 mt-4">Membership</h1>
          <br/>
          <p className="lead">You can simply choose program to fulfill your needs of education</p>
        </div>
        <div className="container">
          <div className="card-deck mb-4 text-center">
            <div className="card mb-4 box-shadow">
              <div className="card-header">
                <h4 className="my-0 font-weight-normal">TOEFL</h4>
              </div>
              <div className="card-body">
                <h1 className="card-title pricing-card-title">500K<small className="text-muted">/2mo</small></h1>
                <ul className="list-unstyled mt-3 mb-4 ">
                  <li>15 Videos</li>
                  <li>15 PDF</li>
                  <li>Tips and Tricks</li>
                </ul>
                {
                  id && TOEFL =='free'?
                  <button type="button" className="searchcolor1" onClick={()=> setPlan('TOEFL')}>Select Membership</button>
                  :
                  id && TOEFL != 'free'?
                  <button type="button" className="searchcolor3" disabled >
                    {
                      TOEFL == 'pending'? 'Pending': 'Premium'
                    }
                  </button>
                  :
                  <button type="button" className="searchcolor1" onClick={()=> belomLogin()}>Select Membership</button>
                }
              
              </div>
            </div>
            <div className="card mb-4 box-shadow">
              <div className="card-header">
                <h4 className="my-0 font-weight-normal">IELTS</h4>
              </div>
              <div className="card-body">
                <h1 className="card-title pricing-card-title">500K<small className="text-muted">/2mo</small></h1>
                <ul className="list-unstyled mt-3 mb-4">
                  <li>15 Videos</li>
                  <li>15 PDF</li>
                  <li>Tips and Tricks</li>
                </ul>
                {
                  id && IELTS =='free'?
                  <button type="button" className="searchcolor1" onClick={()=> setPlan('IELTS')}>Select Membership</button>
                  :
                  id && IELTS != 'free'?
                  <button type="button" className="searchcolor3" disabled >
                    {
                      IELTS == 'pending'? 'Pending': 'Premium'
                    }
                  </button>
                  :
                  <button type="button" className="searchcolor1" onClick={()=> belomLogin()}>Select Membership</button>
                }
              </div>
            </div>
            <div className="card mb-4 box-shadow">
              <div className="card-header">
                <h4 className="my-0 font-weight-normal">GMAT</h4>
              </div>
              <div className="card-body">
                <h1 className="card-title pricing-card-title">500K<small className="text-muted">/2mo</small></h1>
                <ul className="list-unstyled mt-3 mb-4">
                  <li>15 Videos</li>
                  <li>15 PDF</li>
                  <li>Tips and Tricks</li>
                </ul>
                {
                  id && GMAT =='free'?
                  <button type="button" className="searchcolor1" onClick={()=> setPlan('GMAT')}>Select Membership</button>
                  :
                  id && GMAT != 'free'?
                  <button type="button" className="searchcolor3" disabled >
                    {
                      GMAT == 'pending'? 'Pending': 'Premium'
                    }
                  </button>
                  :
                  <button type="button" className="searchcolor1" onClick={()=> belomLogin()}>Select Membership</button>
                }
              </div>
            </div>
          </div>
        </div>
    
        </Fragment>
  )
  } else {
    return(
      <Redirect to={{ pathname: "/payment", state: plan }}/>
    )}
}

export default Membership

