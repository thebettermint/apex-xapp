import React from 'react';
import iconMap from './svg/icon-map';
import PropTypes from 'prop-types';

const Icon = ( 
                name:string, 
                size:number, 
                style:object, 
                color:string, 
                height:number, 
                width:number, 
                hoverColor:number, 
                className:string,
                ...rest:any ) => {


  const Icon = iconMap[name];
  const h = height ? height : size 
  const w = width ? width : size 

  const activeColor = () => {
    return color
  }

  return <Icon 
    color={activeColor()} 
    fill={activeColor()} 
    style={{ width: w, height: h, ...style}} {...rest} />;
};

Icon.propTypes = {
  name: PropTypes.string.isRequired,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  color: PropTypes.string,
  height: PropTypes.string,
  width: PropTypes.string,
  hoverColor: PropTypes.string,
  style: PropTypes.object,
};

Icon.defaultProps = {
  size: '5em',
  color: 'black',
};

export default Icon;