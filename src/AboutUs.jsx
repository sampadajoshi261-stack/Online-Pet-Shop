import React from "react";

function AboutUs() {
  const offerCards = [
    {
      image:
        "https://d2wrwj382xgrci.cloudfront.net/Pictures/480xany/3/9/3/13393_pe_asda_hero_tiger_368828.jpg",
      title: "Pet Foods",
      content:
        "Nutritious pet food that supports healthy growth, energy, and overall well-being.",
    },
    {
      image: "https://m.media-amazon.com/images/I/81TaHVsWdsL.jpg",
      title: "Pet Toys",
      content:
        "Fun and durable toys that keep pets active, entertained, and stress-free.",
    },
    {
      image:
        "https://img.freepik.com/free-vector/dog-grooming-icons-set-with-barber-style-symbols-flat-isolated-vector-illustration_1284-82196.jpg",
      title: "Pet Grooming",
      content:
        "Gentle grooming products that keep pets clean, fresh, and well-maintained.",
    },
    {
      image:
        "https://rukminim2.flixcart.com/image/480/640/xif0q/pet-health-supplement/y/p/b/-original-imahgmhfszptvytz.jpeg?q=90 ",
      title: "Pet Supplements",
      content:
        "Essential supplements that support immunity, strength, and overall pet health.",
    },
  ];

  return (
    <div>
      <div className="aboutUsWrapper">
        <div className="textContainer">
          <p className="text">
            Our <span className="vision">Vision</span>
          </p>
          <p className="aboutText">
            The vision of an online pet shop is to become a trusted and leading
            platform for pet care, offering high-quality products and services
            to pet owners worldwide. It aims to make pet care easy, convenient,
            and accessible through a user-friendly digital platform. The shop
            focuses on improving the health, happiness, and overall well-being
            of pets by providing safe and reliable products. It also strives to
            build a strong community of pet lovers, promote responsible pet
            ownership, and encourage ethical practices. The long-term goal is to
            enhance the bond between pets and their owners while ensuring a
            seamless shopping experience.
          </p>
        </div>
        <div className="imageContainer">
          <img
            src="https://t3.ftcdn.net/jpg/13/29/97/80/240_F_1329978051_W4N7UMFwG0XYz6fT8RkoPilObAfH42Q0.jpg"
            width={600}
            height={300}
            alt="petimg"
          />
        </div>
      </div>

      <div className="aboutUsWrapper">
        <div className="imageContainer">
          <img
            src="https://img.freepik.com/free-vector/animal-background-vector-with-cute-pets-illustration_53876-127698.jpg"
            width={600}
            height={300}
            alt="petimg"
          />
        </div>
        <div className="textContainer">
          <p className="text">
            Our <span className="vision">Mission</span>
          </p>
          <p className="aboutText">
            The mission of an online pet shop is to provide a wide range of
            high-quality and affordable pet products through a convenient and
            efficient online platform. It aims to meet the needs of pet owners
            by offering products such as pet food, toys, grooming items, and
            healthcare essentials. The platform is committed to delivering
            excellent customer service, ensuring timely delivery, and
            maintaining product quality. It also focuses on providing useful
            information and guidance to help customers take better care of their
            pets. Additionally, it promotes responsible pet ownership and
            strives to create a reliable and satisfying shopping experience.
          </p>
        </div>
      </div>
      <div className="shop">
        <p className="offer">
          What <span className="textStyle">We Offer</span>
        </p>
        <div className="offerBoxesWrapper">
          {offerCards.map((card) => {
            return (
              <div className="Card">
                <img
                  src={card.image}
                  alt={card.title}
                  width={300}
                  height={200}
                />
                <p className="cardTitle">{card.title}</p>
                <p className="cardContent">{card.content}</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default AboutUs;
