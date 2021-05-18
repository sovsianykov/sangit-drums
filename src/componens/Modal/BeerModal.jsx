import React, {useCallback, useState} from "react";
import './modal.scss';
import {init, send} from "emailjs-com";
import useStyles from "../../Pages/Projects/About/styles";
import {Button, Grid, Paper, Typography} from "@material-ui/core";










const Modal = ({active, setActive,}) => {

    const handleClick = useCallback(()=>{setActive(false)},[setActive])
    init("user_qgNbbhNEOZCqVam1h08VN");
    const classes = useStyles()
    const [toSend, setToSend] = useState({
        from_name: '',
        to_name: '',
        message: '',
        reply_to: '',
    });
    const onSubmit = (e) => {
        e.preventDefault();
        send(
            'service_tbyc8ao',
            'template_m9ptzc4',
            toSend,
            'user_qgNbbhNEOZCqVam1h08VN'
        )
            .then((response) => {
                console.log('SUCCESS!', response.status, response.text);
            })
            .catch((err) => {
                console.log('FAILED...', err);
            });
    };
    const handleChange = (e) => {
        setToSend({ ...toSend, [e.target.name]: e.target.value });
    };

    return (
        <div className={active ? 'modal active ' : 'modal' } onClick={handleClick}>
            <div className={active ? 'modal__content active ' : 'modal__content' } onClick={e => e.stopPropagation()}>

                    <Grid container justify="center">
                        <Grid item xs={12} sm={11} md={11}>
                            <Paper className={classes.paper}>
                                <Typography variant="h4" className={classes.title}>
                                    Записаться на курс
                                </Typography>
                                <div className='form'>
                                    <form onSubmit={onSubmit}>
                                        <input
                                            type='text'
                                            name='from_name'
                                            placeholder='ваше имя'
                                            value={toSend.from_name}
                                            onChange={handleChange}
                                        />
                                        <input
                                            type='text'
                                            name='to_name'
                                            placeholder='контактный телефон'
                                            value={toSend.to_name}
                                            onChange={handleChange}
                                        />
                                        <input
                                            type='text'
                                            name='message'
                                            placeholder='ваше сообщение'
                                            value={toSend.message}
                                            onChange={handleChange}
                                        />
                                        <input
                                            type='text'
                                            name='reply_to'
                                            placeholder='ваш email'
                                            value={toSend.reply_to}
                                            onChange={handleChange}
                                        />
                                        <Button type='submit'>Отправить</Button>
                                    </form>
                                </div>
                            </Paper>
                        </Grid>
                    </Grid>


            </div>

        </div>
    )
}

export default Modal;