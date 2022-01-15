import { Button, TextField, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import { useDispatch } from "react-redux";
import { userLogin } from "../Redux/Slices/authForm";
import photo from "../gallery/backgroundimage.jpg";
import image from "../gallery/image.jpg";
import images from "../gallery/colorimage.jpg";
const LoginForm = () => {
  const [userLoggedIn, setUserLoggedIn] = React.useState(false);
  const dispatch = useDispatch();
  const userData = {
    id: "",
    FirstName: "",
    LastName: "",
    Email: "",
    Password: "",
  };
  const [user, setUser] = React.useState(userData);

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
    console.log(user);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(userLogin(user));
    setUser({
      id: "",
      FirstName: "",
      LastName: "",
      Email: "",
      Password: "",
    });
  };
  console.log(user);
  return (
    <>
      <Box
        component="section"
        sx={{
          backgroundImage: `url(${images})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          // backgroundOrigin: "content-box",
          width: "100vw",
          height: "100vh",
        }}
      >
        <Box
          mt={"60px"}
          textAlign={"center"}
          display={"flex"}
          flexDirection={"column"}
          justifyContent={"center"}
          alignItems={"center"}
        >
          <Box>
            <Typography
              variant="h6"
              mb={"15px"}
              mt={"20px"}
              sx={{ fontFamily: "sans-serif", fontSize: "2rem" }}
            >
              Login
            </Typography>
          </Box>
          <Box
            component="form"
            maxWidth={"425px"}
            sx={
              {
                // "& .MuiTextField-root": { m: 1, width: "25ch" },
              }
            }
            noValidate
            autoComplete="off"
            onSubmit={handleSubmit}
          >
            <Box
              display={"flex"}
              flexDirection={"column"}
              justifyContent={"center"}
              gap={"15px"}
              maxWidth={"425px"}
              mb={"15px"}
            >
              <TextField
                fullWidth
                id="outlined-error"
                label="First Name"
                name="FirstName"
                variant="outlined"
                size="small"
                color="primary"
                value={user.FirstName}
                onChange={handleChange}
              />
              <TextField
                fullWidth
                id="outlined-error"
                label="Last Name"
                name="LastName"
                value={user.LastName}
                size="small"
                variant="outlined"
                onChange={handleChange}
              />
              <TextField
                fullWidth
                id="outlined-error"
                label="Email"
                name="Email"
                value={user.Email}
                size="small"
                variant="outlined"
                onChange={handleChange}
              />
              <TextField
                fullWidth
                id="outlined-error"
                label="Password"
                name="Password"
                variant="outlined"
                value={user.Password}
                size="small"
                onChange={handleChange}
              />
            </Box>

            {userLoggedIn ? (
              <Button
                type="submit"
                variant="contained"
                fullWidth
                sx={{
                  borderRadius: "15px",
                  color: "white",
                  padding: "0.2rem",
                  fontFamily: "sans-serif",
                  fontSize: "16px",
                }}
              >
                Login
              </Button>
            ) : (
              <Button
                type="submit"
                variant="contained"
                fullWidth
                sx={{
                  borderRadius: "15px",
                  color: "white",
                  padding: "0.2rem",
                  fontFamily: "sans-serif",
                  fontSize: "16px",
                }}
              >
                Create Account
              </Button>
            )}
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default LoginForm;
