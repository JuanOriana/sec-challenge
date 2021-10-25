import React from "react";
import styled from "@emotion/styled";
import { useCart } from "../contexts/CartContext";
import Link from "next/link";

const CardContainer = styled.div`
  background: ${(props) => props.theme.colors.brand.platinum};
  border-radius: 12px;
  align-items: center;
  box-shadow: 0px 1px 3px #555;
  display: flex;
  flex-direction: column;
  padding: 10px;
  color: white;
  width: 320px;
  margin: 8px;
`;

const CardData = styled.div`
  border-radius: 12px;
  justify-content: center;
  display: flex;
  flex-direction: column;
`;

const CardImage = styled.img`
  color: ${(props) => props.theme.colors.brand.secondary};
  border: 3px solid ${(props) => props.theme.colors.brand.secondary};
  height: 120px;
  width: 120px;
  min-height: 120px;
  min-width: 120px;
  border-radius: 50%;
  margin-right: 10px;
  cursor: pointer;
`;

const CardTitle = styled.h2`
  color: ${(props) => props.theme.colors.brand.secondary};
  margin-right: 10px;
  word-wrap: break-word;
  font-size: 16px;
  cursor: pointer;
  &:hover {
    color: #ff9999;
    transition: ease-in-out 0.2s;
  }
`;

const CardSize = styled.span`
  color: #777;
  font-size: 14px;
  margin-left: 5px;
  text-transform: lowercase;
`;

const CardPrice = styled.span`
  color: black;
  font-weight: 700;
`;

const CardUnits = styled.span`
  color: #303033;
  font-weight: 300;
  margin-left: 3px;
`;

const ShoppingCartButton = styled.button`
  align-self: end;
  color: white;
  background: ${(props) => props.theme.colors.brand.secondary};
  font-weight: 700;
  border: 0 solid white;
  border-radius: 12px;
  padding: 8px;
  cursor: pointer;
  &:hover {
    background: #ff8891;
    transition: ease-in-out 0.2s;
  }
`;

const ShoppingCartRemoveButton = styled(ShoppingCartButton)`
  background: #ee4444;
  &:hover {
    background: #ee7777;
  }
`;

const Card = ({ cardData }) => {
  const {
    product_id,
    name,
    total_price,
    units_per_pack,
    size,
    discount_percentage,
    image_url,
  } = cardData;
  const { cart, addItemToCart, removeItemFromCart } = useCart();

  return (
    <CardContainer>
      <div style={{ display: "flex" }}>
        <Link href={"/product/" + product_id}>
          <CardImage src={image_url} alt={name} />
        </Link>
        <CardData>
          <Link href={"/product/" + product_id}>
            <CardTitle>
              {name}
              <CardSize>{size}ml</CardSize>
            </CardTitle>
          </Link>

          <p>
            <CardPrice>${total_price}</CardPrice>
            <CardUnits> ({units_per_pack} unidades)</CardUnits>
          </p>
        </CardData>
      </div>
      {cart.indexOf(cardData) < 0 && (
        <ShoppingCartButton
          onClick={() => addItemToCart(cardData)}
          data-testid="add-to-cart"
        >
          Añadir al carrito
        </ShoppingCartButton>
      )}
      {cart.indexOf(cardData) >= 0 && (
        <ShoppingCartRemoveButton
          onClick={() => removeItemFromCart(cardData)}
          data-testid="remove-from-cart"
        >
          Sacar del carrito
        </ShoppingCartRemoveButton>
      )}
    </CardContainer>
  );
};

export default Card;
