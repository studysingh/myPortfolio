import "./App.css";
import Header from "./header";
import Footer from "./footer";
import { Outlet } from "react-router";

function App() {
  return (
    <>
      <Header></Header>
      <Outlet />
      <Footer></Footer>
    </>
  );
}

export default App;
