import React from "react";
import { render, fireEvent, getByTestId, screen } from "@testing-library/react";
import Card from "../components/Card";
import NavBar from "../components/Navbar";
import { CartProvider, CartContext } from "../contexts/CartContext";
import { ThemeProvider } from "@emotion/react";

const product = {
  product_id: "4854058319917",
  variant_id: "33619202211885",
  total_price: "283.50",
  price_per_unit: "283.5",
  list_price_id: "7",
  sku: "Combo Gaseosas Latas 354",
  categories: ["gaseosas"],
  units_per_pack: 1,
  image_url:
    "https://cdn.shopify.com/s/files/1/0257/2242/1293/products/Combo_Gaseosa_Latas.jpg?v=1585767272",
  handle:
    "7up-light-paso-de-los-toros-pomelo-pepsi-black-6pack-354ml-por-variedad",
  compare_at_price: "630.00",
  allowed_packs: [1, 2, 3],
  name: "7up Light & Paso de los toros Pomelo & Pepsi Black. (6pack 354ml por variedad)",
  description: "",
  discount_percentage: 55.00000000000001,
  size: 1000,
  price_per_litre: "201",
};

const theme = {
  colors: {
    brand: {
      primarydark: "#253C78",
      primary: "#2B59C3",
      secondary: "#D36582",
      beige: "#FFEECF",
      platinum: "#EBEBEB",
    },
  },
};

test("CartProvider cart is empty by default", () => {
  const { getByText } = render(
    <CartProvider>
      <CartContext.Consumer>
        {(value) => <span>Cart is: {value[0].toString()}</span>}
      </CartContext.Consumer>
    </CartProvider>
  );
  expect(getByText("Cart is:")).toBeTruthy;
});

test("Clicking on add to cart should increment cart size", () => {
  const { container } = render(
    <CartProvider>
      <ThemeProvider theme={theme}>
        <NavBar />
        <Card cardData={product} />
      </ThemeProvider>
    </CartProvider>
  );
  let cartSize = getByTestId(container, "cart-size");
  expect(cartSize.textContent).toBe("0");
  const addToCart = getByTestId(container, "add-to-cart");
  fireEvent.click(addToCart);
  cartSize = getByTestId(container, "cart-size");
  expect(cartSize.textContent).toBe("1");
});

test("Clicking on remove from cart should decrement cart size", () => {
  const { container, rerender } = render(
    <CartProvider>
      <ThemeProvider theme={theme}>
        <NavBar />
        <Card cardData={product} />
      </ThemeProvider>
    </CartProvider>
  );
  const cartSize = getByTestId(container, "cart-size");
  const addToCart = getByTestId(container, "add-to-cart");
  fireEvent.click(addToCart);
  //I have to rerender in order for button to update
  rerender(
    <CartProvider>
      <ThemeProvider theme={theme}>
        <NavBar />
        <Card cardData={product} />
      </ThemeProvider>
    </CartProvider>
  );
  const removeFromCart = getByTestId(container, "remove-from-cart");
  fireEvent.click(removeFromCart);
  expect(cartSize.textContent).toBe("0");
});

test("Clicking add to cart should disable adding", () => {
  const { container, rerender } = render(
    <CartProvider>
      <ThemeProvider theme={theme}>
        <NavBar />
        <Card cardData={product} />
      </ThemeProvider>
    </CartProvider>
  );
  const cartSize = getByTestId(container, "cart-size");
  const addToCart = getByTestId(container, "add-to-cart");
  fireEvent.click(addToCart);
  //I have to rerender in order for button to update
  rerender(
    <CartProvider>
      <ThemeProvider theme={theme}>
        <NavBar />
        <Card cardData={product} />
      </ThemeProvider>
    </CartProvider>
  );
  expect(screen.queryByText("Añadir al carrito")).toBeNull();
});

test("Clicking remove from cart should disable removing", () => {
  const { container, rerender } = render(
    <CartProvider>
      <ThemeProvider theme={theme}>
        <NavBar />
        <Card cardData={product} />
      </ThemeProvider>
    </CartProvider>
  );
  const cartSize = getByTestId(container, "cart-size");
  const addToCart = getByTestId(container, "add-to-cart");
  fireEvent.click(addToCart);
  //I have to rerender in order for button to update
  rerender(
    <CartProvider>
      <ThemeProvider theme={theme}>
        <NavBar />
        <Card cardData={product} />
      </ThemeProvider>
    </CartProvider>
  );
  const removeFromCart = getByTestId(container, "remove-from-cart");
  fireEvent.click(removeFromCart);
  fireEvent.click(addToCart);
  rerender(
    <CartProvider>
      <ThemeProvider theme={theme}>
        <NavBar />
        <Card cardData={product} />
      </ThemeProvider>
    </CartProvider>
  );
  expect(screen.queryByText("Sacar del carrito")).toBeNull();
});
