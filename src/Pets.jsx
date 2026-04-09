import React from "react";
import "./Pets.css";

const Pets = () => {
  const petsData = [
    {
      id: 1,
      name: "Golden Retriever",
      price: "₹19,000",
      age: "2 years",
      gender: "Male",
      image: "https://images.unsplash.com/photo-1552053831-71594a27632d?fm=jpg",
    },
    {
      id: 2,
      name: "Labrador Retriever",
      price: "₹12,000",
      age: "1.5 years",
      gender: "Female",
      image: "https://images.unsplash.com/photo-1518717758536-85ae29035b6d",
    },
    {
      id: 3,
      name: "Golden Persian Cat",
      price: "₹10,000",
      age: "2 years",
      gender: "Female",
      image:
        "https://images.pexels.com/photos/35236951/pexels-photo-35236951.jpeg",
    },
    {
      id: 4,
      name: "Siamese Cat",
      price: "₹9,000",
      age: "1 year",
      gender: "Male",
      image:
        "https://images.unsplash.com/photo-1511044568932-338cba0ad803?w=800&q=80",
    },
    {
      id: 5,
      name: "Parrot (Macaw)",
      price: "₹15,000",
      age: "3 years",
      gender: "Female",
      image:
        "https://www.thesprucepets.com/thmb/wU8W9gXxsGb_kXEXJIxJ7Kah70A%3D/2121x0/filters%3Ano_upscale%28%29%3Astrip_icc%28%29/green-orange-faced-lovebird-standing-on-the-tree-in-garden-503871724-5c45ad159f4046fda8936dc461f8a607.jpg",
    },
    {
      id: 6,
      name: "Cockatiel Bird",
      price: "₹37,000",
      age: "8 months",
      gender: "Female",
      image:
        "https://www.kaytee.com/-/media/Project/OneWeb/Kaytee/US/learn-care/everything-you-need-to-know-about-pet-cockatiels/yellow-and-pied-cockatiels.jpg",
    },
    {
      id: 7,
      name: "Rabbit (Holland Lop)",
      price: "₹1,000",
      age: "6 months",
      gender: "Female",
      image: "https://images.unsplash.com/photo-1585110396000-c9ffd4e4b308",
    },
    {
      id: 8,
      name: "Gold Fish",
      price: "₹1,200",
      age: "1 year",
      gender: "Unknown",
      image: "https://kb.rspca.org.au/assets/Images/aquarium-goldfish.jpg",
    },
    {
      id: 9,
      name: "Neon Tetra",
      price: "₹1,500",
      age: "6 months",
      gender: "Unknown",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTEBAMp1v-nhBOiBhne1788_AmqlJ-gVPIvTg&s",
    },
    {
      id: 10,
      name: "Canary Red Bird",
      price: "₹8,000",
      age: "1 year",
      gender: "Male",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-BMChMo9p-huP2OdeZdkrSxyz3tj2IF4E4Q&s",
    },
    {
      id: 11,
      name: "Lionhead Rabbit",
      price: "₹10,000",
      age: "8 months",
      gender: "Male",
      image: "https://cdn.mos.cms.futurecdn.net/7gmtcKxLyz5YjDuDjnxogT.jpg",
    },
    {
      id: 12,
      name: "Pomeranian",
      price: "₹65,000",
      age: "1 year",
      gender: "Male",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSd4KZj9tYNgUcXyYMxwh4A9Qe39rkZG8A2LA&s",
    },
    {
      id: 13,
      name: "Devon Rex",
      price: "₹2,50,000",
      age: "1.5 years",
      gender: "Female",
      image:
        "https://images.unsplash.com/photo-1615789591457-74a63395c990?auto=format&fit=crop&w=800&q=80",
    },
    {
      id: 14,
      name: "Love Birds",
      price: "₹5,000",
      age: "6 months",
      gender: "Pair",
      image:
        "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhlb5uwF6X-HxKE5-MLvTzHZ4PO6ljUX4-grPKFo6mVTpSkYYfkGjZw1uiCkVyiMoMPhCA9ZA31KCNggJBzBqD-yWvBe_DeeeWA43WiDE4DZal_NGarO5nOgtlSaiLDiuXfKuqjM_ByuxKm/s1600/maxresdefault.jpg",
    },
    {
      id: 15,
      name: "Dragon Guppy Fish",
      price: "₹500",
      age: "4 months",
      gender: "Mixed",
      image:
        "https://tropicflow.com/cdn/shop/files/red-dragon-guppy-fish-1.jpg",
    },
    {
      id: 16,
      name: "Budgie",
      type: "Bird",
      sex: "Male",
      price: "₹5,000",
      age: 1,
      image:
        "https://primary.jwwb.nl/public/s/a/i/temp-gskcuxnnasyisyefemju/472912108_3770418189770397_8091701422020775858_n-standard.jpg",
    },
    {
      id: 17,
      name: "Hamster",
      type: "Small Pet",
      sex: "Male",
      age: 0.5,
      price: "₹3,000",
      image:
        "https://headsupfortails.com/cdn/shop/articles/Hamster_10_x630.jpg?v=1645258342",
    },
    {
      id: 18,
      name: "Betta Fish",
      type: "Fish",
      sex: "Male",
      age: 1,
      price: "₹4,000",
      image:
        "https://www.aquariumcoop.com/cdn/shop/articles/care-guide-for-betta-fish-the-best-beginner-pet-fish-9292234.jpg?v=1766094759",
    },
    {
      id: 19,
      name: "African Grey Parrot",
      type: "Bird",
      sex: "Female",
      age: 5,
      price: "₹25,000",
      image:
        "https://primary.jwwb.nl/public/s/a/i/temp-gskcuxnnasyisyefemju/8deeeed2-7fd5-440a-a254-95a6deeed556-high.jpg",
    },
    {
      id: 20,
      name: "German Shepherd",
      type: "Dog",
      sex: "Male",
      age: 3,
      price: "₹10,000",
      image:
        "https://ask.woodgreen.org.uk/media/pages/images/5979b7d0bc-1727379943/german-shepherd-900x900-crop-52-5-28-8.jpg",
    },
    {
      id: 21,
      name: "Maine Coon",
      type: "Cat",
      sex: "Male",
      age: 4,
      price: "₹20,000",
      image:
        "https://hankpets.com/cdn/shop/articles/Maine_Coon_Cat.jpg?v=1764747802",
    },
    {
      id: 22,
      name: "Husky",
      type: "Dog",
      sex: "Male",
      age: 2,
      price: "₹35,000",
      image:
        "https://www.dailypaws.com/thmb/B6yWhzGpQZsg3kxMzLn-hvGIF7M%3D/1500x0/filters%3Ano_upscale%28%29%3Amax_bytes%28150000%29%3Astrip_icc%28%29/siberian-husky-100800827-2000-9449ca147e0e4b819bce5189c2411188.jpg",
    },
    {
      id: 23,
      name: "Angora Rabbit",
      type: "Rabbit",
      sex: "Female",
      age: 2,
      price: "₹45,000",
      image: "https://cdn.creatures.com/fef/325/eb3/9401a.jpeg",
    },
    {
      id: 24,
      name: "Sphynx",
      type: "Cat",
      sex: "Female",
      age: 2,
      price: "₹7,000",
      image:
        "https://headsupfortails.com/cdn/shop/articles/feature-image-Sphynx_Cat_Breed.jpg?v=1761305227",
    },
    {
      id: 25,
      name: "Dachshund",
      age: 2,
      sex: "Female",
      price: "₹55,000",
      image:
        "https://images.unsplash.com/photo-1517423440428-a5a00ad493e8?auto=format&fit=crop&w=800&q=80",
    },
  ];
  return (
    <div className="pets-container">
      <h1 className="pets-title">Available Pets 🐾</h1>

      <div className="pets-grid">
        {petsData.map((pet) => (
          <div className="pet-card" key={pet.id}>
            <img src={pet.image} alt={pet.name} className="pet-image" />
            <h3 className="pet-name">{pet.name}</h3>
            <p className="pet-price">{pet.price}</p>
            <button className="pet-btn">Add to Cart</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Pets;
