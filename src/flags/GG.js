import React from 'react'
import PropTypes from 'prop-types'

const GG = props => {
  const { width, height, ...otherProps}
  return (
    <svg width={width} height={height} {...otherProps} xmlns="http://www.w3.org/2000/svg"><defs><linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="a"><stop stop-color="#FFF" offset="0%"/><stop stop-color="#F0F0F0" offset="100%"/></linearGradient><linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="b"><stop stop-color="#F33349" offset="0%"/><stop stop-color="#E51D34" offset="100%"/></linearGradient><linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="c"><stop stop-color="#FCE24C" offset="0%"/><stop stop-color="#F9DC38" offset="100%"/></linearGradient></defs><g fill="none" fill-rule="evenodd"><path fill="url(#a)" d="M0 0h21v15H0z"/><path d="M9 6H0v3h9v6h3V9h9V6h-9V0H9v6z" fill="url(#b)"/><path d="M10 8v4l-.5 1h2l-.5-1V8h4l1 .5v-2L15 7h-4V3l.5-1h-2l.5 1v4H6l-1-.5v2L6 8h4z" fill="url(#c)"/></g></svg>
  )
}

GG.propTypes = {
  width: '21',
  height: '15',
}

export default GG
