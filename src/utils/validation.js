export const required = value => (value ? undefined : 'Empty field');

export const minLenght = min => value =>
  value.length >= min ? undefined : `Should be longer that ${min} sumbols`;

export const composeValidators =
  (...validators) =>
  value =>
    validators.reduce(
      (error, validator) => error || validator(value),
      undefined,
    );
export const isEmail = (value: string) =>
  value && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+.[A-Z]{2,4}$/i.test(value)
    ? 'Invalid email address'
    : undefined;

export const checkPassword = firstPassword => value => {
  console.log('checkPassword', firstPassword, value);
  return firstPassword === value ? undefined : " Password doesn't match";
};
