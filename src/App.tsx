import { Route, Routes } from "react-router-dom";
import "./App.css";

import Dashboard from "./pages/Dashboard";
import Login from "./pages/Login";
import ForgotPassword from "./pages/ForgotPassword";
import ResetPassword from "./pages/ResetPassword";
import ManageDevices from "./pages/ManageDevices";
import { Toaster } from "./components/ui/toaster";
import NewPassword from "./pages/NewPassword";

function App() {
	return (
		<>
			<Routes>
				<Route path="/" element={<Login></Login>}></Route>
				<Route path="/dashboard" element={<Dashboard></Dashboard>}></Route>
				<Route
					path="/managedevices"
					element={<ManageDevices></ManageDevices>}
				></Route>
				<Route
					path="/forgotpassword"
					element={<ForgotPassword></ForgotPassword>}
				></Route>
				<Route
					path="/verifyresettoken"
					element={<ResetPassword></ResetPassword>}
				></Route>
				<Route
					path="/newpassword"
					element={<NewPassword></NewPassword>}
				></Route>
			</Routes>
			<Toaster></Toaster>
		</>
	);
}

export default App;
