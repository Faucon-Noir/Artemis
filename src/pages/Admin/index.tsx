import { Box } from "@mui/material";
import { useTranslation } from "react-i18next";
import AdminDisplayBox from "../../components/adminDisplayBox";

const AdminPage: React.FC = () => {
	const { t } = useTranslation("page", { keyPrefix: "admin.dashboard" });
	// const dispatch: AppDispatch = useDispatch();
	// const { hasMinRole } = useRole();

	// const isStaff: boolean = hasMinRole(UserRoles.Moderator);

	let display = ["code", "photo", "video"];
	// if (hasMinRole(UserRoles.Admin)) {
	//     display = [...display, 'users'];
	// }

	// useEffect(() => {
	// 	dispatch(fetchUser());
	// }, []);

	return (
		<>
			<h1>{t("title")}</h1>
			<div>{t("description")}</div>
			<Box display="flex" justifyContent="center" mt={2}>
				{display.map((item) => (
					<AdminDisplayBox key={item} text={item} items={[]} />
				))}
			</Box>
		</>
	);
};

export default AdminPage;
