import React from 'react'
import { useState, useEffect } from 'react'

import BootstrapTable from "react-bootstrap-table-next";
import filterFactory, { textFilter } from "react-bootstrap-table2-filter";
import { Menu, Item, Separator, Submenu, MenuProvider } from "react-contexify";
// import "../node_modules/react-contexify/dist/ReactContexify.min.css";
import Popup from "reactjs-popup";
import DatePicker from "react-datepicker";
import { FaArrowAltCircleRight, FaMap, FaPlusCircle } from "react-icons/fa";
// import "../node_modules/react-datepicker/dist/react-datepicker.css";
// import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
// import "../node_modules/react-bootstrap-table-next/dist/react-bootstrap-table2.min.css";


// import basement from '../../../assets/images/basement.png'

import {
  CCard,
  CCardBody,
  CCardHeader,
  CCol,
  CRow,
  CDataTable,
} from '@coreui/react'

const selectOptions = {
  0: "Dispatched",
  1: "Finished"
};
const defaultSorted = [
  {
    dataField: "name",
    order: "desc"
  }
];

const data = [
  {
    vehicle: "Four Wheeler",
    vehicleNo: "Gj-01-5234",
    timeIn: "13:12",
    timeOut: "14:11",
    totalAmt: "660",
    status: selectOptions[0]
  },
  {
    vehicle: "Four Wheeler",
    vehicleNo: "Gj-02-6969",
    timeIn: "13:12",
    timeOut: "14:11",
    totalAmt: "580",
    status: selectOptions[1]
  },
  {
    vehicle: "Two Wheeler",
    vehicleNo: "Gj-01-3636",
    timeIn: "13:12",
    timeOut: "14:11",
    totalAmt: "108",
    status: selectOptions[1]
  },
  {
    vehicle: "Two Wheeler",
    vehicleNo: "Gj-01-5441",
    timeIn: "13:12",
    timeOut: "14:11",
    totalAmt: "121",
    status: selectOptions[1]
  },
  {
    vehicle: "Four Wheeler",
    vehicleNo: "Gj-02-9831",
    timeIn: "13:12",
    timeOut: "14:11",
    totalAmt: "970",
    status: selectOptions[1]
  },
  {
    vehicle: "Four Wheeler",
    vehicleNo: "Gj-02-1212",
    timeIn: "13:12",
    timeOut: "14:11",
    totalAmt: "550",
    status: selectOptions[1]
  },
  {
    vehicle: "Four Wheeler",
    vehicleNo: "Gj-01-9991",
    timeIn: "13:12",
    timeOut: "14:11",
    totalAmt: "520",
    status: selectOptions[1]
  }
];
const columns = [

  {
    dataField: "vehicle",
    text: "Vehicle",
    sort: true,
    filter: textFilter({
      placeholder: "Search"
    }),
    classes: "pointer",
    events: {
      onClick: (e, column, columnIndex, row, rowIndex) => {
        console.log(e);
      }
    }
  },
  {
    dataField: "vehicleNo",
    text: "Vehicle No.",
    sort: true,
    filter: textFilter({
      placeholder: "Search"
    })
  },
  {
    dataField: "timeIn",
    text: "Time In",
    sort: true,
    filter: textFilter({
      placeholder: "Search"
    })
  },
  {
    dataField: "timeOut",
    text: "Time Out",
    sort: true,
    filter: textFilter({
      placeholder: "Search"
    })
  },
  {
    dataField: "totalAmt",
    text: "Amount",
    sort: true,
    filter: textFilter({
      placeholder: "Search"
    })
  },
  {
    dataField: "status",
    text: "Status",
    sort: true,
    filter: textFilter({
      placeholder: "Search"
    }),
    classes: function callback(cell) {
      return cell;
    }
  }
];

const handlesClick = function (name) {
  console.log(name);
};


const GuestUser = () => {

  // const [currentSum,setCurrentSum]=useState(0);
  const [clear, setClear] = useState(new Date());

  const [state, setState] = useState(false);

  const [typeCalci, setTypeCalci] = useState("1");
  const [total, setTotal] = useState("");

  const [details, setDetails] = useState([])
  // const [items, setItems] = useState(usersData)


  // var now  = "04/09/2013 15:00:00";
  // var then = "02/09/2013 14:20:30";

  // var ms = moment(now,"DD/MM/YYYY HH:mm:ss").diff(moment(then,"DD/MM/YYYY HH:mm:ss"));
  // var d = moment.duration(ms);
  // var s = d.format("hh:mm:ss");


  const toggleDetails = (index) => {
    const position = details.indexOf(index)
    let newDetails = details.slice()
    if (position !== -1) {
      newDetails.splice(position, 1)
    } else {
      newDetails = [...details, index]
    }
    setDetails(newDetails)
  }

  const handleChange = (date) => {
    setState({
      startDate: date
    });
  }

  const handleClick = () => {
    setState(state => ({
      //set the state for icons
    }));
    console.log(state);
  }




  return (
    <CRow>
      <CCol xs={12}>
        <CCard className="mb-4">
          <CCardHeader>
            <strong>Guest Vehicle</strong> <small>Report</small>
          </CCardHeader>
          <CCardBody>
            <div className="App">
              {/* <DatePicker
            selected={state.startDate}
            onChange={handleChange}
          /> */}
              <BootstrapTable
                classes="customBootStrapClasses"
                bordered={false}
                bootstrap4={true}
                hover={true}
                keyField="driver"
                data={data}
                columns={columns}
                defaultSorted={defaultSorted}
                filter={filterFactory()}
              />
            </div>
          </CCardBody>
        </CCard>
      </CCol>
    </CRow>
  )
}

export default GuestUser;
