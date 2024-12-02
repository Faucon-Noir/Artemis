import { Box, Link, MenuItem, Select } from "@mui/material";
import i18next from "i18next";

import { useTranslation } from "react-i18next";
import { HeaderStyle, NavStyle } from "./style";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import { Home } from "../../pages/paths";
import { adminNavItem, lang } from "../constant";

export const AdminHeader: React.FC = () => {
	const { t } = useTranslation("common", { keyPrefix: "adminheader" });
	return (
		<Box sx={HeaderStyle}>
			<h1>
				<Link href={Home}>Athena</Link>
			</h1>
			<Box sx={NavStyle}>
				{adminNavItem.map((item, index: number) => (
					<h2 key={index} style={{ margin: "0 2.5%" }}>
						<Link href={item.link}>{t(item.name)}</Link>
					</h2>
				))}
				<h2 style={{ margin: "0 2.5%" }}>{t("logout")}</h2>
				<Select
					sx={{
						color: "white",
						"&:focus": {
							border: "none",
						},
						outline: "none",
						border: "none",
						backgroundColor: "transparent",
						fontFamily: "SansationLight",
					}}
					value={i18next.language}
					onChange={(event) =>
						i18next.changeLanguage(event.target.value)
					}
					IconComponent={(props) => (
						<ArrowDropDownIcon
							{...props}
							style={{ color: "white" }}
						/>
					)}
				>
					{lang.map((item, index) => (
						<MenuItem
							key={index}
							value={item.link}
							sx={{ fontFamily: "SansationLight" }}
						>
							{item.name}
						</MenuItem>
					))}
				</Select>
			</Box>
		</Box>
	);
};
