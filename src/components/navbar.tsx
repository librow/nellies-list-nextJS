import { AppBar, Box, Typography } from "@mui/material";
import Link from "next/link";

export const NavBar = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar
        position="static"
        sx={{
          flexDirection: "row",
          px: "3rem",
          py: "1rem",
          background: "#123456",
        }}
      >
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          <Link href="/" style={{ color: "white", textDecoration: "none" }}>
            Home
          </Link>
        </Typography>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          <Link href="/blog" style={{ color: "white", textDecoration: "none" }}>
            Blog
          </Link>
        </Typography>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          <Link
            href="/about"
            style={{ color: "white", textDecoration: "none" }}
          >
            About
          </Link>
        </Typography>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          <Link
            href="/contact"
            style={{ color: "white", textDecoration: "none" }}
          >
            Contact
          </Link>
        </Typography>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          <Link
            href="/lists"
            style={{ color: "white", textDecoration: "none" }}
          >
            Lists
          </Link>
        </Typography>
      </AppBar>
    </Box>
  );
};
