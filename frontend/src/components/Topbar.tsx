import { AppBar, Toolbar, Typography, Avatar, Box } from "@mui/material";

export default function Topbar() {
  return (
    <AppBar
      position="fixed"
      elevation={0}
      sx={{
        bgcolor: 'background.paper',
        borderBottom: 1,
        borderColor: 'divider',
        height: 72,
        left: { md: "240px", xs: 0 },
        width: { xs: "100%", md: "calc(100% - 240px)" },
        boxSizing: "border-box",
        zIndex: 1200,
        px: { xs: 2, md: 3 }
      }}
    >
      <Toolbar sx={{ display: "flex", justifyContent: "space-between", minHeight: "64px" }}>
        <Typography variant="h6" fontWeight={700} color="text.primary">
          Dashboard
        </Typography>

        <Box>
          <Avatar sx={{ bgcolor: 'primary.main', width: 40, height: 40, fontSize: '0.95rem' }}>K</Avatar>
        </Box>
      </Toolbar>
    </AppBar>
  );
}
