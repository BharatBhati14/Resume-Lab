import React from "react";
import { BrowserRouter } from "react-router-dom";
import AppRouter from "./app/router/AppRouter";
import Header from "./shared/components/Header";
import Footer from "./shared/components/Footer";

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <AppRouter />
      <Footer />
    </BrowserRouter>
  );
};

export default App;