
import * as React from 'react';
import {useState} from "react";
import {Box, Paper, Typography, Grid, Button} from "@material-ui/core";
import useStyles from './styles'
import { send } from 'emailjs-com';
import{ init } from 'emailjs-com';
import './form.scss'
import { Facebook, PhoneIphone, Telegram, YouTube} from "@material-ui/icons";




const Contacts = () => {
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
        <Box>
            <main className={classes.root}>
                <Grid container justify="center">
                    <Grid item xs={12} sm={11} md={11}>
                        <Paper className={classes.paper}>
                            <Typography variant="h4" className={classes.title}>
                               Связаться со мной
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
                                       name='reply_to'
                                       placeholder='ваш email'
                                       value={toSend.reply_to}
                                       onChange={handleChange}
                                   />
                                   <input
                                       type='text'
                                       name='message'
                                       placeholder='ваше сообщение'
                                       value={toSend.message}
                                       onChange={handleChange}
                                   />
                                   <Button type='submit'>Отправить</Button>
                               </form>
                           </div>
                            <Typography variant="body1"   align='center' color='textPrimary' >
                                <PhoneIphone style={{color: 'darkblue',marginTop:"20px"}}/>
                                <a href="tel:+380669658925" className={classes.social} >+38-066-9658925</a>
                            </Typography>
                            <Typography variant='h5'  align='center' >
                                <a href="mailto:sangitdrum@gmail.com" className={classes.social} >
                                    <br/> sangitdrum@gmail.com
                                </a>
                            </Typography>
                            <Typography variant='h2'  align='center' >
                                <a href="https://www.facebook.com/sangitdrum"  >
                                <Facebook className={classes.socialIc} style={{color: 'blue'}}  />
                                </a>

                                <a href="https://www.youtube.com/channel/UCMVD_FDLnYj-Fb9zSM9lA_Q"  >
                                    <YouTube className={classes.socialIc} style= {{color: 'red'}}/>
                                </a>
                                <a href="https://www.youtube.com/channel/UCMVD_FDLnYj-Fb9zSM9lA_Q"  >
                                    <Telegram className={classes.socialIc}  style={{color: 'deepskyblue'}}/>
                                </a>
                            </Typography>
                        </Paper>
                    </Grid>
                </Grid>

            </main>
        </Box>
    );
};
export default Contacts;
