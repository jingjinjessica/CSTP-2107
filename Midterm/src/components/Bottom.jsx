import { useState } from 'react';
import { useNavigate } from "react-router-dom";
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import RestoreIcon from '@mui/icons-material/Restore';
import FavoriteIcon from '@mui/icons-material/Favorite';
import './style.css'

export const Bottom = () => {
    const navigate = useNavigate();
    const [value, setValue] = useState('home');

    const handleChange = (event, newValue) => {
        setValue(newValue);
        if (newValue === 'home') navigate('/')
        if (newValue === 'favorites') navigate('/favorite')
    };

    return (
        <BottomNavigation sx={{ width: '100%', position: 'fixed', bottom: 0, display: { xs: "flex", md: "none" } }} value={value} onChange={handleChange}>
            <BottomNavigationAction
                label="Home"
                value="home"
                icon={<RestoreIcon />}
            />
            <BottomNavigationAction
                label="Favorites"
                value="favorites"
                icon={<FavoriteIcon />}
            />
        </BottomNavigation>
    );
};