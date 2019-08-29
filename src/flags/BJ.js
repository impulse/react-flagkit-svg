import React from 'react'
import PropTypes from 'prop-types'

const BJ = props => {
  const { width, height, ...otherProps}
  return (
    <svg width={width} height={height} {...otherProps} xmlns="http://www.w3.org/2000/svg"><defs><linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="a"><stop stop-color="#FFF" offset="0%"/><stop stop-color="#F0F0F0" offset="100%"/></linearGradient><linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="b"><stop stop-color="#F12641" offset="0%"/><stop stop-color="#E71834" offset="100%"/></linearGradient><linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="c"><stop stop-color="#FFD648" offset="0%"/><stop stop-color="#FCD036" offset="100%"/></linearGradient><linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="d"><stop stop-color="#17A668" offset="0%"/><stop stop-color="#118653" offset="100%"/></linearGradient></defs><g fill="none" fill-rule="evenodd"><path fill="url(#a)" d="M0 0h21v15H0z"/><path fill="url(#b)" d="M0 7h21v8H0z"/><path fill="url(#c)" d="M0 0h21v7H0z"/><path fill="url(#d)" d="M0 0h8v15H0z"/></g></svg>
  )
}

BJ.propTypes = {
  width: '21',
  height: '15',
}

export default BJ
