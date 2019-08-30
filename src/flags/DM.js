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
        <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="DM_svg_prefix__a">
          <stop stopColor="#FFF" offset="0%" />
          <stop stopColor="#F0F0F0" offset="100%" />
        </linearGradient>
        <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="DM_svg_prefix__b">
          <stop stopColor="#108753" offset="0%" />
          <stop stopColor="#0B6B41" offset="100%" />
        </linearGradient>
        <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="DM_svg_prefix__c">
          <stop stopColor="#262626" offset="0%" />
          <stop stopColor="#0D0D0D" offset="100%" />
        </linearGradient>
        <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="DM_svg_prefix__d">
          <stop stopColor="#FCD449" offset="0%" />
          <stop stopColor="#FCD036" offset="100%" />
        </linearGradient>
        <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="DM_svg_prefix__e">
          <stop stopColor="#E02C42" offset="0%" />
          <stop stopColor="#D22036" offset="100%" />
        </linearGradient>
      </defs>
      <g fill="none" fillRule="evenodd">
        <path fill="url(#DM_svg_prefix__a)" d="M0 0h21v15H0z" />
        <path fill="url(#DM_svg_prefix__b)" d="M0 0h21v6H0zM0 9h21v6H0z" />
        <path d="M9 6H0v3h9v6h3V9h9V6h-9V0H9v6z" fill="url(#DM_svg_prefix__a)" />
        <path d="M10 8v7h1V8h10V7H11V0h-1v7H0v1h10z" fill="url(#DM_svg_prefix__c)" />
        <path d="M9 7v8h1V7h11V6H10V0H9v6H0v1h9z" fill="url(#DM_svg_prefix__d)" />
        <circle fill="url(#DM_svg_prefix__e)" cx={10.5} cy={7.5} r={3.5} />
        <path
          d="M10.5 10.5a.5.5 0 110-1c.274 0 .538-.055.784-.16a.5.5 0 11.392.92c-.369.158-.767.24-1.176.24zm2.816-1.965a2.993 2.993 0 00.177-1.242.5.5 0 10-.998.068 1.983 1.983 0 01-.117.83.5.5 0 10.938.344zm-.95-3.383a2.992 2.992 0 00-1.07-.545.5.5 0 00-.264.964c.26.072.502.195.712.363a.5.5 0 10.623-.782zm-3.422-.217c-.345.21-.645.487-.88.814a.5.5 0 10.811.584c.158-.218.358-.404.588-.544a.5.5 0 00-.52-.854zM7.564 8.12c.084.397.247.771.479 1.101a.5.5 0 00.818-.574 1.987 1.987 0 01-.318-.733.5.5 0 10-.979.206zm2.54 2.354a.5.5 0 11.132-.991c.08.01.163.016.245.017a.5.5 0 11-.009 1 3.021 3.021 0 01-.367-.026z"
          fill="#0E673F"
          fillRule="nonzero"
        />
        <path
          d="M10.5 8.5c.552 0 .5-.448.5-1s.052-1-.5-1-.5.448-.5 1-.052 1 .5 1z"
          fill="#0E673F"
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
