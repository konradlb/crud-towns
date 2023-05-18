import { Input, Select, Button } from 'antd';
import { Link, useLocation } from 'react-router-dom';
import { arrayOf, shape, string, func } from 'prop-types';
import classes from './sidebar.module.css';

const Sidebar = props => {
    const {
        cities,
        voivodeships,
        handleChangeCity,
        handleChangeVoivodeship,
        handleChangeSearch
    } = props;
    const { pathname } = useLocation();
    const { Search } = Input;

    const citiesButtons = (
        <ul className={classes.townsList}>
            {cities === undefined ? (
                <>Brak miast do wyświetlenia</>
            ) : (
                cities.map(city => (
                    <li className={classes.townsElement} key={city.name}>
                        <Button
                            onClick={() => {
                                handleChangeCity(city.id);
                            }}
                            size="large"
                            className={classes.townsButton}
                        >
                            {city.name}
                        </Button>
                    </li>
                ))
            )}
        </ul>
    );

    return (
        <aside className={classes.root}>
            {pathname === '/' ? (
                <>
                    <div className={classes.inputsWrapper}>
                        <label className={classes.inputLabel}>Wyszukaj</label>
                        <Search
                            className={classes.input}
                            size="large"
                            placeholder="Wpisz nazwę miasta"
                            onChange={handleChangeSearch}
                        />
                        <label className={classes.inputLabel}>
                            Województwo
                        </label>
                        <Select
                            className={classes.input}
                            size="large"
                            placeholder="Wybierz województwo"
                            options={voivodeships}
                            onChange={handleChangeVoivodeship}
                        />
                    </div>
                    {citiesButtons}
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

Sidebar.propTypes = {
    cities: arrayOf(
        shape({
            id: string,
            name: string,
            description: string,
            known_places: arrayOf(string),
            links: arrayOf(string),
            picture_url: string
        })
    ),
    voivodeships: arrayOf(
        shape({
            value: string,
            label: string
        })
    ),
    handleChangeCity: func,
    handleChangeVoivodeship: func,
    handleChangeSearch: func
};
