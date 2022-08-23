import React from 'react'
import { useState, useEffect } from 'react'
import axios from 'axios';
// import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// import basement1 from '../../../assets/images/base1.png'
// import basement2 from '../../../assets/images/base2.png'
import '../../../assets/css/style.css'

import {
    CCard,
    CCardBody,
    CCardHeader,
    CCol,
    CRow,
} from '@coreui/react'


const InternalDisplay = () => {

    //   const [info, setInfo] = useState([]);
    //   const [arr, setArr] = useState([]);
    //   const [num, setNum] = useState([]);
    //   const [show, setShow] = useState("1");
    // const [ showToast, setShowToast ] = useState(false)

    // const notify = (type, position = 'top-right') => { 
    //   console.log(type) 
    //   return () => { 
    //       switch (type) { 
    //           case 'info': toast.info('Hi! I am an info message!', { autoClose: 3000, position: position }); 
    //           break; 
    //           case 'success': toast.success('Hi! I am a success message', { position: position }); 
    //           break; 
    //           case 'warning': toast.warn('Hi! I am a warning message', { position: position }); 
    //           break; 
    //           case 'error': toast.error('Well, I am an error message', { position: position }); 
    //           break; 
    //           default: } 
    //       }; 
    //   } 

    //   useEffect(() => {
    //     axios.get('http://localhost:8000/gateway')
    //       .then((resp) => setNum(resp.data.display_data));
    //   },[]); 

    //   useEffect(() => {
    //     axios.get('http://localhost:8000/gateway')
    //       .then((resp) => setArr(resp.data));
    //   },[]);  

    //   // Parking Numbers show
    //   useEffect(() => {
    //     const notify = () => toast("Parking slot updated", {
    //       position: toast.POSITION.TOP_RIGHT,
    //       autoClose: 3000
    //     });
    //     axios.get('http://localhost:8000/gateway')
    //       .then((resp) => setInfo(resp.data.occupancy),
    //       notify()
    //       );
    //   },[]);




    return (
        <CRow>
            <CCol xs={12}>
                <CCard className="mb-4">
                    <CCardHeader>
                        <strong>Parking Display </strong> <small>Internally</small>
                    </CCardHeader>
                    <CCardBody>
                        <div className="row">
                            <div className="app-title">
                                <h3>Outdoor Display :</h3>
                            </div>
                            <div className="d-flex my-4">
                                <div className="col-md-3 text-center display-wrap">
                                    <h5>Basement 1</h5>
                                    <div className="col-md-12 mb-3 d-flex display-box text-center align-items-center">
                                        <div className="col-md-4">
                                            <i className="fa-solid fa-arrow-left"></i>
                                        </div>
                                        <div className="col-md-8">
                                            <span className="display-num">025</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-3 text-center display-wrap">
                                    <h5>Basement 2</h5>
                                    <div className="col-md-12 mb-3 d-flex display-box text-center align-items-center">
                                        <div className="col-md-4">
                                            <i className="fa-solid fa-arrow-left"></i>
                                        </div>
                                        <div className="col-md-8">
                                            <span className="display-num">025</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="row">
                            <div className="app-title">
                                <h3>Indoor Display :</h3>
                            </div>
                            <div className="d-flex my-4">
                                <div className="col-md-4 text-center display-wrap">
                                    <h5>Basement 1</h5>
                                    <div className="col-md-12 display-box">
                                        <div className="d-flex col-md-12">
                                            <div className="col-md-6 d-flex text-center align-items-center">
                                                <div className="col-md-4">
                                                  <i className="fa-solid fa-square-parking"></i>
                                                </div>
                                                <div className="col-md-8">
                                                    <span className="display-num">025</span>
                                                </div>
                                            </div>
                                            <div className="col-md-6 d-flex text-center align-items-center">
                                                <div className="col-md-4">
                                                  <i className="fa-solid fa-square-parking"></i>
                                                </div>
                                                <div className="col-md-8">
                                                    <span className="display-num">025</span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="d-flex col-md-12">
                                            <div className="col-md-6 d-flex text-center align-items-center">
                                                <div className="col-md-4">
                                                <i className="fa-solid fa-charging-station"></i>
                                                </div>
                                                <div className="col-md-8">
                                                    <span className="display-num">025</span>
                                                </div>
                                            </div>
                                            <div className="col-md-6 d-flex text-center align-items-center">
                                                <div className="col-md-4">
                                                    <i className="fa-solid fa-wheelchair"></i>
                                                </div>
                                                <div className="col-md-8">
                                                    <span className="display-num">025</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-md-4 text-center display-wrap">
                                    <h5>Basement 2</h5>
                                    <div className="col-md-12 display-box">
                                        <div className="d-flex col-md-12">
                                            <div className="col-md-6 d-flex text-center align-items-center">
                                                <div className="col-md-4">
                                                  <i className="fa-solid fa-square-parking"></i>
                                                </div>
                                                <div className="col-md-8">
                                                    <span className="display-num">025</span>
                                                </div>
                                            </div>
                                            <div className="col-md-6 d-flex text-center align-items-center">
                                                <div className="col-md-4">
                                                  <i className="fa-solid fa-square-parking"></i>
                                                </div>
                                                <div className="col-md-8">
                                                    <span className="display-num">025</span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="d-flex col-md-12">
                                            <div className="col-md-6 d-flex text-center align-items-center">
                                                <div className="col-md-4">
                                                <i className="fa-solid fa-charging-station"></i>
                                                </div>
                                                <div className="col-md-8">
                                                    <span className="display-num">025</span>
                                                </div>
                                            </div>
                                            <div className="col-md-6 d-flex text-center align-items-center">
                                                <div className="col-md-4">
                                                    <i className="fa-solid fa-wheelchair"></i>
                                                </div>
                                                <div className="col-md-8">
                                                    <span className="display-num">025</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </CCardBody>
                </CCard>
            </CCol>
        </CRow>
    )
}

export default InternalDisplay;
