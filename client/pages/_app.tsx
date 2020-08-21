import '../css/style.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'antd/dist/antd.css';
import 'react-toastify/dist/ReactToastify.css';
import { ThemeProvider, CSSReset } from "@chakra-ui/core";
import { AppProps } from "next/app";


function App({ Component, pageProps }: AppProps): React.ReactNode {
  return (
    <ThemeProvider>
      <CSSReset />
      <Component {...pageProps} />
    </ThemeProvider>
  );
}
export default App;
