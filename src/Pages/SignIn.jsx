import React from "react";
import {
  MDBBtn,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBInput,
  MDBIcon,
  MDBCheckbox,
} from "mdb-react-ui-kit";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import "../Css/Signin.css";

function Signin() {
  const navigate = useNavigate(); // Initialize useNavigate

  const handleRegisterClick = () => {
    navigate("/signup"); // Navigate to the signup route
  };

  return (
    <MDBContainer
      fluid
      style={{
        background: "linear-gradient(147deg, #f9fcff 0%, #dee4ea 74%)",
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <MDBRow className="d-flex justify-content-center align-items-center">
        <MDBCol col="12" className="d-flex justify-content-center">
          <MDBCard
            className="bg-white my-5"
            style={{ borderRadius: "1rem", maxWidth: "500px" }}
          >
            <MDBCardBody className="p-5">
              <h2 className="fw-bold mb-2 text-center">Sign in</h2>
              <p className="text-white-50 mb-3 text-center">
                Please enter your login and password!
              </p>
              <MDBInput
                wrapperClass="mb-4"
                label="Email address"
                id="formControlLg"
                type="email"
                size="lg"
              />
              <div className="d-flex flex-column">
                <MDBInput
                  wrapperClass="mb-4"
                  label="Password"
                  id="formControlLg"
                  type="password"
                  size="lg"
                />
                <span
                  style={{
                    alignSelf: "flex-end",
                    marginTop: "-20px",
                    color: "#007bff",
                    cursor: "pointer",
                  }}
                >
                  Forget Password
                </span>
              </div>
              <MDBCheckbox
                name="flexCheck"
                id="flexCheckDefault"
                className="mb-4"
                label="Remember password"
              />
              <MDBBtn size="lg" className="w-100">
                Login
              </MDBBtn>
              <hr className="my-4" />

 
  
              <h4
                className="register-text"
                style={{
                  textAlign: "center",
                  marginTop: "20px",
                  fontWeight: "bold",
                  color: "#007bff",
                  cursor: "pointer",
                }}
              >
                Don't have an account?{" "}
                <span onClick={handleRegisterClick} style={{}}>
                  Register
                </span>
              </h4>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
}

export default Signin;
