function Contact() {
  return (
    <>
      <div className="container mt-5" id="contact">
        <div className="row">
          <div
            className="col-lg-7"
           
           
          >
            <h5 className="m-3 fw-bold"> Get in touch, let's talk.</h5>
            <p className="m-3">
              Feel free to send me an{" "}
              <a
                className="no-decoration"
                href="mailto:j.marajas@gmail.com"
                style={{ fontWeight: "bold", color: "rgb(8, 138, 252)", textDecoration: "none" }}
              >
                email
              </a>{" "}
              or schedule a{" "}
              <a
                className="no-decoration"
                href="https://calendly.com/r3ys0ncarpio14/30min"
                style={{ fontWeight: "bold", color: "rgb(8, 138, 252)", textDecoration: "none" }}
              >
                free consultation
              </a>{" "}
              with me.
            </p>

            <div className="sm-md m-3">
              <h2 className="text-secondary">
                {" "}
                Have a question? Please enquire below{" "}
              </h2>
              <form action="#">
                <div className="m-3">
                  <div className="form-floating mb-3">
                    <input
                      type="text"
                      className="form-control"
                      id="floatingInput"
                      placeholder="name@example.com"
                    />
                    <label for="floatingInput">Name</label>
                  </div>
                  <div className="form-floating">
                    <input
                      type="email"
                      className="form-control"
                      id="floatingPassword"
                      placeholder="Name"
                    />
                    <label for="floatingPassword">Email address</label>
                    <div id="emailHelp" className="form-text text-secondary">
                      We'll never share your email with anyone else.
                    </div>
                  </div>

                  <div className="form-floating mt-3">
                    <textarea
                      className="form-control"
                      id="floatingTextarea"
                    ></textarea>
                    <label for="floatingTextarea">Comments</label>
                  </div>

                  <div className="mt-3 text-secondary">
                    <p id="Privacy">
                      By using this form you agree with the storage and handling
                      of your data by this website. Please read our{" "}
                      <a href="#">
                        <u>Privacy Policy</u>
                      </a>{" "}
                      for more information on how we handle your data.
                    </p>

                    <div className="form-check" id="form-check">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        value=""
                        id="flexCheckDefault"
                      />
                      <label
                        className="form-check-label"
                        for="flexCheckDefault"
                      >
                        I agree
                      </label>
                    </div>
                    <button
                      type="button"
                      style={{color: "rgb(8, 138, 252)", background: "rgb(8, 138, 252)"}}
                      className="btn btn-secondary text-white"
                      formTarget="#"
                    >
                      Submit
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>

          <div
            className="col-lg-5"
            
            
            
          >
            <div style={{ position: "relative" }}>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1934.9573050063595!2d121.18714994453069!3d14.082217810937594!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33bd69d02dcb4ffd%3A0x935d175c92aa1555!2si30%20Degree%20Engineering%20Services%20%26%20Industrial%20Supplies%20Trading!5e0!3m2!1sen!2sph!4v1699296682413!5m2!1sen!2sph"
                width="100%"
                height="450"
                style={{ border: "0" }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Contact;
