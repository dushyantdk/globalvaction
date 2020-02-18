import React from 'react';
import axios from 'axios';
import {Row, Col, Tab, Nav, Form, OverlayTrigger, ButtonToolbar, Tooltip} from 'react-bootstrap';
import SubmitBtn from '../img/submit-btn.png';
import { useFormik } from 'formik';
import * as Yup from 'yup';


const SearchForm = () => {
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
        const messageHtml =  '';
        axios({
          method: "POST",
          url:"http://localhost:8080/send-mail",
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
      <form onSubmit={formik.handleSubmit} className="search-from">
      <Form.Row>
        <Form.Group className="col-lg-3" controlId="formGridEmail">
          <input
            id="From"
            name="from"
            className="form-control"
            placeholder="From"
            type="text"
          />
        </Form.Group>
        <Form.Group className="col-lg-3" controlId="formGridPassword">
          <input
            id="To"
            placeholder="To"
            className="form-control"
            name="to"
            type="text"
          />
        </Form.Group>
        <Form.Group className="col-lg-3" controlId="formGridPassword">
          <input
            id="PickUp"
            name="PickUp"
            className="form-control"
            placeholder="PickUp"
            type="text"
          />
        </Form.Group>
        <Form.Group className="col-lg-3" controlId="formGridPassword">
          <input
            id="DropUp"
            name="DropUp"
            className="form-control"
            placeholder="DropUp"
            type="text"
          />
        </Form.Group>
      </Form.Row>
      <Form.Row>
        <Form.Group className="col-lg-3" controlId="formGridEmail">
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
        <Form.Group className="col-lg-3" controlId="">
          <input
            id="Phoneno"
            placeholder="Contact No"
            className="form-control"
            name="Phoneno"
            type="number"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.Phoneno}
          />
          {formik.touched.Phoneno && formik.errors.Phoneno ? (
            <div className="error">{formik.errors.Phoneno}</div>
          ) : null}
        </Form.Group>
        <Form.Group className="col-lg-3" controlId="">
          <input
            id="email"
            name="email"
            className="form-control"
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
        <Form.Group className="col-lg-3" controlId="">
        <ButtonToolbar>
            {['top'].map(placement => (
              <OverlayTrigger
                key={placement}
                placement={placement}
                overlay={
                  <Tooltip id={`tooltip-${placement}`}>
                    Get Estimate
                  </Tooltip>
                }
              >
                <button type="submit"><img src={SubmitBtn} alt="Submit Button" title="Get Estimate" /></button>
              </OverlayTrigger>
            ))}
        </ButtonToolbar>
        </Form.Group>
      </Form.Row>  
      </form>
    );
  };
export default SearchForm;
