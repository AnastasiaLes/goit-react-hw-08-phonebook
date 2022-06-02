import React from 'react';
import { nanoid } from 'nanoid';
import { useDispatch } from 'react-redux';
import { login } from 'redux/auth/authOperations';
import { useNavigate } from 'react-router-dom';

import { Formik, Form, ErrorMessage } from 'formik';
import * as yup from 'yup';
import {
  ContactField,
  AddContactButton,
  FieldName,
  FormContainer,
  FormName,
} from 'components/Form/Form.styled';

const LoginPage = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const schema = yup.object().shape({
    email: yup
      .string()
      .email('Must be a valid email')
      .max(255)
      .required('Email is required'),
    password: yup.string().required(),
  });

  const initialValues = {
    email: '',
    password: '',
  };

  const handleSubmit = (values, { resetForm }) => {
    const { email, password } = values;
    dispatch(login({ email, password }));
    navigate('/goit-react-hw-08-phonebook/contacts');
    resetForm();
  };

  const passwordInputId = nanoid();
  const emailInputId = nanoid();
  return (
    <FormContainer>
      <FormName>Log In</FormName>
      <Formik
        initialValues={initialValues}
        validationSchema={schema}
        onSubmit={handleSubmit}
      >
        <Form autoComplete="off">
          <FieldName htmlFor={emailInputId}>E-mail</FieldName>
          <ContactField type="email" name="email" id={emailInputId} />
          <ErrorMessage name="e-mail" component="div" />

          <FieldName htmlFor={passwordInputId}>Password</FieldName>
          <ContactField type="password" name="password" id={passwordInputId} />
          <ErrorMessage name="password" component="div" />
          <AddContactButton type="submit">Log In</AddContactButton>
        </Form>
      </Formik>
    </FormContainer>
  );
};

export default LoginPage;
