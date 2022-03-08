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
  display: flex;
  justify-content: space-between;
  background-color: ${(props) => props.theme.accent};
  position: fixed;
  top: 0;
  width: 100%;
  padding: 7px ${paddingSizes.mobileSidesPadding};
`;

const LinkList = styled.ul`
  display: flex;
  &* {
    margin-left: ${paddingSizes.mobileSidesPadding};
  }
  & a {
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
