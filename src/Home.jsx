import React from "react";
import { useNavigate } from "react-router-dom";

function Home() {
  const ourPets = [
    {
      image:
        "https://thumbs.dreamstime.com/b/tiny-lovable-pet-dog-isolated-white-background-brown-puppy-sitting-363718839.jpg",
      label: "Dogs",
    },
    {
      image:
        "https://static.vecteezy.com/system/resources/previews/025/797/520/non_2x/a-cat-standing-isolated-in-a-white-background-photo.jpeg",
      label: "Cats",
    },
    {
      image:
        "https://thumbs.dreamstime.com/b/two-budgerigar-siting-branch-isolated-white-background-birds-415703130.jpg",
      label: "Birds",
    },
    {
      image:
        "https://static.vecteezy.com/system/resources/thumbnails/020/217/029/small/front-view-of-cute-baby-white-rabbit-on-white-background-white-rabbit-portrait-looking-frontwise-to-viewer-photo.jpg",
      label: "Small Animals",
    },
  ];

  const ourHighlights = [
    {
      image:
        "https://static.vecteezy.com/system/resources/previews/006/470/682/non_2x/modern-animal-pet-logo-template-free-vector.jpg",
      count: "1000+",
      label: "Premium Products Available",
    },
    {
      image:
        "https://t4.ftcdn.net/jpg/05/48/62/95/360_F_548629586_cDOlrTXotOkYIENXcXBQ1CaGg5W4yK00.jpg",
      count: "3000+",
      label: "Deliveries Completed",
    },
    {
      image:
        "https://static.vecteezy.com/system/resources/previews/021/267/205/non_2x/affordable-pricing-icon-style-free-vector.jpg",
      count: "Up to 50% ",
      label: "Savings on Products",
    },
    {
      image:
        "https://image.shutterstock.com/image-vector/green-100-percent-satisfaction-guarantee-250nw-2751030981.jpg",
      count: "10,000+",
      label: "Happy Customers",
    },
  ];

  const navigate = useNavigate();

  const handleShopNow = () => {
    navigate("/pet-essentials");
  };
  return (
    <div>
      <div className="section1">
        <p className="paws">Little Paws Corner</p>
        <p className="petNeeds">Love, Care & Everything Your Pet Needs</p>
        <p className="petText">
          A pet shop is a place where pets are cared for and loved. It provides
          food, toys, and accessories to keep them happy and active. Grooming
          services help pets stay clean and healthy, while supplements support
          their growth and well-being. Overall, a pet shop creates a joyful
          environment where every furry friend feels safe and cared for.
        </p>
        <button onClick={handleShopNow} className="shopNow">
          Shop Now
        </button>
      </div>
      <br />
      <h1 className="kind">
        Which kind of <span className="petfood">Pet food We Provide</span>
      </h1>
      <div className="section2">
        {ourPets.map((pet) => {
          return (
            <div className="petCard">
              <img
                src={pet.image}
                alt={pet.label}
                width={200}
                height={200}
                className="petImage"
              />
              <p className="petLabel">{pet.label}</p>
            </div>
          );
        })}
      </div>
      <br />
      <h1 className="highlight"> Our Highlights</h1>
      <div className="section3">
        {ourHighlights.map((highlight) => {
          return (
            <div className="highlightCard">
              <img
                src={highlight.image}
                alt="highlightimg"
                width={100}
                height={100}
                className="highlightImg"
              />
              <p className="count">{highlight.count}</p>
              <p className="label">{highlight.label}</p>
            </div>
          );
        })}
      </div>
      <br />
      <br />
      <div className="section4">
        <h1 className="tellusText">Shop your pet needs!</h1>
      </div>
    </div>
  );
}

export default Home;
