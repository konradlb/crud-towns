import { Link } from 'react-router-dom';

import classes from './header.module.css';

const Header = () => {
    return (
        <header className={classes.root}>
            <Link className={classes.titleLink} to="/">
                <h1 className={classes.title}>Przeglądarka miast</h1>
            </Link>
            <nav className={classes.navigation}>
                <ul className={classes.navigationList}>
                    <li className={classes.navigationElement}>
                        <Link className={classes.navigationLink} to="/o-nas">
                            O nas
                        </Link>
                    </li>
                    <li className={classes.navigationElement}>
                        <Link className={classes.navigationLink} to="/pomoc">
                            Pomoc
                        </Link>
                    </li>
                    <li className={classes.navigationElement}>
                        <Link className={classes.navigationLink} to="/kontakt">
                            Kontakt
                        </Link>
                    </li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;
