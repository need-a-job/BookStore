import { FunctionComponent } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

import {Facebook} from "react-bootstrap-icons";
import {Twitter} from "react-bootstrap-icons"
import {Google} from "react-bootstrap-icons"
import {Instagram} from "react-bootstrap-icons"
import {Linkedin} from "react-bootstrap-icons"
import {Github} from "react-bootstrap-icons"

interface FooterProps {}

const Footer: FunctionComponent<FooterProps> = () => {
    return (
        <footer className="bg-dark text-center text-white">
      
        <div className="container p-4 pb-0">
        
        <section className="mb-4">
            
            <a className="btn btn-outline-light btn-floating m-1" href="#!" role="button"
            ><i><Facebook /></i></a>

            
            <a className="btn btn-outline-light btn-floating m-1" href="#!" role="button"
            ><i><Twitter /></i></a>

            
            <a className="btn btn-outline-light btn-floating m-1" href="#!" role="button"
            ><i ><Google /></i></a>

        
            <a className="btn btn-outline-light btn-floating m-1" href="#!" role="button"
            ><i><Instagram /></i></a>

            
            <a className="btn btn-outline-light btn-floating m-1" href="#!" role="button"
            ><i><Linkedin /></i></a>

        
            <a className="btn btn-outline-light btn-floating m-1" href="#!" role="button"
            ><i><Github /></i></a>
        </section>
        
        </div>

        <div className="text-center p-3">
        © 2023 Copyright: roei prints
        <a className="text-white" href="https://mdbootstrap.com/">roeiprints.com</a>
        </div>
    
        </footer>
    );
};

export default Footer;
