import React from 'react'
import PropTypes from 'prop-types'

const KP = props => {
  const { width, height, ...otherProps}
  return (
    <svg width={width} height={height} {...otherProps} xmlns="http://www.w3.org/2000/svg"><defs><linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="a"><stop stop-color="#FFF" offset="0%"/><stop stop-color="#F0F0F0" offset="100%"/></linearGradient><linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="b"><stop stop-color="#1461B6" offset="0%"/><stop stop-color="#0B52A1" offset="100%"/></linearGradient><linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="c"><stop stop-color="#F53846" offset="0%"/><stop stop-color="#EB2130" offset="100%"/></linearGradient></defs><g fill="none" fill-rule="evenodd"><path fill="url(#a)" d="M0 0h21v15H0z"/><path fill="url(#b)" d="M0 0h21v3H0zM0 12h21v3H0z"/><path fill="url(#a)" d="M0 3h21v9H0z"/><path fill="url(#c)" d="M0 4h21v7H0z"/><path d="M7.5 10a2.5 2.5 0 110-5 2.5 2.5 0 010 5zm0-1.497l1.47 1.02-.516-1.713 1.424-1.083-1.788-.039L7.5 5l-.59 1.688-1.788.04L6.546 7.81 6.03 9.523 7.5 8.503z" fill="url(#a)"/></g></svg>
  )
}

KP.propTypes = {
  width: '21',
  height: '15',
}

export default KP
