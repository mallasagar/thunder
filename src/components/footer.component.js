import React from 'react'
import "./footer.css"

function Myfooter() {
  return (
    <> 
        <div className="container-fluid mt-5 mb-1 bg-dark ">
            <footer
                    className="text-center text-lg-start text-white"
                    style={{backgroundcolor: "#929fba"}}
                    >
              <div className="container p-4 pb-0">
                <section className="">
                  <div className="row">
                    <div className="col-md-3 col-lg-3 col-xl-3 mx-auto mt-3">
                      <h4 className="text-uppercase mb-4 font-weight-bold">
                        GYMN HOUSE
                      </h4>
                      <h4>
                     <h4>
                        Time
                      </h4>
                      <h6 >In Morning: 5 am to 11 am </h6>
                      <h6> In Evening: 4 pm to 10 pm </h6>

                      </h4>
                    </div>

                    <hr className="w-100 clearfix d-md-none" />

                    <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mt-3">
                      <h6 className="text-uppercase mb-4 font-weight-bold">Packages</h6>
                      <p>
                        <a className="text-white">Silver</a>
                      </p>
                      <p>
                        <a className="text-white">Bronze</a>
                      </p>
                      <p>
                        <a className="text-white">Gold</a>
                      </p>
                      <p>
                        <a className="text-white">Platinum</a>
                      </p>
                    </div>

                    <hr className="w-100 clearfix d-md-none" />
                    <hr className="w-100 clearfix d-md-none" />


                    <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mt-3">
                      <h6 className="text-uppercase mb-4 font-weight-bold">Contact</h6>
                      <p><i className="fas fa-home mr-3"></i> Imadol, Lalitpur Nepal</p>
                      <p><i className="fas fa-envelope mr-3"></i> mallasagar0101@gmail.com</p>
                      <p><i className="fas fa-phone mr-3"></i> + 01 234 567 88</p>
                      <p><i className="fas fa-print mr-3"></i> + 01 234 567 89</p>
                    </div>

                    <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mt-3">
                      <h6 className="text-uppercase mb-4 font-weight-bold">Follow us</h6>

                      <a
                        className="btn btn-primary btn-floating m-1"
                        style={{backgroundColor: "#3b5998"}}
                        href="#!"
                        role="button"
                        ><i className="fab fa-facebook-f"></i
                        ></a>

                      <a
                        className="btn btn-primary btn-floating m-1"
                        style={{backgroundcolor:" #55acee"}}
                        href="#!"
                        role="button"
                        ><i className="fab fa-twitter"></i
                        ></a>

                      <a
                        className="btn btn-primary btn-floating m-1"
                        style={{backgroundcolor:" #dd4b39"}}
                        href="#!"
                        role="button"
                        ><i className="fab fa-google"></i
                        ></a>

                      <a
                        className="btn btn-primary btn-floating m-1"
                        style={{backgroundcolor: "#ac2bac"}}
                        href="#!"
                        role="button"
                        ><i className="fab fa-instagram"></i
                        ></a>

                      <a
                        className="btn btn-primary btn-floating m-1"
                        style={{backgroundcolor: "#0082ca"}}
                        href="#!"
                        role="button"
                        ><i className="fab fa-linkedin-in"></i
                        ></a>
                      <a
                        className="btn btn-primary btn-floating m-1"
                        style={{backgroundcolor: "#333333"}}
                        href="#!"
                        role="button"
                        ><i className="fab fa-github"></i
                        ></a>
                    </div>
                  </div>
                </section>
              </div>
              <hr style = {{color:"white", height:"2px"}} />
            
              <div
                  className="text-center p-3"
                  style={{backgroundcolor: "rgba(0, 0, 0, 0.2)"}}
                  >
                © 2020 Copyright:
                <a className="text-white" href="https://mdbootstrap.com/"
                  >sagarmalla0101@gmail.com</a
                  >
              </div>
            </footer>
    </div>
    </>
  )
}

export default Myfooter