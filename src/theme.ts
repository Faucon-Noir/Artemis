import { createTheme } from "@mui/material/styles";

const theme = createTheme({
	palette: {
		background: {
			default: "radial-gradient(#021027, #000000)",
		},
		text: {
			primary: "#FFFFFFDE",
			secondary: "#FFFFFFDE",
			disabled: "#FFFFFFDE",
		},
		primary: {
			main: "#1976d2",
		},
		secondary: {
			main: "#dc004e",
		},
	},
	typography: {
		fontFamily: "SansationLight, sans-serif",
		h1: {
			fontSize: "2.5rem",
			lineHeight: 1.1,
		},
	},
	components: {
		MuiCssBaseline: {
			styleOverrides: {
				a: {
					color: "#FFFFFFDE !important",
					textDecoration: "none !important",
				},
				":root": {
					lineHeight: 1.5,
					fontWeight: 400,
					colorScheme: "light dark",
					fontSynthesis: "none",
					textRendering: "optimizeLegibility",
					WebkitFontSmoothing: "antialiased",
					MozOsxFontSmoothing: "grayscale",
					background: "radial-gradient(#021027, #000000)",
				},
				body: {
					margin: 0,
					display: "flex",
					placeItems: "center",
					minWidth: "400px",
					minHeight: "100vh",
					fontFamily: "'SansationLight', sans-serif !important",
				},
			},
		},
	},
});

export default theme;
