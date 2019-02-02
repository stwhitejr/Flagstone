import React, {Component} from 'react';
import Button from './Button';
import './TextBlock.css';

const TextBlock = props => {
  const classes = `TextBlock ${props.hasBackground && 'TextBlock--background'} ${props.centered && 'TextBlock--centered'} ${props.onDark && 'TextBlock--onDark'}`;
  return (
    <div className={classes}>
      <h1 className="TextBlock-title">{props.title}</h1>
      <p className="TextBlock-copy">{props.copy}</p>
      <Button
        copy={props.ctaCopy}
        url={props.ctaUrl}
      />
    </div>
  );
}

export default TextBlock;