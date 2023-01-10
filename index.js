import express from 'express';
import morgan from 'morgan';
import cors from 'cors';
import {PORT} from './configs.js';
import routes from './routes/dojoRoutes.js';

const app = express();

app.use(express.json());
app.use(morgan('dev'));
app.use(cors());
app.use(routes);


app.listen(PORT, () =>{
    console.log(`Servidor running in port:${PORT}` );
});

