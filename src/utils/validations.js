/* eslint-disable no-unused-expressions */
export const required = (value) => (value ? undefined : 'Required ❗');

export const number = (value) => (!Number(value) ? 'Only numbers' : undefined);

export const trim = (value) =>
  !/(^\s)|(\s$)/.test(value) ? undefined : 'Invalid format';

export const string = (value) =>
  /^[A-Za-z\s]+$/.test(value) ? undefined : 'Only letters';

export const composeValidators =
  (...validators) =>
  (value) =>
    validators.reduce(
      (error, validator) => error || validator(value),
      undefined
    );
