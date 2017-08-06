/*
* SurveyField renders a single label and text input 
* input, label, and meta are destructured Redux Form props
* {...input} says we will pass an object with props, but we haven't created decided what yet
* same as <input onBlur={input.onBlur} onChange={input.onChange} /> -> writing it all out
* {label} provided by parent component
* { error, touched } on meta object is validation -> only show error message after user has touched field
*/
import React from 'react';

export default ({ input, label, meta: { error, touched } }) => {
  return (
    <div>
      <label>
        {label}
      </label>
      <input {...input} style={{ marginBottom: '5px' }} />
      <div className="red-text" style={{ marginBottom: '20px' }}>
        {touched && error}
      </div>
    </div>
  );
};
