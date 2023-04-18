import express from 'express';
import routes from './routes';
import mongoose  from 'mongoose';


app.use(express.json());

app.use('/api',routes);


app.listen(APP_PORT,()=>{
    console.log(`listning on port ${APP_PORT}`)
})
