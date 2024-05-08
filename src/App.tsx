import { Route, Routes } from "react-router-dom";
import "./App.css";

import Dashboard from "./pages/Dashboard";
import Login from "./pages/Login";
import ForgotPassword from "./pages/ForgotPassword";
import ResetPassword from "./pages/ResetPassword";

function App() {
	return (
		<>
			<Routes>
				<Route path="/" element={<Login></Login>}></Route>
				<Route path="/dashboard" element={<Dashboard></Dashboard>}></Route>
				<Route
					path="/forgotpassword"
					element={<ForgotPassword></ForgotPassword>}
				></Route>
				<Route
					path="/resetpassword/:token"
					element={<ResetPassword></ResetPassword>}
				></Route>
			</Routes>
		</>
	);
}

export default App;
