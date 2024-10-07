import css from "./ContactForm.module.css";
import { Formik, Form, Field } from "formik";

export const ContactForm = () => {
  const initialValues = {
    contacts: {
      items: [],
    },
  };

  const onSubmit = (values, options) => {
    options.resetForm();
  };

  return (
    <Formik initialValues={{ initialValues }} onSubmit={onSubmit}>
      <Form>
        <Field type="text" name="name" />
        <Field type="tel" name="number" />
        <button type="submit" className={css.btn}>
          Add contact
        </button>
      </Form>
    </Formik>
  );
};

export default ContactForm;
