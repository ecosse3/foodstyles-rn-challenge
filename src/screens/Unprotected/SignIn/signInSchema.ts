import * as yup from 'yup';

const signInSchema = () =>
  yup.object().shape({
    email: yup
      .string()
      .email('Please enter a valid email address')
      .required('Email is required'),
    password: yup.string().required('Password is required'),
  });

export default signInSchema;
