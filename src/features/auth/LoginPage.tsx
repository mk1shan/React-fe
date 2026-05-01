import { useState } from "react";
import { authService } from "./authService";
import {
  Alert,
  Box,
  Button,
  Container,
  Paper,
  TextField,
  Typography,
} from "@mui/material";
import { Link, useNavigate } from "react-router-dom";

function LoginPage() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    setLoading(true);
    setErrorMessage("");

    try {
      const response = await authService.login({
        email,
        password,
      });

      localStorage.setItem("accessToken", response.accessToken);

      navigate("/DashBoardPage");
    } catch (error: any) {
      const msg = error?.response?.data?.message;
      setErrorMessage(
        Array.isArray(msg)
          ? msg.join(", ")
          : msg || "Invalid email or password",
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <Container maxWidth="sm">
      <Paper elevation={3} sx={{ padding: 4, marginTop: 8 }}>
        <Typography variant="h4" align="center" gutterBottom>
          Login
        </Typography>

        {errorMessage && <Alert severity="error">{errorMessage}</Alert>}

        <Box component="form" onSubmit={handleSubmit} sx={{ marginTop: 3 }}>
          <TextField
            fullWidth
            label="Email"
            margin="normal"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
          />

          <TextField
            fullWidth
            label="Password"
            margin="normal"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
          />

          <Button
            fullWidth
            type="submit"
            variant="contained"
            disabled={loading}
            sx={{ marginTop: 3 }}
          >
            {loading ? "loggin in..." : "Login"}
          </Button>

          <Typography align="center" sx={{ marginTop: 2 }}>
            Don&apos; t have an account?{" "}
            <Link to="/RegisterPage">Register</Link>
          </Typography>
        </Box>
      </Paper>
    </Container>
  );
}

export default LoginPage;
