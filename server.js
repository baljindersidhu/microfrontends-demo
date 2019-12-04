(function(){
    'use strict';

    const express = require('express');
    const app = express();
    const PORT = 4200;

    app.use(express.static(__dirname + '/'));
    app.get('/', (request, response) => response.send('index.html'));

    app.listen(PORT);
})();