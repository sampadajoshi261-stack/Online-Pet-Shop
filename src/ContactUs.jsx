import React from "react";

function ContactUs() {
  const contactCard = [
    {
      image:
        "https://static.vecteezy.com/system/resources/previews/005/747/761/non_2x/phone-call-icon-symbol-in-trendy-flat-style-call-icon-sign-for-app-logo-web-call-icon-flat-illustration-telephone-symbol-vector.jpg",
      contactAdd: "Call Us",
      contactLocation: "+91 - 8796582103",
    },
    {
      image:
        "https://png.pngtree.com/png-vector/20190508/ourmid/pngtree-email-vector-icon-png-image_1027071.jpg",
      contactAdd: "Contact Us with Email",
      contactLocation: "petshop12@gmail.com",
    },
    {
      image:
        "https://png.pngtree.com/png-vector/20190507/ourmid/pngtree-vector-location-icon-png-image_1024680.jpg",
      contactAdd: "Address",
      contactLocation: "123 Pet Street, Cityville, India",
    },
  ];

  return (
    <div>
      <div className="contactHeader">
        <p className="contact">Contact Us</p>
        <p className="trust">
          Trusted <span className="partner">Partner</span>
        </p>
        <p className="contactText">We'd love to hear from you!</p>
      </div>
      <div className="contactcardWrapper">
        {contactCard.map((card) => {
          return (
            <div className="contactCard">
              <img src={card.image} alt="contact-img" width={40} height={40} />
              <p>{card.contactAdd}</p>
              <p className="contactLocation">{card.contactLocation}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default ContactUs;
