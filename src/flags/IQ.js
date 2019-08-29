import React from 'react'
import PropTypes from 'prop-types'

const IQ = props => {
  const { width, height, ...otherProps}
  return (
    <svg width={width} height={height} {...otherProps} xmlns="http://www.w3.org/2000/svg"><defs><linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="a"><stop stop-color="#FFF" offset="0%"/><stop stop-color="#F0F0F0" offset="100%"/></linearGradient><linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="b"><stop stop-color="#DF1E35" offset="0%"/><stop stop-color="#CC162C" offset="100%"/></linearGradient><linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="c"><stop stop-color="#262626" offset="0%"/><stop stop-color="#0D0D0D" offset="100%"/></linearGradient></defs><g fill="none" fill-rule="evenodd"><path fill="url(#a)" d="M0 0h21v15H0z"/><path fill="url(#b)" d="M0 0h21v5H0z"/><path fill="url(#c)" d="M0 10h21v5H0z"/><path fill="url(#a)" d="M0 5h21v5H0z"/><path d="M14 6.256c0-.141.092-.21.232-.14l.536.268a.444.444 0 01.232.365V8.75a.247.247 0 01-.252.249h-.496A.254.254 0 0114 8.744V6.256zM8 6.256c0-.141.092-.21.232-.14l.536.268A.444.444 0 019 6.749V8.75A.247.247 0 018.748 9h-.496A.254.254 0 018 8.744V6.256zM12 6.749c0-.138.092-.295.232-.365l.536-.268c.128-.064.232-.002.232.14v2.488a.25.25 0 01-.252.256h-.496A.248.248 0 0112 8.751V6.75z" fill="#0F7A40"/><path d="M10 7.748c0-.137.092-.294.232-.364l.536-.268c.128-.064.232-.004.232.126v.803h1.5V9h-2.248A.255.255 0 0110 8.752V7.748zM6 7.748c0-.137.092-.294.232-.364l.536-.268c.128-.064.232-.004.232.126v.803h1.5V9H6.252A.255.255 0 016 8.752V7.748z" fill="#0F7A40"/></g></svg>
  )
}

IQ.propTypes = {
  width: '21',
  height: '15',
}

export default IQ
