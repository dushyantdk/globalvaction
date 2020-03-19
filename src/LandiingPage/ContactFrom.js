import React from 'react';
import axios from 'axios';
import { Form, Button} from 'react-bootstrap';
import { useFormik } from 'formik';
import * as Yup from 'yup';


const ContactFrom = () => {
    const formik = useFormik({
      initialValues: {
        firstName: '',
        Phoneno: '',
        email: '',
      },
      validationSchema: Yup.object({
        firstName: Yup.string()
          .max(15, 'Must be 5 characters or less')
          .required('Required'),
          Phoneno: Yup.string()
          .max(10, 'Must be 10 digit')
          .required('Required'),
        email: Yup.string()
          .email('Invalid email address')
          .required('Required'),
      }),
      onSubmit: values => {
        //const messageHtml =  '';
        axios({
          method: "POST",
          url:"https://exploreholidays.in/contact-mail/index.php",
          data: JSON.stringify(values, null, 2),
          headers: {
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*',
          }
        }).then((response)=>{
          if (response.data.msg === 'success') {
              alert("Email sent, awesome!");
              this.resetForm()
          } else if(response.data.msg === 'fail') {
              alert("Oops, something went wrong. Try again")
          }
        })
      },
    });
    return (
        <div className="contact-from">
      <form onSubmit={formik.handleSubmit}>
      <Form.Group controlId="formGroupname">
        <input
          id="firstName"
          name="firstName"
          className="form-control"
          placeholder="Name"
          type="text"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.firstName}
        />
        {formik.touched.firstName && formik.errors.firstName ? (
          <div className="error">{formik.errors.firstName}</div>
        ) : null}
        </Form.Group>
     <Form.Group controlId="formGroupPhone">
        <input
          id="Phoneno"
          className="form-control"
          placeholder="Phone No"
          name="Phoneno"
          type="text"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.Phoneno}
        />
        {formik.touched.Phoneno && formik.errors.Phoneno ? (
          <div className="error">{formik.errors.Phoneno}</div>
        ) : null}
        </Form.Group>
        <Form.Group controlId="formGroupemail">
        <input
          id="email"
          className="form-control"
          name="email"
          placeholder="Email"
          type="email"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.email}
        />
        {formik.touched.email && formik.errors.email ? (
          <div className="error">{formik.errors.email}</div>
        ) : null}
        </Form.Group>
        <Form.Group controlId="formGroupemail">
        <textarea
          id="message"
          className="form-control"
          name="message"
          placeholder="Message"
          type="text"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.message}
        />
        </Form.Group>
        <Button className="Send-btn" variant="primary" type="submit">
           Send Now
        </Button>
      </form>
      </div>
    );
  };
export default ContactFrom;
