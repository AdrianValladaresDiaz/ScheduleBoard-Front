import styled from "styled-components";
import dimensions from "../../styles/dimensions";
import Avatar from "../Avatar/Avatar";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouse } from "@fortawesome/free-solid-svg-icons";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import { UserInfo } from "../../interfaces";
import { useCookies } from "react-cookie";
import { useEffect } from "react";
import jwt_decode from "jwt-decode";
import { loadUserInfoAction } from "../../redux/actions/actionCreators";

const StyledLogo = styled.p`
  font-size: ${dimensions.textSizeMedium};
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
  height: ${dimensions.headerHeight};
  padding: ${dimensions.lateralPadding};
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
    padding-top: 1px;
    margin-right: ${dimensions.mobileSidesPadding};
    width: 30px;
    height: 30px;
  }
`;

const NavigationBar = (): JSX.Element => {
  const user = useSelector<RootState>((state) => state.userInfo) as UserInfo;
  const dispatch = useDispatch();
  const [cookies] = useCookies();

  useEffect(() => {
    const token = cookies[process.env.NEXT_PUBLIC_AUTH_COOKIE_NAME!];
    if (token) {
      const { name, surname, mail } = jwt_decode(token) as UserInfo;
      dispatch(loadUserInfoAction({ name, surname, mail }));
    }
  }, [cookies, dispatch]);

  return (
    <StyledNav>
      <StyledLogo>Schedule Board </StyledLogo>
      <LinkList>
        <Link href={"/home"} passHref>
          <a aria-label="home page">
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
