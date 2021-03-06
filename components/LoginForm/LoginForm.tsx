import axios from "axios";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { useCookies } from "react-cookie";
import { ScheduleBoardResponse } from "../../interfaces";
import ScheduleButton from "../ScheduleButton/ScheduleButton";
import Spinner from "../Spinner/Spinner";
import { StyledLoginContainer, StyledLoginForm } from "./LoginForm.styles";

const initialFormState = {
  mail: "",
  password: "",
};

const LoginForm = (): JSX.Element => {
  const [formState, setFormState] = useState(initialFormState);
  const [formError, setFormError] = useState(false);
  const [formSuccess, setFormSuccess] = useState(false);
  const [submitButtonEnabled, setSubmitButtonEnabled] = useState(false);
  const [spinnerVisible, setSpinnerVisible] = useState(false);
  const [, setCookie] = useCookies();

  const router = useRouter();

  useEffect(() => {
    const { mail, password } = formState;

    if (mail !== "" && password !== "") {
      setSubmitButtonEnabled(true);
    } else {
      setSubmitButtonEnabled(false);
    }
  }, [formState]);

  const handleChange = (event: React.FormEvent): void => {
    const target = event.target as HTMLInputElement;
    setFormState({
      ...formState,
      [target.id]: target.value,
    });
  };

  const redirectToLogin = (): void => {
    router.push(`/home`);
  };

  const submitForm = async (): Promise<void> => {
    try {
      setSpinnerVisible(true);
      const axiosResponse = await axios.post<ScheduleBoardResponse>(
        `${process.env.NEXT_PUBLIC_BACKEND}authentication/login`,
        {
          data: formState,
        }
      );
      if (axiosResponse.status === 200) {
        handleSuccess(axiosResponse.data.message.token as string);
      } else {
        handleError();
      }
    } catch {
      handleError();
    }
  };

  const handleSuccess = (token: string): void => {
    setSpinnerVisible(false);
    setFormSuccess(true);
    setCookie(process.env.NEXT_PUBLIC_AUTH_COOKIE_NAME as string, token, {
      maxAge: 60 * 60 * 24 * 5,
    });
    setTimeout(() => {
      redirectToLogin();
    }, 1000);
  };

  const handleError = () => {
    setSpinnerVisible(false);
    setFormError(true);
  };

  const clickOnError = (event: React.MouseEvent) => {
    event.stopPropagation();
    setFormError(false);
  };

  return (
    <StyledLoginContainer
      onSubmit={(event) => {
        event.preventDefault();
      }}
    >
      <div>
        <nav>
          <ul>
            <li className="register_nav register_nav--login">
              <Link href={"/login"}>Log in</Link>
            </li>
            <li className="register_nav register_nav--register">
              <Link href={"/register"}>Register</Link>
            </li>
          </ul>
        </nav>
        <StyledLoginForm>
          {!formSuccess && (
            <>
              <div className="login-form__input-container">
                <label htmlFor="mail" className="login-form__label">
                  e-mail:
                </label>
                <input
                  id="mail"
                  type="email"
                  onChange={handleChange}
                  value={formState.mail ?? ""}
                  placeholder={"write your e-mail"}
                />
              </div>

              <div className="login-form__input-container">
                <label htmlFor={`password`} className="login-form__label">
                  Password:
                </label>
                <input
                  id={"password"}
                  type="password"
                  onChange={handleChange}
                  value={formState.password ?? ""}
                  placeholder="enter your password"
                  maxLength={15}
                />
              </div>

              <div
                className={`login-button-container login-button-container--${formError}`}
              >
                <button
                  className={`submit-button submit-button--${formError}`}
                  onClick={submitForm}
                  disabled={!submitButtonEnabled}
                >
                  Log me in
                </button>

                <ScheduleButton
                  content="Something went wrong :("
                  onClickAction={clickOnError}
                  className={`error_button error_button--${formError}`}
                />
              </div>
            </>
          )}
          {formSuccess && (
            <div className="login-form__success">
              <h3>Successfully logged in</h3>
              <p>{`Welcome. Redirecting to your home screen...`}</p>
            </div>
          )}
          {spinnerVisible && <Spinner />}
        </StyledLoginForm>
      </div>
    </StyledLoginContainer>
  );
};

export default LoginForm;
