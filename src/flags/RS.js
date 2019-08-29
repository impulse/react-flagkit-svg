import React from 'react'
import PropTypes from 'prop-types'

const RS = props => {
  const { width, height, ...otherProps}
  return (
    <svg width={width} height={height} {...otherProps} xmlns:xlink="http://www.w3.org/1999/xlink"><defs><linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="a"><stop stop-color="#FFF" offset="0%"/><stop stop-color="#F0F0F0" offset="100%"/></linearGradient><linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="b"><stop stop-color="#17508F" offset="0%"/><stop stop-color="#114175" offset="100%"/></linearGradient><linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="c"><stop stop-color="#E1444D" offset="0%"/><stop stop-color="#C53840" offset="100%"/></linearGradient><path d="M.5 2.5C.5 1.826.874.485.874.485A.672.672 0 011.495 0h2.01c.273 0 .552.214.621.481 0 0 .374 1.33.374 2.019 0 .645-.376 2.02-.376 2.02-.069.265-.269.654-.457.852 0 0-.417.628-1.167.628s-1.167-.628-1.167-.628a2.428 2.428 0 01-.46-.86S.5 3.162.5 2.5z" id="d"/></defs><g fill="none" fill-rule="evenodd"><path fill="url(#a)" d="M0 0h21v15H0z"/><path fill="url(#b)" d="M0 5h21v5H0z"/><path fill="url(#c)" d="M0 0h21v5H0z"/><path fill="url(#a)" d="M0 10h21v5H0z"/><g transform="translate(4 5)"><mask id="e" fill="#fff"><use xlink:href="#d"/></mask><use fill="url(#a)" xlink:href="#d"/><path fill="#C43840" fill-rule="nonzero" mask="url(#e)" d="M4.422-.203L-.203 5.578l.781.625L5.203.422z"/><path fill="#C43840" fill-rule="nonzero" mask="url(#e)" d="M-.203.422l4.625 5.78.78-.624L.579-.202z"/></g><ellipse fill="#FFF" cx="6.5" cy="7.5" rx="1" ry="1.5"/><path d="M5 4l-.5-1 1 .5 1-.5 1 .5 1-.5L8 4v.5c0 .276-.216.5-.495.5h-2.01A.503.503 0 015 4.5V4z" fill="#D1A43A"/></g></svg>
  )
}

RS.propTypes = {
  width: '21',
  height: '15',
}

export default RS
