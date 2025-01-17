import { CartCard } from "../components";
import { UseTitle } from "../hooks/UseTitle";

export const Cart = () => {
  const cartProducts = [
    {
      id: 1,
      name: "Sony Wh-Ch510 Bluetooth Wireless",
      price: "149",
      image: "/assets/images/1001.png",
    },
    {
      id: 2,
      name: "boAt Rockerz 450",
      price: "49",
      image: "/assets/images/1002.png",
    },
  ];

  UseTitle("Cart");

  return (
    <main>
      <section className="cart">
        <h1>Cart Items: {cartProducts.length}</h1>
        {cartProducts &&
          cartProducts.map((product) => <CartCard product={product} />)}
      </section>
    </main>
  );
};
