// vendors
import React from 'react';
import styled from 'styled-components';

const StyledButton = styled.button`
  appearance: none;
  border: none;
  background: none;
  border-radius: none;
  margin: 0;
  padding: 0;
`;


export default ({children, ...rest}) => (<StyledButton {...rest}>{children}</StyledButton>)
