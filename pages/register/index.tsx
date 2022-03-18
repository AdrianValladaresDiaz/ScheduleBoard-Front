import { FC } from "react";
import RegisterForm from "../../components/RegisterForm/RegisterForm";

interface RegisterPageProps {
  error: boolean;
}

const RegisterPage: FC<RegisterPageProps> = ({ error }) => {
  return <RegisterForm />;
};

export default RegisterPage;
