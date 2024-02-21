import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
function ImageFrame() {
  return (
    <div id="" className="ImageFrame d-flex  ">
      <div className="imageFrame_container relative text-light text-start">
        {/* <div className="imageFrame_content grid column-gap-5"> */}
        <div
          className="imageFrame_content d-flex flex-column /align-content-center"
          style={{ gap: "10rem" }}
        >
          <span className="span  d-flex ">
            <svg
              width="44"
              height="30"
              viewBox="0 0 44 30"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M10.506 28.7517C7.86923 29.9003 4.98068 30.2576 2.18354 29.8175C0.395723 29.5362 -0.435764 27.5944 0.226389 25.9101V25.9101C0.888543 24.2257 2.81925 23.4695 4.6289 23.4451C5.74072 23.4302 6.84936 23.1958 7.88853 22.7431C9.94214 21.8485 11.5563 20.1747 12.3758 18.09C13.1954 16.0053 13.1532 13.6805 12.2586 11.6268C11.8059 10.5877 11.1537 9.66103 10.3497 8.89293C9.04112 7.64275 8.14234 5.77412 8.80449 4.08979V4.08979C9.46665 2.40545 11.3979 1.54975 12.8986 2.56125C14.1094 3.37728 15.1935 4.36514 16.1172 5.49215C16.3489 5.77496 16.7889 5.77497 17.0207 5.49216V5.49216C19.1554 2.88728 22.1047 1.0766 25.3936 0.351649C28.6825 -0.373304 32.1197 0.0296558 35.1517 1.49565C38.1838 2.96165 40.6342 5.40537 42.1086 8.43336C42.9639 10.1899 43.4618 12.0838 43.5894 14.007C43.7432 16.3251 41.4393 17.788 39.1692 17.2942V17.2942C36.8991 16.8004 35.5817 14.4045 34.625 12.2875C34.5991 12.2301 34.5723 12.173 34.5447 12.1163C33.8972 10.7866 32.8211 9.71347 31.4897 9.0697C30.1582 8.42593 28.6488 8.24897 27.2045 8.56733C25.7602 8.88568 24.4651 9.68082 23.5277 10.8247C22.5902 11.9686 22.065 13.3947 22.0366 14.8734C22.0082 16.352 22.4783 17.7973 23.3711 18.9763C24.2639 20.1554 25.5275 20.9997 26.9585 21.3733C27.0195 21.3892 27.0807 21.4043 27.1421 21.4184C29.4058 21.9405 32.0138 22.7616 32.9439 24.8904V24.8904C33.8741 27.0193 32.8923 29.5657 30.5892 29.8703C28.6784 30.123 26.7236 30.0068 24.8333 29.5133C21.5746 28.6626 18.6971 26.7399 16.664 24.055V24.055C16.6164 23.9921 16.5215 23.9921 16.4738 24.055C14.9338 26.0887 12.8861 27.7148 10.506 28.7517Z"
                fill="white"
              />
            </svg>
            <p className="fs-6 fw-bold ms-2 pt-2 ">Oasis</p>
          </span>

          <div
            className="imageFrame_content1"
            style={{
              fontSize: "1.2rem",
              fontFamily: "Inter, sans-serif",
              lineHeight: "3rem",
            }}
          >
            <div id="start" className="d-inline-block pt-3">
              "
            </div>
            <p className=" ">
              The passage experienced a surge in popularity during the 1960s
              when Letraset used it on their dry-transfer sheets, and again
              during the 90s as desktop publishers bundled the text with their
              software.
            </p>

            <p>
              Vincent Obi{" "}
              <span className="fs-5 lh-4">
                <img
                  src="circle check full.svg"
                  alt="icon"
                  style={{ height: "20px", width: "20px"}}
                />
              </span>
            </p>
          </div>
        </div>
        <div className="vector d-flex text-right justify-content-end align-content text-light" style={{minWidth:"90%", width:"33.5px", height:"33px"}}>
          <svg
            width="34"
            height="33"
            viewBox="0 0 34 33"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M21 0H33.5V33H0V20.5H21V0Z" fill="white" />
          </svg>
        </div>
      </div>
    </div>
  );
}

export default ImageFrame;
