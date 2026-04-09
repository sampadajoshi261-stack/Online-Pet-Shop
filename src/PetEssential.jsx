import React, { useState } from "react";
import { TextField } from "@mui/material";
import { useNavigate } from "react-router-dom";

function PetEssential() {
  const [search, setSearch] = useState("");
  const [quantities, setQuantities] = useState({});
  const navigate = useNavigate();

  const petItems = [
    {
      name: "Dog Food",
      price: "₹499",
      img: "https://t3.ftcdn.net/jpg/06/54/90/64/360_F_654906412_m0dXSFTexzlEaBOCoihILslEDmo1uPUt.jpg",
    },
    {
      name: "Trimmer",
      price: "₹999",
      img: "https://5.imimg.com/data5/SELLER/Default/2024/7/433398375/LX/QV/YG/13700782/il-1080xn-4541664368-8rkf-500x500.jpg",
    },
    {
      name: "Cat Food",
      price: "₹699",
      img: "https://m.media-amazon.com/images/I/71q217X8joL._AC_UF1000,1000_QL80_.jpg",
    },
    {
      name: "Grooming Kit",
      price: "₹799",
      img: "https://images-cdn.ubuy.co.in/64e184e95e827b1e4e765bfe-pet-union-professional-pet-grooming-kit.jpg",
    },
    {
      name: "Supplements",
      price: "₹299",
      img: "https://m.media-amazon.com/images/I/6130OVNrBLL._AC_UF1000,1000_QL80_.jpg",
    },
    {
      name: "Protein",
      price: "₹599",
      img: "https://m.media-amazon.com/images/I/51ODfS-XILL._AC_UF1000,1000_QL80_.jpg",
    },
    {
      name: "Pet Bowl",
      price: "₹987",
      img: "https://5.imimg.com/data5/SELLER/Default/2023/2/BJ/DX/JP/4399848/emily-pets-stainless-steel-paw-print-pet-bowl.jpg",
    },
    {
      name: "Accessories",
      price: "₹812",
      img: "https://image.made-in-china.com/251f0j00dYTUImbPatVq/made-in-china.jpg",
    },
    {
      name: "Treats",
      price: "₹504",
      img: "https://m.media-amazon.com/images/I/61jaiLJ+k0L._SX522_.jpg",
    },
    {
      name: "Vitamins",
      price: "₹612",
      img: "https://m.media-amazon.com/images/I/41c9mIGuGgL._SX300_SY300_QL70_FMwebp_.jpg",
    },
    {
      name: "Small Animals Food",
      price: "₹349",
      img: "https://m.media-amazon.com/images/I/61vLanzJ5WL._SX522_.jpg",
    },
    {
      name: "Birds Food",
      price: "₹277",
      img: "https://m.media-amazon.com/images/I/41wl3JK4rGL._SY300_SX300_QL70_FMwebp_.jpg",
    },
  ];

  const filteredItems = petItems.filter((item) =>
    item.name.toLowerCase().includes(search.toLowerCase()),
  );

  const increaseQty = (name) => {
    setQuantities((prev) => ({
      ...prev,
      [name]: (prev[name] || 1) + 1,
    }));
  };

  const decreaseQty = (name) => {
    setQuantities((prev) => ({
      ...prev,
      [name]: Math.max((prev[name] || 1) - 1, 1),
    }));
  };

  const addToCart = (item, qty) => {
    const cart = JSON.parse(localStorage.getItem("cart")) || [];
    const existingItem = cart.find((i) => i.name === item.name);

    if (existingItem) {
      existingItem.quantity += qty;
    } else {
      cart.push({ ...item, quantity: qty });
    }

    localStorage.setItem("cart", JSON.stringify(cart));
    alert("Added to cart");
  };

  const buyNow = (item, qty) => {
    const price = parseInt(item.price.replace(/[^0-9]/g, ""));
    const total = price * qty;

    navigate("/review", {
      state: { product: item, quantity: qty, total },
    });
  };

  return (
    <div className="petEssential">
      <TextField
        label="Search"
        placeholder="Search for items..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="search-bar"
      />

      <div className="itemCard">
        {filteredItems.length > 0 ? (
          filteredItems.map((item, index) => {
            const qty = quantities[item.name] || 1;
            const price = parseInt(item.price.replace(/[^0-9]/g, ""));
            const total = price * qty;

            return (
              <div key={index} className="card">
                <img src={item.img} alt={item.name} width={200} height={200} />
                <p>{item.name}</p>
                <p>{item.price}</p>

                <div className="qty">
                  <button onClick={() => decreaseQty(item.name)}>-</button>
                  <span>{qty}</span>
                  <button onClick={() => increaseQty(item.name)}>+</button>
                </div>

                <p>Total: ₹{total}</p>

                <div className="btns">
                  <button onClick={() => addToCart(item, qty)}>
                    Add to Cart
                  </button>
                  <button onClick={() => buyNow(item, qty)}>Buy Now</button>
                </div>
              </div>
            );
          })
        ) : (
          <p style={{ textAlign: "center", fontSize: "30px" }}>
            No items found
          </p>
        )}
      </div>
    </div>
  );
}

export default PetEssential;
