import React from 'react'
import PropTypes from 'prop-types'

const LB = props => {
  const { width, height, ...otherProps}
  return (
    <svg width={width} height={height} {...otherProps} xmlns="http://www.w3.org/2000/svg"><defs><linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="a"><stop stop-color="#FFF" offset="0%"/><stop stop-color="#F0F0F0" offset="100%"/></linearGradient><linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="b"><stop stop-color="#F03340" offset="0%"/><stop stop-color="#EB212E" offset="100%"/></linearGradient><linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="c"><stop stop-color="#1FC065" offset="0%"/><stop stop-color="#17A555" offset="100%"/></linearGradient></defs><g fill="none" fill-rule="evenodd"><path fill="url(#a)" d="M0 0h21v15H0z"/><path fill="url(#b)" d="M0 0h21v4H0zM0 11h21v4H0z"/><path fill="url(#a)" d="M0 4h21v7H0z"/><path d="M9.65 9.35a.497.497 0 00-.003-.703l.206.206a.972.972 0 00-.837-.232l-1.032.258c-.267.067-.3-.017-.08-.183l1.191-.892c.224-.168.184-.304-.103-.304h-.484c-.28 0-.309-.1-.064-.222l1.112-.556c.245-.123.223-.222-.064-.222h-.484c-.28 0-.323-.138-.103-.304l1.19-.892a.719.719 0 01.81 0l1.19.892c.224.168.184.304-.103.304h-.484c-.28 0-.309.1-.064.222l1.112.556c.245.123.223.222-.064.222h-.484c-.28 0-.323.138-.103.304l1.19.892c.224.168.191.25-.08.183l-1.03-.258a.977.977 0 00-.838.232l.206-.206a.496.496 0 00-.003.703l.3.3c.193.193.134.35-.145.35h-2.01c-.273 0-.339-.156-.145-.35l.3-.3z" fill="url(#c)"/></g></svg>
  )
}

LB.propTypes = {
  width: '21',
  height: '15',
}

export default LB
