import React from 'react'
import './css/Footer.css'

function Footer() {
  return (
    <footer className='bgFooter' >
        <div className='row'>
          <div className='col-12 col-md-3'>
            <div className='row'>
                <div className='row'>
                  <div className='col mt-5 d-flex justify-content-center' >
                      <img src="media/home.png" alt=""/>
                  </div>
                </div>
                <div className='row'>
                  <div className='col pt-3 d-flex justify-content-center'>
                      <h6 className='inf'>It is a long established fact that a reader will be distracted by the readable content of a page whenters.</h6>
                  </div>
                </div>
                <div className='row d-flex justify-content-center'>
                  <div className='col-3 mx-1 pt-5 d-flex justify-content-center '>
                  <img src="media/tw.png" alt=""/>
                  </div>
                  <div className='col-3 mx-1 pt-5 d-flex justify-content-center'>
                  <img src="media/fb.png" alt=""/>
                  </div>
                  <div className='col-3 mx-1 pt-5 d-flex justify-content-center'>
                  <img src="media/insta.png" alt=""/>
                  </div>
                </div>
            </div>
          </div>
          <div className='col-12 col-md-3 mt-5 '>
            <div className="row">
                <div className='row '>
                  <h4 className='d-flex justify-content-center'>About Us</h4>
                </div>
                <div className='row'>
                  <h6 className='d-flex justify-content-center'>About</h6>
                </div>
                <div className='row'>
                  <h6 className='d-flex justify-content-center'>Privacy & Policy</h6>
                </div>
                <div className='row'>
                  <h6 className='d-flex justify-content-center'>Terms & Conditions</h6>
                </div>
                <div className='row'>
                  <h6 className='d-flex justify-content-center'>Faq</h6>
                </div>
            </div>
          </div>
          <div className='col-12 col-md-3 mt-5'>
            <div className='row'>
                <div className="row">
                  <h4 className='d-flex justify-content-center'>Navigate</h4>
                </div>
                <div className="row">
                  <h6 className='d-flex justify-content-center'>How We Work</h6>
                </div>
                <div className="row">
                  <h6 className='d-flex justify-content-center'>Services</h6>
                </div>
                <div className="row">
                  <h6 className='d-flex justify-content-center'>Faq</h6>
                </div>
                <div className="row">
                  <h6 className='d-flex justify-content-center'>Contact</h6>
                </div>
                <div className="row">
                  <h6 className='d-flex justify-content-center'>Free Quote</h6>
                </div>
            </div>
          </div>
          <div className='col-12 col-md-3 mt-5'>
            <div className='row'>
                <div className="row">
                  <h4 className='d-flex justify-content-center'>Contact Us</h4>
                </div>
                <div className="row">
                  <h6 className='d-flex justify-content-center'>Ricardo Margain 444</h6>
                </div>
                <div className="row">
                  <h6 className='d-flex justify-content-center'>Call: +52 81 1234 5678</h6>
                </div>
                <div className="row">
                  <h6 className='d-flex justify-content-center'>Email: info@challenge.com</h6>
                </div>
                <div className="row">
                  <div className="d-flex justify-content-center pt-4">
                    <img src="media/wha.png"  alt=""/>
                  </div>
                  
                </div>
            </div>
          </div>
        </div>
    </footer>
  )
}

export default Footer