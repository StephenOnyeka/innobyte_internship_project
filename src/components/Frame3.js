import React, { useEffect, useState } from "react";
import ImageFrame from "./ImageFrame";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";

function Frame3() {
  const [PhoneNumber, setPhoneNumber] = useState("");
  const [valid, setValid] = useState("");

  const handleChange = (value) => {
    setPhoneNumber(value);
    setValid(validatePhoneNumber(value));
  };

  const validatePhoneNumber = (phoneNumber) => {
    const phoneNumberPattern = /^\d{10}$/;
    return phoneNumberPattern.test(phoneNumber);
  };

  const [countries, setCountries] = useState([]);
  useEffect(() => {
    fetch("https://restcountries.com/v3.1/all")
      .then((res) => res.json())
      .then((data) => {
        const countryNames = data.map((country) => country.name.common);
        const sortedCountryNames = countryNames.sort();
        setCountries(sortedCountryNames);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div>
      <div id="Frame3" className="p-3">
        <div className="frame3_container d-flex text-end">
          <div
            className="frame3_content d-flex border border-secondary w-100 bg-light relative text-secondary"
            style={{ fontFamily: "Inter, sans-serif" }}
          >
            <div className="frame3_content-1 d-flex">
              <ImageFrame />
            </div>

            <div className="frame3_content-2 m-3 mt-4 justify-items-center justify-content-center mw-100">
              <div className="frame3_content-2_container">
                <header>
                  <div
                    id="exclusive"
                    className="d-flex align-content-center justify-content-between"
                  >
                    <div className="back d-flex fw-bold">
                      <p className="d-flex align-items-center justify-content-center gap-2">
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
                      <div>STEP 02/03</div>
                      <div className="span fw-bold">Residency Info.</div>
                    </div>
                  </div>
                </header>

                <div
                  className="frame3_content-2_content text-start"
                  style={{ padding: "6rem" }}
                >
                  <div
                    className="accountType d-flex flex-column mw-100"
                    style={{ alignItems: "flex-start", width: "411px" }}
                  >
                    <h3 className="join-us  fs-3 mb-3 text-dark fw-bolder">
                      Complete Your Profile!
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
                    <div className="options  d-flex flex-column text-start mt-1 pb-2">
                      <p>Phone number</p>
                      <PhoneInput
                        className="option country d-flex flex-row align-items-center"
                        style={{ fontSize: "15px", borderRadius: "6px" }}
                        country="us"
                        value={PhoneNumber}
                        onChange={handleChange}
                        inputProps={{
                          required: true,
                        }}
                      />
                    </div>
                    <div className="options  d-flex flex-column text-start mt-1 pb-2">
                      <p>Your address</p>
                      <input
                        type="text"
                        placeholder="Enter your address"
                        className="option move"
                      />
                    </div>
                    <div className="options  d-flex flex-column text-start mt-1 pb-2">
                      <p>Country of residence</p>
                      <input
                        type="text"
                        placeholder="Please select"
                        list="scripts"
                        className="option move"
                      />
                      {/* <br /> */}
                      <datalist name="" className=" " id="scripts">
                        {countries.map((country, index) => (
                          <option key={index} value={country}>
                            {country}
                          </option>
                        ))}
                      </datalist>
                    </div>
                    <br />
                    <br />
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
                      Save & Continue
                    </button>
                  </form>
                  <br />
                  <br />
                  <div className="regular d-flex justify-content-center align-items-center gap-3 mt-2">
                    <svg
                      stroke="currentColor"
                      fill="currentColor"
                      stroke-width="0"
                      viewBox="0 0 24 24"
                      height="14px"
                      width="14px"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M12 17c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm6-9h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2zM8.9 6c0-1.71 1.39-3.1 3.1-3.1s3.1 1.39 3.1 3.1v2H8.9V6zM18 20H6V10h12v10z"></path>
                    </svg>
                    <p className="m-0" style={{ fontSize: "12px" }}>
                      Your Info is safely secured
                    </p>
                  </div>
                  <br />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Frame3;
