import React from 'react'
import PropTypes from 'prop-types'

const LGBT = props => {
  const { width, height, ...otherProps}
  return (
    <svg width={width} height={height} {...otherProps} xmlns="http://www.w3.org/2000/svg"><defs><linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="a"><stop stop-color="#FFF" offset="0%"/><stop stop-color="#F0F0F0" offset="100%"/></linearGradient><linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="b"><stop stop-color="#F71E24" offset="0%"/><stop stop-color="#FB141B" offset="100%"/></linearGradient><linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="c"><stop stop-color="#FB6C2C" offset="0%"/><stop stop-color="#FC6420" offset="100%"/></linearGradient><linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="d"><stop stop-color="#FDFC42" offset="0%"/><stop stop-color="#FFFD38" offset="100%"/></linearGradient><linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="e"><stop stop-color="#238F35" offset="0%"/><stop stop-color="#1C7E2C" offset="100%"/></linearGradient><linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="f"><stop stop-color="#0F62FA" offset="0%"/><stop stop-color="#0059FC" offset="100%"/></linearGradient></defs><g fill="none" fill-rule="evenodd"><path fill="url(#a)" d="M0 0h21v15H0z"/><path fill="url(#b)" d="M0 0h21v3H0z"/><path fill="url(#c)" d="M0 3h21v3H0z"/><path fill="url(#d)" d="M0 6h21v3H0z"/><path fill="url(#e)" d="M0 9h21v3H0z"/><path fill="url(#f)" d="M0 12h21v3H0z"/></g></svg>
  )
}

LGBT.propTypes = {
  width: '21',
  height: '15',
}

export default LGBT
