import React from 'react';
import { Formik, Form } from 'formik';
import DatePicker from 'react-datepicker';
import Select from 'react-select';

import getGenres from '../Header/helpers';
import validationSchema from './validation';
import { generateInitialValues } from './helpers';
import { Movie, MovieFields } from '../../types/Movie';

import './styles/MovieForm.css';
import selectStyles from './styles/Select';

type Props = {
  onSubmit: (_updatedMovie: MovieFields) => void;
  movie?: Movie | null;
}

const MovieForm: React.FC<Props> = ({ onSubmit: handleSubmit, movie }) => (
  <Formik
    initialValues={generateInitialValues(movie)}
    onSubmit={(values) => handleSubmit(values)}
    validationSchema={validationSchema}
  >
    {({
      values, touched, errors, handleBlur, handleChange, setFieldValue, resetForm
    }) => (
      <Form className="form-add-movie">
        <label htmlFor="input-title">
          Title
          <input
            id="input-title"
            type="string"
            placeholder="Title"
            name="title"
            value={values.title}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          {touched.title && errors.title ? <span className="error">{errors.title}</span> : null}
        </label>
        <label>
          Release Date
          <DatePicker
            selected={values.releaseDate}
            name="releaseDate"
            onChange={(selectedDate:Date) => setFieldValue('releaseDate', selectedDate)}
          />
        </label>
        <label htmlFor="input-movie-url">
          Movie URL
          <input
            id="input-movie-url"
            type="url"
            placeholder="https://"
            name="posterPath"
            value={values.posterPath}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          {touched.posterPath && errors.posterPath ? <span className="error">{errors.posterPath}</span> : null}
        </label>
        <label htmlFor="input-rating">
          Rating
          <input
            id="input-rating"
            type="number"
            step={0.1}
            placeholder="7.8"
            name="rating"
            value={values.rating}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          {touched.rating && errors.rating ? <span className="error">{errors.rating}</span> : null}
        </label>
        <label htmlFor="select-genres">
          Genre
          <Select
            options={getGenres()}
            isMulti
            name="genres"
            onChange={(genres: any) => setFieldValue('genres', genres)}
            closeMenuOnSelect={false}
            value={values.genres}
            styles={selectStyles}
          />
          {touched.genres && errors.genres ? <span className="error">{errors.genres}</span> : null}
        </label>
        <label htmlFor="input-runtime">
          Runtime
          <input
            id="input-runtime"
            type="number"
            step={1}
            placeholder="minutes"
            name="runtime"
            value={values.runtime}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          {touched.runtime && errors.runtime ? <span className="error">{errors.runtime}</span> : null}
        </label>
        <label htmlFor="input-overview" className="label-overview">
          Overview
          <textarea
            id="input-overview"
            rows={6}
            cols={33}
            placeholder="Movie description"
            name="overview"
            value={values.overview}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          {touched.overview && errors.overview ? <span className="error">{errors.overview}</span> : null}
        </label>
        <button type="button" className="btn reset" onClick={() => resetForm()}>
          Reset
        </button>
        <button type="submit" className="btn submit">
          Submit
        </button>
      </Form>
    )}
  </Formik>
);

MovieForm.defaultProps = {
  movie: null
};

export default MovieForm;
