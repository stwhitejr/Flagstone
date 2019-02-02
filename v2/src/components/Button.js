import React, {Component} from 'react';

const Button = props => {
  return (
    <a href={props.url} className="button">{props.copy}</a>
  );
}

export default Button;