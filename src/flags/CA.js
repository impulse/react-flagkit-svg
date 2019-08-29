import React from 'react'
import PropTypes from 'prop-types'

const CA = props => {
  const { width, height, ...otherProps}
  return (
    <svg width={width} height={height} {...otherProps} xmlns="http://www.w3.org/2000/svg"><defs><linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="a"><stop stop-color="#FFF" offset="0%"/><stop stop-color="#F0F0F0" offset="100%"/></linearGradient><linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="b"><stop stop-color="#FF3131" offset="0%"/><stop stop-color="red" offset="100%"/></linearGradient></defs><g fill="none" fill-rule="evenodd"><path fill="url(#a)" d="M0 0h21v15H0z"/><path fill="url(#b)" d="M10 0h11v15H10zM0 0h7v15H0z"/><path fill="url(#a)" d="M6 0h9v15H6z"/><path d="M11.674 7.326l.652-.652a.251.251 0 01.355.007L13 7l1-.5-.5 1 .32.32a.247.247 0 01.008.352L12.5 9.5H11l-.25 1.5h-.5L10 9.5H8.5L7.172 8.172a.253.253 0 01.009-.353L7.5 7.5l-.5-1L8 7l.32-.32a.249.249 0 01.354-.006l.652.652c.096.096.152.063.124-.075L9 5l1 .5.5-1.5.5 1.5 1-.5-.45 2.251c-.029.142.028.171.124.075z" fill="url(#b)"/></g></svg>
  )
}

CA.propTypes = {
  width: '21',
  height: '15',
}

export default CA
