import styled from "styled-components/macro";
import { SMALL_MARGIN_BOTTOM } from "utils/spacing";
import React, { useState, useMemo, Fragment } from "react";
import { Layout } from "components/Layout";
import { useFetch } from "http/refactor";
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
  const { state } = useFetch(url);
  const idle = <p>idle</p>
  const error = <p>error</p>
  const loading = <p>loading...</p>

  const memoizedContent = useMemo(
    () => state?.data?.map(({ title, image, price }, index) => (
      <Fragment key={`product-page-wrapper-${index}`}>
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
      </Fragment>
    )),
    [state]
  );

  const content = () => {
    if (state?.status === "idle") return idle;
    if (state?.status === "error") return error;
    if (state?.status === "fetching") return loading;
    if (state?.status === "fetched") return memoizedContent;
  }

  return (
    <Layout>
      <StyledHeading>Products</StyledHeading>
      <StyledList>
        {content()}
      </StyledList>
    </Layout>
  );
};

export default Products;
