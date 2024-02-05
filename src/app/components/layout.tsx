"use client";
import { Provider } from "react-redux";
// import { SessionProvider } from "next-auth/react";
import { persistor, store } from "@/redux/store";
import { PersistGate } from "redux-persist/integration/react";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        {/* <SessionProvider>{children}</SessionProvider> */}
        {children}
      </PersistGate>
    </Provider>
  );
};

export default Layout;
