import { useState, useEffect } from "react";
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

export default function Home() {
  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetch("http://localhost:7777/products")
      .then((response) => response.json())
      .then((foundData) => {
        setData(foundData);
        setFilteredData(foundData);
      });

    fetch("http://localhost:7777/categories")
      .then((response) => response.json())
      .then((foundData) => {
        setCategories(foundData);
      });
  }, []);

  const filterData = (event) => {
    if (event.target.value == "todos") {
      setFilteredData(data);
    } else {
      setFilteredData(
        data.filter(
          (item) =>
            item.categories && item.categories.includes(event.target.value)
        )
      );
    }
  };

  return (
    <PageContainer>
      <FilterGroup>
        <p>Filtrar por</p>
        <FilterSelect onChange={filterData}>
          <option value="todos">Todos</option>
          {categories.map((category, index) => (
            <option value={category} key={index}>
              {category.charAt(0).toUpperCase() + category.slice(1)}
            </option>
          ))}
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
