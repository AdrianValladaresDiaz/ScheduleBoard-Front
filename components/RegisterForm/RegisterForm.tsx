import axios from "axios";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { FC, useState } from "react";
import { ScheduleBoardResponse } from "../../interfaces";
import ScheduleButton from "../ScheduleButton/ScheduleButton";
import StyledDetailForm from "../TaskDetailForm/TaskDetailForm.styles";
import WidthDefinedButton from "../WidthDefinedButton/WidthDefinedButton";
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
  const router = useRouter();

  const handleChange = (event: React.FormEvent): void => {
    const target = event.target as HTMLInputElement;
    setFormState({
      ...formState,
      [target.id]: target.value,
    });
  };

  const redirectToLogin = () => {
    router.push(`/login`);
  };

  const submitForm = async () => {
    try {
      const axiosResponse = await axios.post<ScheduleBoardResponse>(
        `${process.env.NEXT_PUBLIC_BACKEND}register`,
        {
          data: formState,
        }
      );
      if (axiosResponse.statusText) {
        redirectToLogin();
      } else {
        setFormError(true);
      }
    } catch {
      setFormError(true);
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
          <label htmlFor={`confirmPassword`} className="register-form__label">
            Confirm:
          </label>
          <input
            id={"confirmPassword"}
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
            disabled={formError}
          >
            Register me
          </button>

          <ScheduleButton
            content="Something went wrong :("
            onClickAction={clickOnError}
            className={`error_button error_button--${formError}`}
          />
        </div>
      </StyledRegisterForm>
    </StyledRegisterContainer>
  );
};

export default RegisterForm;
