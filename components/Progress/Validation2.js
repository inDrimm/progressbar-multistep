import React, { useState } from "react";
import Layout from "../Layout";
import StepProgressBar from "react-step-progress";
import "react-step-progress/dist/index.css";
import { Card, Row, Col, Form } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { FaCheckCircle } from "react-icons/fa";

export default function Progress5() {
  const [validationMessages, setValidationMessages] = useState([]);
  const [formData, setFormData] = useState({});
  const handleChange = ({ target }) => {
    setFormData({ ...formData, [target.name]: target.value });
  };
  const handleClick = (evt) => {
    validateForm();
    if (validationMessages.length > 0) {
      evt.preventDefault();
    }
  };
  const validateForm = () => {
    const { firstName, lastName, DOB, gender } = formData;
    setValidationMessages([]);
    let messages = [];
    if (!firstName) {
      messages.push("First Name is required");
    }
    if (!lastName) {
      messages.push("Last Name is required");
    }
    if (!gender) {
      messages.push("Please select a Gender");
    }
    if (!DOB) {
      messages.push("Date of Birth is required");
    }
    setValidationMessages(messages);
  };
  return (
    <div>
      <Layout>
        <Card>
          <Card.Header style={{ textAlign: "center", marginTop: "15px" }}>
            <h4>Validation 2</h4>
          </Card.Header>
          <Card.Body>
            <form>
              <Row>
                <div style={{ display: "flex", flexDirection: "row" }}>
                  <form style={{ display: "flex", flexDirection: "column" }}>
                    <label>First Name</label>
                    <input value={formData.firstName || ""} onChange={handleChange} type="text" name="firstName" />
                    <label>Last Name</label>
                    <input value={formData.lastName || ""} onChange={handleChange} type="text" name="lastName" />
                    <label>Date of Birth</label>
                    <input value={formData.DOB || ""} onChange={handleChange} type="datetime-local" name="DOB" />
                    <label>Gender</label>
                    <div>
                      <input value="Male" checked={formData.gender === "Male"} onChange={handleChange} type="radio" name="gender" />
                      Male
                    </div>
                    <div>
                      <input value="Female" checked={formData.gender === "Female"} onChange={handleChange} type="radio" name="gender" />
                      Female
                    </div>
                    <div>
                      <input value="None" checked={formData.gender === "None"} onChange={handleChange} type="radio" name="gender" />
                      Prefer not to say
                    </div>
                    <button type="button" onClick={handleClick}>
                      Save
                    </button>
                  </form>
                  <div>
                    {validationMessages.length > 0 && <span>Validation Summary</span>}
                    <ul>
                      {validationMessages.map((vm) => (
                        <li key={vm}>{vm}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </Row>
            </form>
          </Card.Body>
        </Card>
      </Layout>
    </div>
  );
}
