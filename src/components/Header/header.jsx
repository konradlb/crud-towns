import classes from './header.module.css';

const Header = () => {
    return (
        <header className={classes.root}>
            <h1 className={classes.title}>Przeglądarka miast</h1>
            <nav className={classes.navigation}>
                <ul className={classes.navigationList}>
                    <li className={classes.navigationElement}>
                        <a className={classes.navigationLink} href="/o-nas/">
                            O nas
                        </a>
                    </li>
                    <li className={classes.navigationElement}>
                        <a className={classes.navigationLink} href="/pomoc/">
                            Pomoc
                        </a>
                    </li>
                    <li className={classes.navigationElement}>
                        <a className={classes.navigationLink} href="/kontakt/">
                            Kontakt
                        </a>
                    </li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;
