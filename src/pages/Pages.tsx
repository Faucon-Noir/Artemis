import { Route, Routes } from "react-router-dom";

import HomePage from "./Home";
import Layout from "./Layout";
import LegalPage from "./Legal";
import LoginPage from "./Login";
import {
	Admin,
	Home,
	Legal,
	Login,
	Photos,
	Profile,
	Register,
	Test,
	Videos,
} from "./paths";
import PhotoPage from "./Photos";
import RegisterPage from "./Register";
import TestPage from "./Test";
import VideosPage from "./Videos";
import ErrorComponent from "../components/error";
import AdminPage from "./Admin";
import ProfilePage from "./Profile/Profile";

const Pages = () => {
	// const { hasMinRole } = useRole();
	return (
		<Routes>
			<Route path="*" element={<ErrorComponent />} />

			<Route path={Home} element={<Layout />}>
				<Route path={Home} element={<HomePage />} />
				<Route path={Test} element={<TestPage />} />
				<Route path={Photos} element={<PhotoPage />} />
				<Route path={Videos} element={<VideosPage />} />
				<Route path={Legal} element={<LegalPage />} />
			</Route>

			<Route path={Login} element={<LoginPage />} />
			<Route path={Register} element={<RegisterPage />} />

			{/* <Route element={<ProtectedRoute minRole={UserRoles.PendingUser} />}>
				<Route path={Home} element={<Layout />}>
					{hasMinRole(UserRoles.Moderator) ? (
						<>*/}
			<Route path={Admin} element={<AdminPage />} />
			<Route path={Profile} element={<ProfilePage />} />
			{/*</>
					) : (
						<Route path={Waiting} element="TestPage" />
					)}
				</Route>
			</Route> */}
		</Routes>
	);
};
export default Pages;
