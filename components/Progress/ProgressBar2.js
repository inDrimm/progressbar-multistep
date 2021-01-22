import React from "react";
import Layout from "../Layout";
import StepProgressBar from "react-step-progress";
import "react-step-progress/dist/index.css";
import { Card, Row, Col, Form } from "react-bootstrap";
import { FaCheckCircle, FaTimesCircle } from "react-icons/fa";
import { ResumeData } from "./content/resumeData";

export default function MonitProgress() {
  const selectOptions = {
    jenisPenyakit: ["--- Pilih Jenis Penyakit ---", "Penyakit 1", "Penyakit 2"],
    kategoriPenyakit: ["--- Kategori Penyakit ---", "Kategori 1", "Kategori 2"],
    status: ["--- Pilih Status ---", "Status A", "Status B"],
    lokasiPerawatan: ["--- Lokasi Perawatan ---", "Lokasi A", "Lokasi B"],
  };
  // setup the step content
  const step1Content = (
    <Card>
      <Card.Body>
        <Form>
          <Form.Row>
            <Col xs={10} md={5}>
              <Form.Group controlId="exampleForm.ControlSelect1">
                <Form.Label>Jenis Penyakit</Form.Label>
                <Form.Control size="lg" as="select">
                  {selectOptions.jenisPenyakit.map((data) => {
                    return <option>{data}</option>;
                  })}
                </Form.Control>
              </Form.Group>
            </Col>
            <Col xs={2} md={1} lg={1}>
              <FaCheckCircle style={{ marginTop: "2rem", marginLeft: "0.7rem" }} size="2rem" color="green" />
            </Col>
            <Col xs={10} md={5}>
              <Form.Group>
                <Form.Label>Lokasi Rumah</Form.Label>
                <div className="mr-0" style={{ display: "flex" }}>
                  <Form.Control size="lg" style={{ width: "100%" }} type="text" placeholder="Lokasi Rumah A" required />
                </div>
              </Form.Group>
            </Col>
            <Col xs={2} md={1} lg={1}>
              <FaCheckCircle style={{ marginTop: "2rem", marginLeft: "0.7rem" }} size="2rem" color="green" />
            </Col>
          </Form.Row>

          <Form.Row>
            <Col className="mr-0" xs={10} md={5}>
              <Form.Group controlId="exampleForm.ControlSelect1">
                <Form.Label>Kategori</Form.Label>
                <Form.Control as="select" size="lg">
                  {selectOptions.kategoriPenyakit.map((data) => {
                    return <option>{data}</option>;
                  })}
                </Form.Control>
              </Form.Group>
            </Col>
            <Col xs={2} md={1} lg={1}>
              <FaCheckCircle style={{ marginTop: "2rem", marginLeft: "0.7rem" }} size="2rem" color="green" />
            </Col>
            <Col xs={10} md={5}>
              <Form.Group controlId="exampleForm.ControlSelect1">
                <Form.Label>Status</Form.Label>
                <Form.Control as="select" size="lg">
                  {selectOptions.status.map((data) => {
                    return <option>{data}</option>;
                  })}
                </Form.Control>
              </Form.Group>
            </Col>
            <Col xs={2} md={1} lg={1}>
              <FaCheckCircle style={{ marginTop: "2rem", marginLeft: "0.7rem" }} size="2rem" color="green" />
            </Col>
          </Form.Row>

          <Form.Row>
            <Col xs={10} md={5}>
              <Form.Group>
                <Form.Label className="">Tanggal Penetapan Kategori</Form.Label>
                <Form.Control type="date" name="dob" placeholder="Date of Birth" />
              </Form.Group>
            </Col>
            <Col xs={2} md={1} lg={1}>
              <FaCheckCircle style={{ marginTop: "2rem", marginLeft: "0.7rem" }} size="2rem" color="green" />
            </Col>
            <Col xs={10} md={5}>
              <Form.Group>
                <Form.Label className="">Tanggal Status</Form.Label>
                <Form.Control type="date" name="dob" placeholder="Date of Birth" />
              </Form.Group>
            </Col>
            <Col xs={2} md={1} lg={1}>
              <FaCheckCircle style={{ marginTop: "2rem", marginLeft: "0.7rem" }} size="2rem" color="green" />
            </Col>
          </Form.Row>

          <Form.Row>
            <Col xs={10} md={5}>
              <Form.Group controlId="exampleForm.ControlSelect1">
                <Form.Label>Lokasi Perawatan</Form.Label>
                <Form.Control size="lg" as="select">
                  {selectOptions.lokasiPerawatan.map((data) => {
                    return <option>{data}</option>;
                  })}
                </Form.Control>
              </Form.Group>
            </Col>
            <Col xs={2} md={1} lg={1}>
              <FaCheckCircle style={{ marginTop: "2rem", marginLeft: "0.7rem" }} size="2rem" color="green" />
            </Col>
            <Col xs={10} md={5}>
              <Form.Group>
                <Form.Label>Keterangan</Form.Label>
                <div className="" style={{ display: "flex" }}>
                  <Form.Control size="lg" style={{ width: "100%" }} type="text" placeholder="Keterangan A" required />
                </div>
              </Form.Group>
            </Col>
            <Col xs={2} md={1} lg={1}>
              <FaCheckCircle style={{ marginTop: "2rem", marginLeft: "0.7rem" }} size="2rem" color="green" />
            </Col>
          </Form.Row>

          <Form.Row>
            <Col xs={10} md={5}>
              <Form.Group>
                <Form.Label className="">Rumah Sakit</Form.Label>
                <Form.Control size="lg" type="text" placeholder="Rumah Sakit A" />
              </Form.Group>
            </Col>
            <Col xs={2} md={1} lg={1}>
              <FaCheckCircle style={{ marginTop: "2rem", marginLeft: "0.7rem" }} size="2rem" color="green" />
            </Col>
            <Col xs={10} md={5}>
              <Form.Group controlId="nip">
                <Form.Label className="">Dokumen Kesehatan</Form.Label>
                {/* <a href="../../../../../file/surat_kesehatan.pdf" download> */}
                <div className="input-group">
                  <Form.Control type="text" className="custominput" defaultValue="surat_kesehatan.pdf" />
                </div>
                {/* </a> */}
              </Form.Group>
            </Col>
            <Col xs={2} md={1} lg={1}>
              <FaCheckCircle style={{ marginTop: "2rem", marginLeft: "0.7rem" }} size="2rem" color="green" />
            </Col>
          </Form.Row>
        </Form>
      </Card.Body>
    </Card>
  );
  const step2Content = <h5>Step 2 Content</h5>;
  const step3Content = <h5>Step 3 Content</h5>;

  // setup step validators, will be called before proceeding to the next step
  function step2Validator() {
    // return a boolean
    alert("Step 2 completed!");
  }

  function step3Validator() {
    // return a boolean
  }

  function onFormSubmit() {
    // handle the submit logic here
    // This function will be executed at the last step
    // when the submit button (next button in the previous steps) is pressed
  }
  return (
    <div>
      <Layout>
        <Card.Header style={{ textAlign: "center", marginTop: "15px" }}>
          <h4>Progress Bar 2</h4>
        </Card.Header>
        <StepProgressBar
          startingStep={0}
          onSubmit={onFormSubmit}
          steps={[
            {
              label: "Step 1",
              subtitle: "10%",
              name: "step 1",
              content: step1Content,
            },
            {
              label: "Step 2",
              subtitle: "50%",
              name: "step 2",
              content: step2Content,
              //   validator: step2Validator,
            },
            {
              label: "Step 3",
              subtitle: "75%",
              name: "step 3",
              content: step3Content,
              //   validator: step3Validator,
            },
            {
              label: "Step 4",
              subtitle: "100%",
              name: "step 4",
              content: step3Content,
              //   validator: step3Validator,
            },
          ]}
        />
      </Layout>
    </div>
  );
}
