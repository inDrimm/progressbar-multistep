import Header from "./Header";
import Footer from "./Footer";
import Head from "next/head";
import { Container } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

export default function Layout(props) {
  // const dispatch = useDispatch();
  return (
    <div>
      <Head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>Progress</title>
        <link rel="icon" href="./img/favicon.ico" />

        <link rel="stylesheet" href="https://unpkg.com/@progress/kendo-theme-bootstrap@latest/dist/all.css"></link>
        {/* <link
          href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
          rel="stylesheet"
          integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T"
          crossorigin="anonymous"
        ></link> */}
      </Head>
      <Header></Header>
      <Container>{props.children}</Container>
      <Footer></Footer>
    </div>
  );
}
