// vendors
import React from 'react';
import styled from 'styled-components';

const StyledInput = styled.input`
  appearance: none;
  border: 1px solid tomato;
  border-radius: 0;
  background: inherit;
  color: tomato;
`;

export default props => (<StyledInput {...props}/>)
