import { ReactComponent as Trash } from '../../icons/trash.svg';
import { ReactComponent as Edit } from '../../icons/edit.svg';

import classes from './viewTown.module.css';

const ViewTown = () => {
    const handleEdit = () => {
        console.log('edit');
    };
    const handleDelete = () => {
        console.log('delete');
    };
    const known_places = [
        'Kolumna Zygmunta',
        'Zamek Królewski',
        'Pałac kultury i Nauki',
        'Teatr Narodowy',
        'Syrenka Warszawska',
        'Stadion Narodowy',
        'Pałac w Wilanowie'
    ];
    const links = [
        'https://um.warszawa.pl',
        'https://pl.wikipedia.org/wiki/Warszawa',
        'https://warsawtour.pl/'
    ];

    const knownPlacesElement = (
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
    );
    const linksElement = (
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
    );

    return (
        <main className={classes.root}>
            <section className={classes.about}>
                <header className={classes.header}>
                    <h2 className={classes.name}>Warszawa</h2>
                    <div>
                        <Edit onClick={handleEdit} className={classes.icon} />
                        <Trash
                            onClick={handleDelete}
                            className={classes.icon}
                        />
                    </div>
                </header>
                <img
                    className={classes.image}
                    src="https://upload.wikimedia.org/wikipedia/commons/0/05/PKiN_widziany_z_WFC.jpg"
                />
                <div className={classes.description}>
                    <h3>Opis</h3>
                    <p>
                        Warszawa, miasto stołeczne Warszawa[2] (m.st. Warszawa)
                        stolica Polski[3] i województwa mazowieckiego[4],
                        największe miasto w kraju, położone w jego centralnej
                        części[5], na Nizinie Środkowomazowieckiej, na Mazowszu,
                        nad Wisłą. Prawa miejskie uzyskała przed 1300[6]. W 1569
                        mocą unii lubelskiej Warszawa została ustanowiona
                        miejscem obrad sejmów Rzeczypospolitej Obojga
                        Narodów[a]. Od 1573 odbywały się tam wolne elekcje. Po
                        1596 do Warszawy przeniesiono dwór królewski i urzędy
                        centralne, a w 1611 w rozbudowanym Zamku Królewskim na
                        stałe zamieszkał król Zygmunt III Waza. Miejsce obrad
                        sejmików generalnych województwa mazowieckiego i
                        sejmików ziemskich ziemi warszawskiej od XVI wieku do
                        pierwszej połowy XVIII wieku[7]. Warszawa jest
                        największym miastem w Polsce pod względem liczby
                        ludności i powierzchni[1]. Jest również jedynym polskim
                        miastem, którego ustrój jest określony odrębną ustawą.
                        Od 2002 jest gminą miejską mającą status miasta na
                        prawach powiatu[8]. W jej skład wchodzi 18 jednostek
                        pomocniczych – dzielnic m.st. Warszawy[9]. Warszawa jest
                        ważnym ośrodkiem naukowym, kulturalnym, politycznym oraz
                        gospodarczym. Tutaj znajdują się siedziby m.in.
                        Prezydenta RP, Sejmu i Senatu, Rady Ministrów oraz
                        Narodowego Banku Polskiego. Warszawa jest także siedzibą
                        agencji Frontex, odpowiedzialnej za bezpieczeństwo
                        granic zewnętrznych Unii Europejskiej, oraz Biura
                        Instytucji Demokratycznych i Praw Człowieka (ODIHR),
                        agendy OBWE. W 2020 think tank Globalization and World
                        Cities (GaWC), badający wzajemne stosunki pomiędzy
                        miastami świata w kontekście globalizacji zaliczył
                        Warszawę do kategorii Alpha-[10].
                    </p>
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
