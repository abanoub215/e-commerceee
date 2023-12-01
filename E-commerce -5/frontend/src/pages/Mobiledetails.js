import axios from "axios";
import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import "./mobiledetails.css";
import { useCart } from "../context/cart";
import toast from "react-hot-toast";
import { useAuth } from "../context/auth";

function Mobiledetails() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [mobile, setMobile] = useState({});
  const [cart, setCart] = useCart();
  useAuth();

  useEffect(() => {
    if (id) getSingleMobile();
  }, [id]);

  const getSingleMobile = async () => {
    try {
      const { data } = await axios.get(`http://localhost:8080/mobiles/:${id}`);
      setMobile(data);
    } catch (error) {
      console.error("Cannot fetch data", error);
    }
  };

  const handleClick = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:8080/api/cart/", {
        id: mobile.id,
        title: mobile.title,
        details: mobile.details,
        phoneImagePath: mobile.phoneImagePath,
        price: mobile.price,
      });

      toast.success("added to cart");
      // Optionally, you can update the cart state here
      setCart([...cart, mobile]);
      // Redirect to a specific route (e.g., cart page)
      navigate("/cart");
    } catch (error) {
      console.error(error);
      toast.error("log in fisrt please");
    }
  };

  return (
    <div>
      <div>
        <div className="maiin">
          <div className="info">
            <div className="overlay" />
            <img src={mobile.phoneImagePath} alt="" className="mobile" />
            <input type="checkbox" id="rotateToggle" />
            <div id="maskCircle" className="circle">
              <div className="feature one">
                <img src="https://i.ibb.co/fXP6WLf/camera.png" alt="" />
                <img src="https://i.ibb.co/pd9VXn4/display.png" alt="" />
                <div>
                  <h1>Camera & Display</h1>
                  <p>
                    {mobile.camera} <br />
                    <br />
                    {mobile.display}
                  </p>
                </div>
              </div>
              <div className="feature two">
                <img src="https://i.ibb.co/3WC8vKm/processor.png" alt="" />
                <img src="https://i.ibb.co/fryNsNc/battery.png" alt="" />
                <div>
                  <h1>Processor & battery</h1>
                  <p>
                    {mobile.processor} <br /> <br />
                    {mobile.battery}
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="controls">
            <div>
              <div style={{ marginBottom: 60, fontSize: 90, color: "#eedfdf" }}>
                {mobile.price}
              </div>
            </div>
            <label htmlFor="rotateToggle" id="upBtn">
              <img src="https://i.ibb.co/GRrFDzD/arrow.png" alt="" id="upBtn" />
            </label>
            <h3>Features</h3>
            <label htmlFor="rotateToggle" id="downBtn">
              <img src="https://i.ibb.co/GRrFDzD/arrow.png" alt="" id="upBtn" />
            </label>
            <div>
              <button
                className="btn btn-warning bold-btn"
                style={{ marginTop: 50 }}
                onClick={handleClick}
                // () => {
                //   setCart([...cart, mobile]);
                //   localStorage.setItem(
                //     "cart",
                //     JSON.stringify([...cart, mobile])
                //   );
                //   toast.success(`Added to cart`);
                // }}
              >
                Add To Cart
              </button>
            </div>
          </div>
        </div>
      </div>
      ;
    </div>
  );
}

export default Mobiledetails;
