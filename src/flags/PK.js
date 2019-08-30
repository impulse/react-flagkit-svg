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
          id="PK_svg_prefix__a"
        >
          <stop stopColor="#FFF" offset="0%" />
          <stop stopColor="#F0F0F0" offset="100%" />
        </linearGradient>
        <linearGradient
          x1="50%"
          y1="0%"
          x2="50%"
          y2="100%"
          id="PK_svg_prefix__b"
        >
          <stop stopColor="#0A632F" offset="0%" />
          <stop stopColor="#05411E" offset="100%" />
        </linearGradient>
        <filter
          x="-2.8%"
          y="-2.8%"
          width="105.6%"
          height="111.1%"
          filterUnits="objectBoundingBox"
          id="PK_svg_prefix__c"
        >
          <feOffset dy={0.5} in="SourceAlpha" result="shadowOffsetOuter1" />
          <feColorMatrix
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.06 0"
            in="shadowOffsetOuter1"
          />
        </filter>
        <path
          d="M15.978 10.878a4.182 4.182 0 01-2.65.95c-2.383 0-4.314-2.015-4.314-4.5 0-2.486 1.931-4.5 4.314-4.5.999 0 1.919.354 2.65.95a4.165 4.165 0 00-1.043-.132c-2.165 0-3.92 1.648-3.92 3.682 0 2.033 1.755 3.681 3.92 3.681.361 0 .711-.045 1.043-.131zm.036-2.77l-1.175.838.434-1.377-1.16-.86 1.443-.013.458-1.368.459 1.368 1.443.013-1.16.86.434 1.377-1.176-.838z"
          id="PK_svg_prefix__d"
        />
      </defs>
      <g fill="none" fillRule="evenodd">
        <path fill="url(#PK_svg_prefix__a)" d="M0 0h21v15H0z" />
        <path fill="url(#PK_svg_prefix__b)" d="M0-.002h21v15H0z" />
        <path fill="url(#PK_svg_prefix__a)" d="M0-.002h6v15H0z" />
        <g transform="rotate(-45 13.465 7.328)">
          <use
            fill="#000"
            filter="url(#PK_svg_prefix__c)"
            xlinkHref="#PK_svg_prefix__d"
          />
          <use fill="url(#PK_svg_prefix__a)" xlinkHref="#PK_svg_prefix__d" />
        </g>
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
