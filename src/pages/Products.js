import styled from "styled-components/macro";
import { SMALL_MARGIN_BOTTOM } from "utils/spacing";
import React, { useState } from "react";
import { Layout } from "components/Layout";
import { useFetch } from "http";
import { StyledSpacer } from "styles/styles";

const StyledList = styled.ul`
  list-style-type: none;
  line-height: 1.5;
`;

const StyledRow = styled.span`
  display: flex;
  gap: 20px;
  color: white;
  border: 1px solid hotpink;
  line-height: 2;
  border-radius: 5px;
  padding: 1rem;
  background: hotpink;
`;

const StyledHeading = styled.h1`
  color: white;
`;

const Products = () => {
  const [url] = useState("https://fakestoreapi.com/products");
  const { data, status } = useFetch(url);

  return (
    <Layout>
      <StyledHeading>Products</StyledHeading>
      <StyledList>
        {status === "fetching" ? (
          <p>`loading...`</p>
        ) : (
          data.map(({ title, image, price }, index) => (
            <>
              <StyledRow key={`product-page-row-${index}`}>
                <li key={`product-page-item-${index}`}>
                  {`${title} | £${price}`}
                </li>
                <img
                  key={`product-page-image-${index}`}
                  height="50px"
                  alt={title}
                  src={image}
                />
              </StyledRow>
              <StyledSpacer height={SMALL_MARGIN_BOTTOM} />
            </>
          ))
        )}
      </StyledList>
    </Layout>
  );
};

export default Products;
