// import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { useFirebase } from '../firebase/useFirebase';
import { removeSpecialChars } from '../../helpers/removeSpecialChars';

export const useEditTown = slug => {
    let navigate = useNavigate();

    const { updateCity, addCity, saveStartData, cities } = useFirebase();

    const currentCity = cities?.find(city => {
        return city.name_slug === slug;
    });

    console.log('currentCity------------------');
    console.log(currentCity);

    const onSubmit = values => {
        console.log('onSubmit', values);
        const data = {
            description: values.description,
            name: values.name,
            name_slug: removeSpecialChars(values.name),
            known_places: values.places.split(', '),
            links: values.links.split(', '),
            picture_url: values.pictureUrl,
            voivodeship: values.voivodeship
        };

        if (slug) {
            updateCity(currentCity.id, data);
        } else {
            addCity(data);
        }
        navigate(`/`);
    };

    let initialValues = {};

    if (currentCity) {
        initialValues = {
            name: 'Szczecin',
            voivodeship: 'zachodniopomorskie',
            pictureUrl: 'https',
            description: 'Lorem',
            links: 'https://',
            places: 'starówka, galeria'
        };
    }

    console.log('initialValues in hook');
    console.log(initialValues);

    return { onSubmit, saveStartData, initialValues };
};
