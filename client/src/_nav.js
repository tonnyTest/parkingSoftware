import React from 'react'
import CIcon from '@coreui/icons-react'
import {
  cilBell,
  cilCalculator,
  cilChartPie,
  cilCursor,
  cilDrop,
  cilNotes,
  cibBitcoin,
  cilPuzzle,
  cilSpeedometer,
  cilStar,
} from '@coreui/icons'
import { CNavGroup, CNavItem, CNavTitle } from '@coreui/react'

const _nav = [
  {
    component: CNavItem,
    name: 'Dashboard',
    to: '/dashboard',
    icon: <CIcon icon={cilSpeedometer} customClassName="nav-icon" />,
    badge: {
      color: 'info',
      text: 'Beta Version',
    },
  },
  {
    component: CNavItem,
    name: 'Map',
    to: '/base/map',
    icon: <CIcon icon={cilPuzzle} customClassName="nav-icon" />,
  },
  {
    component: CNavItem,
    name: 'Parking Display',
    to: '/base/display/parking-display',
    icon: <CIcon icon={cilPuzzle} customClassName="nav-icon" />,
  },
  {
    component: CNavItem,
    name: 'Calculator',
    to: '/base/calculator',
    icon: <CIcon icon={cilPuzzle} customClassName="nav-icon" />,
  },
  {
    component: CNavItem,
    name: 'Permit',
    to: '/base/permit',
    icon: <CIcon icon={cilPuzzle} customClassName="nav-icon" />,
  },
  {
    component: CNavItem,
    name: 'RFID Tag',
    to: '/base/rfid',
    icon: <CIcon icon={cilPuzzle} customClassName="nav-icon" />,
  },
  {
    component: CNavGroup,
    name: 'Report',
    to: '/base/report',
    icon: <CIcon icon={cibBitcoin} customClassName="nav-icon" />,
    items: [
      {
        component: CNavItem,
        name: 'Registered User',
        to: '/base/report/registered-user',
      },
      {
        component: CNavItem,
        name: 'Guest User',
        to: '/base/report/guest-user',
      },
    ],
  },
  // {
  //   component: CNavItem,
  //   name: 'Permit',
  //   to: '/base/permit',
  //   icon: <CIcon icon={cilPuzzle} customClassName="nav-icon" />,
  // },
  // {
  //   component: CNavGroup,
  //   name: 'User Info',
  //   to: '/base/tables',
  //   icon: <CIcon icon={cibBitcoin} customClassName="nav-icon" />,
  //   items: [
  //     {
  //       component: CNavItem,
  //       name: 'Accordion',
  //       to: '/base/accordion',
  //     },
  //     {
  //       component: CNavItem,
  //       name: 'Tooltips',
  //       to: '/base/tooltips',
  //     },
  //   ],
  // },
  // {
  //   component: CNavItem,
  //   name: 'Tables',
  //   to: '/base/tables',
  //   icon: <CIcon icon={cilPuzzle} customClassName="nav-icon" />,
  // },
  // {
  //   component: CNavGroup,
  //   name: 'Parking Charge',
  //   to: '/charge-calulator',
  //   icon: <CIcon icon={cibBitcoin} customClassName="nav-icon" />,
  //   items: [
  //     {
  //       component: CNavItem,
  //       name: 'Accordion',
  //       to: '/base/accordion',
  //     },
  //     {
  //       component: CNavItem,
  //       name: 'Tooltips',
  //       to: '/base/tooltips',
  //     },
  //   ],
  // },
]

export default _nav
