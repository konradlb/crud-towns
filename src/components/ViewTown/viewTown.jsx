import { useNavigate } from 'react-router-dom';
import { Modal } from 'antd';
import { ExclamationCircleFilled } from '@ant-design/icons';

import { shape, arrayOf, string } from 'prop-types';

import { useFirebase } from '../../hooks/firebase/useFirebase';

import { ReactComponent as Trash } from '../../icons/trash.svg';
import { ReactComponent as Edit } from '../../icons/edit.svg';

import classes from './viewTown.module.css';

const ViewTown = props => {
    const { city } = props;
    let navigate = useNavigate();
    const { deleteCity } = useFirebase();
    const { confirm } = Modal;

    if (!city) return <>Brak miast do wyświetlenia</>;
    const {
        id,
        name,
        name_slug,
        description,
        known_places,
        links,
        picture_url
    } = city;

    const handleEdit = () => {
        navigate(`/edit-town/${name_slug}`);
    };
    // const handleDelete = () => {
    //     deleteCity(id);
    // };

    const knownPlacesElement = known_places?.length ? (
        <div className={classes.knownPlaces}>
            <h3 className={classes.resourceTitle}>Znane miejsca</h3>
            <ul className={classes.placesList}>
                {known_places.map(place => (
                    <li key={place} className={classes.place}>
                        {place}
                    </li>
                ))}
            </ul>
        </div>
    ) : null;

    const linksElement = links?.length ? (
        <div className={classes.links}>
            <h3 className={classes.resourceTitle}>Interesujące linki</h3>
            <ul className={classes.linksList}>
                {links.map(link => (
                    <li key={link} className={classes.link}>
                        <a href={link}>{link}</a>
                    </li>
                ))}
            </ul>
        </div>
    ) : null;

    const showPropsConfirm = () => {
        confirm({
            title: 'Czy na pewno chcesz usunąć miasto z bazy',
            icon: <ExclamationCircleFilled />,
            okText: 'Yes',
            okType: 'danger',
            cancelText: 'No',
            onOk() {
                deleteCity(id);
            },
            onCancel() {
                console.log('Cancel');
            }
        });
    };

    return (
        <main className={classes.root}>
            <section className={classes.about}>
                <header className={classes.header}>
                    <h2 className={classes.name}>{name}</h2>
                    <div>
                        <Edit onClick={handleEdit} className={classes.icon} />
                        <Trash
                            onClick={showPropsConfirm}
                            className={classes.icon}
                        />
                    </div>
                </header>
                <img className={classes.image} src={picture_url} />
                <div className={classes.description}>
                    <h3>Opis</h3>
                    <p>{description}</p>
                </div>
            </section>
            <section className={classes.resources}>
                {knownPlacesElement}
                {linksElement}
            </section>
        </main>
    );
};

export default ViewTown;

ViewTown.propTypes = {
    city: shape({
        id: string,
        name: string,
        description: string,
        known_places: arrayOf(string),
        links: arrayOf(string),
        picture_url: string
    })
};
