import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Header from '../Header';
import Sidebar from '../Sidebar';
import ViewTown from '../ViewTown';
import EditTown from '../EditTown';
import classes from './mainPage.module.css';

const MainPage = () => {
    return (
        <div className={classes.root}>
            <Router>
                <Header />
                <Sidebar />
                <Routes>
                    <Route path="/" element={<ViewTown />} />
                    <Route path="/add-town" element={<EditTown />} />
                    <Route path="/edit-town/:slug" element={<EditTown />} />
                </Routes>
            </Router>
        </div>
    );
};

export default MainPage;
