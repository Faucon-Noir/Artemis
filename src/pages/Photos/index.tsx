import { useTranslation } from "react-i18next";

const PhotoPage: React.FC = () => {
	const { t } = useTranslation("page", { keyPrefix: "photos" });
	// const photos = useTypedSelector((state: RootState) => state.photos.photos);
	const photos: any = [];

	// useEffect(() => {
	//     fetchPhotos();
	// }, []);
	return (
		<>
			<h1>{t("title")}</h1>
			<div>{t("description")}</div>
			{photos.map((photo: any) => (
				<div key={photo.id}>
					{photo.url}
					<p>{photo.title}</p>
				</div>
			))}
		</>
	);
};

export default PhotoPage;
