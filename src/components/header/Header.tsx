import { useTranslation } from "react-i18next";
import { HeaderStyle, NavStyle } from "./style";
import i18next from "i18next";
// import { Link } from "react-router-dom";
import { navItem, lang } from "../constant";
import { Box, Select, MenuItem, Link } from "@mui/material";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import { Home } from "../../pages/paths";

export const Header: React.FC = () => {
	const { t } = useTranslation("common", { keyPrefix: "header" });
	return (
		<Box sx={HeaderStyle}>
			<h1>
				<Link href={Home}>Athena</Link>
			</h1>
			<Box sx={NavStyle}>
				{navItem.map((item, index: number) => (
					<h2 key={index} style={{ margin: "0 2.5%" }}>
						<Link href={item.link}>{t(item.name)}</Link>
					</h2>
				))}
				<Select
					sx={{
						color: "white",
						"&:focus": {
							outline: "none",
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
