import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';   // <-- Required CSS

import App from "./App";
import "./index.css";
import { NoteProvider } from "./context/NoteContext";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <NoteProvider>

        <App />
        <ToastContainer 
          position="top-center"
          autoClose={2500}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="dark"
        />

      </NoteProvider>
    </BrowserRouter>
  </React.StrictMode>
);




