import React from 'react';
import { nanoid } from 'nanoid';
import { useDispatch } from 'react-redux';
import { register } from 'redux/auth/authOperations';
import { Formik, Form, ErrorMessage } from 'formik';
import * as yup from 'yup';
import {
  ContactField,
  AddContactButton,
  FieldName,
  FormContainer,
  FormName,
} from 'components/Form/Form.styled';

const RegisterPage = () => {
  const dispatch = useDispatch();
  const schema = yup.object().shape({
    name: yup.string().required(),
    email: yup.string().required(),
    password: yup.string().required(),
  });

  const initialValues = {
    name: '',
    email: '',
    password: '',
  };

  const handleSubmit = (values, { resetForm }) => {
    const { name, email, password } = values;
    dispatch(register({ name, email, password }));
    resetForm();
  };

  const passwordInputId = nanoid();
  const emailInputId = nanoid();
  const nameInputId = nanoid();

  return (
    <FormContainer>
      <FormName>Register</FormName>
      <Formik
        initialValues={initialValues}
        validationSchema={schema}
        onSubmit={handleSubmit}
      >
        <Form autoComplete="off">
          <FieldName htmlFor={nameInputId}>Name</FieldName>
          <ContactField type="name" name="name" id={nameInputId} />
          <ErrorMessage name="name" component="div" />

          <FieldName htmlFor={emailInputId}>E-mail</FieldName>
          <ContactField type="email" name="email" id={emailInputId} />
          <ErrorMessage name="e-mail" component="div" />

          <FieldName htmlFor={passwordInputId}>Password</FieldName>
          <ContactField type="password" name="password" id={passwordInputId} />
          <ErrorMessage name="password" component="div" />

          <AddContactButton type="submit">Register</AddContactButton>
        </Form>
      </Formik>
    </FormContainer>
  );
};

export default RegisterPage;
