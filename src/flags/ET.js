import React from 'react'
import PropTypes from 'prop-types'

const ET = props => {
  const { width, height, ...otherProps}
  return (
    <svg width={width} height={height} {...otherProps} xmlns="http://www.w3.org/2000/svg"><defs><linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="a"><stop stop-color="#FFF" offset="0%"/><stop stop-color="#F0F0F0" offset="100%"/></linearGradient><linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="b"><stop stop-color="#20AA46" offset="0%"/><stop stop-color="#168835" offset="100%"/></linearGradient><linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="c"><stop stop-color="#E92F3B" offset="0%"/><stop stop-color="#D81824" offset="100%"/></linearGradient><linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="d"><stop stop-color="#FADF50" offset="0%"/><stop stop-color="#FCDC34" offset="100%"/></linearGradient><linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="e"><stop stop-color="#205CCA" offset="0%"/><stop stop-color="#154BAD" offset="100%"/></linearGradient><linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="f"><stop stop-color="#FFDB3D" offset="0%"/><stop stop-color="#FDD420" offset="100%"/></linearGradient></defs><g fill="none" fill-rule="evenodd"><path fill="url(#a)" d="M0 0h21v15H0z"/><path fill="url(#b)" d="M0 0h21v5H0z"/><path fill="url(#c)" d="M0 10h21v5H0z"/><path fill="url(#d)" d="M0 5h21v5H0z"/><circle fill="url(#e)" cx="10.5" cy="7.5" r="3.5"/><path d="M10.5 8.475L9.03 9.523 9.574 7.8l-1.45-1.074 1.804-.016L10.5 5l.573 1.711 1.805.016-1.45 1.074.541 1.722L10.5 8.475zm0-.614l.544.388-.2-.637.536-.398-.668-.006-.212-.634-.212.634-.668.006.537.398-.201.637.544-.388z" fill="url(#f)" fill-rule="nonzero"/></g></svg>
  )
}

ET.propTypes = {
  width: '21',
  height: '15',
}

export default ET
