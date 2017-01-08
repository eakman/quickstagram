import React from 'react';

const Errors = (props) => {


  return(

    <ul className="errors">
      {props.errors.map((error, i) => (
        <li key={i}>
          {error}
        </li>
      ))}
    </ul>
  );
};

export default Errors;
