import React from 'react'
import PropTypes from 'prop-types'

const MY = props => {
  const { width, height, ...otherProps}
  return (
    <svg width={width} height={height} {...otherProps} xmlns="http://www.w3.org/2000/svg"><defs><linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="a"><stop stop-color="#FFF" offset="0%"/><stop stop-color="#F0F0F0" offset="100%"/></linearGradient><linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="b"><stop stop-color="#E1244A" offset="0%"/><stop stop-color="#BE1134" offset="100%"/></linearGradient><linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="c"><stop stop-color="#0C3F8E" offset="0%"/><stop stop-color="#032A67" offset="100%"/></linearGradient><linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="d"><stop stop-color="#FFD34F" offset="0%"/><stop stop-color="#FFCB2F" offset="100%"/></linearGradient></defs><g fill="none" fill-rule="evenodd"><path fill="url(#a)" d="M0 0h21v15H0z"/><path d="M10 0h11v1H10V0zm0 2h11v1H10V2zm0 2h11v1H10V4zm0 2h11v1H10V6zM0 8h21v1H0V8zm0 2h21v1H0v-1zm0 2h21v1H0v-1zm0 2h21v1H0v-1z" fill="url(#b)"/><path fill="url(#c)" d="M0 0h12v8H0z"/><path d="M6.874 1.657a2.5 2.5 0 100 4.686 3 3 0 110-4.686zM8 4.82l-.868.982.227-1.29-1.309-.067 1.15-.627-.764-1.065 1.208.508L8 2l.356 1.261 1.208-.508-.765 1.065 1.15.627-1.308.066.227 1.29L8 4.82z" fill="url(#d)"/></g></svg>
  )
}

MY.propTypes = {
  width: '21',
  height: '15',
}

export default MY
