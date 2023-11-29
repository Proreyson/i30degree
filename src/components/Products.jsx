import EngineerAndConsultancy from "./EngineerAndConsultancy";
import Preventive from "./Preventive";
import ConstructionAndInstallation from "./ConstructionAndInstallation";
import Fabrication from "./Fabrication";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

function Product() {
  return (
    <>
      <div className="main">
        <section className="product" id="product">
          <h2>PRODUCT</h2>
          <div className="m-3">
            <nav className="navbar navbar-expand-lg">
              <div className="container-fluid" id="productnav">
                <Link to="/engineering&consultancy">
                  {" "}
                  <a className="navbar-brand">Engineering & Consultancy</a>
                </Link>
                <Link to="/construction&installation">
                  {" "}
                  <a className="navbar-brand">Construction & Installation</a>
                </Link>
                <Link to="/preventivemaintenance">
                  {" "}
                  <a className="navbar-brand">Preventive Maintenance</a>
                </Link>
                <Link to="/fabrication">
                  {" "}
                  <a className="navbar-brand">Fabrication</a>
                </Link>
              </div>
            </nav>
            <Routes>
              <Route
                path="/engineering&consultancy"
                element={<EngineerAndConsultancy />}
              />
              <Route
                path="/construction&installation"
                element={<ConstructionAndInstallation />}
              />
              <Route path="/preventivemaintenance" element={<Preventive />} />
              <Route path="/fabrication" element={<Fabrication />} />
            </Routes>
          </div>
        </section>
      </div>
    </>
  );
}

export default Product;
