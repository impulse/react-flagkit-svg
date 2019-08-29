import React from 'react'
import PropTypes from 'prop-types'

const CW = props => {
  const { width, height, ...otherProps}
  return (
    <svg width={width} height={height} {...otherProps} xmlns="http://www.w3.org/2000/svg"><defs><linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="a"><stop stop-color="#FFF" offset="0%"/><stop stop-color="#F0F0F0" offset="100%"/></linearGradient><linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="b"><stop stop-color="#0543A8" offset="0%"/><stop stop-color="#00307D" offset="100%"/></linearGradient><linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="c"><stop stop-color="#FCC747" offset="0%"/><stop stop-color="#FEC539" offset="100%"/></linearGradient></defs><g fill="none" fill-rule="evenodd"><path fill="url(#a)" d="M0 0h21v15H0z"/><path fill="url(#b)" d="M0 0h21v15H0z"/><path fill="url(#c)" d="M0 10h21v2H0z"/><path fill="url(#a)" d="M6.5 6.267l-1.176.851.447-1.381-1.173-.855 1.451-.003L6.5 3.5l.45 1.38 1.452.002-1.173.855.447 1.381zM3 3.575l-.882.639.335-1.036-.88-.642 1.089-.001L3 1.5l.338 1.035 1.089.001-.88.642.335 1.036z"/></g></svg>
  )
}

CW.propTypes = {
  width: '21',
  height: '15',
}

export default CW
