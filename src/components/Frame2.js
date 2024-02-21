import React, { useState } from "react";
import ImageFrame from "./ImageFrame";
import { GoogleLoginButton } from "react-social-login-buttons";

function Frame2() {
  const [show, setShow] = useState(false);
  const handleShow = () => {
    setShow(!show)
  }

  return (
    <div>
      <div id="Frame2" className="p-3">
        <div className="frame2_container d-flex text-end">
          <div
            className="frame2_content d-flex border border-secondary w-100 bg-light relative text-secondary"
            style={{ fontFamily: "Inter, sans-serif" }}
          >
            <div className="frame2_content-1 d-flex">
              <ImageFrame />
            </div>

            <div className="frame2_content-2 m-3 mt-4 justify-items-center justify-content-center mw-100">
              <div className="frame2_content-2_container">
                <header>
                  <div
                    id="exclusive"
                    className="d-flex align-content-center justify-content-between"
                  >
                    <div className="back d-flex fw-bold">
                      <p classNam1e="d-flex align-items-center justify-content-center gap-2">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="26"
                          height="26"
                          fill="currentColor"
                          class="bi bi-caret-left"
                          viewBox="0 0 1 16"
                        >
                          <path d="M10 12.796V3.204L4.519 8 10 12.796zm-.659.753l-5.48-4.796a1 1 0 0 1 0-1.506l5.48-4.796A1 1 0 0 1 11 3.204v9.592a1 1 0 0 1-1.659.753z" />
                        </svg>{" "}
                        Back
                      </p>
                    </div>

                    <div className="signin d-flex align-items-end justify-content-start  pe-5 flex-column mt-4 gap-sm">
                      <div>STEP 01/03</div>
                      <div className="span fw-bold">Personal Info.</div>
                    </div>
                  </div>
                </header>

                <div
                  className="frame2_content-2_content text-start"
                  style={{ padding: "6rem" }}
                >
                  <div
                    className="accountType d-flex flex-column mw-100"
                    style={{ alignItems: "flex-start", width: "411px" }}
                  >
                    <h3 className="join-us  fs-3 mb-3 text-dark fw-bolder">
                      Register Individual Account!
                    </h3>
                    <p
                      className="accountType-p align-self-stretch lh-md"
                      style={{ fontSize: "18px" }}
                    >
                      For the purpose of industry regulation, your details are
                      required.
                    </p>
                  </div>

                  <form action="">
                    <div className="options  d-flex flex-column text-start mb-2">
                      <p>Your fullname*</p>
                      <input
                        type="text"
                        className="option"
                        placeholder="Enter fullname"
                      />
                    </div>
                    <div className="options  d-flex flex-column text-start mb-2">
                      <p>Email address*</p>
                      <div className="d-flex justify-content-center align-items-center"></div>
                      <input
                        type="text"
                        className="option w-100"
                        placeholder="Enter email address"
                      />
                    </div>
                    <div className="options  d-flex flex-column text-start mb-2">
                      <p>Create password*</p>
                      <div className="d-flex justify-content-center align-items-center">
                        <input
                          type={show ? "text" : "password"}
                          className="option w-100"
                          placeholder="Enter password"
                        />
                        <p
                          className="fw-bold"
                          onClick={handleShow}
                          style={{ fontSize: "12px", marginTop:"12px", marginLeft: "-40px", cursor:"pointer" }}
                        >
                          {show ? "Hide" : "Show"}
                        </p>
                      </div>
                    </div>

                    <div id="checkbox" className="d-flex mt-3">
                      <br />
                      <input
                        type="checkbox"
                        name=""
                        style={{
                          margin: "0px 12px 0px 0px",
                          height: "20px",
                          width: "20px",
                        }}
                        required
                      />{" "}
                      I agree to terms and conditions
                    </div>
                    <br />

                    <button
                      id="acc-register"
                      className="align-items-center justify-content-center fs-6 text-light border border-primary w-100"
                      style={{
                        backgroundColor: "#1565d8",
                        borderRadius: "6px",
                        height: "60px",
                        border: "1px solid #1565d8",
                        // maxWidth: "100%"
                      }}
                    >
                      {" "}
                      Register Account
                    </button>
                    <br />
                    <br />
                    <div
                      className="or-separator d-flex flex-row align-self-stretch align-items-center justify-content-start"
                      style={{ gap: "34px" }}
                    >
                      <div
                        className="separator-icon  flex-grow-1 flex-shrink-1"
                        style={{
                          height: "1px",
                          borderTop: "1px solid #f5f5f5",
                          boxSizing: "border-box",
                        }}
                      />
                      <div className="or">Or</div>
                      <div
                        className="separator-icon1 flex-grow-1 flex-shrink-1"
                        style={{
                          height: "1px",
                          borderTop: "1px solid #f5f5f5",
                          boxSizing: "border-box",
                        }}
                      />
                    </div>
                    <br />
                    <div id="google-button">
                      <GoogleLoginButton
                        className="google"
                        onClick={() => alert("Hello")}
                      >
                        {" "}
                        Register with Google
                      </GoogleLoginButton>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Frame2;
