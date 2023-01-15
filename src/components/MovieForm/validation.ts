import * as Yup from 'yup';

const validationSchema = Yup.object({
  title: Yup.string()
    .max(30, 'Must be 30 characters or less')
    .required('Required'),
  posterPath: Yup.string()
    .url('Must be a valid URL')
    .required('Required'),
  rating: Yup.number()
    .min(1, 'Must be greater than or equal to 1')
    .max(10, 'Must be lass than or equal to 10')
    .required('Required'),
  genres: Yup.array()
    .nullable()
    .min(1, 'Required')
    .required('Required'),
  runtime: Yup.number()
    .min(1, 'Must be greater than or equal to 1')
    .max(300, 'Must be less than or equal to 300')
    .required('Required'),
  overview: Yup.string()
    .max(512, 'Must be less than or equal to 512')
    .required('Required')
});

export default validationSchema;
