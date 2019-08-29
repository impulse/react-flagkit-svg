import React from 'react'
import PropTypes from 'prop-types'

const IR = props => {
  const { width, height, ...otherProps}
  return (
    <svg width={width} height={height} {...otherProps} xmlns="http://www.w3.org/2000/svg"><defs><linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="a"><stop stop-color="#FFF" offset="0%"/><stop stop-color="#F0F0F0" offset="100%"/></linearGradient><linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="b"><stop stop-color="#38BB56" offset="0%"/><stop stop-color="#2B9F45" offset="100%"/></linearGradient><linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="c"><stop stop-color="#DE1B27" offset="0%"/><stop stop-color="#D80915" offset="100%"/></linearGradient></defs><g fill="none" fill-rule="evenodd"><path fill="url(#a)" d="M0 0h21v15H0z"/><path fill="url(#b)" d="M0 0h21v5H0z"/><path fill="url(#c)" d="M0 10h21v5H0z"/><path fill="url(#a)" d="M0 5h21v5H0z"/><path d="M1 4.252C1 4.113 1.107 4 1.252 4h.496c.139 0 .252.107.252.252v.496C2 4.887 1.893 5 1.748 5h-.496A.249.249 0 011 4.748v-.496zm2 0C3 4.113 3.107 4 3.252 4h.496c.139 0 .252.107.252.252v.496C4 4.887 3.893 5 3.748 5h-.496A.249.249 0 013 4.748v-.496zm2 0C5 4.113 5.107 4 5.252 4h.496c.139 0 .252.107.252.252v.496C6 4.887 5.893 5 5.748 5h-.496A.249.249 0 015 4.748v-.496zm2 0C7 4.113 7.107 4 7.252 4h.496c.139 0 .252.107.252.252v.496C8 4.887 7.893 5 7.748 5h-.496A.249.249 0 017 4.748v-.496zm2 0C9 4.113 9.107 4 9.252 4h.496c.139 0 .252.107.252.252v.496c0 .139-.107.252-.252.252h-.496A.249.249 0 019 4.748v-.496zm2 0c0-.139.107-.252.252-.252h.496c.139 0 .252.107.252.252v.496c0 .139-.107.252-.252.252h-.496A.249.249 0 0111 4.748v-.496zm2 0c0-.139.107-.252.252-.252h.496c.139 0 .252.107.252.252v.496c0 .139-.107.252-.252.252h-.496A.249.249 0 0113 4.748v-.496zm2 0c0-.139.107-.252.252-.252h.496c.139 0 .252.107.252.252v.496c0 .139-.107.252-.252.252h-.496A.249.249 0 0115 4.748v-.496zm2 0c0-.139.107-.252.252-.252h.496c.139 0 .252.107.252.252v.496c0 .139-.107.252-.252.252h-.496A.249.249 0 0117 4.748v-.496zm2 0c0-.139.107-.252.252-.252h.496c.139 0 .252.107.252.252v.496c0 .139-.107.252-.252.252h-.496A.249.249 0 0119 4.748v-.496zm-18 6c0-.139.107-.252.252-.252h.496c.139 0 .252.107.252.252v.496c0 .139-.107.252-.252.252h-.496A.249.249 0 011 10.748v-.496zm2 0c0-.139.107-.252.252-.252h.496c.139 0 .252.107.252.252v.496c0 .139-.107.252-.252.252h-.496A.249.249 0 013 10.748v-.496zm2 0c0-.139.107-.252.252-.252h.496c.139 0 .252.107.252.252v.496c0 .139-.107.252-.252.252h-.496A.249.249 0 015 10.748v-.496zm2 0c0-.139.107-.252.252-.252h.496c.139 0 .252.107.252.252v.496c0 .139-.107.252-.252.252h-.496A.249.249 0 017 10.748v-.496zm2 0c0-.139.107-.252.252-.252h.496c.139 0 .252.107.252.252v.496c0 .139-.107.252-.252.252h-.496A.249.249 0 019 10.748v-.496zm2 0c0-.139.107-.252.252-.252h.496c.139 0 .252.107.252.252v.496c0 .139-.107.252-.252.252h-.496a.249.249 0 01-.252-.252v-.496zm2 0c0-.139.107-.252.252-.252h.496c.139 0 .252.107.252.252v.496c0 .139-.107.252-.252.252h-.496a.249.249 0 01-.252-.252v-.496zm2 0c0-.139.107-.252.252-.252h.496c.139 0 .252.107.252.252v.496c0 .139-.107.252-.252.252h-.496a.249.249 0 01-.252-.252v-.496zm2 0c0-.139.107-.252.252-.252h.496c.139 0 .252.107.252.252v.496c0 .139-.107.252-.252.252h-.496a.249.249 0 01-.252-.252v-.496zm2 0c0-.139.107-.252.252-.252h.496c.139 0 .252.107.252.252v.496c0 .139-.107.252-.252.252h-.496a.249.249 0 01-.252-.252v-.496z" fill-opacity=".5" fill="#FFF"/><path d="M9.591 6.642a1.25 1.25 0 101.83.014l-1.83-.014z" stroke="#D80915" stroke-width=".5"/><rect fill="#D80915" x="10" y="7" width="1" height="2" rx=".5"/></g></svg>
  )
}

IR.propTypes = {
  width: '21',
  height: '15',
}

export default IR
