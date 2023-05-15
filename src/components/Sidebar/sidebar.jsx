import { Input, Select, Button } from 'antd';

import classes from './sidebar.module.css';

const Sidebar = () => {
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
            <div className={classes.inputsWrapper}>
                <label className={classes.inputLabel}>Wyszukaj</label>
                <Input
                    className={classes.input}
                    size="large"
                    placeholder="Wpisz nazwę miasta"
                />
                <label className={classes.inputLabel}>Województwo</label>
                <Select
                    className={classes.input}
                    size="large"
                    placeholder="Wybierz województwo"
                    options={voivodeships}
                    onChange={handleChange}
                />
            </div>
            {townsElements}
            <Button size="large" className={classes.addTownsButton}>
                Dodaj nowe miasto
            </Button>
        </aside>
    );
};

export default Sidebar;
