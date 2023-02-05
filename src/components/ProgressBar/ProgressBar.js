/* eslint-disable no-unused-vars */
import React from "react";
import styled from "styled-components";

import { COLORS } from "../../constants";
import VisuallyHidden from "../VisuallyHidden";

const STYLES = {
  small: {
    "--height": "8px",
    "--radius": "4px",
    "--innerRadius": "4px",
    "--padding": "0",
  },
  medium: {
    "--height": "12px",
    "--radius": "4px",
    "--innerRadius": "4px",
    "--padding": "0",
  },
  large: {
    "--height": "24px",
    "--radius": "8px",
    "--innerRadius": "4px",
    "--padding": "4px",
  },
};

const StyledProgressIndicator = styled.div`
  width: ${({ width }) => width + "%"};
  height: 100%;
  background-color: ${COLORS.primary};
`;

const StyledProgressBar = styled.div`
  background-color: ${COLORS.transparentGray15};
  height: var(--height);
  max-height: var(--height);
  padding: var(--padding);
  border-radius: var(--radius);
  overflow: hidden;
  box-shadow: inset 0px 2px 4px ${COLORS.transparentGray35};
`;

const StyledProgressContentBox = styled.div`
  width: 100%;
  height: 100%;
  border-radius: var(--innerRadius);
  overflow: hidden;
`;

const ProgressBar = ({ value = 0, size, label }) => {
  const styles = STYLES[size];
  return (
    <StyledProgressBar
      role="progressbar"
      max={100}
      aria-valuenow={value}
      style={styles}
      aria-label={label}
    >
      <StyledProgressContentBox>
        <StyledProgressIndicator width={value}>
          <VisuallyHidden>{value} %</VisuallyHidden>
        </StyledProgressIndicator>
      </StyledProgressContentBox>
    </StyledProgressBar>
  );
};

export default ProgressBar;
