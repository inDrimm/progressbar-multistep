import React from "react";

import { Col, Row, Card, Form, Accordion } from "react-bootstrap";

import Viewer, { Worker } from "@phuocng/react-pdf-viewer";
import "@phuocng/react-pdf-viewer/cjs/react-pdf-viewer.css";

export const LihatDokumen = (
  <div>
    <Card className="mt-2" style={{ width: "1250px", marginLeft: "-65px" }}>
      <Form.Row>
        <Col xs={12} md={6}>
          <Card.Header
            style={{
              textAlign: "center",
              color: "#0fa49e",
              marginBottom: "0.5rem",
            }}
          >
            <b>DOCUMENT ASAL</b>
          </Card.Header>
          <Card className="mb-2">
            <Worker workerUrl="https://unpkg.com/pdfjs-dist@2.5.207/build/pdf.worker.js">
              <div id="pdfviewer">
                {/* Internal pdf file load */}
                {/* <Viewer fileUrl="/file/surat_kesehatan.pdf" /> */}
                {/* External pdf file load. Uncomment below viewer to  external source and comment out the above viewer */}
                <Viewer fileUrl="https://cors-anywhere.herokuapp.com/http://www.africau.edu/images/default/sample.pdf" />
              </div>
            </Worker>
          </Card>
        </Col>
        <Col xs={12} md={6} style={{ borderLeft: "2px solid #0fa49e" }}>
          <Card.Header
            style={{
              textAlign: "center",
              color: "#0fa49e",
              marginBottom: "0.5rem",
            }}
          >
            <b>DOCUMENT COMPARISON</b>
          </Card.Header>
          <Card className="mb-2 mr-1">
            <Accordion defaultActiveKey="0">
              <Accordion.Toggle as={Card.Header} className="accordion-header" eventKey="1">
                Dokumen 1
              </Accordion.Toggle>
              <Accordion.Collapse eventKey="1">
                <Worker workerUrl="https://unpkg.com/pdfjs-dist@2.5.207/build/pdf.worker.js">
                  <div id="pdfviewer">
                    {/* Internal pdf file load */}
                    {/* <Viewer fileUrl="/file/surat_kesehatan.pdf" /> */}
                    {/* External pdf file load. Uncomment below viewer to  external source and comment out the above viewer */}
                    <Viewer fileUrl="https://cors-anywhere.herokuapp.com/http://www.africau.edu/images/default/sample.pdf" />
                  </div>
                </Worker>
              </Accordion.Collapse>
              {/* 2 */}
              <Accordion.Toggle as={Card.Header} className="accordion-header" eventKey="2">
                Dokumen 2
              </Accordion.Toggle>
              <Accordion.Collapse eventKey="2">
                <Worker workerUrl="https://unpkg.com/pdfjs-dist@2.5.207/build/pdf.worker.js">
                  <div id="pdfviewer">
                    {/* Internal pdf file load */}
                    {/* <Viewer fileUrl={filePDF} /> */}
                    {/* External pdf file load. Uncomment below viewer to  external source and comment out the above viewer */}
                    <Viewer fileUrl="https://cors-anywhere.herokuapp.com/http://www.africau.edu/images/default/sample.pdf" />
                  </div>
                </Worker>
              </Accordion.Collapse>
              {/* 3 */}
              <Accordion.Toggle as={Card.Header} className="accordion-header" eventKey="3">
                Dokumen 3
              </Accordion.Toggle>
              <Accordion.Collapse eventKey="3">
                <Worker workerUrl="https://unpkg.com/pdfjs-dist@2.5.207/build/pdf.worker.js">
                  <div id="pdfviewer">
                    {/* Internal pdf file load */}
                    {/* <Viewer fileUrl={filePDF} /> */}
                    {/* External pdf file load. Uncomment below viewer to  external source and comment out the above viewer */}
                    <Viewer fileUrl="https://cors-anywhere.herokuapp.com/http://www.africau.edu/images/default/sample.pdf" />
                  </div>
                </Worker>
              </Accordion.Collapse>
              {/* 4 */}
              <Accordion.Toggle as={Card.Header} className="accordion-header" eventKey="4">
                Dokumen 4
              </Accordion.Toggle>
              <Accordion.Collapse eventKey="4">
                <Worker workerUrl="https://unpkg.com/pdfjs-dist@2.5.207/build/pdf.worker.js">
                  <div id="pdfviewer">
                    {/* Internal pdf file load */}
                    {/* <Viewer fileUrl={filePDF} /> */}
                    {/* External pdf file load. Uncomment below viewer to  external source and comment out the above viewer */}
                    <Viewer fileUrl="https://cors-anywhere.herokuapp.com/http://www.africau.edu/images/default/sample.pdf" />
                  </div>
                </Worker>
              </Accordion.Collapse>
              {/* 5 */}
              <Accordion.Toggle as={Card.Header} className="accordion-header" eventKey="5">
                Dokumen 5
              </Accordion.Toggle>
              <Accordion.Collapse eventKey="5">
                <Worker workerUrl="https://unpkg.com/pdfjs-dist@2.5.207/build/pdf.worker.js">
                  <div id="pdfviewer">
                    {/* Internal pdf file load */}
                    {/* <Viewer fileUrl={filePDF} /> */}
                    {/* External pdf file load. Uncomment below viewer to  external source and comment out the above viewer */}
                    <Viewer fileUrl="https://cors-anywhere.herokuapp.com/http://www.africau.edu/images/default/sample.pdf" />
                  </div>
                </Worker>
              </Accordion.Collapse>
              {/* 6 */}
              <Accordion.Toggle as={Card.Header} className="accordion-header" eventKey="6">
                Dokumen 6
              </Accordion.Toggle>
              <Accordion.Collapse eventKey="6">
                <Worker workerUrl="https://unpkg.com/pdfjs-dist@2.5.207/build/pdf.worker.js">
                  <div id="pdfviewer">
                    {/* Internal pdf file load */}
                    {/* <Viewer fileUrl={filePDF} /> */}
                    {/* External pdf file load. Uncomment below viewer to  external source and comment out the above viewer */}
                    <Viewer fileUrl="https://cors-anywhere.herokuapp.com/http://www.africau.edu/images/default/sample.pdf" />
                  </div>
                </Worker>
              </Accordion.Collapse>
              {/* 7 */}
              <Accordion.Toggle as={Card.Header} className="accordion-header" eventKey="7">
                Dokumen 7
              </Accordion.Toggle>
              <Accordion.Collapse eventKey="7">
                <Worker workerUrl="https://unpkg.com/pdfjs-dist@2.5.207/build/pdf.worker.js">
                  <div id="pdfviewer">
                    {/* Internal pdf file load */}
                    {/* <Viewer fileUrl={filePDF} /> */}
                    {/* External pdf file load. Uncomment below viewer to  external source and comment out the above viewer */}
                    <Viewer fileUrl="https://cors-anywhere.herokuapp.com/http://www.africau.edu/images/default/sample.pdf" />
                  </div>
                </Worker>
              </Accordion.Collapse>
            </Accordion>
          </Card>
        </Col>
      </Form.Row>
      {/*   */}
    </Card>
  </div>
);
