import styled from "styled-components";
import * as textSizes from "../../styles/textSizes";
import * as paddingSizes from "../../styles/paddings";

const StyledLogo = styled.p`
  font-size: ${textSizes.medium};
  font-family: ${(props) => props.theme.logoFont};
  width: 5px;
  line-height: 20px;
`;

const StyledNav = styled.nav`
  background-color: ${(props) => props.theme.accent};
  position: fixed;
  top: 0;
  width: 100%;
  padding: 7px ${paddingSizes.mobileSidesPadding};
`;

const NavigationBar = (): JSX.Element => {
  return (
    <StyledNav>
      <StyledLogo>Schedule Board </StyledLogo>
    </StyledNav>
  );
};

export default NavigationBar;
