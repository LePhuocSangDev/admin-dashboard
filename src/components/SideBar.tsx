import * as React from "react";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";
import IconButton from "@mui/material/IconButton";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import { Box, Button } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";
import { useToggle } from "../hooks/useToggle";
import MenuIcon from "@mui/icons-material/Menu";

type SideBar = {
  openMenu: boolean;
  toggle: any;
};

const SideBar = ({ openMenu, toggle }: SideBar) => {
  const handleMenu = () => {
    toggle();
  };
  return (
    <Box
      sx={{
        width: `${openMenu ? "20vw" : "5vw"}`,
        boxSizing: "border-box",
        borderRight: "1px solid rgba(0,0,0,0.2)",
        height: "100vh",
        position: "sticky",
        left: 0,
        top: 0,
        bottom: 0,
      }}
    >
      <Box
        sx={{
          height: "64px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          position: "relative",
        }}
      >
        {openMenu ? (
          <IconButton
            sx={{ position: "absolute", right: "10px" }}
            onClick={handleMenu}
          >
            &lt;
          </IconButton>
        ) : (
          <IconButton onClick={handleMenu}>
            <MenuIcon />
          </IconButton>
        )}
      </Box>
      <Divider />
      <List>
        {["Home", "Users", "User", "Products"].map((text, index) => (
          <Button
            variant="text"
            component={RouterLink}
            to={`${text === "Home" ? "/" : text.toLowerCase()}`}
            sx={{
              width: "100%",
              textTransform: "none",
              color: "black",
              padding: 0,
              minWidth: "40px",
            }}
          >
            <ListItemButton
              sx={{
                minHeight: 48,
                display: "flex",
                justifyContent: "center",
                px: openMenu ? 2.5 : 0,
              }}
            >
              <ListItemIcon
                sx={{
                  minWidth: 0,
                  mr: openMenu ? 3 : 0,
                }}
              >
                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
              </ListItemIcon>
              {openMenu && <ListItemText primary={text} />}
            </ListItemButton>
          </Button>
        ))}
      </List>
      <Divider />
    </Box>
  );
};

export default SideBar;
