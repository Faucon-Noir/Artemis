import { useTranslation } from "react-i18next";
// import { RootState, useTypedSelector } from 'stores';

const VideoDetailPage: React.FC = () => {
	const { t } = useTranslation("page", { keyPrefix: "videos" });
	// const video = useTypedSelector((state: RootState) => state.videos.detail);

	// Check la récupération par id sur cette page
	return (
		<>
			<h1>{t("title")}</h1>
			<div>{t("description")}</div>
			{/* <div key={video?.id}>
                {video?.url}
                <p>{video?.title}</p>
            </div> */}
		</>
	);
};

export default VideoDetailPage;
