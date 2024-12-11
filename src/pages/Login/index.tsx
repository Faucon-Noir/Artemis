import { Box, Button } from "@mui/material";
import { useTranslation } from "react-i18next";
import { FormStyle } from "./style";

const LoginPage: React.FC = () => {
	const { t } = useTranslation("page", { keyPrefix: "admin.login" });
	// const dispatch: AppDispatch = useDispatch();
	// const navigate = useNavigate();

	// const [credentials, setCredentials] = useState<LoginModel>({
	// 	username: "",
	// 	password: "",
	// });

	const handleSubmit = async () => {
		try {
			console.log("Login");
			// const res = await dispatch(login(credentials));
			// console.log(res.meta.requestStatus);
			// if (res.meta.requestStatus == "fulfilled") {
			// 	navigate(Admin);
			// }
		} catch (error) {
			console.error(error);
		}
	};
	return (
		<>
			<h1>{t("title")}</h1>
			<div>{t("description")}</div>
			<Box
				component="form"
				noValidate
				autoComplete="off"
				style={FormStyle}
			>
				<input
					type="text"
					placeholder="Username"
					autoComplete="username"
					// onChange={(e) =>
					// 	setCredentials({
					// 		...credentials,
					// 		username: e.target.value,
					// 	})
					// }
				/>

				<input
					type="password"
					placeholder="Password"
					autoComplete="password"
					// onChange={(e) =>
					// 	setCredentials({
					// 		...credentials,
					// 		password: e.target.value,
					// 	})
					// }
				/>
			</Box>
			<Button type="submit" variant="outlined" onClick={handleSubmit}>
				{t("button")}
			</Button>
		</>
	);
};

export default LoginPage;
