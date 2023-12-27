import "../Styles/ContactSection.css";
import contactImg from "../Img/ContactImg.png";
const ContactSection = () => {
  return (
    <section className="contact">
      <div className="con centered">
        <div className="contact-container">
          <div className="contact-left">
            <img className="contact-img" src={contactImg} />
          </div>
          <div className="contact-right">
            <div className="p-3">
              <h2>Contact us!</h2>
              <p className="medium-size-p">
                For all questions, please contact us by e-mail -{" "}
              </p>
              <a className="fw-text text-black" href="#">
                ggshop@gmail.com
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="con contact-mini-con">
        <div className="contact-mini-text">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="icon icon-tabler icon-tabler-truck text-primary"
            width={50}
            height={50}
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M7 17m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
            <path d="M17 17m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
            <path d="M5 17h-2v-11a1 1 0 0 1 1 -1h9v12m-4 0h6m4 0h2v-6h-8m0 -5h5l3 5" />
          </svg>
          <h5>Fast Delivery</h5>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        </div>
        <div className="contact-mini-text">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="icon icon-tabler icon-tabler-currency-euro text-primary"
            width={50}
            height={50}
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M17.2 7a6 7 0 1 0 0 10" />
            <path d="M13 10h-8m0 4h8" />
          </svg>
          <h5>Secure Billing</h5>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
