/* eslint-disable react/jsx-no-target-blank */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/anchor-has-content */
import React from "react";

function Footer() {
  return (
    <footer>
      <div class="footer1">
        <div class="container">
          <div class="row">
            <div class="col-xs-4 col-sm-4 col-md-4 col-lg-4 text-center">
              <h3>LOCATION</h3>
              <p>
                CS 1: Phố Viên, Bắc Từ Liêm, TP.Hà Nội
                <br />
                SDT:080686868
              </p>
              <p>
                CS 2: 100,Phạm Văn Đồng, TP.Hà Nội <br />
                SDT:080686868
              </p>
            </div>
            <div class="col-xs-4 col-sm-4 col-md-4 col-lg-4 text-center">
              <h3>APPLE MART</h3>
              <ul>
                <li>
                  <a
                    href="https:www.facebook.com"
                    target={"_blank"}
                    class="fa fa-facebook"
                  ></a>
                </li>
                <li>
                  <a
                    href="https://www.google.com/"
                    target={"_blank"}
                    class="fa fa-google-plus"
                  ></a>
                </li>
                <li>
                  <a href="" class="fa fa-twitter"></a>
                </li>
                <li>
                  <a href="" class="fa fa-linkedin"></a>
                </li>
                <li>
                  <a href="" class="fa fa-dribbble"></a>
                </li>
              </ul>
            </div>
            <div class="col-xs-4 col-sm-4 col-md-4 col-lg-4 text-center">
              <h3>ABOUT FREELANCER</h3>
              <p>
                Freelane is a free to use, open source Bootstrap theme created
                by
                <a herf="">Start Bootstrap.</a>
              </p>
            </div>
          </div>
        </div>
      </div>
      <div class="footer2">
        <div class="container text-center">
          <p>@ Website_NDH_01.2023</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
