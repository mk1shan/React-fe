import { useNavigate } from "react-router-dom";
import { Box, Button, Container, Paper, Typography } from "@mui/material";

function DashboardPage() {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("accessToken");
    navigate("/");
  };

  return (
    <Container maxWidth="md">
      <Paper elevation={3} sx={{ padding: 4, marginTop: 8 }}>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Typography variant="h4">Dashboard</Typography>

          <Button variant="outlined" color="error" onClick={handleLogout}>
            Logout
          </Button>
        </Box>

        <Typography sx={{ marginTop: 3 }}>
          Welcome! You are logged in.
        </Typography>
      </Paper>
    </Container>
  );
}

export default DashboardPage;
