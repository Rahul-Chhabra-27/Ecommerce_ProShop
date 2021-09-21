import { Fragment } from "react";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import { Container } from "react-bootstrap";

function App() {
  return (
    <Fragment>
      <Header />
      <main className="py-3">
        <Container>
          <h1>Welcome to ProShop</h1>
        </Container>
      </main>
      <Footer />
    </Fragment>
  );
}

export default App;
