import styled from "styled-components/macro";
import { useState } from "react";
import { Link } from "react-router-dom";
import routes from "router/routes";

const StyledHeader = styled.header`
  color: white;
  background: hotpink;
  display: flex;
  width: 100%;
`;

const StyledLink = styled(Link)`
  color: white;
  line-height: 2;
  position: relative;
  font-size: 1.25rem;
  left: 40px;
`;

const StyledList = styled.ul`
  display: flex;
  gap: 10px;
  list-style-type: none;
  line-height: 1.5;
`;

export const NavBar = () => {
  const [hovering, setHovering] = useState(false);
  return (
    <StyledHeader>
      <StyledList
        onMouseLeave={() => setHovering(false)}
        onMouseEnter={() => setHovering(true)}
      >
        Menu
        {hovering ? (
          <StyledList>
            {routes.map(({ path, title }, index) => (
              <StyledLink key={`navbar-item-${index}`} to={path}>
                {title}
              </StyledLink>
            ))}
          </StyledList>
        ) : null}
      </StyledList>
    </StyledHeader>
  );
};
