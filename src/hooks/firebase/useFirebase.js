import { useState, useEffect } from 'react';
import { initializeApp } from 'firebase/app';

import {
    doc,
    addDoc,
    onSnapshot,
    updateDoc,
    deleteDoc,
    getFirestore,
    collection,
    query
} from 'firebase/firestore';

import { firebaseConfig } from './firebaseConfig';
import { START_DATA } from '../../helpers/constants';

export const useFirebase = () => {
    const [loading, setLoading] = useState(false);
    const [cities, setCities] = useState();

    initializeApp(firebaseConfig);

    const db = getFirestore();

    const citiesCollection = collection(db, 'cities');

    const q = query(citiesCollection);

    const getCities = async () => {
        setLoading(true);
        onSnapshot(q, snapshot => {
            let cities = [];
            snapshot.docs.forEach(post => {
                cities.push({ ...post.data(), id: post.id });
            });

            setLoading(false);
            setCities(cities);
        });
    };

    const getCity = id => {
        return doc(db, 'cities', id);
    };

    const updateCity = async (id, data) => {
        setLoading(true);
        await updateDoc(doc(db, 'cities', id), data);
        setLoading(false);
    };
    const addCity = async data => {
        setLoading(true);
        await addDoc(collection(db, 'cities'), data);
        setLoading(false);
    };

    const deleteCity = async id => {
        setLoading(true);
        await deleteDoc(doc(db, 'cities', id));
        setLoading(false);
    };

    const resetCitiesData = async () => {
        //delete all current cities data
        await cities.forEach(city => {
            deleteCity(city.id);
        });
        //set clean cities data
        START_DATA.forEach(city => {
            addCity(city);
        });
    };

    useEffect(() => {
        getCities();
    }, []);

    return {
        getCity,
        updateCity,
        deleteCity,
        addCity,
        resetCitiesData,
        loading,
        cities
    };
};
