import React from "react";
import Layout from "../Layout";
import { Card, Row, Form, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { LihatDokumen } from "./content/lihatDokumen";

export default function Progress2() {
  return (
    <div>
      <Layout>{LihatDokumen}</Layout>
    </div>
  );
}
