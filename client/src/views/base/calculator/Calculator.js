import React from 'react'
import { useState } from 'react'

import {
  CCard,
  CCardBody,
  CCardHeader,
  CCol,
  CRow,
} from '@coreui/react'

const Calculator = () => {

  const [typeCalci, setTypeCalci] = useState("1");
  const [freeTime, setFreeTime] = useState('');
  const [totalTime, setTotalTime] = useState('');
  const [price, setPrice] = useState('');
  const [totalAmt, setTotalAmt] = useState(0);

  const sum = (e) => {
    e.preventDefault();
    let a = parseInt(freeTime);
    let b = parseInt(totalTime);
    let c = parseInt(price); 
    let val = ( b - a ) * c/60 ; 
    setTotalAmt(val);
  };

  const selectCalci = (e) =>{
    const val = e.target.value;
    setTypeCalci(val);
  }

  return (
    <CRow>
      <CCol xs={12}>
        <CCard className="mb-4">
          <CCardHeader>
            <strong>Car Park</strong> <small>calulator</small>
          </CCardHeader>
          <CCardBody>
          <div className="row">
            <div className="app-title" style={{ width: "20%"}} >
              <select className="form-select" 
                  style={{   padding: "5px 5px 5px 12px"}}
                  onChange={ (e)=> (selectCalci(e))}
                  aria-label="Default select example">
                    {/* <option selected>Open this select menu</option> */}
                    <option value="1" >Four Wheeler</option>
                    <option value="2">Two Wheeler</option>
                    <option value="3">Others</option>
              </select>
            </div>
            
            {
              typeCalci==='1' && (

            <div className="calci-wrap mt-4" style={{ position: "relative" }} value={typeCalci} >
              <form className="needs-validation" >
                <div className="col-md-2 mb-3">
                  <label>Free Time (in Minutes)</label>
                    <div className="input-group mb-3">
                      <input type="text" className="form-control" placeholder="60" 
                      onChange={ (e)=> setFreeTime(e.target.value) }  value={freeTime}
                      aria-label="Recipient's username" aria-describedby="basic-addon2" />
                      <span className="input-group-text" id="basic-addon2">Minutes</span>
                    </div>
                  </div>

                <div className="form-row row">
                  <div className="col-md-3 mb-3">
                    <label>Total Time (in Minutes)</label>
                    <div className="input-group mb-3">
                      <input type="text" className="form-control" placeholder="60" 
                      onChange={ (e)=> setTotalTime(e.target.value) }  value={totalTime}
                      aria-label="Recipient's username" aria-describedby="basic-addon2" required/>
                      <span className="input-group-text" id="basic-addon2">Minutes</span>
                    </div>
                  </div>

                  <div className="col-md-3 mb-3">
                    <label htmlFor="validationTooltip02">Price (60 Minutes)</label>
                    <div className="input-group mb-3">
                      <input type="text" className="form-control" placeholder="60" 
                      onChange={ (e)=> setPrice(e.target.value) }  value={price} 
                      aria-label="Recipient's username" aria-describedby="basic-addon2" required/>
                      <span className="input-group-text" id="basic-addon2">Rupees</span>
                    </div>
                  </div>
                </div>

                <div className="form-row row ">
                  <div className="col-md-2 mb-3">
                  <label htmlFor="validationTooltip01">Total Amount</label>
                    <div className="input-group mb-3">
                      <input type="text" className="form-control" value={totalAmt} 
                      aria-label="Recipient's username" aria-describedby="basic-addon2" readOnly/>
                      <span className="input-group-text" id="basic-addon2">/-</span>
                    </div>
                  </div>
                </div>

                <div className="form-row row " style={{ marginLeft: 0 }}>
                  <button className="btn btn-primary col-md-2" onClick={ sum } >Final Price</button>
                </div>
              </form> 
            </div>

            )}

            {
              typeCalci==='2' && (

            <div className="calci-wrap mt-4" style={{ position: "relative" }} value={typeCalci} >
               <form className="needs-validation" >
                <div className="col-md-2 mb-3">
                  <label>Free Time (in Minutes)</label>
                    <div className="input-group mb-3">
                      <input type="text" className="form-control" placeholder="60" 
                      onChange={ (e)=> setFreeTime(e.target.value) }  value={freeTime}
                      aria-label="Recipient's username" aria-describedby="basic-addon2" />
                      <span className="input-group-text" id="basic-addon2">Minutes</span>
                    </div>
                  </div>

                <div className="form-row row">
                  <div className="col-md-3 mb-3">
                    <label>Total Time (in Minutes)</label>
                    <div className="input-group mb-3">
                      <input type="text" className="form-control" placeholder="60" 
                      onChange={ (e)=> setTotalTime(e.target.value) }  value={totalTime}
                      aria-label="Recipient's username" aria-describedby="basic-addon2" required/>
                      <span className="input-group-text" id="basic-addon2">Minutes</span>
                    </div>
                  </div>

                  <div className="col-md-3 mb-3">
                    <label htmlFor="validationTooltip02">Price (60 Minutes)</label>
                    <div className="input-group mb-3">
                      <input type="text" className="form-control" placeholder="60" 
                      onChange={ (e)=> setPrice(e.target.value) }  value={price} 
                      aria-label="Recipient's username" aria-describedby="basic-addon2" required/>
                      <span className="input-group-text" id="basic-addon2">Rupees</span>
                    </div>
                  </div>
                </div>

                <div className="form-row row ">
                  <div className="col-md-2 mb-3">
                  <label htmlFor="validationTooltip01">Total Amount</label>
                    <div className="input-group mb-3">
                      <input type="text" className="form-control" value={totalAmt} 
                      aria-label="Recipient's username" aria-describedby="basic-addon2" readOnly/>
                      <span className="input-group-text" id="basic-addon2">/-</span>
                    </div>
                  </div>
                </div>

                <div className="form-row row " style={{ marginLeft: 0 }}>
                  <button className="btn btn-primary col-md-2" onClick={ sum } >Final Price</button>
                </div>
              </form>  
            </div>

            )}

            {
              typeCalci==='3' && (

            <div className="calci-wrap mt-4" style={{ position: "relative" }} value={typeCalci} >
               <form className="needs-validation" >
                <div className="col-md-2 mb-3">
                  <label>Free Time (in Minutes)</label>
                    <div className="input-group mb-3">
                      <input type="text" className="form-control" placeholder="60" 
                      onChange={ (e)=> setFreeTime(e.target.value) }  value={freeTime}
                      aria-label="Recipient's username" aria-describedby="basic-addon2" />
                      <span className="input-group-text" id="basic-addon2">Minutes</span>
                    </div>
                  </div>

                <div className="form-row row">
                  <div className="col-md-3 mb-3">
                    <label>Total Time (in Minutes)</label>
                    <div className="input-group mb-3">
                      <input type="text" className="form-control" placeholder="60" 
                      onChange={ (e)=> setTotalTime(e.target.value) }  value={totalTime}
                      aria-label="Recipient's username" aria-describedby="basic-addon2" required/>
                      <span className="input-group-text" id="basic-addon2">Minutes</span>
                    </div>
                  </div>

                  <div className="col-md-3 mb-3">
                    <label htmlFor="validationTooltip02">Price (60 Minutes)</label>
                    <div className="input-group mb-3">
                      <input type="text" className="form-control" placeholder="60" 
                      onChange={ (e)=> setPrice(e.target.value) }  value={price} 
                      aria-label="Recipient's username" aria-describedby="basic-addon2" required/>
                      <span className="input-group-text" id="basic-addon2">Rupees</span>
                    </div>
                  </div>
                </div>

                <div className="form-row row ">
                  <div className="col-md-2 mb-3">
                  <label htmlFor="validationTooltip01">Total Amount</label>
                    <div className="input-group mb-3">
                      <input type="text" className="form-control" value={totalAmt} 
                      aria-label="Recipient's username" aria-describedby="basic-addon2" readOnly/>
                      <span className="input-group-text" id="basic-addon2">/-</span>
                    </div>
                  </div>
                </div>

                <div className="form-row row " style={{ marginLeft: 0 }}>
                  <button className="btn btn-primary col-md-2" onClick={ sum } >Final Price</button>
                </div>
              </form> 
            </div>

            )}

          </div>
          </CCardBody>
        </CCard>
      </CCol>
    </CRow>
  )
}

export default Calculator;
