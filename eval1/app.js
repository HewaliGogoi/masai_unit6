const express = require('express');
const app = express();

function checkPermission(route){
    return function(req, res, next){
        if(route == 'libraries'){
            res.json({"route":"libraries", "permission" : true});
        }
        if(route == 'authors'){
            res.json({"route":"authors", "permission" : true});
        }
    }
}

app.use((req, res, next) => {
    console.log(req.path);
    next();
});

app.get('/books', (req, res) => {
    res.json({'route':'books'});
});

app.get('/libraries', checkPermission('libraries'));

app.get('/authors', checkPermission('authors'));

module.exports = app;