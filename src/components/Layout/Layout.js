import styled from "styled-components/macro";
import { NavBar } from "components/NavBar";
import { linearGradient } from "polished";

const StyledWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: centre;
  gap: 5%;
  align-items: centre;
  padding: 1rem;
  background: papayawhip;
  height: 100%;
  width: 98%;
  max-width: 1200px;
  margin: 0 auto;
  color: black;
  ${linearGradient({
    colorStops: ["#00FFFF 0%", "rgba(0, 0, 255, 0) 33.333%", "#B026FF 95%"],
    toDirection: "to top right",
    fallback: "#fe019a"
  })}
`;

export const Layout = ({ children }) => {
  return (
    <StyledWrapper>
      <NavBar />
      {children}
    </StyledWrapper>
  );
};
