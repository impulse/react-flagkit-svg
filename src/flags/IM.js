import React from 'react'
import PropTypes from 'prop-types'

const IM = props => {
  const { width, height, ...otherProps}
  return (
    <svg width={width} height={height} {...otherProps} xmlns="http://www.w3.org/2000/svg"><defs><linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="a"><stop stop-color="#FFF" offset="0%"/><stop stop-color="#F0F0F0" offset="100%"/></linearGradient><linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="b"><stop stop-color="#E52D42" offset="0%"/><stop stop-color="#CB1D31" offset="100%"/></linearGradient><linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="c"><stop stop-color="#F8DD4E" offset="0%"/><stop stop-color="#F9DA38" offset="100%"/></linearGradient></defs><g fill="none" fill-rule="evenodd"><path fill="url(#a)" d="M0 0h21v15H0z"/><path fill="url(#b)" d="M0 0h21v15H0z"/><path d="M12.5 1.5h-2L9 5 7.5 4S6.411 1.411 6 1c-.411-.411-.828-.03-2.13.349-1.301.38-1.352.815-1.86.815-.207 0-.862-.76-1.228-.987C.244.844.051 1 .18 1.5c.056.216.483.483.754.87.355.51.566 1.13.566 1.13s.488-.456.75-.53c.398-.114.846.08 1.372 0C4.289 2.865 5 2.5 5 2.5l.174 1.907S2.795 6.617 3 7.5c.205.883 2.469 1.966 3 2.74.531.773-.316 1.061-.316 1.433 0 .371-.088.866.316.717.404-.148.453-.792.823-1.377.255-.402.46-.614.496-.773.086-.39-1.028-1.415-1.635-2.14-.289-.346-.871-.815-.871-.815L6.53 6s2.966 1.225 3.635.817C10.836 6.409 11 2.5 11 2.5l2.062-.5-.562-.5z" fill="url(#a)" transform="translate(4 1.5)"/><path d="M7.5 10a.5.5 0 110-1 .5.5 0 010 1zm2-8a.5.5 0 110-1 .5.5 0 010 1zm0 4a.5.5 0 110-1 .5.5 0 010 1zm-6 2a.5.5 0 110-1 .5.5 0 010 1zm2-6a.5.5 0 110-1 .5.5 0 010 1zm1 4C6.224 6 6 5.552 6 5s.224-1 .5-1 .5.448.5 1-.224 1-.5 1zm-5-2a.5.5 0 110-1 .5.5 0 010 1z" fill="url(#c)" transform="translate(4 1.5)"/></g></svg>
  )
}

IM.propTypes = {
  width: '21',
  height: '15',
}

export default IM
