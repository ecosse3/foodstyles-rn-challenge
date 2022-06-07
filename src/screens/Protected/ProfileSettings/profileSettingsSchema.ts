import * as yup from 'yup';

const profileSettingsSchema = () =>
  yup.object().shape({
    name: yup.string(),
    email: yup
      .string()
      .email('Please enter a valid email address')
      .required('Email is required'),
  });

export default profileSettingsSchema;
