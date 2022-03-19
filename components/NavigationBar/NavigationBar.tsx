import styled from "styled-components";
import * as textSizes from "../../styles/textSizes";
import * as paddingSizes from "../../styles/paddings";
import Avatar from "../Avatar/Avatar";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouse } from "@fortawesome/free-solid-svg-icons";

const StyledLogo = styled.p`
  font-size: ${textSizes.medium};
  font-family: ${(props) => props.theme.logoFont};
  width: 5px;
  line-height: 20px;
`;

const StyledNav = styled.nav`
  z-index: 99;
  display: flex;
  justify-content: space-between;
  background-color: ${(props) => props.theme.accent};
  position: fixed;
  top: 0;
  width: 100%;
  height: ${(props) => props.theme.headerHeight};
  padding: ${(props) => props.theme.lateralPadding};
`;

const LinkList = styled.ul`
  display: flex;
  align-items: center;
  & * {
    &:visited {
      color: black;
    }
  }
  & a,
  a:hover,
  a:visited,
  a:active {
    padding-top: 6px;
    margin-right: ${paddingSizes.mobileSidesPadding};
    width: 35px;
  }
`;

const NavigationBar = (): JSX.Element => {
  return (
    <StyledNav>
      <StyledLogo>Schedule Board </StyledLogo>
      <LinkList>
        <Link href={"/home"} passHref>
          <a>
            <FontAwesomeIcon icon={faHouse} />
          </a>
        </Link>
        <Avatar letters="AV" />
      </LinkList>
    </StyledNav>
  );
};

export default NavigationBar;
