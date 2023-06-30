import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import CssBaseline from "@mui/material/CssBaseline";
import { FavoriteHeader } from "../components/Header";
import NewsList from "../components/NewsListComponent";
import GlobalContext from '../context/GlobalContext';

export default function FavoritePage() {
  const navigate = useNavigate();
  const { favoriteData = [] } = useContext(GlobalContext);
  const handleGoBack = () => {
    navigate("/");
  };

  return (
    <>
      <CssBaseline />
      <FavoriteHeader handleBack={handleGoBack} />
      <main>
        <NewsList news={favoriteData} />
      </main>
    </>
  );
}
