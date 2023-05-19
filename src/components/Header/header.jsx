import { useState } from 'react';
import { Button, Modal, Space } from 'antd';
import { Link } from 'react-router-dom';

import { CONTENT } from '../../helpers/constants';
import classes from './header.module.css';
const Header = () => {
    const [openAboutModal, setOpenAboutModal] = useState(false);
    const [openHelpModal, setOpenHelpModal] = useState(false);
    const [openContactModal, setOpenContactModal] = useState(false);

    const handleOpenAboutModal = () => {
        setOpenAboutModal(true);
    };

    const handleOpenHelpModal = () => {
        setOpenHelpModal(true);
    };
    const handleOpenContactModal = () => {
        setOpenContactModal(true);
    };

    const modals = [
        {
            title: 'O nas',
            open: openAboutModal,
            onCancel: () => setOpenAboutModal(false)
        },
        {
            title: 'Pomoc',
            open: openHelpModal,
            onCancel: () => setOpenHelpModal(false)
        },
        {
            title: 'Kontakt',
            open: openContactModal,
            onCancel: () => setOpenContactModal(false)
        }
    ];

    const modalsElements = modals.map(modal => (
        <Modal
            width={1000}
            centered
            key={modal.title}
            title={modal.title}
            open={modal.open}
            onCancel={modal.onCancel}
            footer={[
                <Button key="close" onClick={modal.onCancel}>
                    Zamknij
                </Button>
            ]}
        >
            {CONTENT}
        </Modal>
    ));

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
                        onClick={handleOpenAboutModal}
                    >
                        O nas
                    </Button>
                    <Button
                        className={classes.navigationLink}
                        type="link"
                        onClick={handleOpenHelpModal}
                    >
                        Pomoc
                    </Button>
                    <Button
                        className={classes.navigationLink}
                        type="link"
                        onClick={handleOpenContactModal}
                    >
                        Kontakt
                    </Button>
                </Space>
            </nav>
            {modalsElements}
        </header>
    );
};

export default Header;
