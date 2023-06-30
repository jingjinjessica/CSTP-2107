import * as React from "react";
import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Container from "@mui/material/Container";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

const categoryList = [
  { key: "general", label: "General" },
  { key: "business", label: "Business" },
  { key: "entertainment", label: "Entertainment" },
  { key: "health", label: "Health" },
  { key: "science", label: "Science" },
  { key: "sports", label: "Sports" },
  { key: "technology", label: "Technology" },
];

export default function CategoryComponent({ setCategory }) {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = (data) => {
    if (typeof data !== "string") {
      setAnchorEl(null);
      return;
    }
    setCategory(data === "home" ? "" : data);
    setAnchorEl(null);
  };

  const handleCategoryClick = (data) => {
    setCategory(data === "home" ? "" : data);
  };

  return (
    <Box
      sx={{
        bgcolor: "background.paper",
        pt: 4,
      }}
    >
      <Container maxWidth="lg">
        <Toolbar
          component="nav"
          sx={{ display: { xs: "none", md: "flex" }, overflowX: "auto" }}
        >
          <ButtonGroup
            variant="contained"
            aria-label="outlined primary button group"
          >
            {categoryList.map((item) => (
              <Button
                key={item.key}
                onClick={() => handleCategoryClick(item.key)}
              >
                {item.label}
              </Button>
            ))}
          </ButtonGroup>
        </Toolbar>
        <Toolbar component="nav" sx={{ display: { xs: "flex", md: "none" } }}>
          <Button
            id="basic-button"
            aria-controls={open ? "basic-menu" : undefined}
            aria-haspopup="true"
            aria-expanded={open ? "true" : undefined}
            onClick={handleClick}
            variant="contained"
            endIcon={<KeyboardArrowDownIcon />}
          >
            Category
          </Button>
          <Menu
            id="basic-menu"
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            MenuListProps={{
              "aria-labelledby": "basic-button",
            }}
          >
            {categoryList.map((item) => (
              <MenuItem key={item.key} onClick={() => handleClose(item.key)}>
                {item.label}
              </MenuItem>
            ))}
          </Menu>
        </Toolbar>
      </Container>
    </Box>
  );
}
