import React from "react";

const Scrollm = () => {
  return (
    <div>
      <div id="demo" class="carousel slide" data-ride="carousel">
        <ul class="carousel-indicators">
          <li data-target="#demo" data-slide-to="0" class="active"></li>
          <li data-target="#demo" data-slide-to="1"></li>
          <li data-target="#demo" data-slide-to="2"></li>
        </ul>

        <div class="carousel-inner">
          <div class="carousel-item active">
            <img
              className="simg1"
              src="https://cdn-images.cure.fit/www-curefit-com/image/upload/c_fill,w_300,ar_0.75,q_auto:eco,dpr_2,f_auto,fl_progressive//image/vm/7edc94fb-e895-4065-8e56-dabffdd4e4b0.png"
              alt="Los Angeles"
            />
            <div className="btn1">
              <button className="sbtn1">Explore</button>
            </div>
          </div>
          <div class="carousel-item">
            <img
              className="simg2"
              src="https://cdn-images.cure.fit/www-curefit-com/image/upload/c_fill,w_300,ar_0.75,q_auto:eco,dpr_2,f_auto,fl_progressive//image/vm/7bf136db-7217-4733-af9f-1bb8a4155a83.png"
              alt="Chicago"
            />
            <div className="btn2">
              <button className="sbtn2">Explore</button>
            </div>
          </div>
          <div class="carousel-item">
            <img
              className="simg3"
              src="https://cdn-images.cure.fit/www-curefit-com/image/upload/c_fill,w_300,ar_0.75,q_auto:eco,dpr_2,f_auto,fl_progressive//image/vm/8009b1d0-4f5e-49e1-bc94-c41da6a5bcc1.png"
              alt="New York"
            />
            <div className="btn3">
              <button className="sbtn3">Explore</button>
            </div>
          </div>
          <div class="carousel-item">
            <img
              className="simg4"
              src="https://cdn-images.cure.fit/www-curefit-com/image/upload/c_fill,w_300,ar_0.75,q_auto:eco,dpr_2,f_auto,fl_progressive//image/vm/09e63111-d407-4d09-89e5-96d978edf2b1.png"
              alt="New York"
            />
            <div className="btn4">
              <button className="sbtn4">Explore</button>
            </div>
            
          </div>
        </div>

        <a class="carousel-control-prev" href="#demo" data-slide="prev">
          <span class="carousel-control-prev-icon"></span>
        </a>
        <a class="carousel-control-next" href="#demo" data-slide="next">
          <span class="carousel-control-next-icon"></span>
        </a>
      </div>
    </div>
  );
};

export default Scrollm;
