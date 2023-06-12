import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import axios from "axios";

const initialValues = {
    firstName: "",
    lastName: "",
    employeeType: "",
    districtID: 0,
};

const validationSchema = Yup.object().shape({
    firstName: Yup.string().required("First Name is required"),
    lastName: Yup.string().required("Last Name is required"),
    employeeType: Yup.string().required("Employee Type is required"),
    districtID: Yup.number().required("District ID is required"),
});

const apiUrl = "http://59.152.62.177:8085/api/SaveEmployeeInformation";

const handleSubmit = (values, { setSubmitting, resetForm }) => {
    const x = {
        firstName: "string",
        lastName: "string",
        employeeType: "string",
        districeID: 0,
    };
    axios
        .post(apiUrl, x)
        .then((response) => {
            console.log(response.data); // Handle response data as needed
            resetForm();
        })
        .catch((error) => {
            console.error(error); // Handle error
        })
        .finally(() => {
            setSubmitting(false);
        });
};

const UserForm = () => {
    return (
        <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={handleSubmit}
        >
            <Form>
                <div>
                    <label htmlFor="firstName">First Name</label>
                    <Field type="text" id="firstName" name="firstName" />
                    <ErrorMessage name="firstName" component="div" />
                </div>

                <div>
                    <label htmlFor="lastName">Last Name</label>
                    <Field type="text" id="lastName" name="lastName" />
                    <ErrorMessage name="lastName" component="div" />
                </div>

                <div>
                    <label htmlFor="employeeType">Employee Type</label>
                    <Field type="text" id="employeeType" name="employeeType" />
                    <ErrorMessage name="employeeType" component="div" />
                </div>

                <div>
                    <label htmlFor="districtID">District ID</label>
                    <Field type="number" id="districtID" name="districtID" />
                    <ErrorMessage name="districtID" component="div" />
                </div>

                <button type="submit">Submit</button>
            </Form>
        </Formik>
    );
};

export default UserForm;
