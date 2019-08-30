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
          id="IO_svg_prefix__a"
        >
          <stop stopColor="#FFF" offset="0%" />
          <stop stopColor="#F0F0F0" offset="100%" />
        </linearGradient>
        <linearGradient
          x1="50%"
          y1="0%"
          x2="50%"
          y2="100%"
          id="IO_svg_prefix__b"
        >
          <stop stopColor="#07319C" offset="0%" />
          <stop stopColor="#00247E" offset="100%" />
        </linearGradient>
        <linearGradient
          x1="50%"
          y1="0%"
          x2="50%"
          y2="100%"
          id="IO_svg_prefix__c"
        >
          <stop stopColor="#DB1E36" offset="0%" />
          <stop stopColor="#D51931" offset="100%" />
        </linearGradient>
      </defs>
      <g fill="none" fillRule="evenodd">
        <path fill="url(#IO_svg_prefix__a)" d="M0 0h21v15H0z" />
        <path
          fill="url(#IO_svg_prefix__b)"
          d="M2.164.908h21v15h-21z"
          transform="translate(-2.16 -.91)"
        />
        <path
          d="M5.16 4.14L.808.41H2.82l3.5 2.5h.697L11.66.008V1.16c0 .303-.167.627-.418.806L8.16 4.167v.513l3.137 2.69c.462.395.204 1.04-.387 1.04-.245 0-.545-.096-.75-.242L7 5.91h-.697L1.66 8.812v-1.66l3.5-2.5V4.14z"
          fill="url(#IO_svg_prefix__a)"
          fillRule="nonzero"
          transform="translate(-2.16 -.91)"
        />
        <path
          d="M5.66 3.91l-3.5-3h.5l3.5 2.5h1l4-2.5v.25a.537.537 0 01-.208.399L7.66 3.91v1l3.312 2.839c.104.089.072.161-.062.161a.898.898 0 01-.458-.149L7.16 5.41h-1l-4 2.5v-.5l3.5-2.5v-1z"
          fill="url(#IO_svg_prefix__c)"
          transform="translate(-2.16 -.91)"
        />
        <path
          d="M2.16 3.41v2h3.5v2.505c0 .273.214.495.505.495h.99a.496.496 0 00.505-.495V5.41h3.51a.49.49 0 00.49-.505v-.99a.495.495 0 00-.49-.505H7.66V.91h-2v2.5h-3.5z"
          fill="url(#IO_svg_prefix__a)"
          transform="translate(-2.16 -.91)"
        />
        <path
          fill="url(#IO_svg_prefix__c)"
          d="M2.16 3.91h4v-3h1v3h4v1h-4v3h-1v-3h-4z"
          transform="translate(-2.16 -.91)"
        />
        <path
          d="M.423 6.998l-1.109.37-.474.157.316.949.475-.158 2.062-.688c.153-.05.467-.051.621 0l2.063.688c.357.119.894.12 1.254 0l2.062-.688c.153-.05.467-.051.621 0l2.063.688c.357.119.894.12 1.254 0l2.062-.688c.153-.05.467-.051.621 0l2.063.688c.357.119.894.12 1.254 0l2.062-.688c.153-.05.467-.051.621 0l2.063.688.469.156.474.158.316-.948-.474-.159-.469-.156-2.062-.687c-.36-.12-.897-.12-1.254 0l-2.063.687c-.154.051-.468.051-.62 0L14.63 6.68c-.36-.12-.897-.12-1.254 0l-2.063.687c-.154.051-.468.051-.62 0l-1.69-.563v.194H6.423l-1.109.37c-.154.05-.468.05-.62 0l-1.11-.37H.424zm8.58-1.64l1.374.458c.357.119.894.12 1.254 0l2.062-.688c.153-.05.467-.051.621 0l2.063.688c.357.119.894.12 1.254 0l2.062-.688c.153-.05.467-.051.621 0l2.063.688.469.156.474.158.316-.948-.474-.159-.469-.156-2.062-.687c-.36-.12-.897-.12-1.254 0l-2.063.687c-.154.051-.468.051-.62 0L14.63 4.18c-.36-.12-.897-.12-1.254 0l-2.063.687c-.154.051-.468.051-.62 0l-1.69-.563v1.054zm-9 .333l-.372.125-.475.158-.316-.949.474-.158.69-.23v1.054zm9-2.833l1.374.458c.357.119.894.12 1.254 0l2.062-.688c.153-.05.467-.051.621 0l2.063.688c.357.119.894.12 1.254 0l2.062-.688c.153-.05.467-.051.621 0l2.063.688.469.156.474.158.316-.948-.474-.159-.469-.156-2.062-.687c-.36-.12-.897-.12-1.254 0l-2.063.687c-.154.051-.468.051-.62 0L14.63 1.68c-.36-.12-.897-.12-1.254 0l-2.063.687c-.154.051-.468.051-.62 0l-1.69-.563v1.054zm-9 .333l-.372.125-.475.158-.316-.949.474-.158.69-.23v1.054zm9-2.833l1.374.458c.357.119.894.12 1.254 0l2.062-.688c.153-.05.467-.051.621 0l2.063.688c.357.119.894.12 1.254 0l2.062-.688c.153-.05.467-.051.621 0l2.063.688.469.156.474.158.316-.948-.474-.159-.469-.156-2.062-.687c-.36-.12-.897-.12-1.254 0l-2.063.687c-.154.051-.468.051-.62 0L14.63-.82c-.36-.12-.897-.12-1.254 0l-2.063.687c-.154.051-.468.051-.62 0L8.63-.82c-.36-.12-.897-.12-1.254 0l-2.063.687c-.154.051-.468.051-.62 0L2.63-.82c-.36-.12-.897-.12-1.254 0l-2.063.687-.474.158.316.949.475-.158L.004.69v-.693h9v.36zm14.159 14.665l.474.159-.316.948-.474-.158-.47-.156-2.062-.688a1.278 1.278 0 00-.62 0l-2.063.688c-.36.12-.897.119-1.254 0l-2.063-.688a1.278 1.278 0 00-.62 0l-2.063.688c-.36.12-.897.119-1.254 0l-2.063-.688a1.278 1.278 0 00-.62 0l-2.063.688c-.36.12-.897.119-1.254 0l-2.063-.688a1.278 1.278 0 00-.62 0l-2.063.688-.475.158-.316-.949.474-.158 2.063-.687c.357-.12.894-.12 1.254 0l2.062.687c.153.051.467.051.621 0l2.063-.687c.357-.12.894-.12 1.254 0l2.062.687c.153.051.467.051.621 0l2.063-.687c.357-.12.894-.12 1.254 0l2.062.687c.153.051.467.051.621 0l2.063-.687c.357-.12.894-.12 1.254 0l2.062.687.469.156zm0-2.5l.474.159-.316.948-.474-.158-.47-.156-2.062-.688a1.278 1.278 0 00-.62 0l-2.063.688c-.36.12-.897.119-1.254 0l-2.063-.688a1.278 1.278 0 00-.62 0l-2.063.688c-.36.12-.897.119-1.254 0l-2.063-.688a1.278 1.278 0 00-.62 0l-2.063.688c-.36.12-.897.119-1.254 0l-2.063-.688a1.278 1.278 0 00-.62 0l-2.063.688-.475.158-.316-.949.474-.158 2.063-.687c.357-.12.894-.12 1.254 0l2.062.687c.153.051.467.051.621 0l2.063-.687c.357-.12.894-.12 1.254 0l2.062.687c.153.051.467.051.621 0l2.063-.687c.357-.12.894-.12 1.254 0l2.062.687c.153.051.467.051.621 0l2.063-.687c.357-.12.894-.12 1.254 0l2.062.687.469.156zm0-2.5l.474.159-.316.948-.474-.158-.47-.156-2.062-.688a1.278 1.278 0 00-.62 0l-2.063.688c-.36.12-.897.119-1.254 0l-2.063-.688a1.278 1.278 0 00-.62 0l-2.063.688c-.36.12-.897.119-1.254 0l-2.063-.688a1.278 1.278 0 00-.62 0l-2.063.688c-.36.12-.897.119-1.254 0l-2.063-.688a1.278 1.278 0 00-.62 0l-2.063.688-.475.158-.316-.949.474-.158 2.063-.687c.357-.12.894-.12 1.254 0l2.062.687c.153.051.467.051.621 0l2.063-.687c.357-.12.894-.12 1.254 0l2.062.687c.153.051.467.051.621 0l2.063-.687c.357-.12.894-.12 1.254 0l2.062.687c.153.051.467.051.621 0l2.063-.687c.357-.12.894-.12 1.254 0l2.062.687.469.156z"
          fill="#FFF"
          fillRule="nonzero"
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
