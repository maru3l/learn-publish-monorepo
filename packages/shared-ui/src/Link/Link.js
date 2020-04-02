// vendors
import React from 'react'
import styled from 'styled-components'

const StyledA = styled.a``;

export default ({children, ...rest}) => (<StyledA {...rest}>{children}</StyledA>);
