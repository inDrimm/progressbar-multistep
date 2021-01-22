import React from "react";
import Layout from "../Layout";
import StepProgressBar from "react-step-progress";
import "react-step-progress/dist/index.css";
import { Card, Row, Col, Form } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { FaCheckCircle } from "react-icons/fa";

export default function Progress4() {
  const { register, handleSubmit, watch, errors } = useForm();
  const onSubmit = (data) => {
    alert(JSON.stringify(data));
  }; // your form submit function which will invoke after successful validation

  console.log(watch("example")); // you can watch individual input by pass the name of the input

  return (
    <div>
      <Layout>
        <Card>
          <Card.Header style={{ textAlign: "center", marginTop: "15px" }}>
            <h4>Validation 1</h4>
          </Card.Header>
          <Card.Body>
            <form onSubmit={handleSubmit(onSubmit)}>
              <Row>
                <Col md={5}>
                  <label>Example</label>
                  <input type="text" name="example" className="form-control" ref={register({ required: true, maxLength: 10 })} />
                  {errors.example && <p style={{ color: "red", fontSize: "12px" }}>Field Harus Terisi</p>}
                </Col>
                <FaCheckCircle />
                <Col md={5}>
                  <label>ExampleRequired</label>
                  <input name="exampleRequired" className="form-control" ref={register({ required: true, maxLength: 10 })} />
                  {errors.exampleRequired && <p style={{ color: "red", fontSize: "12px" }}>Field Harus Terisi</p>}
                </Col>
              </Row>
              <input type="submit" />
            </form>
          </Card.Body>
        </Card>
      </Layout>
    </div>
  );
}
