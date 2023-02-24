import { ProductDisplay } from "components/ProductDisplay";
import React from "react";
import styled from "styled-components/macro";

const StyledButton = styled.button`
  border: none;
  color: cornflowerBlue;
  padding: 0.2rem 0.8rem;
  margin-left: 1rem;
  cursor: pointer;
`;

export const ProductList = ({ products, handler }) => {
  return products.map((product, index) => (
    <ProductDisplay key={`$product-list-item-${index}`} product={product}>
      <StyledButton onClick={() => handler(index)}>
        <span role="img" aria-label="Add to cart">
          ➕
        </span>
        Add to cart
      </StyledButton>
    </ProductDisplay>
  ));
};
