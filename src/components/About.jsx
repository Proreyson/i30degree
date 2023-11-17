import Teami30 from "../assets/Team.jpg";

function About() {
  return (
    <>
      <div className="main" id="about">
        <h2>ABOUT US</h2>

        <div className="container">
          <div className="row">
            <div
              className="col-md-6"
              
          
              
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
            <div
              className="col-md-12 mt-3"
            
             
            
            >
              <img
                src={Teami30}
                className="img-fluid"
                width={1000}
                alt="teami30degree"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default About;
