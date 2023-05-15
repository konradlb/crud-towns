import classes from './sidebar.module.css';

const Sidebar = () => {
    return (
        <div className={classes.root}>
            <div>Wyszukaj</div>
            <div>Województwo</div>

            <ul>
                <li>
                    <button>Warszawa</button>
                </li>
                <li>
                    <button>Kraków</button>
                </li>
                <li>
                    <button>Poznań</button>
                </li>
                <li>
                    <button>Gdańsk</button>
                </li>
                <li>
                    <button>Wrocław</button>
                </li>
            </ul>
        </div>
    );
};

export default Sidebar;
