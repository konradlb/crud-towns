import { useEffect, useState } from 'react';

import { useFirebase } from '../firebase/useFirebase';
import { removeSpecialChars } from '../../helpers/removeSpecialChars';

export const useMainPage = () => {
    const { cities, loading } = useFirebase();
    const [city, setCity] = useState();
    const [citiesToShow, setCitiesToShow] = useState([]);
    const [voivodeships, setVoivodeships] = useState([]);

    const handleChangeCity = id => {
        setCity(cities.find(city => city.id === id));
    };
    const handleChangeVoivodeship = value => {
        const filteredCities = cities.filter(city => {
            city.voivodeship === value;
        });

        setCitiesToShow(filteredCities);
    };
    const handleChangeSearch = event => {
        console.log(event.target.value);
    };

    useEffect(() => {
        if (cities?.length) {
            setCity(cities[0]);
            setCitiesToShow(cities);
            setVoivodeships(
                cities
                    ?.map(city => {
                        return {
                            value: removeSpecialChars(city.voivodeship),
                            label: city.voivodeship
                        };
                    })
                    .sort()
            );
        }
    }, [cities]);

    return {
        city,
        cities: citiesToShow,
        loading,
        voivodeships,
        handleChangeCity,
        handleChangeVoivodeship,
        handleChangeSearch
    };
};
