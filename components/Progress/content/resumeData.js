import * as React from "react";
import { Col, Row, Card } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { Field } from "@progress/kendo-react-form";
import { FormInput, FormUpload, FormDropDownList, FormDatePicker } from "./form-components";

import { formInput, pilihKategori, pilihStatus } from "./validator";

const jenisPenyakit = ["", "Flu", "Batuk", "Tipes"];
const kategoriPenyakit = ["", "Menular", "Tidak Menular"];
const status = ["", "PNS", "Non PNS"];
const lokasiPerawatan = ["", "Rumah Sakit", "Puskesmas", "Rumah"];

export const ResumeData = (
  <div>
    <Card>
      <Card.Body>
        <Row>
          <Col xs={12} md={6}>
            <Field
              key={"jenispenyakit"}
              id={"jenispenyakit"}
              name={"jenispenyakit"}
              label={"Jenis Penyakit"}
              component={FormDropDownList}
              // validator={dropDownList}
              data={jenisPenyakit}
              as={"select"}
              defaultValue=""
            />
          </Col>
          <Col xs={12} md={6}>
            <Field key={"lokasirumah"} id={"lokasirumah"} name={"lokasirumah"} label={"Lokasi Rumah"} type={"text"} component={FormInput} validator={formInput} defaultValue={""} />
          </Col>
        </Row>
        <Row>
          <Col xs={12} md={6}>
            <Field
              key={"kategori"}
              id={"kategori"}
              name={"kategori"}
              label={"Kategori"}
              component={FormDropDownList}
              validator={pilihKategori}
              data={kategoriPenyakit}
              as={"select"}
              defaultValue=""
            />
          </Col>
          <Col xs={12} md={6}>
            <Field key={"status"} id={"status"} name={"status"} label={"Status"} component={FormDropDownList} validator={pilihStatus} data={status} as={"select"} defaultValue="" />
          </Col>
        </Row>
        <Row>
          <Col xs={12} md={6}>
            <Field
              key={"tglkategori"}
              id={"tglkategori"}
              name={"tglkategori"}
              label={"Tanggal Penetapan Katgeori"}
              component={FormDatePicker}
              validator={formInput}
              defaultValue=""
            />
          </Col>
          <Col xs={12} md={6}>
            <Field key={"tglstatus"} id={"tglstatus"} name={"tglstatus"} label={"Tanggal Status"} component={FormDatePicker} validator={formInput} defaultValue="" />
          </Col>
        </Row>
        <Row>
          <Col xs={12} md={6}>
            <Field
              key={"lokperawatan"}
              id={"lokperawatan"}
              name={"lokperawatan"}
              label={"Lokasi Perawatan"}
              component={FormDropDownList}
              data={lokasiPerawatan}
              as={"select"}
              defaultValue=""
            />
          </Col>
          <Col xs={12} md={6}>
            <Field key={"keterangan"} id={"keterangan"} name={"keterangan"} label={"Keterangan"} component={FormInput} validator={formInput} />
          </Col>
        </Row>
        <Row>
          <Col xs={12} md={6}>
            <Field key={"rumahsakit"} id={"rumahsakit"} name={"rumahsakit"} label={"Rumah Sakit"} component={FormInput} validator={formInput} />
          </Col>
          <Col xs={12} md={6}>
            <Field key={"dokkesehatan"} id={"dokkesehatan"} name={"dokkesehatan"} label={"Dokumen Kesehatan"} component={FormInput} validator={formInput} />
          </Col>
        </Row>
      </Card.Body>
    </Card>
  </div>
);
