import React from 'react';
import styled from 'styled-components';
import { uniqueId } from 'lodash';

const Label = styled.label<LabelComponentProps>`
  position: relative;
  padding-left: 25px;
  font-size: 16px;
  appearance: none;
  cursor: pointer;

  /* box */
  ::before {
    content: "";
    display: inline-block;
    height: 16px;
    width: 16px;
    border: 1px solid;
    background-color: ${props => props.checked ? props.theme.color2 : ''};
    position: absolute;
    left: 0;
    top: 0;
  }

  /* checkmark */
  ::after {
    ${props => props.checked ? "content: ''" : "content: none"};
    display: inline-block;
    height: 5px;
    width: 10px;
    border-left: 2px solid;
    border-bottom: 2px solid;
    transform: rotate(-45deg);
    position: absolute;
    left: 3px;
    top: 4px;
  }

  :focus:not(:focus-visible) {
    outline: none;
  }
`;

const HiddenInput = styled.input`
  border: 0;
  clip: rect(0 0 0 0);
  height: 1px;
  margin: -1px;
  overflow: hidden;
  padding: 0;
  position: absolute;
  width: 1px;
`;

export type CheckboxComponentProps = {
  htmlFor?: string;
  children?: HTMLCollection | string;
  onChange: (e?: React.ChangeEvent) => void;
} & React.InputHTMLAttributes<HTMLInputElement>;

export type LabelComponentProps = {
  checked?: boolean;
} & React.LabelHTMLAttributes<HTMLLabelElement>;

const CheckboxComponent = ({ onChange, children, htmlFor, ...otherProps }: CheckboxComponentProps) => {
  const innerHtmlFor = htmlFor || uniqueId('checkbox_');
  return (
    <>
      <HiddenInput type="checkbox" id={innerHtmlFor} onChange={onChange} {...otherProps} />
      <Label htmlFor={innerHtmlFor} checked={otherProps.checked}>{children}</Label>
    </>
  );
}

export default CheckboxComponent;
