import React from 'react'
import PropTypes from 'prop-types'

const TG = props => {
  const { width, height, ...otherProps}
  return (
    <svg width={width} height={height} {...otherProps} xmlns="http://www.w3.org/2000/svg"><defs><linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="a"><stop stop-color="#FFF" offset="0%"/><stop stop-color="#F0F0F0" offset="100%"/></linearGradient><linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="b"><stop stop-color="#FFD44D" offset="0%"/><stop stop-color="#FFCD2F" offset="100%"/></linearGradient><linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="c"><stop stop-color="#159A74" offset="0%"/><stop stop-color="#0C6A4F" offset="100%"/></linearGradient><linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="d"><stop stop-color="#ED1F45" offset="0%"/><stop stop-color="#D01739" offset="100%"/></linearGradient></defs><g fill="none" fill-rule="evenodd"><path fill="url(#a)" d="M0 0h21v15H0z"/><path fill="url(#b)" d="M0 0h21v15H0z"/><path d="M9 0h12v3H9V0zm0 6h12v3H9V6zm-9 6h21v3H0v-3z" fill="url(#c)"/><path fill="url(#d)" d="M0 0h9v9H0z"/><path fill="url(#a)" d="M4.5 5.67L2.737 6.927l.65-2.065-1.74-1.29 2.165-.019L4.5 1.5l.688 2.053 2.165.02-1.74 1.289.65 2.065z"/></g></svg>
  )
}

TG.propTypes = {
  width: '21',
  height: '15',
}

export default TG
