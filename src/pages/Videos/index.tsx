import { useTranslation } from "react-i18next";

const VideosPage: React.FC = () => {
	const { t } = useTranslation("page", { keyPrefix: "videos" });

	// useEffect(() => {
	//     fetchVideos();
	// });
	return (
		<>
			<h1>{t("title")}</h1>
			<div>{t("description")}</div>
		</>
	);
};

export default VideosPage;
