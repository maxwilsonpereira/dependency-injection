import React from "react";
import ReactDOM from "react-dom";
// npm install react-router-dom@6
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";
import { Provider } from "inversify-react";
import { container } from "./inversify.config";
import Navigation from "./components/Navigation";
import Home from "./routes/Home";
import FetchUsers from "./routes/Fetchusers";
import About from "./routes/About";

import { CounterProvider } from "./providers/CounterProvider";
import { CounterService } from "./services/CounterService";

const counterService: CounterService = new CounterService();

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider container={container}>
        <CounterProvider service={counterService}>
          <Navigation />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="fetchusers" element={<FetchUsers />} />
            <Route path="about" element={<About />} />
          </Routes>
        </CounterProvider>
      </Provider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
