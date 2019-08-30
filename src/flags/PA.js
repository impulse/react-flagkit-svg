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
        <linearGradient
          x1="50%"
          y1="0%"
          x2="50%"
          y2="100%"
          id="PA_svg_prefix__a"
        >
          <stop stopColor="#FFF" offset="0%" />
          <stop stopColor="#F0F0F0" offset="100%" />
        </linearGradient>
        <linearGradient
          x1="50%"
          y1="0%"
          x2="50%"
          y2="100%"
          id="PA_svg_prefix__b"
        >
          <stop stopColor="#E52448" offset="0%" />
          <stop stopColor="#D01739" offset="100%" />
        </linearGradient>
        <linearGradient
          x1="50%"
          y1="0%"
          x2="50%"
          y2="100%"
          id="PA_svg_prefix__c"
        >
          <stop stopColor="#1367AE" offset="0%" />
          <stop stopColor="#0A5492" offset="100%" />
        </linearGradient>
      </defs>
      <g fill="none" fillRule="evenodd">
        <path fill="url(#PA_svg_prefix__a)" d="M0 0h21v15H0z" />
        <path fill="url(#PA_svg_prefix__b)" d="M0 0h21v7H0z" />
        <path fill="url(#PA_svg_prefix__c)" d="M0 7h21v8H0z" />
        <path
          d="M0 7V0h10v7H0zm10 8V7h11v8H10z"
          fill="url(#PA_svg_prefix__a)"
        />
        <path
          fill="url(#PA_svg_prefix__c)"
          d="M5 4.32l-1.176.798.396-1.365-1.122-.871 1.42-.045L5 1.5l.482 1.337 1.42.045-1.122.871.396 1.365z"
        />
        <path
          fill="url(#PA_svg_prefix__b)"
          d="M15.5 11.82l-1.176.798.396-1.365-1.122-.871 1.42-.045L15.5 9l.482 1.337 1.42.045-1.122.871.396 1.365z"
        />
      </g>
    </svg>
  );
};

SvgComponent.propTypes = {
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  height: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
SvgComponent.defaultProps = {
  size: "15",
  width: "21",
  height: "15",
};
export default SvgComponent;
