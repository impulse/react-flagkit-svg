import React from 'react'
import PropTypes from 'prop-types'

const NP = props => {
  const { width, height, ...otherProps}
  return (
    <svg width={width} height={height} {...otherProps} xmlns:xlink="http://www.w3.org/1999/xlink"><defs><linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="b"><stop stop-color="#FFF" offset="0%"/><stop stop-color="#F0F0F0" offset="100%"/></linearGradient><linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="d"><stop stop-color="#EE1B44" offset="0%"/><stop stop-color="#DD153C" offset="100%"/></linearGradient><linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="f"><stop stop-color="#0543A8" offset="0%"/><stop stop-color="#003893" offset="100%"/></linearGradient><path d="M0 0h1.495c.279 0 .693.126.918.275L13.175 7.45c.456.304.372.55-.172.55H6l7.247 6.341c.416.364.303.659-.254.659H0V0z" id="a"/><path d="M0 0h1.495c.279 0 .693.126.918.275L13.175 7.45c.456.304.372.55-.172.55H6l7.247 6.341c.416.364.303.659-.254.659H0V0z" id="e"/></defs><g fill="none" fill-rule="evenodd"><mask id="c" fill="#fff"><use xlink:href="#a"/></mask><use fill="url(#b)" xlink:href="#a"/><g mask="url(#c)"><use fill="url(#d)" xlink:href="#e"/><path stroke="url(#f)" d="M.5.5v14h12.17l-8-7h7.679L2.136.691A1.483 1.483 0 001.496.5H.5z"/></g><path d="M5.138 5.85a3.52 3.52 0 00.789-.318 2 2 0 01-3.857 0c.236.132.502.24.791.32L3.25 5.5l-.636-.574.856.044-.044-.856L4 4.75l.574-.636-.044.856.856-.044-.636.574.388.35zM4 12l-.765.848.058-1.14-1.14.057L3 11l-.848-.765 1.14.058-.057-1.14L4 10l.765-.848-.058 1.14 1.14-.057L5 11l.848.765-1.14-.058.057 1.14L4 12z" fill="url(#b)" mask="url(#c)"/></g></svg>
  )
}

NP.propTypes = {
  width: '21',
  height: '15',
}

export default NP
