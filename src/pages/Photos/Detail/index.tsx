import { useTranslation } from "react-i18next";
// import { RootState, useTypedSelector } from 'stores';

const PhotoDetailPage: React.FC = () => {
	const { t } = useTranslation("page", { keyPrefix: "photos" });
	// const photo = useTypedSelector((state: RootState) => state.photos.detail);

	// Check la récupération par id sur cette page
	return (
		<>
			<h1>{t("title")}</h1>
			<div>{t("description")}</div>
			{/* <div key={photo?.id}>
                {photo?.url}
                <p>{photo?.title}</p>
            </div> */}
		</>
	);
};

export default PhotoDetailPage;
