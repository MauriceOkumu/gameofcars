const Validator = require('validator');
const isEmpty = require('./is-empty');

module.exports = validateRegisterInputs = (data) => {
  let errors = {};
  data.name = !isEmpty(data.name) ? data.name : '';
  data.email =  !isEmpty(data.email) ? data.email : '';
  data.password = !isEmpty(data.password) ? data.password : '';

  if(Validator.isEmpty(data.name)) {
      errors.name = 'Name is required !';
  }
  if(Validator.isEmpty(data.email)) {
    errors.email = 'Email is required !';
  }
  if(Validator.isEmpty(data.password)) {
    errors.password = 'Password is required !';
  }

  return {
      errors,
      isValid: isEmpty(errors)
  }
}

