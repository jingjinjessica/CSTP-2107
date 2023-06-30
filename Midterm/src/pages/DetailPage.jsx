import { useEffect, useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import CssBaseline from "@mui/material/CssBaseline";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import { DetailHeader } from "../components/Header";
import GlobalContext from '../context/GlobalContext';

const DetailPage = () => {
  const { detailData = {} } = useContext(GlobalContext);

  const navigate = useNavigate();

  const handleGoBack = () => {
    navigate("/");
  };

  const handleDetailClick = (url) => {
    window.open(url, "_blank");
  }

  return (
    <>
      <CssBaseline />
      <DetailHeader handleBack={handleGoBack} />
      {detailData && (
        <Container sx={{ py: 8 }} maxWidth="lg">
          <Card
            sx={{
              height: "100%",
              display: { xs: "flex", md: "none" },
              flexDirection: "column",
              mt: 4,
            }}
          >
            <CardMedia
              component="div"
              sx={{
                pt: "56.25%",
              }}
              image={detailData.urlToImage}
              alt={detailData.title}
            />
            <CardContent sx={{ flexGrow: 1 }}>
              <Typography gutterBottom variant="h5" component="h2">
                {detailData.title}
              </Typography>
              <Typography variant="subtitle1" color="text.secondary">
                {detailData.author}
              </Typography>
              <Typography>{detailData.description}</Typography>
              <Typography variant="subtitle1" color="text.secondary">
                {detailData.publishedAt?.replace(/T/g, " ").replace(/Z/g, "")}
              </Typography>
              <Button
                variant="contained"
                size="small"
                onClick={() => handleDetailClick(detailData.url)}
              >
                View Detail
              </Button>
            </CardContent>
          </Card>
          <Card
            sx={{
              display: { xs: "none", md: "flex" },
              flexDirection: "column",
              mt: 6,
            }}
          >
            <Box sx={{ display: "flex" }}>
              <CardMedia
                component="div"
                sx={{
                  pl: "38%", pt: "20%",
                }}
                image={detailData.urlToImage}
                alt={detailData.title}
              />
              <CardContent sx={{ flex: 1 }}>
                <Typography component="h2" variant="h5">
                  {detailData.title}
                </Typography>
                <Typography variant="subtitle1" color="text.secondary">
                  {detailData.author}
                </Typography>
                <Typography variant="subtitle1" color="text.secondary">
                  {detailData.publishedAt?.replace(/T/g, " ").replace(/Z/g, "")}
                </Typography>
              </CardContent>
            </Box>
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                mt: 4,
                pl: 1,
                pb: 1,
              }}
            >
              <Typography variant="subtitle1" paragraph>
                {detailData.description}
              </Typography>

              <Button
                variant="contained"
                sx={{ width: "200px", mr: 2 }}
                onClick={() => handleDetailClick(detailData.url)}
              >
                View Detail
              </Button>
            </Box>
          </Card>
        </Container >
      )}
    </>
  );
};

export default DetailPage;
