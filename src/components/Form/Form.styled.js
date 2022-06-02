import styled from '@emotion/styled';
import { Field } from 'formik';

export const FieldName = styled.label`
  margin-left: 30px;
  display: flex;
  margin-right: 20px;
  margin-bottom: 20px;
`;

export const ContactField = styled(Field)`
  margin-left: 30px;
  display: flex;
  color: grey;
  padding: 5px;
  margin-bottom: 20px;
  background-color: #87ceeb;
  border-top: transparent;
  border-left: transparent;
  border-right: transparent;
  border-bottom: solid, 1px, #fff;
`;

export const AddContactButton = styled.button`
  margin-left: 30px;
  display: flex;
  padding: 10px;
  text-transform: uppercase;
  letter-spacing: 2.5px;
  font-weight: 500;
  color: #fff;
  background-color: #778899;
  border: none;
  border-radius: 5px;
  box-shadow: 0px 8px 15px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease 0s;
  cursor: pointer;
  outline: none;
`;

export const FormContainer = styled.div`
  display: inline-flex;
  flex-direction: column;
  flex-basis: 50%;
  padding: 30px 100px 30px 60px;
  background: #87ceeb;
  box-shadow: 0px 8px 15px rgba(0, 0, 0, 0.1);
  border-radius: 10px;
  margin: 30px;
  /* margin-left: auto;
margin-right: auto; */
`;

export const FormName = styled.h2`
  margin-left: 30px;
`;
