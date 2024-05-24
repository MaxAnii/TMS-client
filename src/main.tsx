import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import UserSessionProvider from "./contextHook/CurrentUserSession.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
	<React.StrictMode>
		<BrowserRouter>
			<UserSessionProvider>
				<App />
			</UserSessionProvider>
		</BrowserRouter>
	</React.StrictMode>
);
