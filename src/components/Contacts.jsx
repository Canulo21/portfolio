import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Contacts = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_vdsl1oe",
        "template_eimpl0m",
        form.current,
        "l9fP0V1uOHazFKCTL"
      )
      .then(
        (result) => {
          toast.success("Message Sent! 👌", {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
          });
        },
        (error) => {
          toast.error("Message not Sent! 🤯", {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
          });
        }
      );
  };
  return (
    <div className="contacts-wrapper">
      <ToastContainer />
      <div className="contacts-container">
        <form ref={form} onSubmit={sendEmail}>
          <div className="group">
            <input type="text" name="user_name" required />
            <label>Name</label>
          </div>
          <div className="group">
            <input type="email" name="user_email" required />
            <label>Email</label>
          </div>
          <div className="group">
            <input type="tel" name="user_number" required />
            <label>Contact Number</label>
          </div>
          <div className="group">
            <textarea name="message" />
            <label>Message</label>
          </div>

          <div className="group">
            <button type="submit" value="Send">
              <div class="svg-wrapper-1">
                <div class="svg-wrapper">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    width="24"
                    height="24"
                  >
                    <path fill="none" d="M0 0h24v24H0z"></path>
                    <path
                      fill="currentColor"
                      d="M1.946 9.315c-.522-.174-.527-.455.01-.634l19.087-6.362c.529-.176.832.12.684.638l-5.454 19.086c-.15.529-.455.547-.679.045L12 14l6-8-8 6-8.054-2.685z"
                    ></path>
                  </svg>
                </div>
              </div>
              <span>Send</span>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contacts;
