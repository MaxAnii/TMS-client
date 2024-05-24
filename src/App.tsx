import { Route, Routes } from "react-router-dom";
import "./App.css";

import Dashboard from "./pages/Dashboard";
import Login from "./pages/Login";
import ForgotPassword from "./pages/ForgotPassword";
import ResetPassword from "./pages/ResetPassword";
import ManageDevices from "./pages/ManageDevices";
import { Toaster } from "./components/ui/toaster";
import NewPassword from "./pages/NewPassword";
import ProtectedRoute from "./lib/ProtectedRoute";
import AuthRoute from "./lib/AuthRoute";

function App() {
	return (
		<>
			<Routes>
				<Route
					path="/"
					element={
						<AuthRoute>
							<Login></Login>
						</AuthRoute>
					}
				></Route>

				<Route
					path="/dashboard"
					element={
						<ProtectedRoute>
							<Dashboard></Dashboard>
						</ProtectedRoute>
					}
				></Route>
				<Route
					path="/managedevices"
					element={
						<ProtectedRoute>
							<ManageDevices></ManageDevices>
						</ProtectedRoute>
					}
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
