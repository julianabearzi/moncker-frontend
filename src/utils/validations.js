/* eslint-disable no-unused-expressions */
export const required = (value) => (value ? undefined : 'Required ❗');

export const number = (value) => (!Number(value) ? 'Only numbers' : undefined);

export const trim = (value) =>
  !/(^\s)|(\s$)/.test(value) ? undefined : 'Invalid format';

export const string = (value) =>
  /^[A-Za-z\s]+$/.test(value) ? undefined : 'Only letters';

export const email = (value) =>
  /[a-zA-Z0-9_]+([.][a-zA-Z0-9_]+)*@[a-zA-Z0-9_]+([.][a-zA-Z0-9_]+)*[.][a-zA-Z]{2,5}/.test(
    value
  )
    ? undefined
    : 'Invalid email format';

export const minLength = (value) =>
  /^[a-zA-Z0-9-]{6,}\b$/.test(value) ? undefined : 'Short password';

export const composeValidators =
  (...validators) =>
  (value) =>
    validators.reduce(
      (error, validator) => error || validator(value),
      undefined
    );
