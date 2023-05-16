import { useLocation } from 'react-router-dom';
import { Input, Select, Button, Form } from 'antd';

import { VOIVODESHIPS } from '../../helpers/constants';
import classes from './editTown.module.css';

const EditTown = () => {
    const { pathname } = useLocation();

    console.log('pathname');
    console.log(pathname);

    const onSubmit = values => {
        console.log('onSubmit', values);
    };

    const initialValues = {
        name: 'Szczecin',
        voivodeship: 'zachodniopomorskie',
        photoUrl: 'https',
        description: 'Lorem',
        links: 'https://',
        places: 'starówka, galeria'
    };

    return (
        <main className={classes.root}>
            <h2 className={classes.title}>Dodaj nowe miasto</h2>
            <Form
                initialValues={initialValues}
                className={classes.form}
                size="large"
                layout="vertical"
                onFinish={onSubmit}
            >
                <Form.Item
                    name="name"
                    label="Nazwa miasta"
                    rules={[
                        { required: true, message: 'To pole jest wymagane' }
                    ]}
                    className={classes.formItem}
                >
                    <Input placeholder="Wpisz nazwę miasta" />
                </Form.Item>
                <Form.Item
                    name="voivodeship"
                    label="Województwo"
                    rules={[
                        { required: true, message: 'To pole jest wymagane' }
                    ]}
                    className={classes.formItem}
                >
                    <Select
                        options={VOIVODESHIPS}
                        placeholder="Wybierz województwo"
                    />
                </Form.Item>
                <Form.Item
                    name="photoUrl"
                    label="Zdjęcie"
                    rules={[
                        { required: true, message: 'To pole jest wymagane' }
                    ]}
                    className={classes.formItem}
                >
                    <Input placeholder="Wprowadź URL do zdjęcia miasta" />
                </Form.Item>
                <Form.Item
                    name="description"
                    label="Opis miasta"
                    rules={[
                        { required: true, message: 'To pole jest wymagane' }
                    ]}
                    className={classes.formTextItem}
                >
                    <Input.TextArea placeholder="Wpisz opis miasta" />
                </Form.Item>
                <Form.Item
                    name="links"
                    label="Interesujące linki"
                    rules={[
                        { required: true, message: 'To pole jest wymagane' }
                    ]}
                    className={classes.formTextItem}
                >
                    <Input.TextArea placeholder="Wpisz interesujące linki oddzielone przecinkami" />
                </Form.Item>
                <Form.Item
                    name="places"
                    label="Znane miejsca"
                    rules={[
                        { required: true, message: 'To pole jest wymagane' }
                    ]}
                    className={classes.formTextItem}
                >
                    <Input.TextArea placeholder="Wpisz znane miejsca oddzielone przecinkami" />
                </Form.Item>
                <Button
                    className={classes.submitForm}
                    type="primary"
                    htmlType="submit"
                    style={{
                        backgroundColor: '#0f172a'
                    }}
                >
                    Dodaj nowe miasto
                </Button>
            </Form>
        </main>
    );
};

export default EditTown;
