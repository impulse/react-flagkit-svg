import React from 'react'
import PropTypes from 'prop-types'

const OM = props => {
  const { width, height, ...otherProps}
  return (
    <svg width={width} height={height} {...otherProps} xmlns="http://www.w3.org/2000/svg"><defs><linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="a"><stop stop-color="#FFF" offset="0%"/><stop stop-color="#F0F0F0" offset="100%"/></linearGradient><linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="b"><stop stop-color="#138E16" offset="0%"/><stop stop-color="#0F7F12" offset="100%"/></linearGradient><linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="c"><stop stop-color="#ED2B35" offset="0%"/><stop stop-color="#D91B25" offset="100%"/></linearGradient></defs><g fill="none" fill-rule="evenodd"><path fill="url(#a)" d="M0 0h21v15H0z"/><path fill="url(#b)" d="M0 10h21v5H0z"/><path fill="url(#c)" d="M0 15h7v-5h14V5H7V0H0z"/><path fill="url(#a)" d="M3.5 3.534l-.868 1.268.45-1.47-1.532.113 1.43-.564-1.044-1.128 1.332.766L3.5 1l.232 1.519 1.332-.766L4.02 2.881l1.43.564-1.533-.112.45 1.469zM7 0h14v5H7z"/></g></svg>
  )
}

OM.propTypes = {
  width: '21',
  height: '15',
}

export default OM
