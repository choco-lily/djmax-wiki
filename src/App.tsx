import './css/App.css';
import Container from 'react-bootstrap/Container'
import { Nav, Navbar, NavDropdown } from 'react-bootstrap'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Main from "./pages/main"
import Songs from "./pages/songs"
import Login from "./pages/login"
import Archive from "./pages/archive"
function App() {
	return (
		<BrowserRouter>
			<div className="App" id="app">
				<Navbar bg="dark" data-bs-theme="dark">
					<Container>
						<Navbar.Brand href="/">디제이맥스 위키</Navbar.Brand>
						<Nav className="me-auto">
							<Nav.Link href="/songs">수록곡</Nav.Link>
							<Nav.Link>패턴</Nav.Link>
							<Nav.Link href="/archive">성과표</Nav.Link>
						</Nav>
						<Nav className="ms-auto">
							<NavDropdown title="계정">
								<NavDropdown.Item href="/login">로그인</NavDropdown.Item>
								<NavDropdown.Item href="/register">회원가입</NavDropdown.Item>
							</NavDropdown>
						</Nav>
					</Container>
				</Navbar>
				<Routes>
					<Route path="/" element={<Main />}></Route>
					<Route path="/songs" element={<Songs />}></Route>
					<Route path="/login" element={<Login />}></Route>
					<Route path="/archive" element={<Archive />}></Route>
					<Route path="/archive/:user/board/" element={<Archive />}></Route>
					<Route path="/archive/:user/board/:button/:difficulty" element={<Archive />}></Route>
				</Routes>
			</div>
		</BrowserRouter>
	);
}

export default App;