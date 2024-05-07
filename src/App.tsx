import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";

import Dashboard from "./pages/Dashboard";
import Login from "./pages/Login";

function App() {
	return (
		<>
			<Routes>
				<Route path="/" element={<Login></Login>}></Route>
				<Route path="/dashboard" element={<Dashboard></Dashboard>}></Route>
			</Routes>
		</>
	);
}

export default App;
