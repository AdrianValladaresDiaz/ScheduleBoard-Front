import styled from "styled-components";
import * as textSizes from "../../styles/textSizes";

const StyledLogo = styled.p`
  font-size: ${textSizes.medium};
  font-family: ${(props) => props.theme.logoFont};
`;

const NavigationBar = (): JSX.Element => {
  return <StyledLogo>Schedule Board </StyledLogo>;
};

export default NavigationBar;
