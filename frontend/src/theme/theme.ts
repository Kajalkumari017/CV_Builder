import { createTheme } from "@mui/material/styles";

export const theme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: "#DC2626",  // updated primary (red-600)
    },
    background: {
      default: "#F7FAFF",
      paper: "#FFFFFF",
    },
    text: {
      primary: "#1A1C1E",
      secondary: "#6F7282",
    },
  },
  shape: {
    borderRadius: 14,
  },
  spacing: 8,
  typography: {
    fontFamily: "'Outfit', 'Inter', sans-serif",
    h1: { fontSize: '2rem', fontWeight: 700, letterSpacing: '-0.5px' },
    h2: { fontSize: '1.5rem', fontWeight: 700 },
    h3: { fontSize: '1.25rem', fontWeight: 600 },
    h5: { fontWeight: 600, letterSpacing: '-0.3px' },
    body1: { fontSize: '0.95rem', color: '#394153' },
    body2: { color: '#6F7282' }
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          backgroundColor: '#F7FAFF'
        }
      }
    },
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: "none",
          borderRadius: 10,
          padding: "10px 18px",
          fontWeight: 500,
        },
        containedPrimary: {
          backgroundColor: "#DC2626",
          color: "#FFFFFF",
          '&:hover': {
            backgroundColor: "#B91C1C",
          },
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: 14,
          boxShadow: "0px 6px 18px rgba(15, 23, 42, 0.06)",
        }
      }
    }
  }
});
