import { Provider } from "react-redux";
import store from "../redux/store";

const providerWrapper = (props) => {
  return <Provider store={store}>{props.children}</Provider>;
};

export default providerWrapper;
