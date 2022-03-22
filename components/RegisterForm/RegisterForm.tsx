import axios from "axios";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { ScheduleBoardResponse } from "../../interfaces";
import ScheduleButton from "../ScheduleButton/ScheduleButton";
import Spinner from "../Spinner/Spinner";
import {
  StyledRegisterContainer,
  StyledRegisterForm,
} from "./RegisterForm.styles";

const initialFormState = {
  mail: "",
  name: "",
  surname: "",
  password: "",
  confirmPassword: "",
};

const RegisterForm = (): JSX.Element => {
  const [formState, setFormState] = useState(initialFormState);
  const [formError, setFormError] = useState(false);
  const [formSuccess, setFormSuccess] = useState(false);
  const [submitButtonEnabled, setSubmitButtonEnabled] = useState(false);
  const [spinnerVisible, setSpinnerVisible] = useState(false);

  const router = useRouter();

  useEffect(() => {
    const { mail, name, surname, password, confirmPassword } = formState;
    let passwordIsOk = false;
    if (
      password === confirmPassword &&
      password !== "" &&
      confirmPassword !== ""
    ) {
      passwordIsOk = true;
    }
    if (mail !== "" && name !== "" && surname !== "" && passwordIsOk) {
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

  const handleSuccess = (): void => {
    setSpinnerVisible(false);
    setFormSuccess(true);
    setTimeout(() => {
      redirectToLogin();
    }, 1500);
  };

  const handleFailure = (): void => {
    setSpinnerVisible(false);
    setFormError(true);
  };

  const submitForm = async (): Promise<void> => {
    setSpinnerVisible(true);
    try {
      const { confirmPassword, ...userData } = formState;
      const axiosResponse = await axios.post<ScheduleBoardResponse>(
        `${process.env.NEXT_PUBLIC_BACKEND}authentication/register`,
        {
          data: userData,
        }
      );
      if (axiosResponse.status === 201) {
        handleSuccess();
      } else {
        handleFailure();
      }
    } catch {
      handleFailure();
    }
  };

  const clickOnError = (event: React.MouseEvent) => {
    event.stopPropagation();
    setFormError(false);
  };

  return (
    <StyledRegisterContainer>
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
      <StyledRegisterForm
        onSubmit={(event) => {
          event.preventDefault();
        }}
      >
        {!formSuccess && (
          <>
            <div className="register-form__input-container">
              <label htmlFor="mail" className="register-form__label">
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

            <div className="register-form__input-container">
              <label htmlFor={`name`} className="register-form__label">
                Name:
              </label>
              <input
                id={"name"}
                type="text"
                onChange={handleChange}
                value={formState.name ?? ""}
                placeholder="write your name"
                maxLength={15}
              />
            </div>

            <div className="register-form__input-container">
              <label htmlFor={`surname`} className="register-form__label">
                Surname:
              </label>
              <input
                id={"surname"}
                type="text"
                onChange={handleChange}
                value={formState.surname ?? ""}
                placeholder="write your surname"
                maxLength={15}
              />
              <p className="register-form__warning-container"></p>
            </div>

            <div className="register-form__input-container">
              <label htmlFor={`password`} className="register-form__label">
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

            <div className="register-form__input-container">
              <label htmlFor="confirmPassword" className="register-form__label">
                Confirm:
              </label>
              <input
                id="confirmPassword"
                type="password"
                onChange={handleChange}
                value={formState.confirmPassword ?? ""}
                placeholder="confirm your password"
                maxLength={15}
              />
            </div>

            <div
              className={`register-button-container register-button-container--${formError}`}
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
        {formSuccess && (
          <div className="register-form__success">
            <h3>SUCCESS!</h3>
            <p>{`Hi there, ${formState.name}. Redirecting you to the log in screen...`}</p>
          </div>
        )}
        {spinnerVisible && <Spinner />}
      </StyledRegisterForm>
    </StyledRegisterContainer>
  );
};

export default RegisterForm;
