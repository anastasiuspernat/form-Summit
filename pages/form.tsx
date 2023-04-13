import { useState } from 'react';
import { Formik, Field, ErrorMessage, Form } from "formik";
import * as Yup from "yup";

const SignupSchema = Yup.object().shape({
    firstName: Yup.string().required("First name is required"),
    lastName: Yup.string().required("Last name is required"),
    mobilePhone: Yup.string()
      .matches(/^[0-9]+$/, "Mobile phone must contain only digits")
      .required("Mobile phone is required"),
    email: Yup.string().email("Invalid email").required("Email is required"),
    company: Yup.string().required("Company is required"),
    title: Yup.string().required("Title is required"),
    note: Yup.string(),
    interest: Yup.string().required("Please select an interest"),
    summitJunto: Yup.bool(),
    summitSeriesEvents: Yup.bool(),
    agree: Yup.bool().oneOf([true], "You must accept the terms"),
  });


const options = [
    { label: "Summit Community Member" },
    { label: "Friend outside of Summit" },
    { label: "Summit team member" },
    { label: "LinkedIn" },
    { label: "Google" },
    { label: "Instagram" },
    { label: "Facebook" },
    { label: "Blog" },
    { label: "Other" },
  ];    

  export default function Form2() {
    return (
      <Formik
        initialValues={{
          firstName: "",
          lastName: "",
          mobilePhone: "",
          email: "",
          company: "",
          title: "",
          note: "",
          interest: "",
          summitJunto: false,
          summitSeriesEvents: false,
          agree: false,
        }}
        validationSchema={SignupSchema}
        onSubmit={(values) => {
          console.log(values);
        }}
      >
        {({ values, errors, touched, handleChange, handleBlur }) => (
          <Form>
            <Field name="firstName" placeholder="First Name" className="textInput"/>
            <ErrorMessage name="firstName" />
            <Field name="lastName" placeholder="Last Name" className="textInput"/>
            <ErrorMessage name="lastName" />
            <Field name="mobilePhone" placeholder="Mobile Phone" className="textInput"/>
            <ErrorMessage name="mobilePhone" />
            <Field type="email" name="email" placeholder="Email" className="textInput"/>
            <ErrorMessage name="email" />
            <Field name="company" placeholder="Company" className="textInput"/>
            <ErrorMessage name="company" />
            <Field name="title" placeholder="Title" className="textInput"/>
            <ErrorMessage name="title" />   
            <Field as="textarea" name="note" placeholder="Link us to something" />
            <ErrorMessage name="note" />
            <label>
              I'm interested in learning about
              <Field as="select" name="interest">
              {options.map((option) => (
                    <option key={option.label} value={option.label}>{option.label}</option>
                  ))}
              </Field>
            </label>
            <ErrorMessage name="interest" />
            <label>
              <Field type="checkbox" name="summitJunto" />
              Summit Junto
            </label>
            <label>
              <Field type="checkbox" name="summitSeriesEvents" />
              Summit Series Events
            </label>
            <label>
              <Field type="checkbox" name="agree" />
              I agree
            </label>
            <ErrorMessage name="agree" />
            <button type="submit">Submit</button>
          </Form>
        )}
      </Formik>
    );
  };  

