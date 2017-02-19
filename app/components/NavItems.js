import React from 'react'
// import { browserHistory } from 'react-router' //  For pushing links w/o Router

import FontIcon from 'react-md/lib/FontIcons'

//  Array is raw due to the unique nature of each element
const NavItems = [{
  primaryText: 'Dashboard',
  leftIcon: <FontIcon>home</FontIcon>
  // onClick: () => (browserHistory.push('/'))
}, {divider: true}, {
  primaryText: 'About', subheader: true
}, {divider: true}, {
  primaryText: 'GitHub',
  secondaryText: 'RcKeller',
  leftIcon: <FontIcon iconClassName='fa fa-github fa-2x' />,
  onClick: () => (window.location.href = 'https://github.com/Rckeller')
}, {divider: true}, {
  primaryText: 'Contact', subheader: true
}, {divider: true}, {
  primaryText: 'RyKeller@UW.edu',
  secondaryText: 'Site Administrator',
  leftIcon: <a href='mailto:rykeller@uw.edu' alt=''><FontIcon>mail</FontIcon></a>,
  tileClassName: 'selectable'
}, {
  primaryText: '(206) 427-3176',
  secondaryText: 'Please text before calling',
  leftIcon: <a href='tel:2064273176' alt=''><FontIcon>call</FontIcon></a>,
  tileClassName: 'selectable'
}, {divider: true}]

export default NavItems
