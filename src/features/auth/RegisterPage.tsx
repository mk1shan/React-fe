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

function RegisterPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [loading, setLoading] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    setLoading(true);
    setSuccessMessage("");
    setErrorMessage("");

    try {
      await authService.register({
        name,
        email,
        password,
      });

      setSuccessMessage("Registration succesfull. you can now login");
      setName("");
      setEmail("");
      setPassword("");
    } catch (error) {
      setErrorMessage("Registration failed.please try again");
    } finally {
      setLoading(false);
    }
  };

  return (
    <Container maxWidth="sm">
      <Paper elevation={3} sx={{ padding: 4, marginTop: 8 }}>
        <Typography variant="h4" align="center" gutterBottom>
          create Account
        </Typography>


        {successMessage && <Alert severity="success">{successMessage}</Alert>}
        {errorMessage && <Alert severity="error">{errorMessage}</Alert>}
        <Box component="form" onSubmit={handleSubmit} sx={{ marginTop: 3 }}>
          <TextField
            fullWidth
            label="Name"
            margin="normal"
            value={name}
            onChange={(event) => setName(event.target.value)}
          />

          <TextField
            fullWidth
            label="Name"
            margin="normal"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
          />

          <TextField
            fullWidth
            label="Name"
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
            {loading ? "Registering..." : "Register"}
          </Button>
        </Box>
      </Paper>
    </Container>
  );
}

export default RegisterPage;
