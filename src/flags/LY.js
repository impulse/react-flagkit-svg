import React from 'react'
import PropTypes from 'prop-types'

const LY = props => {
  const { width, height, ...otherProps}
  return (
    <svg width={width} height={height} {...otherProps} xmlns="http://www.w3.org/2000/svg"><defs><linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="a"><stop stop-color="#FFF" offset="0%"/><stop stop-color="#F0F0F0" offset="100%"/></linearGradient><linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="b"><stop stop-color="#262626" offset="0%"/><stop stop-color="#0D0D0D" offset="100%"/></linearGradient><linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="c"><stop stop-color="#34B857" offset="0%"/><stop stop-color="#2B9E4A" offset="100%"/></linearGradient><linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="d"><stop stop-color="#F41F34" offset="0%"/><stop stop-color="#E60B21" offset="100%"/></linearGradient></defs><g fill="none" fill-rule="evenodd"><path fill="url(#a)" d="M0 0h21v15H0z"/><path fill="url(#b)" d="M0 5h21v5H0z"/><path fill="url(#c)" d="M0 10h21v5H0z"/><path fill="url(#d)" d="M0 0h21v5H0z"/><path d="M11.334 6.253a1.25 1.25 0 100 2.495 1.5 1.5 0 110-2.495zM11.5 8a.5.5 0 110-1 .5.5 0 010 1z" fill="url(#a)"/></g></svg>
  )
}

LY.propTypes = {
  width: '21',
  height: '15',
}

export default LY
