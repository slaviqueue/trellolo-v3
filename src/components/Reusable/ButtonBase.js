// @flow

import React from 'react';
import styled from 'styled-components';
import type { ComponentType } from 'react';

type ButtonProps = {
  onClick?: mixed,
  children?: React$Element<*>,
  noPadding?: boolean,
}

const ButtonView: ComponentType<{ noPadding?: boolean, onClick: mixed }> = styled.button`
  background-color: transparent;
  border: none;
  ${({ noPadding }) => noPadding ? 'padding: 0;' : 'padding: 8px;'}
  cursor: pointer;
`;

const Button = ({ onClick, children, noPadding }: ButtonProps) => (
  <ButtonView onClick={onClick} noPadding={noPadding}>
    {children}
  </ButtonView>
);

export default Button;