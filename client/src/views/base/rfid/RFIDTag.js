import React from 'react'
import { useState, useEffect } from 'react'

import BootstrapTable from "react-bootstrap-table-next";
import filterFactory, { textFilter } from "react-bootstrap-table2-filter";
import { Menu, Item, Separator, Submenu, MenuProvider } from "react-contexify";
import Popup from "reactjs-popup";
import DatePicker from "react-datepicker";
import { FaArrowAltCircleRight, FaMap, FaPlusCircle } from "react-icons/fa";



import {
    CCard,
    CCardBody,
    CCardHeader,
    CCol,
    CRow,
    CDataTable,
} from '@coreui/react'



{/* <script>
    $(document).ready(function () {
    $('#dtBasicExample').DataTable();
    $('.dataTables_length').addClass('bs-select');
    });
</script> */}

const RFIDTag = () => {

    // const [currentSum,setCurrentSum]=useState(0);
    const [clear, setClear] = useState(new Date());

    const [state, setState] = useState(false);

    const [typeCalci, setTypeCalci] = useState("1");
    const [total, setTotal] = useState("");

    const [details, setDetails] = useState([])





    return (
        <CRow>
            <CCol xs={12}>
                <CCard className="mb-4">
                    <CCardHeader>
                        <strong>RFID Users</strong> <small>Report</small>
                    </CCardHeader>
                    <CCardBody>
                        <div className="App">
                          <div className="table-responsive">
                            <table id="myTable" className="display table" width="100%" >

                            <thead>  
                              <tr>  
                                <th>ENO</th>  
                                <th>EMPName</th>  
                                <th>Country</th>  
                                <th>Salary</th>  
                              </tr>  
                            </thead>  
                            <tbody>  
                              <tr>  
                                <td>001</td>  
                                <td>Anusha</td>  
                                <td>India</td>  
                                <td>10000</td>  
                              </tr>  
                              <tr>  
                                <td>002</td>  
                                <td>Charles</td>  
                                <td>United Kingdom</td>  
                                <td>28000</td>  
                              </tr>  
                              <tr>  
                                <td>003</td>  
                                <td>Sravani</td>  
                                <td>Australia</td>  
                                <td>7000</td>  
                              </tr>  
                              <tr>  
                                <td>004</td>  
                                <td>Amar</td>  
                                <td>India</td>  
                                <td>18000</td>  
                              </tr>  
                              <tr>  
                                <td>005</td>  
                                <td>Lakshmi</td>  
                                <td>India</td>  
                                <td>12000</td>  
                              </tr>  
                              <tr>  
                                <td>006</td>  
                                <td>James</td>  
                                <td>Canada</td>  
                                <td>50000</td>  
                              </tr>  
                              
                              <tr>  
                                <td>007</td>  
                                <td>Ronald</td>  
                                <td>US</td>  
                                <td>75000</td>  
                              </tr>  
                              <tr>  
                                <td>008</td>  
                                <td>Mike</td>  
                                <td>Belgium</td>  
                                <td>100000</td>  
                              </tr>  
                              <tr>  
                                <td>009</td>  
                                <td>Andrew</td>  
                                <td>Argentina</td>  
                                <td>45000</td>  
                              </tr>  
                              
                                <tr>  
                                <td>010</td>  
                                <td>Stephen</td>  
                                <td>Austria</td>  
                                <td>30000</td>  
                              </tr>  
                              <tr>  
                                <td>011</td>  
                                <td>Sara</td>  
                                <td>China</td>  
                                <td>750000</td>  
                              </tr>  
                              <tr>  
                                <td>012</td>  
                                <td>JonRoot</td>  
                                <td>Argentina</td>  
                                <td>65000</td>  
                              </tr>  
                            </tbody>  
                          </table>

                          </div>


                        </div>
                    </CCardBody>
                </CCard>
            </CCol>
        </CRow>
    )
}

export default RFIDTag;
