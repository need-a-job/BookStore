import "bootstrap/dist/css/bootstrap.min.css";
import { FunctionComponent, useEffect, useState } from "react";
import { NavBar } from "./Navigate_page";
import Footer from "./Footer"
import BookCard from "./Card";
import axios from "axios";

interface HomeProps { }

const Home: FunctionComponent<HomeProps> = () => {

  return (
    <div>
      <NavBar />

      <h1 className="text-center text-white bg-dark">Home</h1>

      <div className="container">
        <div className=" d-lg-flex justify-content-lg-around ">

          <BookCard />


        </div>{" "}
        {/*row */}
      </div>{" "}
      {/*container */}
      <div className="container">
        <div className="d-lg-flex justify-content-lg-around t">
          <div className="card col">
            <img src="..." className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">Card title</h5>
              <p className="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
              <a href="#" className="btn btn-primary">
                Go somewhere
              </a>
            </div>
          </div>
          <div className="card col">
            <img src="..." className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">Card title</h5>
              <p className="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
              <a href="#" className="btn btn-primary">
                Go somewhere
              </a>
            </div>
          </div>
          <div className="card col">
            <img src="..." className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">Card title</h5>
              <p className="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
              <a href="#" className="btn btn-primary">
                Go somewhere
              </a>
            </div>
          </div>
          <div className="card col">
            <img src="..." className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">Card title</h5>
              <p className="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
              <a href="#" className="btn btn-primary">
                Go somewhere
              </a>
            </div>
          </div>
          <div className="card col">
            <img src="..." className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">Card title</h5>
              <p className="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
              <a href="#" className="btn btn-primary">
                Go somewhere
              </a>
            </div>
          </div>
        </div>{" "}
        {/*row */}
      </div>{" "}
      {/*container */}
      <Footer />
    </div>
  );
};

export default Home;
