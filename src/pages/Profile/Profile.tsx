import { useTranslation } from "react-i18next";

const ProfilePage: React.FC = () => {
	const { t } = useTranslation("page", { keyPrefix: "admin.profile" });
	// useEffect(() => {
	//     fetchUser();
	// });

	return (
		<>
			<h1>{t("title")}</h1>
			<div>{t("description")}</div>
		</>
	);
};

export default ProfilePage;
