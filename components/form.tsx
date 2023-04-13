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
  interest: Yup.string()
    .notOneOf(["-1"], "Please select an interest")
    .required("Please select an interest"),
  summitJunto: Yup.bool(),
  summitSeriesEvents: Yup.bool(),
  agree: Yup.bool().oneOf([true], "You must accept the terms"),
});


const options = [
  { label: "How did you hear about Summit?* Please Select", value: -1 },
  { label: "Summit Community Member", value: 0 },
  { label: "Friend outside of Summit", value: 1 },
  { label: "Summit team member", value: 2 },
  { label: "LinkedIn", value: 3 },
  { label: "Google", value: 4 },
  { label: "Instagram", value: 5 },
  { label: "Facebook", value: 6 },
  { label: "Blog", value: 7 },
  { label: "Other", value: 8 },
];

interface FormProps {
  onSubmit?: (values: any) => void;
}

const FormComponent: React.FC<FormProps> = ({ onSubmit }) => {
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
        interest: "-1",
        summitJunto: false,
        summitSeriesEvents: false,
        agree: false,
      }}
      validationSchema={SignupSchema}
      onSubmit={(values) => {
        onSubmit && onSubmit(values);
        console.log(values);
      }}
    >
      {({ values, errors, touched, handleChange, handleBlur }) => (
        <Form>
          <Field name="firstName" placeholder="First Name*" className="textInput" />
          <ErrorMessage name="firstName" className='error' component='div' />
          <Field name="lastName" placeholder="Last Name*" className="textInput" />
          <ErrorMessage name="lastName" className='error' component='div' />
          <Field name="mobilePhone" placeholder="Mobile Phone*" className="textInput" />
          <ErrorMessage name="mobilePhone" className='error' component='div' />
          <Field type="email" name="email" placeholder="Email*" className="textInput" />
          <ErrorMessage name="email" className='error' component='div' />
          <Field name="company" placeholder="Company*" className="textInput" />
          <ErrorMessage name="company" className='error' component='div' />
          <Field name="title" placeholder="Title*" className="textInput" />
          <ErrorMessage name="title" className='error' component='div' />
          <Field as="textarea" name="note" placeholder="Link us to something that tells us about you (Linkedin, personal website, company project, etc.)" />
          <ErrorMessage name="note" className='error' component='div' />
          <label>
            I'm interested in learning about
            <Field as="select" name="interest">
              {options.map((option, index) => (
                <option key={option.label} value={option.value}>{option.label}</option>
              ))}
            </Field>
          </label>
          <ErrorMessage name="interest" className='error'  component='div'/>
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
            I agree to receive occasional communications from Summit Series. I understand I can withdraw my consent at any time. Please contact <a href='mailto:hello@summit.co'>hello@summit.co</a> for more information.</label>
          <ErrorMessage name="agree" className='error'  component='div'/>
          <button type="submit" className='button'>SUBMIT</button>
        </Form>
      )}
    </Formik>
  );
};

export default FormComponent;
