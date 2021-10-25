import { useRouter } from "next/router";
import styled from "@emotion/styled";
import Card from "../../components/Card";

const data = [
  {
    product_id: 1,
    name: "cervezaaaaaaaa  aaaaaaaaa",
    total_price: "600",
    units_per_pack: 6,
    discount_percentage: 20,
    size: 333,
    categories: ["vinos", "mas vendidos"],
    image_url:
      "https://cdn.shopify.com/s/files/1/0254/2947/5433/products/cerveza-andes-origen-rubia-473-siempreencasa_600x600.png?v=1629814628?nocache=0.763811395909223",
  },
  {
    product_id: 2,
    name: "cervezaaaaaaaa  aaaaaaaaa",
    total_price: "600",
    units_per_pack: 6,
    discount_percentage: 20,
    size: 333,
    categories: ["vinos", "mas vendidos"],
    image_url:
      "https://cdn.shopify.com/s/files/1/0254/2947/5433/products/cerveza-andes-origen-rubia-473-siempreencasa_600x600.png?v=1629814628?nocache=0.763811395909223",
  },
  {
    product_id: 3,
    name: "cervezaaaaaaaa  aaaaaaaaa",
    total_price: "600",
    units_per_pack: 6,
    discount_percentage: 20,
    size: 333,
    categories: ["cervezas", "todos"],
    image_url:
      "https://cdn.shopify.com/s/files/1/0254/2947/5433/products/cerveza-andes-origen-rubia-473-siempreencasa_600x600.png?v=1629814628?nocache=0.763811395909223",
  },
  {
    product_id: 4,
    name: "cervezaaaaaaaa  aaaaaaaaa",
    total_price: "600",
    units_per_pack: 6,
    discount_percentage: 20,
    size: 333,
    categories: ["cervezas", "vinos"],
    image_url:
      "https://cdn.shopify.com/s/files/1/0254/2947/5433/products/cerveza-andes-origen-rubia-473-siempreencasa_600x600.png?v=1629814628?nocache=0.763811395909223",
  },
  {
    product_id: 5,
    name: "cervezaaaaaaaa  aaaaaaaaa",
    total_price: "600",
    units_per_pack: 6,
    categories: ["otros"],
    discount_percentage: 20,
    size: 333,
    image_url:
      "https://cdn.shopify.com/s/files/1/0254/2947/5433/products/cerveza-andes-origen-rubia-473-siempreencasa_600x600.png?v=1629814628?nocache=0.763811395909223",
  },
];

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
  text-transform: uppercase;
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

const Product = () => {
  const router = useRouter();
  const { product_id } = router.query;
  return (
    <PageContainer>
      <SectionContainer>
        <MainProductImage src="https://cdn.shopify.com/s/files/1/0254/2947/5433/products/cerveza-andes-origen-rubia-473-siempreencasa_600x600.png?v=1629814628?nocache=0.763811395909223" />
        <ProductData>
          <ProductTitle>
            HOla
            <ProductSize>300ml</ProductSize>
          </ProductTitle>
          <ProductDescription>aasadadasdasdasdasdsa</ProductDescription>
          <p>
            <ProductPrice>$600</ProductPrice>
            <ProductUnits> (6 unidades)</ProductUnits>
          </p>
        </ProductData>
        <ShoppingCartButton onClick={() => addItemToCart(cardData)}>
          Anadir al carrito
        </ShoppingCartButton>
      </SectionContainer>
      <SectionContainer style={{ marginTop: 40, flexDirection: "column" }}>
        <h2>Mas como esto:</h2>
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
          }}
        >
          {data.map((cardData, index) => (
            <Card cardData={cardData} key={index} />
          ))}
        </div>
      </SectionContainer>
    </PageContainer>
  );
};

export default Product;
