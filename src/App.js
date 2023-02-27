import React, { useState, useDebugValue } from "react";
import styled from "styled-components/macro";

import { MEDIUM_MARGIN_BOTTOM } from "utils/spacing";
import { StyledSpacer, StyledContainer } from "styles/styles";

import { ProductList } from "components/ProductList";
import { Basket } from "components/Basket";
import { ProductForm } from "components/ProductForm";
import { StockCount } from "components/StockCount";
import { Layout } from "components/Layout";
import { removeItemFromArray } from "utils/array-utils";

import { DATA } from "api.js";

const StyledButton = styled.button`
  border: none;
  color: cornflowerBlue;
  padding: 0.2rem 0.8rem;
  margin-left: 1rem;
  cursor: pointer;
`;

export default function App() {
  const [products] = useState(DATA);
  const [basket, setBasket] = useState([]);

  const addToBasket = (index) => {
    setBasket([...basket, ...[products[index]]]);
  };

  const calculatePrice = () => {
    return basket.reduce((price, product) => price + product.price, 0);
  };

  useDebugValue("hi from basket", basket);

  return (
    <Layout>
      <StyledSpacer height={MEDIUM_MARGIN_BOTTOM} />
      <ProductForm />
      <StyledSpacer height={MEDIUM_MARGIN_BOTTOM} />
      <StockCount />
      <StyledSpacer height={MEDIUM_MARGIN_BOTTOM} />
      <ProductList products={products} handler={addToBasket} />
      <StyledSpacer height={MEDIUM_MARGIN_BOTTOM} />
      <StyledContainer width={"300px"}>
        <span role="img" aria-label="shopping cart ">
          🛒
        </span>
        Total: £{calculatePrice()}
        {basket.length && (
          <StyledButton onClick={() => setBasket([])}>
            <span role="img" aria-label="Delete all items ">
              ❌{" "}
            </span>
            Delete all items
          </StyledButton>
        )}
      </StyledContainer>
      <StyledSpacer height={MEDIUM_MARGIN_BOTTOM} />
      <Basket
        products={basket}
        handler={removeItemFromArray(setBasket)(basket)}
      />
      {/* <Basket products={basket} handler={(removeFromBasket)} /> */}
      <StyledSpacer height={MEDIUM_MARGIN_BOTTOM} />
    </Layout>
  );
}
