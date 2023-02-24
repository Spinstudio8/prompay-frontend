import '../styles/globals.css';
import Layout from '../components/Layout';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import store, { persistor } from '../store/store';
import { AuthContextProvider } from '../auth/AuthContext';
import { Roboto } from '@next/font/google';
const roboto = Roboto({
  subsets: ['latin'],
  weight: ['300', '400', '500', '700'],
});
export default function App({ Component, pageProps }) {
  return (
    <>
      <Provider store={store}>
        <PersistGate loading={<div>Loading...</div>} persistor={persistor}>
          <AuthContextProvider>
            <Layout>
              <main className={roboto.className}>
                <Component {...pageProps} />
              </main>
            </Layout>
          </AuthContextProvider>
        </PersistGate>
      </Provider>
    </>
  );
}
