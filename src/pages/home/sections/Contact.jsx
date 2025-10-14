import React, { useState } from "react";
import {
  Box,
  Container,
  Typography,
  TextField,
  Button,
  Paper,
  Alert,
  CircularProgress,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import {
  Email as EmailIcon,
  Phone as PhoneIcon,
  LocationOn as LocationIcon,
  Send as SendIcon,
} from "@mui/icons-material";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [status, setStatus] = useState({ type: "", message: "" });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus({ type: "", message: "" });

    try {
      const response = await fetch("https://formspree.io/f/mvgwvbjp", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          to: "themushroomhive@gmail.com",
          from: formData.email,
          subject: formData.subject || "New Contact Form Message",
          text: `
            Name: ${formData.name}
            Email: ${formData.email}
            Subject: ${formData.subject}
            Message: ${formData.message}
          `,
        }),
      });

      if (!response.ok) throw new Error("Failed to send message");

      setStatus({
        type: "success",
        message: "Thank you! Your message has been sent successfully.",
      });
      setFormData({ name: "", email: "", subject: "", message: "" });
    } catch (error) {
      console.error(error);
      setStatus({
        type: "error",
        message: "Oops! Something went wrong. Please try again later.",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <Box
      id="contact"
      sx={{
        py: { xs: 4, md: 8 },
        bgcolor: "#f5fff5",
        overflowX: "hidden",
        maxWidth: "100vw",
      }}
    >
      <Container maxWidth="lg" sx={{ px: { xs: 2, md: 4 } }}>
        <Typography
          variant="h2"
          align="center"
          gutterBottom
          sx={{
            fontWeight: 800,
            fontSize: { xs: "2rem", md: "3.5rem" },
            color: "#2e7d32",
            fontFamily: "Poppins",
            mb: { xs: 4, md: 8 },
            position: "relative",
            "&::after": {
              content: '""',
              position: "absolute",
              bottom: "-10px",
              left: "50%",
              transform: "translateX(-50%)",
              width: "80px",
              height: "4px",
              backgroundColor: "#2e7d32",
              borderRadius: "2px",
            },
          }}
        >
          Get In Touch With Us
        </Typography>

        {/* Responsive Flex Layout */}
        <div className="flex flex-col-reverse lg:flex-row gap-8 items-stretch">
          {/* Contact Form */}
          <div className="w-full lg:w-7/12">
            <Paper
              elevation={3}
              sx={{ p: { xs: 3, md: 4 }, bgcolor: "white", height: "100%" }}
            >
              <form onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <TextField
                    fullWidth
                    label="Name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    variant="outlined"
                  />
                  <TextField
                    fullWidth
                    label="Email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    variant="outlined"
                  />
                  <TextField
                    fullWidth
                    label="Subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    variant="outlined"
                    className="sm:col-span-2"
                  />
                  <TextField
                    fullWidth
                    label="Message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    multiline
                    rows={4}
                    variant="outlined"
                    className="sm:col-span-2"
                  />

                  {status.message && (
                    <div className="sm:col-span-2">
                      <Alert severity={status.type}>{status.message}</Alert>
                    </div>
                  )}

                  <div className="sm:col-span-2">
                    <Button
                      type="submit"
                      variant="contained"
                      size="large"
                      fullWidth
                      disabled={loading}
                      endIcon={
                        loading ? <CircularProgress size={20} /> : <SendIcon />
                      }
                      sx={{
                        bgcolor: "#2e7d32",
                        py: { xs: 1.5, md: 2 },
                        "&:hover": { bgcolor: "#1b5e20" },
                      }}
                    >
                      {loading ? "Sending..." : "Send Message"}
                    </Button>
                  </div>
                </div>
              </form>
            </Paper>
          </div>

          {/* Contact Info */}
          <div className="w-full lg:w-5/12">
            <Paper
              elevation={0}
              sx={{ p: { xs: 3, md: 4 }, bgcolor: "transparent", height: "100%" }}
            >
              <Typography
                variant="h4"
                gutterBottom
                fontWeight="bold"
                sx={{
                  color: "#2e7d32",
                  fontFamily: "Poppins",
                  fontSize: { xs: "1.5rem", md: "2rem" },
                }}
              >
                Get in Touch
              </Typography>
              <Typography
                variant="body1"
                sx={{ color: "#1b5e20", fontFamily: "Poppins" }}
                paragraph
              >
                Feel free to reach out. We'd love to hear from you!
              </Typography>

              <List sx={{ mt: 4 }}>
                <ListItem disableGutters>
                  <ListItemIcon>
                    <EmailIcon sx={{ color: "#2e7d32" }} />
                  </ListItemIcon>
                  <ListItemText>
                    <Typography
                      component="a"
                      href="mailto:themushroomhive@gmail.com"
                      sx={{
                        color: "#1b5e20",
                        textDecoration: "none",
                        "&:hover": { color: "#2e7d32" },
                      }}
                    >
                      themushroomhive@gmail.com
                    </Typography>
                  </ListItemText>
                </ListItem>

                <ListItem disableGutters>
                  <ListItemIcon>
                    <PhoneIcon sx={{ color: "#2e7d32" }} />
                  </ListItemIcon>
                  <ListItemText>
                    <Typography color="text.primary">
                      (+233) 240 800951
                    </Typography>
                  </ListItemText>
                </ListItem>

                <ListItem disableGutters>
                  <ListItemIcon>
                    <LocationIcon sx={{ color: "#2e7d32" }} />
                  </ListItemIcon>
                  <ListItemText>
                    <Typography color="text.primary">
                      Takoradi, Ghana
                    </Typography>
                  </ListItemText>
                </ListItem>
              </List>
            </Paper>
          </div>
        </div>
      </Container>
    </Box>
  );
};

export default Contact;
