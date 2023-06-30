import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Toolbar from "@mui/material/Toolbar";
import { useNavigate } from "react-router-dom";
import GlobalContext from "../context/GlobalContext";
import { useContext } from "react";
import { red } from "@mui/material/colors";

export default function NewsList(props) {
  const { favoriteData, setDetailData, setFavoriteData } =
    useContext(GlobalContext);
  const navigate = useNavigate();
  const { news } = props;
  const handleDetailClick = (data) => {
    setDetailData(data);
    navigate(`/detail`);
  };
  const handleSaveClick = (data) => {
    setFavoriteData([...favoriteData, data]);
  };

  const handleCancelSaveClick = (data) => {
    setFavoriteData(favoriteData.filter((item) => item.url !== data.url));
  };

  const isFavorite = (data) => {
    return favoriteData.some((item) => item.url === data.url);
  };
  return (
    <Container sx={{ py: 8 }} maxWidth="lg">
      <Grid container spacing={4}>
        {news.map((item) => (
          <Grid item key={item.url} md={12}>
            <Card
              sx={{
                height: "100%",
                display: { xs: "flex", md: "none" },
                flexDirection: "column",
              }}
            >
              <CardMedia
                component="div"
                sx={{
                  pt: "56.25%",
                }}
                image={item.urlToImage}
                alt={item.title}
              />
              <CardContent sx={{ flexGrow: 1 }}>
                <Typography gutterBottom variant="h5" component="h2">
                  {item.title}
                </Typography>
                <Typography variant="subtitle1" color="text.secondary">
                  {item.author}
                </Typography>
                <Typography>{item.description}</Typography>
                <Typography variant="subtitle1" color="text.secondary">
                  {item.publishedAt?.replace(/T/g, " ").replace(/Z/g, "")}
                </Typography>
              </CardContent>
              <CardActions>
                <Button
                  variant="contained"
                  size="small"
                  onClick={() => handleDetailClick(item)}
                >
                  View
                </Button>
                {isFavorite(item) ? (
                  <IconButton
                    aria-label="calcel save"
                    onClick={() => handleCancelSaveClick(item)}
                    sx={{ ml: 2}}
                    
                  >
                    <FavoriteIcon />
                  </IconButton>
                ) : (
                  <IconButton
                    aria-label="calcel save"
                    onClick={() => handleSaveClick(item)}
                    sx={{ ml: 2}}
                  
                  >
                    <FavoriteBorderIcon  />
                  </IconButton>
                )}
              </CardActions>
            </Card>
            <Card sx={{ display: { xs: "none", md: "flex" } }}>
              <CardMedia
                component="div"
                sx={{ width: "360px" }}
                image={item.urlToImage}
                alt={item.title}
              />
              <CardContent sx={{ flex: 1 }}>
                <Typography component="h2" variant="h5">
                  {item.title}
                </Typography>
                <Typography variant="subtitle1" color="text.secondary">
                  {item.author}
                </Typography>
                <Typography variant="subtitle1" paragraph>
                  {item.description}
                </Typography>
                <Typography variant="subtitle1" color="text.secondary">
                  {item.publishedAt?.replace(/T/g, " ").replace(/Z/g, "")}
                </Typography>
                <Toolbar component="div" sx={{ justifyContent: "flex-end" }}>
                  <Button
                    variant="contained"
                    size="small"
                    onClick={() => handleDetailClick(item)}
                  >
                    View
                  </Button>
                  {isFavorite(item) ? (
                    <IconButton
                      aria-label="calcel save"
                      onClick={() => handleCancelSaveClick(item)}
                      sx={{ ml: 2 }}
                    >
                      <FavoriteIcon />
                    </IconButton>
                  ) : (
                    <IconButton
                      aria-label="calcel save"
                      onClick={() => handleSaveClick(item)}
                      sx={{ ml: 2}}
                    >
                      <FavoriteBorderIcon />
                    </IconButton>
                  )}
                </Toolbar>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}
