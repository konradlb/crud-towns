import { Input, Select, Button } from 'antd';
import { Link, useLocation } from 'react-router-dom';

import classes from './sidebar.module.css';

const Sidebar = () => {
    const { pathname } = useLocation();

    const towns = [
        { value: 'warszawa', label: 'Warszawa' },
        { value: 'kraków', label: 'Kraków' },
        { value: 'poznań', label: 'Poznań' },
        { value: 'gdańsk', label: 'Gdańsk' },
        { value: 'wrocław', label: 'Wrocław' }
    ];

    const voivodeships = [
        { value: 'mazowieckie', label: 'Mazowieckie' },
        { value: 'opolskie', label: 'Opolskie' }
    ];

    const handleChange = value => {
        console.log(`selected ${value}`);
    };

    const townsElements = (
        <ul className={classes.townsList}>
            {towns.map(town => (
                <li className={classes.townsElement} key={town.value}>
                    <Button size="large" className={classes.townsButton}>
                        {town.label}
                    </Button>
                </li>
            ))}
        </ul>
    );

    return (
        <aside className={classes.root}>
            {pathname === '/' ? (
                <>
                    <div className={classes.inputsWrapper}>
                        <label className={classes.inputLabel}>Wyszukaj</label>
                        <Input
                            className={classes.input}
                            size="large"
                            placeholder="Wpisz nazwę miasta"
                        />
                        <label className={classes.inputLabel}>
                            Województwo
                        </label>
                        <Select
                            className={classes.input}
                            size="large"
                            placeholder="Wybierz województwo"
                            options={voivodeships}
                            onChange={handleChange}
                        />
                    </div>
                    {townsElements}
                    <Link className={classes.addTownLink} to="/add-town">
                        <Button
                            size="large"
                            type="primary"
                            className={classes.addTownButton}
                            style={{
                                backgroundColor: '#0f172a'
                            }}
                        >
                            Dodaj nowe miasto
                        </Button>
                    </Link>
                </>
            ) : null}
        </aside>
    );
};

export default Sidebar;
