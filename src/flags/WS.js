import React from 'react'
import PropTypes from 'prop-types'

const WS = props => {
  const { width, height, ...otherProps}
  return (
    <svg width={width} height={height} {...otherProps} xmlns="http://www.w3.org/2000/svg"><defs><linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="a"><stop stop-color="#FFF" offset="0%"/><stop stop-color="#F0F0F0" offset="100%"/></linearGradient><linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="b"><stop stop-color="#E31F37" offset="0%"/><stop stop-color="#CC162C" offset="100%"/></linearGradient><linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="c"><stop stop-color="#083B9A" offset="0%"/><stop stop-color="#042E7D" offset="100%"/></linearGradient></defs><g fill="none" fill-rule="evenodd"><path fill="url(#a)" d="M0 0h21v15H0z"/><path fill="url(#b)" d="M0 0h21v15H0z"/><path fill="url(#c)" d="M0 8h11V0H0z"/><path d="M5 7l-.707.207L4.5 6.5l-.207-.707L5 6l.707-.207L5.5 6.5l.207.707L5 7zm0-5l-.707.207L4.5 1.5 4.293.793 5 1l.707-.207L5.5 1.5l.207.707L5 2zM3 4.5l-.707.207L2.5 4l-.207-.707L3 3.5l.707-.207L3.5 4l.207.707L3 4.5zM7.5 4l-.707.207L7 3.5l-.207-.707L7.5 3l.707-.207L8 3.5l.207.707L7.5 4zM6.25 5.5a.25.25 0 110-.5.25.25 0 010 .5z" fill="url(#a)"/></g></svg>
  )
}

WS.propTypes = {
  width: '21',
  height: '15',
}

export default WS
