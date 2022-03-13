import type { AppProps } from "next/app";
import { ThemeProvider } from "styled-components";
import Layout from "../components/Layout/Layout";
import GlobalStyles from "../styles/globalStyles";
import defaultTheme from "../styles/defaultTheme";
import { Provider } from "react-redux";
import store from "../redux/store";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyles />
      <Provider store={store}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </Provider>
    </ThemeProvider>
  );
}

export default MyApp;
