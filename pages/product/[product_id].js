import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import styled from "@emotion/styled";
import Card from "../../components/Card";
import { useCart } from "../../contexts/CartContext";

const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 40px;
`;

const SectionContainer = styled.div`
  display: flex;
  align-items: center;
  width: 90%;
  padding: 10px;
`;

const MainProductImage = styled.img`
  color: ${(props) => props.theme.colors.brand.secondary};
  border: 3px solid ${(props) => props.theme.colors.brand.secondary};
  height: 400px;
  width: 400px;
  border-radius: 50%;
  margin-right: 10px;
`;

const ProductData = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 100px;
`;

const ProductTitle = styled.h2`
  color: ${(props) => props.theme.colors.brand.secondary};
  margin-right: 10px;
  margin-bottom: 0;
  word-wrap: break-word;
  font-size: 40px;
`;

const ProductDescription = styled.p`
  color: #303033;
  font-size: 24px;
  margin-top: 0;
`;

const ProductSize = styled.span`
  color: #777;
  font-size: 22px;
  margin-left: 10px;
  text-transform: lowercase;
`;

const ProductPrice = styled.span`
  color: black;
  font-weight: 700;
  font-size: 32px;
`;

const ProductUnits = styled.span`
  color: #303033;
  font-weight: 300;
  margin-left: 3px;
  font-size: 32px;
`;

const ShoppingCartButton = styled.button`
  align-self: end;
  color: white;
  background: ${(props) => props.theme.colors.brand.secondary};
  font-weight: 700;
  border: 0 solid white;
  font-size: 24px;
  border-radius: 12px;
  padding: 20px;
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

const Product = () => {
  const router = useRouter();
  const { product_id } = router.query;
  const [product, setProduct] = useState({});
  const [recommendations, setRecommendations] = useState([]);
  const { cart, addItemToCart, removeItemFromCart } = useCart();

  useEffect(() => {
    fetch("http://localhost:7777/products")
      .then((response) => response.json())
      .then((foundProducts) => {
        setProduct(
          foundProducts.filter((product) => product.product_id == product_id)[0]
        );

        fetch("http://localhost:7777/recommendations?product_id=" + product_id)
          .then((response) => response.json())
          .then((foundData) => {
            setRecommendations(
              foundProducts.filter(
                (product) =>
                  foundData[0] &&
                  foundData[0].recommendations.includes(product.product_id)
              )
            );
          });
      });
  }, [product_id]);
  return (
    <PageContainer>
      <SectionContainer>
        <MainProductImage
          src={product ? product.image_url : ""}
          alt={product && product.name}
        />
        <ProductData>
          <ProductTitle>
            {product && product.name}
            <ProductSize>{product && product.size}ml</ProductSize>
          </ProductTitle>
          <ProductDescription>
            {product && product.description}
          </ProductDescription>
          <p>
            <ProductPrice>$ {product && product.total_price}</ProductPrice>
            <ProductUnits>
              {" "}
              ({product && product.units_per_pack} unidades)
            </ProductUnits>
          </p>
        </ProductData>
      </SectionContainer>
      {cart.indexOf(product) < 0 && (
        <ShoppingCartButton onClick={() => addItemToCart(product)}>
          Anadir al carrito
        </ShoppingCartButton>
      )}
      {cart.indexOf(product) >= 0 && (
        <ShoppingCartRemoveButton onClick={() => removeItemFromCart(product)}>
          Sacar del carrito
        </ShoppingCartRemoveButton>
      )}
      <SectionContainer style={{ marginTop: 40, flexDirection: "column" }}>
        <h2>Mas como esto:</h2>
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
          }}
        >
          {recommendations.map((cardData, index) => (
            <Card cardData={cardData} key={index} />
          ))}
        </div>
      </SectionContainer>
    </PageContainer>
  );
};

export default Product;
