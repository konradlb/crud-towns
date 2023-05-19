import { Button, Modal, Space } from 'antd';
import { Link } from 'react-router-dom';

import classes from './header.module.css';
const CONTENT = ` Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent ante urna, pretium eget ultrices vel, hendrerit ac lorem. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Aliquam eu erat vitae nisi tristique auctor vel sit amet tortor. Sed in laoreet nibh. Ut dignissim lacinia mi. In elementum dui et elit sodales lacinia. Cras quis diam mi. Cras tellus ipsum, malesuada ut velit vel, imperdiet dapibus mauris. Praesent gravida faucibus pharetra. Phasellus sodales tincidunt lectus. Sed fringilla tellus quis ultrices lobortis. Donec congue cursus justo ac maximus. Donec malesuada ut nunc non mollis.

Phasellus semper a quam id eleifend. Nullam malesuada tellus in orci varius, ut porta quam pretium. Nulla lacinia erat nibh, ut cursus ex convallis non. In sodales volutpat lorem, ac mollis mi volutpat non. Sed tincidunt magna eu malesuada ornare. Donec pretium dolor quis turpis porta, vitae venenatis mauris placerat. Morbi aliquet mi sed enim mollis vulputate. Nullam non ante nec risus cursus iaculis. Mauris luctus leo eget dapibus auctor. Pellentesque vitae orci tristique, porttitor ante at, vehicula elit. Donec id volutpat nisi, quis ultrices lectus.

Nullam euismod gravida massa, quis laoreet nunc mollis vitae. Aliquam viverra sem eget est egestas euismod. Fusce semper maximus lacus, vitae imperdiet metus mollis a. Suspendisse lacinia lacinia dolor, ut ultrices turpis semper a. Sed nulla orci, semper euismod mauris sed, cursus accumsan ligula. In ante metus, vulputate in lorem sit amet, pulvinar vehicula ex. Suspendisse sed pellentesque sem. Vivamus vel eleifend nunc, quis fringilla magna. Proin vitae consectetur eros. Nam auctor, est sed vestibulum ultrices, nisl nunc maximus nisl, sed maximus enim leo quis nisl. Donec nec risus eu diam luctus sagittis quis ut neque. Curabitur vehicula sit amet odio ut dignissim. `;
const Header = () => {
    const config = {
        width: 1000,
        centered: true,
        content: CONTENT
    };

    const about = () => {
        Modal.info({
            ...config,
            title: 'O nas'
        });
    };

    const help = () => {
        Modal.info({
            ...config,
            title: 'Pomoc'
        });
    };

    const contact = () => {
        Modal.info({
            ...config,
            title: 'Kontakt'
        });
    };

    return (
        <header className={classes.root}>
            <Link className={classes.titleLink} to="/">
                <h1 className={classes.title}>Przeglądarka miast</h1>
            </Link>
            <nav className={classes.navigation}>
                <Space wrap>
                    <Button
                        className={classes.navigationLink}
                        type="link"
                        onClick={about}
                    >
                        O nas
                    </Button>
                    <Button
                        className={classes.navigationLink}
                        type="link"
                        onClick={help}
                    >
                        Pomoc
                    </Button>
                    <Button
                        className={classes.navigationLink}
                        type="link"
                        onClick={contact}
                    >
                        Kontakt
                    </Button>
                </Space>
            </nav>
        </header>
    );
};

export default Header;
