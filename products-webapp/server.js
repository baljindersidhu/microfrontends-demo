(function(){
    'use strict';

    const express = require('express');
    const app = express();
    const PORT = 5000;

    app.use(express.static(__dirname + '/dist/products-webapp'));
    app.get('/', (request, response) => response.send('index.html'));

    app.listen(PORT);
})();