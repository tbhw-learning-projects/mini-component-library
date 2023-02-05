import React from "react";
import styled from "styled-components";

import { COLORS } from "../../constants";
import Icon from "../Icon";
import { getDisplayedValue } from "./Select.helpers";

const Select = ({ label, value, onChange, children }) => {
  const displayedValue = getDisplayedValue(value, children);

  return (
    <StyledSelect>
      {displayedValue}
      <Icon id="chevron-down" color={"currentColor"} />
      <HiddenSelectOverlay aria-label={label} value={value} onChange={onChange}>
        {children}
      </HiddenSelectOverlay>
    </StyledSelect>
  );
};

const StyledSelect = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  height: 43px;
  width: fit-content;
  border-radius: 8px;
  border: none;
  background-color: ${COLORS.transparentGray15};
  padding: 12px 16px;
  color: ${COLORS.gray700};
  font-size: 16px;
  line-height: 18.75px;
  position: relative;

  :focus-within {
    outline: 2px auto Highlight;
    outline: 2px auto -webkit-focus-ring-color;
  }

  :hover {
    color: black;
  }

  svg {
    margin-left: 24px;
  }
`;

const HiddenSelectOverlay = styled.select`
  position: absolute;
  height: 100%;
  width: 100%;
  opacity: 0;
  top: 0;
  left: 0;
`;

export default Select;
