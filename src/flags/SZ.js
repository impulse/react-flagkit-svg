import React from 'react'
import PropTypes from 'prop-types'

const SZ = props => {
  const { width, height, ...otherProps}
  return (
    <svg width={width} height={height} {...otherProps} xmlns:xlink="http://www.w3.org/1999/xlink"><defs><linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="a"><stop stop-color="#FFF" offset="0%"/><stop stop-color="#F0F0F0" offset="100%"/></linearGradient><linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="b"><stop stop-color="#486BCA" offset="0%"/><stop stop-color="#3E5FBA" offset="100%"/></linearGradient><linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="c"><stop stop-color="#FFDF20" offset="0%"/><stop stop-color="#FFDA00" offset="100%"/></linearGradient><linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="d"><stop stop-color="#CF1615" offset="0%"/><stop stop-color="#B20D0C" offset="100%"/></linearGradient><linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="f"><stop stop-color="#262626" offset="0%"/><stop stop-color="#0D0D0D" offset="100%"/></linearGradient><ellipse id="e" cx="4.5" cy="2.5" rx="4.5" ry="2.5"/></defs><g fill="none" fill-rule="evenodd"><path fill="url(#a)" d="M0 0h21v15H0z"/><path fill="url(#b)" d="M0 0h21v3H0zM0 12h21v3H0z"/><path fill="url(#c)" d="M0 3h21v9H0z"/><path fill="url(#d)" d="M0 4h21v7H0z"/><g transform="translate(6 5)"><mask id="g" fill="#fff"><use xlink:href="#e"/></mask><use fill="url(#a)" xlink:href="#e"/><path fill="url(#f)" mask="url(#g)" transform="matrix(-1 0 0 1 5 0)" d="M0 0h5v5H1z"/><circle fill="#1A1A1A" mask="url(#g)" cx="5.5" cy="2.5" r="1"/><circle fill="#F6F6F6" mask="url(#g)" cx="3.5" cy="2.5" r="1"/></g></g></svg>
  )
}

SZ.propTypes = {
  width: '21',
  height: '15',
}

export default SZ
