import React from 'react'
import { useState, useEffect } from 'react'
import axios from 'axios';
import jsPDF from 'jspdf';
// import { NavLink } from 'react-router-dom';



import {
    CCard,
    CCardBody,
    CCardHeader,
    CCol,
    CRow,
} from '@coreui/react'
import { NavLink } from 'react-router-dom';



const Permit = () => {

    const [permit, setPermit] = useState("");
    const [vehicleType, setVehicleType] = useState("");
    const [slotNo, setSlotNo] = useState("");
    const [regisNo, setRegisNo] = useState("");
    const [name, setName] = useState("");
    const [officeNo, setOfficeNo] = useState("");
    const [contact, setContact] = useState("");
    const [empType, setEmpType] = useState("");
    // const [permitType, setPermitType] = useState("");
    const [totalAmt, setTotalAmt] = useState("0");

    //to generate pdf
    const generatePDF = () => {
        var doc = new jsPDF('p', 'pt', 'a4');
        doc.html(document.querySelector("#pdfSave"), {
            callback: function (pdf) {
                // var pageCount = doc.internal.getNumberOfPages();
                // console.warn(pageCount);
                // console.log(pageCount);
                // alert(pageCount);
                // pdf.deletePage(pageCount);
                pdf.save('permit.pdf');
            }
        });

    }

    const proceed = (e) => {
        e.preventDefault();
        // console.log(dataInfo);
        axios.post('/permit', {
            vehicleType: vehicleType, regisNo: regisNo,
            name: name, contact: contact, officeNo: officeNo,
            empType: empType, permit: permit, slotNo: slotNo, totalAmt: totalAmt
        })
            .then((response) => {
                if (response) {
                    alert("Permit generated Successfully....");
                }
            })
            .catch(err => {
                console.error(err);
            })
    }


    const perDays = (e) => {
        const val = e.target.value;
        setPermit(val);
    }



    return (
        <CRow>
            <CCol xs={12}>
                <CCard className="mb-4">
                    <CCardHeader>
                        <strong>Monthly Permit</strong> <small>details</small>
                    </CCardHeader>
                    <CCardBody>
                        <div className="row">
                            <form>
                                <div className="row">
                                    <div className="col-md-2 mb-3">
                                        <h3 className='form-title' style={{ fontSize: "16px", fontWeight: "700" }}>Vehicle details :</h3>
                                    </div>
                                    <div className="col-md-3 mb-3">
                                        <select className="form-select"
                                            onChange={(e) => setVehicleType(e.target.value)}
                                            aria-label="Default select example">
                                            <option>Select Vehicle</option>
                                            <option value="Four Wheeler">Four Wheeler</option>
                                            <option value="Two Wheeler">Two Wheeler</option>
                                        </select>
                                    </div>
                                    <div className="col-md-3 mb-3">
                                        <input type="text" className="form-control"
                                            onChange={(e) => setRegisNo(e.target.value)}
                                            id="exampleInputEmail1" placeholder="Regtration No." />
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-md-2 mb-3">
                                        <h3 className='form-title' style={{ fontSize: "16px", fontWeight: "700" }}>User details :</h3>
                                    </div>
                                    <div className="col-md-3">
                                        <div className="mb-3">
                                            <input type="text" placeholder="Name"
                                                onChange={(e) => setName(e.target.value)}
                                                className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                                        </div>
                                    </div>
                                    <div className="col-md-3">
                                        <div className="mb-3">
                                            <input type="text" placeholder="Contact No."
                                                onChange={(e) => setContact(e.target.value)}
                                                className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-md-2 mb-3">
                                        <h3 className='form-title' style={{ fontSize: "16px", fontWeight: "700" }}>Office details :</h3>
                                    </div>
                                    <div className="col-md-3">
                                        <div className="mb-3">
                                            <input type="text" placeholder="Office No."
                                                onChange={(e) => setOfficeNo(e.target.value)}
                                                className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                                        </div>
                                    </div>
                                    <div className="col-md-3 row">
                                        <div className="form-check col-md-6">
                                            <input className="form-check-input" type="radio"
                                                onChange={(e) => setEmpType(e.target.value)}
                                                name="flexRadioDefault" id="flexRadioDefault1" checked />
                                            <label className="form-check-label" htmlFor="flexRadioDefault1">
                                                Employer
                                            </label>
                                        </div>
                                        <div className="form-check col-md-6">
                                            <input className="form-check-input" type="radio"
                                                onChange={(e) => setEmpType(e.target.value)}
                                                name="flexRadioDefault" id="flexRadioDefault2" />
                                            <label className="form-check-label" htmlFor="flexRadioDefault2">
                                                Employee
                                            </label>
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-md-2 mb-3">
                                        <h3 className='form-title' style={{ fontSize: "16px", fontWeight: "700" }}>Permit details :</h3>
                                    </div>
                                    <div className="col-md-3 mb-3">
                                        <select className="form-select"
                                            style={{ padding: "5px 5px 5px 12px" }}
                                            onChange={(e) => setPermit(e.target.value)}
                                            aria-label="Default select example">
                                            <option selected>Select Permit type</option>
                                            <option value="Today" >One Day Permit</option>
                                            <option value="Monthly">Monthly Permit</option>
                                        </select>
                                    </div>
                                    {
                                        permit === 'Today' && (
                                            <div className="col-md-6 row">
                                                <div className="mb-3 col-md-3">
                                                    <input type="text" onChange={(e) => setTotalAmt(e.target.value)} value={totalAmt} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                                                </div>
                                                <div className="mb-3 col-md-3">
                                                    <label>Slot No.</label>
                                                    <input type="text" onChange={(e) => setSlotNo(e.target.value)} value={slotNo} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                                                </div>
                                            </div>
                                        )}
                                    {
                                        permit === 'Monthly' && (
                                            <div className="col-md-6 row">
                                                <div className="mb-3 col-md-3">
                                                    <input type="text" onChange={(e) => setTotalAmt(e.target.value)} value={totalAmt} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                                                </div>
                                                <div className="mb-3 col-md-3">
                                                    <label>Slot No.</label>
                                                    <input type="text" onChange={(e) => setSlotNo(e.target.value)} value={slotNo} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                                                </div>
                                            </div>
                                        )}
                                </div>
                                <div className="row">
                                    <button type="button" style={{ width: "10%" , marginLeft: "12px" }} className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
                                        Submit
                                    </button>

                                    <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                        <div className="modal-dialog">
                                            <div className="modal-content">
                                                <div className="modal-header">
                                                    <h5 className="modal-title" id="exampleModalLabel">Parking Permit</h5>
                                                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                                </div>
                                                <div className="modal-body " >
                                                    <table className="table table-borderless" >
                                                        <tbody id="pdfSave">
                                                            <tr>
                                                                <th>Name : </th>
                                                                <td>{name}</td>
                                                            </tr>
                                                            <tr>
                                                                <th>Contact No. : </th>
                                                                <td>{contact}</td>
                                                            </tr>
                                                            <tr>
                                                                <th>Office No. : </th>
                                                                <td>{officeNo}</td>
                                                            </tr>
                                                            <tr>
                                                                <th>Employe Type : </th>
                                                                <td>{empType}</td>
                                                            </tr>
                                                            <tr>
                                                                <th>Vehicle Type : </th>
                                                                <td>{vehicleType}</td>
                                                            </tr>
                                                            <tr>
                                                                <th>Vehicle Reg. No. : </th>
                                                                <td>{regisNo}</td>
                                                            </tr>
                                                            <tr>
                                                                <th>Assigned Slot No. : </th>
                                                                <td>{slotNo}</td>
                                                            </tr>
                                                            <tr>
                                                                <th>Permit Details : </th>
                                                                <td>{permit}</td>
                                                            </tr>
                                                            <tr>
                                                                <th>Total Amount : </th>
                                                                <td>Rs. &nbsp; {totalAmt} &nbsp; /- </td>
                                                            </tr>
                                                        </tbody>
                                                    </table>
                                                </div>
                                                <div className="modal-footer">
                                                    {/* <NavLink to="/base/permit" className="btn btn-warning">Edit</NavLink> */}
                                                    <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                                    <button type="button" onClick={proceed} className="btn btn-primary">Proceed</button>
                                                    <button type="button" onClick={generatePDF} className="btn btn-primary">Save</button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </form>

                        </div>
                    </CCardBody>
                </CCard>
            </CCol>
        </CRow>
    )
}

export default Permit;
