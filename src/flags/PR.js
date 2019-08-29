import React from 'react'
import PropTypes from 'prop-types'

const PR = props => {
  const { width, height, ...otherProps}
  return (
    <svg width={width} height={height} {...otherProps} xmlns="http://www.w3.org/2000/svg"><defs><linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="a"><stop stop-color="#FFF" offset="0%"/><stop stop-color="#F0F0F0" offset="100%"/></linearGradient><linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="b"><stop stop-color="#FA2222" offset="0%"/><stop stop-color="#ED0000" offset="100%"/></linearGradient><linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="c"><stop stop-color="#1D63F9" offset="0%"/><stop stop-color="#0650F0" offset="100%"/></linearGradient></defs><g fill="none" fill-rule="evenodd"><path fill="url(#a)" d="M0 0h21v15H0z"/><path fill="url(#b)" d="M0 0h21v15H0z"/><path fill="url(#a)" d="M0 3h21v3H0zM0 9h21v3H0z"/><path fill="url(#c)" d="M0 0l10 7.5L0 15z"/><path fill="url(#a)" d="M3.5 8.456L2.03 9.523l.561-1.728-1.469-1.068h1.816L3.5 5l.562 1.727h1.816l-1.47 1.068.561 1.728z"/></g></svg>
  )
}

PR.propTypes = {
  width: '21',
  height: '15',
}

export default PR
