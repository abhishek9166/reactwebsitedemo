import React,{useState} from 'react'
import logo from "./assets/Images/logo.png"
import { Link } from "react-router-dom";
import  { Modal } from "react-bootstrap";



const Navbar = () => {

    const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

    return (
        <>
            <div className="header">
                <nav className="navbar navbar-expand-lg " style={{ justifyContent: 'center', display: 'flex',flexDirection:'column',flexWrap:'wrap', textAlign: 'center' }}>
                    <Link  to="/" className="navbar-brand" >
                        <img src={logo} alt="logo" width='100'></img>
                    </Link>

                    <p className="top">WWW.RATETODAY.CLUB</p>

                    <div className="navbar-nav">

                        <Link to="/Ourdetails" className="nav-item nav-link">
                            Our Details <i className="fa fa-info"></i>
                        </Link>
                        <Link to="/CustomerRgistration" className="nav-item nav-link">
                            Customer Registration <i className="fa fa-user"></i>
                        </Link>

                        <Link to="/DsaRegi" className="nav-item nav-link">
                            DSA Registration <i className="fa fa-user"></i>
                        </Link>

                        <Link to="/VenderRegi" className="nav-item nav-link">
                            Vendor Registration <i className="fa fa-user"></i>
                        </Link>

                        <Link to="/Placeorder" className="nav-item nav-link">
                            How to place order <i className="fa fa-shopping-cart "></i>
                        </Link>

                        <Link to="" className="nav-item nav-link" data-toggle="modal" data-target="#exampleModalCenter"
                                    onClick={handleShow}>
                             Download Price List  <i class="fa fa-download"></i>                              
                        </Link> 


    <Modal show={show} onHide={handleClose}
            aria-labelledby="contained-modal-title-vcenter"
            centered>
        <Modal.Header closeButton>Download Price List
        </Modal.Header>
        
        <div className="modal-body p-4">

            <div className="img-modal">
                <img src={logo} alt="logo" width='100'/>
            </div>


            <form className="mt-1 mb-4">
                <div className="form-group w-75 m-auto ">
                    <input type="text" className="form-control" placeholder="contact"/>
                </div>
                <div class="form-group modal_f w-75 m-auto">
	            	<button type="button" id="send_otp_f" class="form-control btn btn-primary send_otp  ">Send OTP</button>
	            </div>
            </form>

        </div>
        
    </Modal>

 </div>



                </nav>


            </div>

           



        </>
    )
}

export default Navbar;