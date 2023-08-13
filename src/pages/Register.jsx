import {Formik, Form, ErrorMessage, Field} from 'formik'
import React from 'react'

import * as Yup from 'yup'
const Register = () => {
    return (
        <>
            <Formik
                initialValues={{ firstname: '', lastname: '', email: '', password: '', cpassword: '' }}
                validationSchema={Yup.object({
                    firstname: Yup.string()
                        .required('firstname is mandatory')
                        .max(20, 'must be of 20 character or less'),
                    lastname: Yup.string()
                        .required('lastname is mandatory')
                        .max(20, 'must be of 20 character or less'),
                    email: Yup.string()
                        .email('Invalid email format')
                        .required('email is mandatory'),
                    password: Yup.string()
                        .required('password is mandatory')
                        .matches(/^(?=.*[A-Za-z])(?= .*\d)(?=.*[@#$?-_&!])[A-Za-z\d@#$?-_&!]{8,50}$/, 'weak password,password must be atleast of 8 character and should be like:Asd@234'),
                    cpassword: Yup.string()
                        .required('Confirm password is mandatory')
                        .oneOf([Yup.ref('password'), null], 'password and confirm password  doesnot match ')




                })}>

                <div className="container my-4">
                    <div className="row d-flex justify-content-center">
                        <div className="col-md-5 shadow-lg">
                            <Form>
                                <div className="mb-2">
                                    <label htmlFor='firstname'>FirstName</label>
                                    <Field type='text ' name='firstname' id='firstname' className='form-control' />
                                    <ErrorMessage name='firstname'>
                                        {mgs => <div style={{ color: 'red' }}>{mgs}</div>}
                                    </ErrorMessage>
                                </div>

                                <div className="mb-2">
                                    <label htmlFor='lastname'>LastName</label>
                                    <Field type='text ' name='lastname' id='lastnamename' className='form-control' />
                                    <ErrorMessage name='lastname'>
                                        {mgs => <div style={{ color: 'red' }}>{mgs}</div>}
                                    </ErrorMessage>
                                </div>

                                <div className="mb-2">
                                    <label htmlFor='email'>Email</label>
                                    <Field type='email' name='email' id='email' className='form-control' />
                                    <ErrorMessage name='email'>
                                        {mgs => <div style={{ color: 'red' }}>{mgs}</div>}
                                    </ErrorMessage>
                                </div>
                                <div className="mb-2">
                                    <label htmlFor='password'>Password</label>
                                    <Field type='password' name='password' id='password' className='form-control' />
                                    <ErrorMessage name='password'>
                                        {mgs => <div style={{ color: 'red' }}>{mgs}</div>}
                                    </ErrorMessage>
                                </div>
                                <div className="mb-2">
                                    <label htmlFor='cpassword'>Confirm Password</label>
                                    <Field type='password' name='cpassword' id='cpassword' className='form-control' />
                                    <ErrorMessage name='cpassword'>
                                        {mgs => <div style={{ color: 'red' }}>{mgs}</div>}
                                    </ErrorMessage>
                                </div>
                                <button className='btn btn-primary'>Register</button>


                            </Form>
                        </div>
                    </div>
                </div>
            </Formik>
        </>
    )
}

export default Register