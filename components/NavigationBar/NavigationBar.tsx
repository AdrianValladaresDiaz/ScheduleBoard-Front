import styled from "styled-components";
import * as textSizes from "../../styles/textSizes";
import * as paddingSizes from "../../styles/paddings";
import Avatar from "../Avatar/Avatar";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouse } from "@fortawesome/free-solid-svg-icons";
import { useDispatch, useSelector, useStore } from "react-redux";
import store, { RootState } from "../../redux/store";
import { UserInfo } from "../../interfaces";
import { useCookies } from "react-cookie";
import { useEffect } from "react";
import jwt_decode from "jwt-decode";
import { loadUserInfoAction } from "../../redux/actions/actionCreators";

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
  box-shadow: 3px 0 15px grey;
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
    color: black;
    padding-top: 6px;
    margin-right: ${paddingSizes.mobileSidesPadding};
    width: 35px;
    height: 35px;
  }
`;

const NavigationBar = (): JSX.Element => {
  const user = useSelector<RootState>((state) => state.userInfo) as UserInfo;
  const dispatch = useDispatch();
  const [cookies] = useCookies();

  useEffect(() => {
    const token = cookies[process.env.NEXT_PUBLIC_AUTH_COOKIE_NAME as string];

    if (token) {
      const { name, surname, mail } = jwt_decode(token) as UserInfo;
      console.log({ name, surname, mail });
      dispatch(loadUserInfoAction({ name, surname, mail }));
    }
  }, [cookies, dispatch]);

  return (
    <StyledNav>
      <StyledLogo>Schedule Board </StyledLogo>
      <LinkList>
        <Link href={"/home"} passHref>
          <a>
            <FontAwesomeIcon icon={faHouse} />
          </a>
        </Link>
        <Avatar
          letters={
            user.name
              ? `${user.name[0].toUpperCase()}${user.surname[0].toUpperCase()}`
              : ""
          }
        />
      </LinkList>
    </StyledNav>
  );
};

export default NavigationBar;
