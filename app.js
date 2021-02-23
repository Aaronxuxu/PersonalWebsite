const express = require('express');
const path = require('path');

const app = express();

const template = require('express-art-template');

app.engine('art', template);
app.set('views', path.join(__dirname, './views'));
app.set('view engine', 'art');