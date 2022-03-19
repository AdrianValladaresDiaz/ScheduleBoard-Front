import axios from "axios";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { ScheduleBoardResponse } from "../../interfaces";
import ScheduleButton from "../ScheduleButton/ScheduleButton";
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
    router.push(`/login`);
  };

  const submitForm = async (): Promise<void> => {
    try {
      const axiosResponse = await axios.post<ScheduleBoardResponse>(
        `${process.env.NEXT_PUBLIC_BACKEND}authentication/register`,
        {
          data: formState,
        }
      );
      console.log(axiosResponse);
      if (axiosResponse.statusText) {
        await handleSuccess();
      } else {
        setFormError(true);
      }
    } catch {
      setFormError(true);
    }
  };

  const handleSuccess = async (): Promise<void> => {
    setFormSuccess(true);
    await setTimeout(() => {
      redirectToLogin();
    }, 1500);
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
                Register me
              </button>

              <ScheduleButton
                content="Something went wrong :("
                onClickAction={clickOnError}
                className={`error_button error_button--${formError}`}
              />
            </div>
          </>
        )}
      </StyledLoginForm>
    </StyledLoginContainer>
  );
};

export default LoginForm;
