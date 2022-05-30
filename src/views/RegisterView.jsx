import React from 'react';
import { nanoid } from 'nanoid';
import { useDispatch } from 'react-redux';
import { register } from 'redux/auth/authOperations';

// import { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as yup from 'yup';

const RegisterPage = () => {
  // const [email, setEmail] = useState('');
  // const [name, setName] = useState('');
  const dispatch = useDispatch();
  const schema = yup.object().shape({
    name: yup.string().required(),
    email: yup
      .string()
      .email('Must be a valid email')
      .max(255)
      .required('Email is required'),
    password: yup.string().required(),
  });

  const initialValues = {
    name: '',
    email: '',
    password: '',
  };

  const handleSubmit = (event, initialValues) => {
    // event.preventDefault();
    console.log('Submiting!');
    const { name, email, password } = initialValues;
    dispatch(register({ name, email, password }));
    // resetForm();
  };

  const passwordInputId = nanoid();
  const emailInputId = nanoid();
  const nameInputId = nanoid();

  return (
    <div>
      <h2>Register</h2>
      <Formik
        initialValues={initialValues}
        validationSchema={schema}
        onSubmit={handleSubmit}
      >
        <Form autoComplete="off">
          <label htmlFor={nameInputId}>Name</label>
          <Field type="name" name="name" id={nameInputId} />
          <ErrorMessage name="name" component="div" />

          <label htmlFor={emailInputId}>E-mail</label>
          <Field type="email" name="email" id={emailInputId} />
          <ErrorMessage name="e-mail" component="div" />

          <label htmlFor={passwordInputId}>Password</label>
          <Field type="password" name="password" id={passwordInputId} />
          <ErrorMessage name="password" component="div" />

          <button type="submit">Register</button>
        </Form>
      </Formik>
    </div>
  );
};

export default RegisterPage;
