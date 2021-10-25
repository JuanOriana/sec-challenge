import { useState, useEffect } from "react";
import styled from "@emotion/styled";
import { useCart } from "../contexts/CartContext";
import Link from "next/link";

const NavbarContainer = styled.nav`
  width: 100%;
  color: white;
  background-color: ${(props) => props.theme.colors.brand.primarydark};
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 20px;
  overflow: hidden;
`;

const ShoppingCartImage = styled.img`
  width: 40px;
  height: 40px;
  cursor: pointer;
`;
const ShoppingCartSize = styled.div`
  margin-right: 40px;
  margin-left: 5px;
  background: red;
  height: 20px;
  width: 20px;
  text-align: center;
  color: white;
  font-size: 15px;
  font-weight: 700;
  border-radius: 50%;
`;
const DropdownContainer = styled.nav`
  position: absolute;
  top: 60px;
  width: 300px;
  transform: translateX(-80%);
  background-color: ${(props) => props.theme.colors.brand.primary};
  border-bottom-left-radius: 12px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 10px;
  overflow: hidden;
`;

const ProductImage = styled.img`
  height: 30px;
  width: 30px;
  border: 3px solid ${(props) => props.theme.colors.brand.secondary};
  border-radius: 50%;
  margin-right: 10px;
`;

const RemoveImage = styled.img`
  height: 30px;
  width: 30px;
  margin-left: 10px;
  cursor: pointer;
`;

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const { cart } = useCart();
  return (
    <NavbarContainer>
      <Link href="/">
        <h1 style={{ cursor: "pointer" }}>SEC - Challenge</h1>
      </Link>
      <div style={{ display: "flex", alignItems: "end" }}>
        <ShoppingCartImage src="/carrito.png" onClick={() => setOpen(!open)} />
        <ShoppingCartSize>{cart.length}</ShoppingCartSize>

        {open && <DropdownMenu />}
      </div>
    </NavbarContainer>
  );
};

const DropdownMenu = () => {
  const [open, setOpen] = useState(false);
  const { cart, removeItemFromCart } = useCart();
  const [total, setTotal] = useState(0);
  useEffect(() => {
    if (cart.length > 0) {
      setTotal(
        cart.reduce(
          (total, cartItem) => total + Number(cartItem.total_price),
          0
        )
      );
      console.log(total);
    } else {
      setTotal(0);
    }
  }, [cart]);
  return (
    <DropdownContainer>
      <h4>Tu carrito</h4>
      {cart.map((cartItem, index) => (
        <div key={index} style={{ display: "flex", alignItems: "center" }}>
          <ProductImage src={cartItem.image_url} />
          <p key={index} style={{ fontSize: "16px", margin: 0 }}>
            {cartItem.name}
          </p>
          <p style={{ margin: "0 20px" }}>${cartItem.total_price}</p>
          <RemoveImage
            onClick={() => removeItemFromCart(cartItem)}
            src="/x.png"
            alt="remover"
          />
        </div>
      ))}
      {cart.length == 0 && <p>¡Tu carrito esta vacio!</p>}
      <p style={{ fontWeight: 700 }}>{total > 0 && "Total: $" + total}</p>
    </DropdownContainer>
  );
};
export default Navbar;
