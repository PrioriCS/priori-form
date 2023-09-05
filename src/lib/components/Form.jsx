import React from 'react';
import { noop } from 'lodash';

function submit(event, onSubmit, setErrors, withValidation) {
  event.preventDefault();
  console.log('event', event);
  onSubmit();
}
function map(fields) {
  return fields.map(({ component: Component, name, value, placeholder, mask, validation }, index) => {
    const props = {
      key: index,
      name,
      value,
      placeholder,
      mask,
      validation,
    };
    return <Component {...props} />;
  });
}

export default function Form({ fields = [], onSubmit = noop, setErrors = noop, withValidation = false }) {
  return <form onSubmit={(e) => submit(e, onSubmit, setErrors, withValidation)}>{map(fields)}</form>;
}
