import { styled, alpha } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import NewspaperIcon from "@mui/icons-material/Newspaper";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import InputBase from "@mui/material/InputBase";
import SearchIcon from "@mui/icons-material/Search";
import IconButton from "@mui/material/IconButton";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { Link } from "react-router-dom";
import './style.css'

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(1),
    width: "auto",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      width: "12ch",
      "&:focus": {
        width: "20ch",
      },
    },
  },
}));

export const HomeHeader = ({ query, setQuery }) => {
  return (
    <AppBar position="relative">
      <Toolbar>
        <NewspaperIcon sx={{ mr: 2, fontSize: 40 }} />
        <Typography
          variant="h6"
          color="inherit"
          noWrap
          sx={{ flexGrow: 1, display: { xs: "none", md: "block" } }}
        >
          News
          <Link to={'/'} className='nav-link' >Home</Link>
          <Link to={'/favorite'} className='nav-link'>Your Favorite</Link>
        </Typography>
        <Search>
          <SearchIconWrapper>
            <SearchIcon />
          </SearchIconWrapper>
          <StyledInputBase
            placeholder="Search…"
            inputProps={{ "aria-label": "search" }}
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
        </Search>
      </Toolbar>
    </AppBar>
  );
};

export const DetailHeader = ({ handleBack }) => {
  return (
    <AppBar position="relative">
      <Toolbar>
        <IconButton
          aria-label="back"
          onClick={handleBack}
          sx={{ color: "#fff" }}
        >
          <ArrowBackIcon />
        </IconButton>
        <Typography
          variant="h6"
          color="inherit"
          noWrap
        >
          News Detail
        </Typography>
        <Typography
          variant="h6"
          color="inherit"
          noWrap
          sx={{ display: { xs: "none", md: "block" } }}
        >
          <Link to={'/'} className='nav-link' >Home</Link>
          <Link to={'/favorite'} className='nav-link'>Your Favorite</Link>
        </Typography>
      </Toolbar>
    </AppBar>
  );
};


export const FavoriteHeader = ({ handleBack }) => {
  return (
    <AppBar position="relative">
      <Toolbar>
        <IconButton
          aria-label="back"
          onClick={handleBack}
          sx={{ color: "#fff" }}
        >
          <ArrowBackIcon />
        </IconButton>
        <Typography
          variant="h6"
          color="inherit"
          noWrap
        >
          Favorite
        </Typography>
        <Typography
          variant="h6"
          color="inherit"
          noWrap
          sx={{ display: { xs: "none", md: "block" } }}
        >
          <Link to={'/'} className='nav-link' >Home</Link>
        </Typography>
      </Toolbar>
    </AppBar>
  );
};