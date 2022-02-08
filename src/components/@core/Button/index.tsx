import * as React from 'react';

interface ButtonProps {}

const Button: React.FunctionComponent<ButtonProps> = (props) => {
  return (
    <div
      style={{
        padding: '2rem 4rem',
        backgroundColor: 'tomato',
        color: 'white',
      }}
    >
      {props.children}
    </div>
  );
};

export default Button;
