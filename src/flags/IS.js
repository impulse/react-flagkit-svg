import React from 'react'
import PropTypes from 'prop-types'

const IS = props => {
  const { width, height, ...otherProps}
  return (
    <svg width={width} height={height} {...otherProps} xmlns="http://www.w3.org/2000/svg"><defs><linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="a"><stop stop-color="#FFF" offset="0%"/><stop stop-color="#F0F0F0" offset="100%"/></linearGradient><linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="b"><stop stop-color="#0E4CB5" offset="0%"/><stop stop-color="#063B95" offset="100%"/></linearGradient><linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="c"><stop stop-color="#EB363A" offset="0%"/><stop stop-color="#D52B2F" offset="100%"/></linearGradient></defs><g fill="none" fill-rule="evenodd"><path fill="url(#a)" d="M0 0h21v15H0z"/><path fill="url(#b)" d="M0 0h21v15H0z"/><path fill="url(#a)" d="M0 9h6v6h3V9h12V6H9V0H6v6H0z"/><path fill="url(#c)" d="M0 8h7v7h1V8h13V7H8V0H7v7H0z"/></g></svg>
  )
}

IS.propTypes = {
  width: '21',
  height: '15',
}

export default IS
