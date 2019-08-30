import React from "react";
import PropTypes from "prop-types";

const SvgComponent = ({ size, width, height, ...otherProps }) => {
  if (size !== height) {
    width = width * (size / height);
    height = height * (size / height);
  }

  return (
    <svg
      width={width}
      height={height}
      size={size}
      viewBox="0 0 21 15"
      {...otherProps}
    >
      <defs>
        <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="CK_svg_prefix__a">
          <stop stopColor="#FFF" offset="0%" />
          <stop stopColor="#F0F0F0" offset="100%" />
        </linearGradient>
        <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="CK_svg_prefix__b">
          <stop stopColor="#0A17A7" offset="0%" />
          <stop stopColor="#030E88" offset="100%" />
        </linearGradient>
        <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="CK_svg_prefix__c">
          <stop stopColor="#DB1E36" offset="0%" />
          <stop stopColor="#D51931" offset="100%" />
        </linearGradient>
      </defs>
      <g fill="none" fillRule="evenodd">
        <path fill="url(#CK_svg_prefix__a)" d="M0 0h21v15H0z" />
        <path fill="url(#CK_svg_prefix__b)" d="M0 0h21v15H0z" />
        <path
          d="M3 3.23L-1.352-.5H.66L4.16 2h.697L9.5-.902V.25c0 .303-.167.627-.418.806L6 3.257v.513l3.137 2.69c.462.395.204 1.04-.387 1.04-.245 0-.545-.096-.75-.242L4.84 5h-.697L-.5 7.902v-1.66l3.5-2.5V3.23z"
          fill="url(#CK_svg_prefix__a)"
          fillRule="nonzero"
        />
        <path
          d="M3.5 3L0 0h.5L4 2.5h1L9 0v.25a.537.537 0 01-.208.399L5.5 3v1l3.312 2.839c.104.089.072.161-.062.161a.898.898 0 01-.458-.149L5 4.5H4L0 7v-.5L3.5 4V3z"
          fill="url(#CK_svg_prefix__c)"
        />
        <path
          d="M0 2.5v2h3.5v2.505c0 .273.214.495.505.495h.99a.496.496 0 00.505-.495V4.5h3.51a.49.49 0 00.49-.505v-.99a.495.495 0 00-.49-.505H5.5V0h-2v2.5H0z"
          fill="url(#CK_svg_prefix__a)"
        />
        <path fill="url(#CK_svg_prefix__c)" d="M0 3h4V0h1v3h4v1H5v3H4V4H0z" />
        <path
          d="M15.5 5a.5.5 0 110-1 .5.5 0 010 1zm0 6a.5.5 0 110-1 .5.5 0 010 1zM13 7.5a.5.5 0 11-1 0 .5.5 0 011 0zm6 0a.5.5 0 11-1 0 .5.5 0 011 0zm-5.268 1.768a.5.5 0 11-.707.707.5.5 0 01.707-.707zm4.243-4.243a.5.5 0 11-.707.707.5.5 0 01.707-.707zm-.707 4.243a.5.5 0 11.707.707.5.5 0 01-.707-.707zm-4.243-4.243a.5.5 0 11.707.707.5.5 0 01-.707-.707z"
          fill="#FFF"
        />
      </g>
    </svg>
  );
};

SvgComponent.propTypes = {
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  height: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};
SvgComponent.defaultProps = {
  size: "15",
  width: "21",
  height: "15"
};
export default SvgComponent;
