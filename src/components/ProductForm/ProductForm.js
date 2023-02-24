import React, { useState } from "react";
import styled from "styled-components/macro";
import { compose } from "ramda";
import { lighten, desaturate } from "polished";
import { isEmpty } from "utils/validation";
import { FORM_DATA } from "api.js";

const tone = compose(lighten(0.1), desaturate(0.1));

const StyledForm = styled.form`
  display: flex;
  flex-direction: row;
  justify-content: centre;
  gap: 2%;
  align-items: centre;
  padding: 1rem;
  border: 1px solid hotpink;
  border-radius: 5px;
  color: white;
`;

const StyledInput = styled.input`
  display: flex;
  flex-direction: row;
  justify-content: centre;
  gap: 2%;
  align-items: centre;
  padding: 1rem;
  border: 1px solid hotpink;
  border-radius: 5px;
  background: ${tone("hotpink")};
  color: white;
`;

const StyledButton = styled.button`
  border: none;
  color: cornflowerBlue;
  padding: 0.2rem 0.8rem;
  margin-left: 1rem;
  cursor: pointer;
`;

export const ProductForm = () => {
  const [state, setState] = useState(FORM_DATA);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setState((previousState) => ({
      ...previousState,
      [name]: value
    }));
  };

  const handleSubmit = (event) => {
    isEmpty(state)
      ? alert("invalid")
      : alert(
          `A product was submitted: 
      ${state.description} 
      ${state.price} 
      ${state.quantity}`
        );
    event.preventDefault();
  };

  return (
    <>
      <StyledForm onSubmit={handleSubmit}>
        <label>
          Description:
          <StyledInput
            name="description"
            type="text"
            value={state.description}
            onChange={handleChange}
          />
        </label>
        <label>
          Price:
          <StyledInput
            name="price"
            type="text"
            value={state.price}
            onChange={handleChange}
          />
        </label>
        <label>
          Quantity:
          <StyledInput
            name="quantity"
            type="number"
            min="1"
            max="5"
            value={state.quantity}
            onChange={handleChange}
          />
        </label>
        <StyledButton type="submit" value="Submit">
          <span role="img" aria-label="Delete all items ">
            ✔️
          </span>
          Submit
        </StyledButton>
      </StyledForm>
    </>
  );
};
