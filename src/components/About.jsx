import Teami30 from "../assets/Team.jpg";
import Teami301 from "../assets/i30123.png";
import Teami302 from "../assets/i301234.jpg";

function About() {
  return (
    <>
      <div className="main" id="about">
        <h2>ABOUT US</h2>

        <div className="container">
          <div className="row">
            <div
              className="col-md-6"
              data-aos="zoom-in-left"
              data-aos-duration="2000"
            >
              <h1 className="i30">i30 Degree</h1>
              <p className="i30p">
                Welcome to i30 Degree Electronics Services and Industrial
                Supplies Trading! We are a renowned company specializing in
                electronics and industrial supply services, and we are committed
                to delivering quality and satisfaction to our valued customers.
              </p>
            </div>
            <div
              className="col-md-6"
              data-aos="zoom-in-right"
              data-aos-duration="2000"
            >
              <h1 className="i30">Mission</h1>
              <p className="i30p">
                At i30 Degree Electronics Services and Industrial Supplies
                Trading, our mission is to provide high-quality electronics and
                industrial products and services to maintain the efficiency and
                satisfaction of our customers. We aim to be your partner in
                success for your projects and businesses.
              </p>
            </div>
            <div className="col-md-12 mt-3">
              <div
                id="carouselExampleInterval"
                className="carousel slide"
                Name
                data-bs-ride="carousel"
              >
                <div className="carousel-inner">
                  <div className="carousel-item active" data-bs-interval="5000">
                    <img
                      src={Teami30}
                      className="img-fluid"
                      width={1200}
                      alt="teami30degree"
                    />
                  </div>
                  <div className="carousel-item" data-bs-interval="5000">
                    <img
                      src={Teami301}
                      className="img-fluid"
                      width={1200}
                      alt="teami30degree"
                    />
                  </div>
                  <div className="carousel-item">
                    <img
                      src={Teami302}
                      className="img-fluid"
                      width={1200}
                      alt="teami30degree"
                    />
                  </div>
                </div>
                <button
                  className="carousel-control-prev"
                  type="button"
                  data-bs-target="#carouselExampleInterval"
                  data-bs-slide="prev"
                >
                  <span
                    className="carousel-control-prev-icon"
                    aria-hidden="true"
                  ></span>
                  <span className="visually-hidden">Previous</span>
                </button>
                <button
                  className="carousel-control-next"
                  type="button"
                  data-bs-target="#carouselExampleInterval"
                  data-bs-slide="next"
                >
                  <span
                    className="carousel-control-next-icon"
                    aria-hidden="true"
                  ></span>
                  <span className="visually-hidden">Next</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default About;
