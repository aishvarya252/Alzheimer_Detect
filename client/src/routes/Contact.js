import Hero from "../components/Hero";
import NavBar from "../components/NavBar";
import contactImg from "../assets/contact.png";
import Footer from "../components/Footer";
import ContactForm from "../components/ContactForm";
import "./ContactPage.css";

function Contact() {
  return (
    <>
      <NavBar />
      {/* <Hero
        cName="hero-mid"
        heroImg={contactImg}
        title="Contact Us"
        /> */}
      {/* <ContactForm /> */}

      <div className="maincontact">
        <div className="leftcontact">
          <div className="overlay">
            <div className="overlaybox">
              <div className="overlay1">
                <h1>Contact US</h1>
                <div className="ov1">
                  <h3>Call Us</h3>
                  <p>+1 123 456 7890</p>
                </div>
                <div className="ov2">
                  <h3>Location</h3>
                  <p>123 Main St, Anytown, USA</p>
                </div>
                <div className="ov3">
                  <h3>Service Hours</h3>
                  <p>Monday - Friday: 9:00 AM - 5:00 PM</p>
                </div>

                <a href="/">
                  <button className="contactbtnd">Go Back</button>
                </a>
              </div>

              <div className="overlay2">
                <form
                  action="https://api.web3forms.com/submit"
                  method="POST"
                  className="contactformd"
                >
                  <div className="input1">
                    <input
                      type="hidden"
                      name="access_key"
                      value="476b22ad-ce3d-4519-8620-e6ab6fc1e8cc"
                    ></input>
                    <div className="ip1">
                      <label className="labble">Email</label>
                      <input
                        type="text"
                        name="email"
                        placeholder="Enter email address"
                      />
                    </div>
                    <div className="ip2">
                      <label className="labble">Name</label>
                      <input
                        type="text"
                        name="name"
                        placeholder="Enter Your Name"
                      />
                    </div>
                  </div>
                  <div className="input2">
                    <label className="labble">Address</label>
                    <input
                      type="text"
                      name="address"
                      placeholder="Address"
                      className="allinput"
                    />
                  </div>
                  <div className="input3">
                    <label className="labble">Message</label>
                    <textarea
                      name="message"
                      id=""
                      placeholder="Write your message"
                      className="allinput"
                      rows={7}
                    ></textarea>
                  </div>

                  <button className="contactbtnd2">Submit</button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}

export default Contact;
