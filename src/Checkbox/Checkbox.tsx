import React from 'react';
import styled from 'styled-components';
import { uniqueId } from 'lodash';

const Label = styled.label`
  margin-left: 15px;
  font-size: 16px;
  appearance: none;
  cursor: pointer;
`;

export type CheckboxComponentProps = {
  htmlFor?: string;
  children?: HTMLCollection | string,
  onClick: (e?: React.MouseEvent) => void
} & React.InputHTMLAttributes<HTMLInputElement>;

const CheckboxComponent = ({ onClick, children, htmlFor, ...otherProps }: CheckboxComponentProps) => {
  const innerHtmlFor = htmlFor || uniqueId('checkbox_');
  return (
    <>
      <input type="checkbox" id={innerHtmlFor} onClick={onClick} {...otherProps} />
      <Label htmlFor={innerHtmlFor}>{children}</Label>
    </>
  );
}

export default CheckboxComponent;
