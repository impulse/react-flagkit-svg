import React from 'react'
import PropTypes from 'prop-types'

const VI = props => {
  const { width, height, ...otherProps}
  return (
    <svg width={width} height={height} {...otherProps} xmlns:xlink="http://www.w3.org/1999/xlink"><defs><linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="a"><stop stop-color="#FFF" offset="0%"/><stop stop-color="#F0F0F0" offset="100%"/></linearGradient><linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="b"><stop stop-color="#F8CE61" offset="0%"/><stop stop-color="#F3C44B" offset="100%"/></linearGradient><linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="e"><stop stop-color="#1E357F" offset="0%"/><stop stop-color="#162966" offset="100%"/></linearGradient><linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="g"><stop stop-color="#BC1443" offset="0%"/><stop stop-color="#A30B35" offset="100%"/></linearGradient><path d="M15 6.5s.036.665-.803 1c-.839.335-1.697 0-1.697 0s.618.363 1 1 .182.983.5 1.301c.318.318.891.101 1.118.373.227.273.21.584-.118.826-.328.242-.432.13-.803-.118-.371-.248-.197-.495-.197-.495s-.64-.331-1.128-.474C12.5 9.218 12 9 12 9v.5s1 .513 1 1c0 .213-.462.916-1 1.417-.692.644-1.5.822-1.5.822V5.5l3-.5s-1.381-1.087 1.75-1.847l3.78-.917c.536-.13.74.14.442.605 0 0-.024.099-.472.659-.448.56-.546.66-1 1-.454.34-.454.09-1 .5-.546.41-.567.783-1 1-.433.217-1 0-1 0v.5zm-9 0V6s-.567.217-1 0c-.434-.217-.454-.59-1-1-.547-.41-.547-.16-1-.5-.454-.34-.552-.44-1-1-.448-.56-.472-.659-.472-.659-.299-.464-.094-.735.442-.605l3.78.917C8.88 3.913 7.5 5 7.5 5l3 .5v7.24s-.808-.179-1.5-.823c-.538-.5-1-1.204-1-1.417 0-.487 1-1 1-1V9s-.5.218-.872.913c-.489.143-1.128.474-1.128.474s.174.247-.197.495c-.372.247-.476.36-.803.118-.328-.242-.346-.553-.119-.826.227-.272.801-.055 1.119-.373.317-.318.117-.664.5-1.301.382-.637 1-1 1-1s-.858.335-1.697 0C5.964 7.165 6 6.5 6 6.5zm3.248-1.774c-.02-.139-.318-.25-.185-.284.247-.064.371-.143.493-.353.054-.092-.187-.032-.109-.123.412-.477.498-.847.234-.972-.571-.269-.641.427-.618.14.016-.204.037-.369.063-.451.115-.366.697-.344.733-.415.146-.293.314-.32.641-.268.327.053.475.209.605.469.098.196.07.502.178.794.07.19.17.294.247.483.044.11-.289-.108-.247 0 .113.294.396.281.566.547.07.109-.256-.02-.235.149C11.63 4.555 12 5 12 5H9s.266-.153.248-.274z" id="c"/><path d="M0 2.5V0s.498.489 1.163.489C1.827.489 2.5 0 2.5 0s.627.489 1.251.489C4.376.489 5 0 5 0v2.5C5 5 2.5 6 2.5 6S0 5 0 2.5z" id="d"/></defs><g fill="none" fill-rule="evenodd"><path fill="url(#a)" d="M0 0h21v15H0z"/><path d="M16.35 6.505l-3.072 5.88a.25.25 0 00.444.23l3.07-5.879a.25.25 0 00-.443-.231z" fill="#1583C4" fill-rule="nonzero"/><path d="M16.78 7.813l-3.478 4.535a.25.25 0 00.396.304l3.48-4.534a.25.25 0 10-.397-.305z" fill="#1583C4" fill-rule="nonzero"/><path d="M15.223 7.409l-1.956 5a.25.25 0 00.466.182l1.955-5a.25.25 0 00-.465-.182z" fill="#1583C4" fill-rule="nonzero"/><path d="M4.26 6.573c.03.093.08.256.15.464.117.347.242.694.37 1.019.15.373.294.693.432.945l.074.128c.16.266.413.614.742 1.026a36.319 36.319 0 001.287 1.513.25.25 0 00.37-.336 35.831 35.831 0 01-1.267-1.49 9.854 9.854 0 01-.704-.97 3.41 3.41 0 01-.063-.112 8.185 8.185 0 01-.405-.889 19.401 19.401 0 01-.507-1.444.25.25 0 10-.478.146z" fill="#409347" fill-rule="nonzero"/><path d="M19 6.5V9a.5.5 0 101 0V6.5a.5.5 0 10-1 0zM2.5 7.654l-.536-1.34a.5.5 0 00-.928.372l1 2.5a.5.5 0 00.928 0l1-2.5a.5.5 0 00-.928-.372L2.5 7.654z" fill="#1583C4" fill-rule="nonzero"/><use fill="url(#b)" xlink:href="#c"/><path stroke-opacity=".08" stroke="#000" stroke-width=".5" d="M14.123 10.169l.247.127-.159.225c-.013.034-.001.069.125.153.302.201.305.203.348.21.026.004.068-.012.168-.085.2-.149.218-.293.074-.465-.031-.037-.105-.057-.328-.078l-.129-.013a1.484 1.484 0 01-.346-.074zm-.172-.086a.819.819 0 01-.128-.105c-.173-.173-.233-.329-.288-.627-.064-.347-.104-.48-.25-.722a2.52 2.52 0 00-.32-.421 2.84 2.84 0 00-.592-.492l.218-.449c.037.015.113.04.22.064.41.097.845.101 1.244-.044l.05-.02a1.14 1.14 0 00.476-.33.683.683 0 00.17-.427v.003L14.75 6.5v-.863l.34.13c.021.008.068.023.131.038.165.04.333.054.481.03a.648.648 0 00.186-.059c.127-.063.207-.138.325-.294.336-.443.369-.481.637-.682.267-.2.412-.266.645-.324l.014-.003a.807.807 0 00.341-.173c.433-.325.517-.409.955-.956.311-.39.424-.562.457-.638.174-.27.148-.305-.173-.227l-.716.173-3.064.744c-.659.16-1.136.34-1.45.532-.468.289-.498.512-.31.761a.664.664 0 00.106.115l.444.35-3.349.558v6.686l.044-.017a3.423 3.423 0 001.036-.647c.457-.426.92-1.097.92-1.234 0-.007 0-.015-.002-.024-.022-.115-.168-.285-.399-.46a3.357 3.357 0 00-.463-.294l-.136-.07V8.619l.35.153c.194.085.466.28.732.62.074.097.145.2.21.312a7.035 7.035 0 01.481.184c.16.069.307.137.428.196zm0 0l.164.082.008.004a.826.826 0 01-.172-.086zM10.25 5.712l.209.035-.21-.247v.212zm0 6.686v.341l.304-.244a2.326 2.326 0 01-.304-.097zM7.958 9.703c-.017.03-.034.06-.05.092l.15-.122a3.45 3.45 0 00-.1.03zm-1.17.818l.007.01-.007-.011v.001zm.261-.438c-.063.03-.118.058-.164.082l-.008.004a.826.826 0 00.172-.086zm2.45-5.333h1.996c-.078-.114-.118-.195-.129-.277a.336.336 0 01.043-.233c-.19-.12-.287-.217-.36-.404-.051-.134-.007-.247.078-.312a1.269 1.269 0 01-.117-.295 2.559 2.559 0 01-.07-.38c-.02-.154-.035-.221-.059-.269-.11-.22-.204-.298-.42-.333-.261-.042-.298-.029-.378.133-.055.108-.112.133-.238.165.042-.01-.216.047-.282.07a.503.503 0 00-.138.065.834.834 0 01.362.088c.432.203.374.664-.001 1.175a.285.285 0 01-.014.272.892.892 0 01-.32.341.383.383 0 01.047.194z"/><g transform="translate(8 4)"><mask id="f" fill="#fff"><use xlink:href="#d"/></mask><use fill="url(#a)" xlink:href="#d"/><path fill="url(#e)" mask="url(#f)" d="M0 0h5v2H0z"/><path d="M0 2h1v4H0V2zm2 0h1v4H2V2zm2 0h1v4H4V2z" fill="url(#g)" mask="url(#f)"/></g></g></svg>
  )
}

VI.propTypes = {
  width: '21',
  height: '15',
}

export default VI
