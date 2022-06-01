import React from 'react';
import { nanoid } from 'nanoid';
import { useDispatch } from 'react-redux';
import { login } from 'redux/auth/authOperations';
import { useNavigate } from 'react-router-dom';

// import { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as yup from 'yup';

const LoginPage = () => {
  // const [email, setEmail] = useState('');
  // const [name, setName] = useState('');
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
    <div>
      <h2>Log In</h2>
      <Formik
        initialValues={initialValues}
        validationSchema={schema}
        onSubmit={handleSubmit}
      >
        <Form autoComplete="off">
          <label htmlFor={emailInputId}>E-mail</label>
          <Field type="email" name="email" id={emailInputId} />
          <ErrorMessage name="e-mail" component="div" />

          <label htmlFor={passwordInputId}>Password</label>
          <Field type="text" name="password" id={passwordInputId} />
          <ErrorMessage name="password" component="div" />
          <button type="submit">Log In</button>
        </Form>
      </Formik>
    </div>
  );
};

export default LoginPage;
