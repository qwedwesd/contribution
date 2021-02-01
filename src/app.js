import express from 'express';
import cookieParser from 'cookie-parser';
import path from 'path';
import morgan from 'morgan';
import cors from 'cors';
import session from 'express-session';
import passport from 'passport';
import http from 'http';
import indexRouter from './routes/index'; // 預設index可不用打

require('dotenv').config();

const app = express();

app.use(express.json());// 資料格式
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.resolve(__dirname, '../view')));// 靜態網頁
app.use(morgan('dev'));// 服務內容 get post...
app.use(cors());// 跨域 白名單黑名單

// secret resave saveUninitialized
app.use(
  session({
    secret: process.env.APP_KEY, // 這邊的key不能亂改
    resave: false,
    saveUninitialized: false,
  }),
);

app.use(passport.initialize());// 初始化
app.use(passport.session());// 改用passport的Session

app.use('/api', indexRouter);//

const server = http.createServer(app);// 建立server

server.listen(process.env.APP_PORT);// 設定port號通常用3000

server.on('listening', () => {
  const addr = server.address();
  console.log(`This is server on ${addr.port}`); // 數字文字一起不用+號JS才有
});
