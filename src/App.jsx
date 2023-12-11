import "./App.css";
import Header from "./header";
import Footer from "./footer";
import { Outlet } from "react-router";
import Container from "./container";

function App() {
  return (
    <>
      <Header />

      <Container>
        <Outlet />
      </Container>

      <Footer></Footer>
    </>
  );
}

export default App;
