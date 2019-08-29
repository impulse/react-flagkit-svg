import React from 'react'
import PropTypes from 'prop-types'

const SM = props => {
  const { width, height, ...otherProps}
  return (
    <svg width={width} height={height} {...otherProps} xmlns="http://www.w3.org/2000/svg"><defs><linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="a"><stop stop-color="#FFF" offset="0%"/><stop stop-color="#F0F0F0" offset="100%"/></linearGradient><linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="b"><stop stop-color="#7CCCF5" offset="0%"/><stop stop-color="#62B7E3" offset="100%"/></linearGradient></defs><g fill="none" fill-rule="evenodd"><path fill="url(#a)" d="M0 0h21v15H0z"/><path fill="url(#b)" d="M0 7h21v8H0z"/><path fill="url(#a)" d="M0 0h21v7H0z"/><path d="M8 7c0 .901.482 1.72 1.247 2.164a.5.5 0 00.502-.865A1.499 1.499 0 019 7a.5.5 0 00-1 0zm3.846 2.107A2.498 2.498 0 0013 7a.5.5 0 10-1 0c0 .518-.264.99-.693 1.265a.5.5 0 10.539.842z" fill="#445F42" fill-rule="nonzero"/><ellipse fill="#D89F3D" cx="10.5" cy="6.5" rx="1" ry="1.5"/></g></svg>
  )
}

SM.propTypes = {
  width: '21',
  height: '15',
}

export default SM
