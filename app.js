const express = require('express');
const path = require('path');

const app = express();

const template = require('express-art-template');

app.engine('art', template);
app.set('views', path.join(__dirname, './views'));
app.set('view engine', 'art');
app.use(express.static(path.join(__dirname, 'public')));

app.use('/admin', require('./route/admin'));
app.listen(80);
console.log('服务器开启成功');