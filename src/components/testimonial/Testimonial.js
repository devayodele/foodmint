import React from "react";
import "./testimonial.css";

export default function Testimonial() {
  return (
    <div className="testimonialDiv">
      <div className="reviewDiv">
        <div class="container-xl">
          <div class="row">
            <div class="col-lg-8 mx-auto">
              <h2 id="testimonials">Testimonials</h2>
              <div
                id="myCarousel"
                class="carousel slide"
                data-ride="carousel"
                data-interval="3000"
              >
                <ol class="carousel-indicators">
                  <li
                    data-target="#myCarousel"
                    data-slide-to="0"
                    class="active"
                  ></li>
                  <li data-target="#myCarousel" data-slide-to="1"></li>
                  <li data-target="#myCarousel" data-slide-to="2"></li>
                </ol>

                <div class="carousel-inner">
                  <div class="carousel-item active">
                    <div class="img-box">
                      <img
                        src="https://www.tutorialrepublic.com/examples/images/clients/1.jpg"
                        alt=""
                      />
                    </div>
                    <p class="testimonial">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Nam eu sem tempor, varius quam at, luctus dui. Mauris
                      magna metus, dapibus nec turpis vel, semper malesuada
                      ante. Idac bibendum scelerisque non non purus. Suspendisse
                      varius nibh non aliquet.
                    </p>
                    <p class="overview">
                      <b>Paula Wilson</b>, Media Analyst
                    </p>
                  </div>
                  <div class="carousel-item">
                    <div class="img-box">
                      <img
                        src="https://www.tutorialrepublic.com/examples/images/clients/2.jpg"
                        alt=""
                      />
                    </div>
                    <p class="testimonial">
                      Vestibulum quis quam ut magna consequat faucibus.
                      Pellentesque eget nisi a mi suscipit tincidunt. Utmtc
                      tempus dictum risus. Pellentesque viverra sagittis quam at
                      mattis. Suspendisse potenti. Aliquam sit amet gravida
                      nibh, facilisis gravida odio.
                    </p>
                    <p class="overview">
                      <b>Antonio Moreno</b>, Web Developer
                    </p>
                  </div>
                  <div class="carousel-item">
                    <div class="img-box">
                      <img
                        src="https://www.tutorialrepublic.com/examples/images/clients/3.jpg"
                        alt=""
                      />
                    </div>
                    <p class="testimonial">
                      Phasellus vitae suscipit justo. Mauris pharetra feugiat
                      ante id lacinia. Etiam faucibus mauris id tempor egestas.
                      Duis luctus turpis at accumsan tincidunt. Phasellus risus
                      risus, volutpat vel tellus ac, tincidunt fringilla massa.
                      Etiam hendrerit dolor eget rutrum.
                    </p>
                    <p class="overview">
                      <b>Michael Holz</b>, Seo Analyst
                    </p>
                  </div>
                </div>

                <a
                  class="carousel-control-prev"
                  href="#myCarousel"
                  data-slide="prev"
                >
                  <i class="fa fa-angle-left"></i>
                </a>
                <a
                  class="carousel-control-next"
                  href="#myCarousel"
                  data-slide="next"
                >
                  <i class="fa fa-angle-right"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
