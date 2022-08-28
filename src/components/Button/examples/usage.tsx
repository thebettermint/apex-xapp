import React from 'react';
import Button from '../index';

export const Element = () => {
  const handleClick = () => {
    console.log('The button was clicked');
  };

  return (
    <>
      <Button type="secondary" theme="light" accent="grey" onClick={handleClick} />
    </>
  );
};
