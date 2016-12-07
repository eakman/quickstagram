import React from 'react';

const Errors = (props) => {
  
  // const errors = props.errors.map((error, idx) => {
  //
  //     return (
  //       <li key={ idx }>{ error }</li>
  //     );
  // });

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
