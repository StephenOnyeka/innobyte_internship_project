import React from "react";
import ImageFrame from "./ImageFrame";

function Frame1() {
  return (
    <div id="Frame1" className="p-3">
      <div className="frame1_container d-flex text-end">
        <div
          className="frame1_content d-flex border border-secondary w-100 bg-light relative text-secondary"
          style={{ fontFamily: "Inter, sans-serif" }}
        >
          <div className="frame1_content-1 d-flex">
            <ImageFrame />
          </div>

          <div className="frame1_content-2 m-3 mt-4 justify-items-center justify-content-center mw-100">
            <div className="frame1_content-2_container">
              <header>
                <div className="signin d-flex justify-content-end pe-4">
                  <p>
                    Already have an account{" "}
                    <span className="fw-bold" style={{ color: "#1565d8" }}>
                      Sign In
                    </span>
                  </p>
                </div>
              </header>

              <div
                className="frame1_content-2_content text-start"
                style={{ padding: "6rem" }}
              >
                <div
                  className="accountType d-flex flex-column mw-100"
                  style={{ alignItems: "flex-start", width: "411px" }}
                >
                  {/* <div className="accountType" > */}
                  <h2 className="join-us fs-2 mb-3 text-dark fw-bolder">
                    Join Us!
                  </h2>
                  <p
                    className="accountType-p align-self-stretch lh-md"
                    style={{ fontSize: "18px" }}
                  >
                    To begin this journey, tell us what type of account you'd be
                    opening.
                  </p>
                </div>

                <form>
                  <div className="options d-flex flex-column text-start gap-3">
                    <div className="option">
                      <div className="polygon polygon-1">
                        <img
                          src="/user.svg"
                          alt=""
                          style={{ height: "20px", width: "20px" }}
                        />
                      </div>

                      <div
                        className="description"
                        style={{ marginLeft: "5rem" }}
                      >
                        <h4 className="fw-bold text-dark fs-6">Individual</h4>
                        <p>Personal account to manage all your activities.</p>
                      </div>
                      <span className="arrow-span">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="30"
                          height="30"
                          fill="currentColor"
                          class="bi bi-arrow-right-short"
                          viewBox="0 0 16 16"
                        >
                          <path
                            fill-rule="evenodd"
                            d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8z"
                          />
                        </svg>
                      </span>
                    </div>

                    <div className="option">
                      <div className="polygon polygon-2">
                        <img
                          src="/briefcase.svg"
                          alt=""
                          style={{ height: "20px", width: "20px" }}
                        />
                      </div>

                      <div
                        className="description"
                        style={{ marginLeft: "5rem" }}
                      >
                        <h4 className="fw-bold text-dark fs-6">Business</h4>
                        <p>Own or belong to a company, this is for you.</p>
                      </div>
                      <span className="arrow-span">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="30"
                          height="30"
                          fill="currentColor"
                          class="bi bi-arrow-right-short"
                          viewBox="0 0 16 16"
                        >
                          <path
                            fill-rule="evenodd"
                            d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8z"
                          />
                        </svg>
                      </span>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Frame1;
