import React from 'react'
import { useState, useEffect } from 'react'
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import basement1 from '../../../assets/images/base1.png'
import basement2 from '../../../assets/images/base2.png'
import '../../../assets/css/style.css'

import {
  CCard,
  CCardBody,
  CCardHeader,
  CCol,
  CRow,
  CImage,
} from '@coreui/react'


const Map = () => {

  const [info, setInfo] = useState([]);
  const [arr, setArr] = useState([]);
  const [num, setNum] = useState([]);
  const [show, setShow] = useState("1");
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

  useEffect(() => {
    axios.get('http://localhost:8000/gateway')
      .then((resp) => setNum(resp.data.display_data));
  },[]); 

  useEffect(() => {
    axios.get('http://localhost:8000/gateway')
      .then((resp) => setArr(resp.data));
  },[]);  

  // Parking Numbers show
  useEffect(() => {
    const notify = () => toast("Parking slot updated", {
      position: toast.POSITION.TOP_RIGHT,
      autoClose: 3000
    });
    axios.get('http://localhost:8000/gateway')
      .then((resp) => setInfo(resp.data.occupancy),
      notify()
      );
      

  },[]);

 

  // Map switch on select
  const handleDiv = (e) => {
    const val = e.target.value;
    setShow(val);
  }
  // var homes;

//   setTimeout(function(){
//     window.location.reload(true);
//  }, 3000);

  return (
    <CRow>
      <ToastContainer />
      <CCol xs={12}>
        <CCard className="mb-4">
          <CCardHeader>
          
            <CRow>
              <CCol md={2}>
                <select className="form-select"
                  style={{ padding: "5px 5px 5px 12px" }}
                  onChange={(e) => (handleDiv(e))}
                  aria-label="Default select example">
                  <option value="1" >Basement - 1</option>
                  <option value="2">Basement - 2</option>
                </select>
              </CCol>
              <CCol md={3}>
                <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#staticBackdrop" style={{ padding: "4px 12px" }} >
                  <i className="fa-solid fa-eye"></i>
                </button>
                {/* <button onClick={notify}>Notify!</button> */}

                <div className="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                  <div className="modal-dialog">
                    <div className="modal-content">
                      <div className="modal-header">
                        <h5 className="modal-title" id="staticBackdropLabel">Parking Details :</h5>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                      </div>
                      <div className="modal-body">
                        <div className="info-data">
                           <h6>Site ID :<span className='px-2 cust-space'>{arr.site_id}</span> Gateway ID :<span className='px-2'>{arr.gateway_id}</span></h6>
                        </div>
                        <table className="table table-hover mb-0">
                          <thead>
                            <tr>
                              <th scope="col">Area</th>
                              <th scope="col">Total</th>
                              <th scope="col">Occupied</th>
                              <th scope="col">Available</th>
                            </tr>
                          </thead>

                          <tbody>
                            {/* <tr>
                              <td>Info : </td>
                              <td>{arr.frame_type}</td>
                              <td>{arr.site_id}</td>
                              <td>{arr.gateway_id}</td>
                            </tr> */}
                            <tr>
                            <td>Basement-1 : </td>
                              <td>{num.total_parking}</td>
                              <td>{num.occupied_parking}</td>
                              <td>{num.available_parking}</td>
                            </tr>
                            <tr>
                              <td>Basement-2 : </td>
                              <td>145</td>
                              <td>145</td>
                              <td>546</td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                      <div className="modal-footer">
                        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                      </div>
                    </div>
                  </div>
                </div>

              </CCol>
            </CRow>
          </CCardHeader>
          <CCardBody>

            {
              show == '1' && (

                <div className="form un-select" style={{ position: "relative" }} value={show}>


                  <div style={{ position: "absolute", top: "-3px ", left: "-3px", zIndex: 200, width: "100%", height: "100%" }}
                    className="infoBuss" id="infoBuss">

                    {info.map((eve, index) => {
                      if (index == '1') {
                        return (<>
                          {eve.value == 'V' ? <span className="badge-dot " value={eve.value} style={{ left: '128px', top: '302px' }}></span> : eve.value == 'O' ? <span className="badge-dot red" value={eve.value} style={{ left: '128px', top: '302px' }}></span>
                            : <span className="badge-dot black" value={eve.value} style={{ left: '128px', top: '302px' }}></span>
                          }
                        </>);
                      }
                    }
                    )}

                     {info.map((eve, index) => {
                      if (index == '2') {
                        return (<>
                          {eve.value == 'V' ? <span className="badge-dot " value={eve.value} style={{ left: '86px', top: '302px' }}></span> : eve.value == 'O' ? <span className="badge-dot red" value={eve.value} style={{ left: '86px', top: '302px' }}></span>
                            : <span className="badge-dot black" value={eve.value} style={{ left: '86px', top: '302px' }}></span>
                          }
                        </>);
                      }
                    }
                    )}

                    {info.map((eve, index) => {
                      if (index == '3') {
                        return (<>
                          {eve.value == 'V' ? <span className="badge-dot " value={eve.value} style={{ left: '102px', top: '223px' }}></span> : eve.value == 'O' ? <span className="badge-dot red" value={eve.value} style={{ left: '102px', top: '223px' }}></span>
                            : <span className="badge-dot black" value={eve.value} style={{ left: '102px', top: '223px' }}></span>
                          }
                        </>);
                      }
                    }
                    )}

                    {info.map((eve, index) => {
                      if (index == '4') {
                        return (<>
                          {eve.value == 'V' ? <span className="badge-dot " value={eve.value} style={{ left: '105px', top: '132px' }}></span> : eve.value == 'O' ? <span className="badge-dot red" value={eve.value} style={{ left: '105px', top: '132px'  }}></span>
                            : <span className="badge-dot black" value={eve.value} style={{ left: '105px', top: '132px'  }}></span>
                          }
                        </>);
                      }
                    }
                    )}


                    {info.map((eve, index) => {
                      if (index == '5') {
                        return (<>
                          {eve.value == 'V' ? <span className="badge-dot " value={eve.value} style={{ left: '205px', top: '149px' }}></span> : eve.value == 'O' ? <span className="badge-dot red" value={eve.value} style={{ left: '205px', top: '149px'  }}></span>
                            : <span className="badge-dot black" value={eve.value} style={{ left: '205px', top: '149px'  }}></span>
                          }
                        </>);
                      }
                    }
                    )}


                    {info.map((eve, index) => {
                      if (index == '6') {
                        return (<>
                          {eve.value == 'V' ? <span className="badge-dot " value={eve.value} style={{ left: '204px', top: '107px' }}></span> : eve.value == 'O' ? <span className="badge-dot red" value={eve.value} style={{ left: '204px', top: '107px' }}></span>
                            : <span className="badge-dot black" value={eve.value} style={{ left: '204px', top: '107px' }}></span>
                          }
                        </>);
                      }
                    }
                    )}


                    {info.map((eve, index) => {
                      if (index == '7') {
                        return (<>
                          {eve.value == 'V' ? <span className="badge-dot " value={eve.value} style={{ left: '285px', top: '107px' }}></span> : eve.value == 'O' ? <span className="badge-dot red" value={eve.value} style={{ left: '285px', top: '107px' }}></span>
                            : <span className="badge-dot black" value={eve.value} style={{ left: '285px', top: '107px' }}></span>
                          }
                        </>);
                      }
                    }
                    )}


                    {info.map((eve, index) => {
                      if (index == '8') {
                        return (<>
                          {eve.value == 'V' ? <span className="badge-dot " value={eve.value} style={{ left: '285px', top: '149px' }}></span> : eve.value == 'O' ? <span className="badge-dot red" value={eve.value} style={{ left: '285px', top: '149px' }}></span>
                            : <span className="badge-dot black" value={eve.value} style={{ left: '285px', top: '149px' }}></span>
                          }
                        </>);
                      }
                    }
                    )}



                    {info.map((eve, index) => {
                      if (index == '9') {
                        return (<>
                          {eve.value == 'V' ? <span className="badge-dot " value={eve.value} style={{ left: '499px', top: '213px' }}></span> : eve.value == 'O' ? <span className="badge-dot red" value={eve.value} style={{  left: '499px', top: '213px' }}></span>
                            : <span className="badge-dot black" value={eve.value} style={{  left: '499px', top: '213px' }}></span>
                          }
                        </>);
                      }
                    }
                    )}



                    {info.map((eve, index) => {
                      if (index == '10') {
                        return (<>
                          {eve.value == 'V' ? <span className="badge-dot " value={eve.value} style={{ left: '533px', top: '213px' }}></span> : eve.value == 'O' ? <span className="badge-dot red" value={eve.value} style={{ left: '533px', top: '213px' }}></span>
                            : <span className="badge-dot black" value={eve.value} style={{ left: '533px', top: '213px' }}></span>
                          }
                        </>);
                      }
                    }
                    )}


                    


                  </div>
                  <CImage src={basement1} fluid className="mb-2" />
                </div>

              )
            }

            {
              show == '2' && (

                <div className="form un-select" style={{ position: "relative" }} value={show} >
                  <div style={{ position: "absolute", top: "-3px ", left: "-3px", zIndex: 200, width: "100%", height: "100%" }}
                    className="infoBuss" id="infoBuss">

                    {info.map((eve, index) => {
                      if (index == '11') {
                        return (<>
                          {eve.value == 'V' ? <span className="badge-dot " value={eve.value} style={{ left: '181px', top: '679px' }}></span> : eve.value == 'O' ? <span className="badge-dot red" value={eve.value} style={{ left: '181px', top: '679px' }}></span>
                            : <span className="badge-dot black" value={eve.value} style={{ left: '181px', top: '679px' }}></span>
                          }
                        </>);
                      }
                    }
                    )}


                    {info.map((eve, index) => {
                      if (index == '12') {
                        return (<>
                          {eve.value == 'V' ? <span className="badge-dot " value={eve.value} style={{ left: '181px', top: '720px' }}></span> : eve.value == 'O' ? <span className="badge-dot red" value={eve.value} style={{ left: '181px', top: '720px'  }}></span>
                            : <span className="badge-dot black" value={eve.value} style={{ left: '181px', top: '720px'  }}></span>
                          }
                        </>);
                      }
                    }
                    )}


                    {info.map((eve, index) => {
                      if (index == '13') {
                        return (<>
                          {eve.value == 'V' ? <span className="badge-dot " value={eve.value} style={{ left: '285px', top: '681px' }}></span> : eve.value == 'O' ? <span className="badge-dot red" value={eve.value} style={{ left: '285px', top: '681px' }}></span>
                            : <span className="badge-dot black" value={eve.value} style={{ left: '285px', top: '681px' }}></span>
                          }
                        </>);
                      }
                    }
                    )}


                    {info.map((eve, index) => {
                      if (index == '14') {
                        return (<>
                          {eve.value == 'V' ? <span className="badge-dot " value={eve.value} style={{ left: '285px', top: '723px' }}></span> : eve.value == 'O' ? <span className="badge-dot red" value={eve.value} style={{ left: '285px', top: '723px' }}></span>
                            : <span className="badge-dot black" value={eve.value} style={{ left: '285px', top: '723px' }}></span>
                          }
                        </>);
                      }
                    }
                    )}


                    {info.map((eve, index) => {
                      if (index == '15') {
                        return (<>
                          {eve.value == 'V' ? <span className="badge-dot " value={eve.value} style={{ left: '374px', top: '682px' }}></span> : eve.value == 'O' ? <span className="badge-dot red" value={eve.value} style={{ left: '374px', top: '682px' }}></span>
                            : <span className="badge-dot black" value={eve.value} style={{ left: '374px', top: '682px' }}></span>
                          }
                        </>);
                      }
                    }
                    )}


                    {info.map((eve, index) => {
                      if (index == '16') {
                        return (<>
                          {eve.value == 'V' ? <span className="badge-dot " value={eve.value} style={{ left: '432px', top: '700px' }}></span> : eve.value == 'O' ? <span className="badge-dot red" value={eve.value} style={{ left: '432px', top: '700px' }}></span>
                            : <span className="badge-dot black" value={eve.value} style={{ left: '432px', top: '700px' }}></span>
                          }
                        </>);
                      }
                    }
                    )}


                    {info.map((eve, index) => {
                      if (index == '17') {
                        return (<>
                          {eve.value == 'V' ? <span className="badge-dot " value={eve.value} style={{ left: '492px', top: '723px' }}></span> : eve.value == 'O' ? <span className="badge-dot red" value={eve.value} style={{ left: '492px', top: '723px' }}></span>
                            : <span className="badge-dot black" value={eve.value} style={{ left: '492px', top: '723px' }}></span>
                          }
                        </>);
                      }
                    }
                    )}


                    {info.map((eve, index) => {
                      if (index == '18') {
                        return (<>
                          {eve.value == 'V' ? <span className="badge-dot " value={eve.value} style={{ left: '581px', top: '723px' }}></span> : eve.value == 'O' ? <span className="badge-dot red" value={eve.value} style={{ left: '581px', top: '723px' }}></span>
                            : <span className="badge-dot black" value={eve.value} style={{ left: '581px', top: '723px' }}></span>
                          }
                        </>);
                      }
                    }
                    )}


                    {info.map((eve, index) => {
                      if (index == '19') {
                        return (<>
                          {eve.value == 'V' ? <span className="badge-dot " value={eve.value} style={{ left: '697px', top: '723px' }}></span> : eve.value == 'O' ? <span className="badge-dot red" value={eve.value} style={{ left: '697px', top: '723px' }}></span>
                            : <span className="badge-dot black" value={eve.value} style={{ left: '697px', top: '723px' }}></span>
                          }
                        </>);
                      }
                    }
                    )}

                    {info.map((eve, index) => {
                      if (index == '20') {
                        return (<>
                          {eve.value == 'V' ? <span className="badge-dot " value={eve.value} style={{ left: '697px', top: '681px' }}></span> : eve.value == 'O' ? <span className="badge-dot red" value={eve.value} style={{ left: '697px', top: '681px' }}></span>
                            : <span className="badge-dot black" value={eve.value} style={{ left: '697px', top: '681px' }}></span>
                          }
                        </>);
                      }
                    }
                    )}

                  </div>
                  <CImage src={basement2} fluid className="mb-2" />
                </div>

              )}

          </CCardBody>
        </CCard>
      </CCol>
    </CRow>
  )
}

export default Map;
