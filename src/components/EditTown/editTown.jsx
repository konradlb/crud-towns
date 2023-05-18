import { useLocation, useParams } from 'react-router-dom';
import { Input, Select, Button, Form } from 'antd';

import { VOIVODESHIPS } from '../../helpers/constants';
import { useEditTown } from '../../hooks/EditTown/useEditTown';
import classes from './editTown.module.css';

const EditTown = () => {
    const { pathname } = useLocation();
    const { slug } = useParams();

    const { onSubmit, saveStartData, initialValues } = useEditTown(slug);

    const title =
        pathname === '/add-town' ? 'Dodaj nowe miasto' : 'Edytuj miasto';
    const submitFormText =
        pathname === '/add-town' ? 'Dodaj nowe miasto' : 'Zapisz zmiany';
    const addStartDataButton =
        pathname === '/add-town' ? (
            <Button
                className={classes.submitForm}
                type="primary"
                style={{
                    backgroundColor: '#0f172a'
                }}
                onClick={saveStartData}
            >
                dodaj dane startowe
            </Button>
        ) : null;

    return (
        <main className={classes.root}>
            <h2 className={classes.title}>{title}</h2>
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
                    name="pictureUrl"
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
                    {submitFormText}
                </Button>
            </Form>
            {addStartDataButton}
        </main>
    );
};

export default EditTown;
