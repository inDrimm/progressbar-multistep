import React from "react";
import Layout from "../Layout";
import StepProgressBar from "react-step-progress";
import "react-step-progress/dist/index.css";
import { Card, Row, Col, Form } from "react-bootstrap";
import { FaCheckCircle } from "react-icons/fa";
import useForm from "./content2/useForm";
import validate from "./content2/validate";

export default function Progress6({ submitForm }) {
  const { handleChange, handleSubmit, values, errors } = useForm(submitForm, validate);

  return (
    <div>
      <Layout>
        <Card>
          <Card.Header style={{ textAlign: "center", marginTop: "15px" }}>
            <h4>Validation 3</h4>
          </Card.Header>
          <Card.Body style={{ display: "center" }}>
            <form onSubmit={handleSubmit}>
              <Row>
                <Col md="5">
                  <Form.Label htmlFor="username">Username</Form.Label>
                  <input id="username" type="text" name="username" placeholder="Masukkan Username" className="form-control" value={values.username} onChange={handleChange} />
                  {errors.username && <p style={{ color: "red", fontSize: "12px" }}>{errors.username}</p>}
                </Col>
                <Col md="5">
                  <Form.Label htmlFor="password">Password</Form.Label>
                  <input id="password" type="password" name="password" placeholder="Masukkan Password" className="form-control" value={values.password} onChange={handleChange} />
                  {errors.password && <p style={{ color: "red", fontSize: "12px" }}>{errors.password}</p>}
                </Col>
              </Row>

              <Row className="mt-5">
                <Col md="5">
                  <Form.Label htmlFor="email">Email</Form.Label>
                  <input id="email" type="email" name="email" placeholder="Masukkan Email" className="form-control" value={values.email} onChange={handleChange} />
                  {errors.email && <p style={{ color: "red", fontSize: "12px" }}>{errors.email}</p>}
                </Col>
                <Col md="5">
                  <Form.Label htmlFor="password2">Konfirmasi Password</Form.Label>
                  <input
                    id="password2"
                    type="password"
                    name="password2"
                    placeholder="Masukkan Password Kembali"
                    className="form-control"
                    value={values.password2}
                    onChange={handleChange}
                  />
                  {errors.password2 && <p style={{ color: "red", fontSize: "12px" }}>{errors.password2}</p>}
                </Col>
              </Row>

              <button className="btn btn-primary mt-5" type="submit">
                Submit
              </button>
            </form>
          </Card.Body>
        </Card>
      </Layout>
    </div>
  );
}
