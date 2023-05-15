import Header from '../Header';
import Sidebar from '../Sidebar/sidebar';
import ViewTown from '../ViewTown/viewTown';

import classes from './mainPage.module.css';

const MainPage = () => {
    return (
        <div className={classes.root}>
            <Header />
            <Sidebar />
            <ViewTown />
        </div>
    );
};

export default MainPage;
