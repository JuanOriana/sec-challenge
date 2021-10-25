import { useState } from "react";
import styled from "@emotion/styled";
import Card from "../components/Card";

const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 40px;
`;

const FilterGroup = styled.div`
  display: flex;
  align-items: center;
`;

const FilterSelect = styled.select`
  color: white;
  background: ${(props) => props.theme.colors.brand.primarydark};
  padding: 10px;
  border-radius: 12px;
  font-weight: 500;
  font-size: 16px;
  margin-left: 10px;
`;

const data = [
  {
    product_id: 1,
    name: "cervezaaa",
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
    name: "otro",
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
    name: "item 3",
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
    name: "vino",
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
    name: "otro 2",
    total_price: "600",
    units_per_pack: 6,
    categories: ["otros"],
    discount_percentage: 20,
    size: 333,
    image_url:
      "https://cdn.shopify.com/s/files/1/0254/2947/5433/products/cerveza-andes-origen-rubia-473-siempreencasa_600x600.png?v=1629814628?nocache=0.763811395909223",
  },
];

export default function Home() {
  const [filteredData, setFilteredData] = useState(data);

  const filterData = (event) => {
    if (event.target.value == "todos") {
      setFilteredData(data);
    } else {
      setFilteredData(
        data.filter((item) => item.categories.includes(event.target.value))
      );
    }
  };
  return (
    <PageContainer>
      <FilterGroup>
        <p>Filtrar por</p>
        <FilterSelect onChange={filterData}>
          <option value="todos">Todos</option>
          <option value="cervezas">Cervezas</option>
          <option value="vinos">Vinos</option>
          <option value="otros">Otros</option>
        </FilterSelect>
      </FilterGroup>
      <div
        style={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}
      >
        {filteredData.map((cardData, index) => (
          <Card cardData={cardData} key={index} />
        ))}
      </div>
    </PageContainer>
  );
}
