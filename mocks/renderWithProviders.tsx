import { render } from "@testing-library/react";
import { Provider } from "react-redux";
import store from "../redux/store";
import React, { ReactNode } from "react";

interface wrappedChildren {
  children: ReactNode;
}

const renderWithProviders = (component: JSX.Element) => {
  const Providers = ({ children }: wrappedChildren) => {
    return <Provider store={store}>{children}</Provider>;
  };

  return render(component, { wrapper: Providers });
};

export default renderWithProviders;
