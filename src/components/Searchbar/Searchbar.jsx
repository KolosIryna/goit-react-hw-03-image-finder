import { Formik } from 'formik';
import * as Yup from 'yup';

import { StyledForm } from './Searchbar.styled';

export const Searchbar = ({ onSubmit }) => {
  const schema = Yup.object({
    title: Yup.string()
      .min(2)
      .matches(
        /^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$/,
        'Please enter a valid title'
      )
      .max(10)
      .required(),
  }).required();

  const handleSubmit = (values, actions) => {
    values.preventDefault();
    onSubmit(values.title);
    actions.resetForm();
  };

  return (
    <header>
      <Formik
        initialValues={{ title: '' }}
        onSubmit={handleSubmit}
        validationSchema={schema}
      >
        <StyledForm>
          <button type="submit" className="button">
            <span className="button-label">Search</span>
          </button>

          <input
            className="input"
            name="title"
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
          />
        </StyledForm>
      </Formik>
    </header>
  );
};
