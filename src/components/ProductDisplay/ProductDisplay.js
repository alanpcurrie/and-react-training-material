import styled from "styled-components/macro";
import { SMALL_MARGIN_BOTTOM } from "utils/spacing";

const StyledWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: centre;
  gap: 10px;
  align-items: centre;
  padding: 1rem;
  background: hotpink;
  color: white;
  border: 1px solid hotpink;
  border-radius: 5px;
`;

const StyledSpacer = styled.div`
  height: ${({ height }) => height};
`;

export const ProductDisplay = ({ product, children }) => {
  return (
    <>
      <StyledWrapper>
        {`${product.name} £${product.price}`}
        {children}
      </StyledWrapper>
      <StyledSpacer height={SMALL_MARGIN_BOTTOM} />
    </>
  );
};
