import React from "react";
import styled from "styled-components";

import { COLORS } from "../../constants";

import Icon from "../Icon";
import VisuallyHidden from "../VisuallyHidden";

const styles = {
  small: {
    "--height": 24 / 16 + "rem",
    "--borderSize": "1px",
    "--fontSize": 14 / 16 + "rem",
    "--iconSize": 16,
  },
  large: {
    "--height": 36 / 16 + "rem",
    "--borderSize": "2px",
    "--fontSize": "18px",
    "--iconSize": 24,
  },
};

const IconInput = ({ label, icon, width = 250, size, placeholder }) => {
  const style = styles[size];
  return (
    <StyledLabel style={style} width={width}>
      <Icon id={icon} size={style["--iconSize"]} strokeWidth={1.5} />
      <VisuallyHidden>{label}</VisuallyHidden>
      <StyledInput placeholder={placeholder} />
    </StyledLabel>
  );
};

const StyledLabel = styled.label`
  width: ${({ width }) => width + "px"};
  display: flex;
  flex-direction: row;
  align-items: center;
  border-bottom: var(--borderSize) solid black;
  color: ${COLORS.gray700};
  overflow: hidden;

  :focus-within {
    outline-offset: 2px;
    outline: 5px auto HIGHLIGHT;
    outline: 5px auto -webkit-default-focus-ring;
  }
  :hover {
    color: black;
  }
`;

const StyledInput = styled.input`
  border: none;
  outline: none;
  font-size: var(--fontSize);
  font-weight: 700;
  padding-left: 12px;
  color: inherit;

  ::placeholder {
    font-weight: 400;
    color: ${COLORS.gray500};
  }
`;

export default IconInput;
