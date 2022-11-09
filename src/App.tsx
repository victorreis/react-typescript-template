/* eslint-disable @typescript-eslint/ban-ts-comment */
import { ToastContainer } from 'react-toastify';

import { Container, GlobalStyle } from './App.styles';
import { RouterSwitch } from './Components/RouterSwitch';
import { CLOSE_AFTER, POSITION } from './Config/Toast.config';
import { CustomThemeProvider } from './Theme/CustomThemeProvider';

import 'react-toastify/dist/ReactToastify.css';

export const App: React.FC = (): JSX.Element => {
  return (
    <CustomThemeProvider>
      {/* waiting for a new lib version compatible with React 18 */}
      {/* @ts-ignore */}
      <GlobalStyle />
      <ToastContainer
        autoClose={CLOSE_AFTER}
        closeOnClick
        draggable
        hideProgressBar={false}
        newestOnTop={false}
        pauseOnFocusLoss
        pauseOnHover
        position={POSITION}
        rtl={false}
        theme="dark"
      />
      <Container data-testid="container">
        <RouterSwitch />
      </Container>
    </CustomThemeProvider>
  );
};
