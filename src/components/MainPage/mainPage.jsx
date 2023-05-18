import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Spin } from 'antd';

import { useMainPage } from '../../hooks/MainPage/useMainPage';
import Header from '../Header';
import Sidebar from '../Sidebar';
import ViewTown from '../ViewTown';
import EditTown from '../EditTown';
import classes from './mainPage.module.css';

const MainPage = () => {
    const {
        city,
        cities,
        voivodeships,
        loading,
        handleChangeCity,
        handleChangeVoivodeship,
        handleChangeSearch
    } = useMainPage();

    if (loading) return <Spin />;

    return (
        <div className={classes.root}>
            <Router>
                <Header />
                <Sidebar
                    cities={cities}
                    voivodeships={voivodeships}
                    handleChangeCity={handleChangeCity}
                    handleChangeVoivodeship={handleChangeVoivodeship}
                    handleChangeSearch={handleChangeSearch}
                />
                <Routes>
                    <Route path="/" element={<ViewTown city={city} />} />
                    <Route path="/add-town" element={<EditTown />} />
                    <Route path="/edit-town/:slug" element={<EditTown />} />
                </Routes>
            </Router>
        </div>
    );
};

export default MainPage;
