import "./App.css";
import AdminNavbar from "./components/AdminNavbar";
import SideNavbarContainer from "./components/SideNavbarContainer";
import Dashboard from "./pages/Dashboard";

function App() {
	return (
		<>
			<SideNavbarContainer>
				<AdminNavbar></AdminNavbar>
			</SideNavbarContainer>
			<Dashboard />
		</>
	);
}

export default App;
