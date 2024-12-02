import { Box, Button } from "@mui/material";

import { useTranslation } from "react-i18next";
import { TextFieldStyle } from "../Login/style";

const RegisterPage: React.FC = () => {
	const { t } = useTranslation("page", { keyPrefix: "admin.register" });
	// const dispatch: AppDispatch = useDispatch();
	// const [newUser, setNewUser] = useState<RegisterModel>({
	// 	username: "",
	// 	email: "",
	// 	password: "",
	// });
	// const [confirmPassword, setConfirmPassword] = useState("");
	// const navigate = useNavigate();

	const handleSubmit = () => {
		try {
			console.log("newUser");
			// dispatch(register(newUser)).then((res) => {
			//     if (res.meta.requestStatus === 'fulfilled') {
			//         navigate('/admin');
			//     }
			// });
		} catch (error) {
			console.error(error);
		}
	};

	return (
		<>
			<h1>{t("title")}</h1>
			<div>{t("description")}</div>
			<Box>
				<Box>
					<input
						autoFocus
						type="text"
						placeholder={t("username")}
						autoComplete="username"
						style={TextFieldStyle}
						// onChange={(e) =>
						// 	setNewUser({ ...newUser, username: e.target.value })
						// }
					/>
					<input
						type="email"
						placeholder={t("email")}
						autoComplete="email"
						style={TextFieldStyle}
						// onChange={(e) =>
						// 	setNewUser({ ...newUser, email: e.target.value })
						// }
					/>
				</Box>
				<Box>
					<input
						type="password"
						placeholder={t("password")}
						autoComplete="new-password"
						style={TextFieldStyle}
						// onChange={(e) =>
						// 	setNewUser({ ...newUser, password: e.target.value })
						// }
					/>
					<input
						type="password"
						placeholder={t("confirm")}
						autoComplete="confirm-password"
						style={TextFieldStyle}
						// onChange={(e) => setConfirmPassword(e.target.value)}
					/>
				</Box>
				<Button
					type="submit"
					variant="outlined"
					// disabled={
					// 	newUser.password !== confirmPassword ||
					// 	!newUser.username ||
					// 	!newUser.email ||
					// 	!newUser.password ||
					// 	!confirmPassword
					// }
					onClick={handleSubmit}
				>
					{t("button")}
				</Button>
			</Box>
		</>
	);
};

export default RegisterPage;
