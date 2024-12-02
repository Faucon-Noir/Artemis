import { Outlet } from "react-router-dom";
import { Header } from "../../components/header";

const Layout = () => {
	// TODO: Restaurer le footer une fois que le design admin sera prêt
	// const { hasMinRole } = useRole();
	return (
		<div style={{ height: "100vh" }}>
			{/* {hasMinRole(UserRoles.Moderator) ? <AdminHeader /> : <Header />} */}
			<Header />
			<Outlet />
			{/* <Footer /> */}
		</div>
	);
};
export default Layout;
