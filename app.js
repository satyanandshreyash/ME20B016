const express = require('express');
const axios = require('axios');

const app = express();

app.get('/numbers/:qualifiedIDs', function(req, res){
    if(req.params.qualifiedIDs === 'e'){
        const {data} = axios.get('http://20.244.56.144/test/even', {
            method: 'get'
        });
    }
    else if(req.params.qualifiedIDs === 'p'){
        const {data} = axios.get('http://20.244.56.144/test/prime', {
            method: 'get'
        });
    }
    else if(req.params.qualifiedIDs === 'f'){
        const {data} = axios.get('http://20.244.56.144/test/fibo', {
            method: 'get'
        });
    }
    else if(req.params.qualifiedIDs === 'r'){
        const {data} = axios.get('http://20.244.56.144/test/rand', {
            method: 'get'
        });
    }
})

app.listen(9876, function(req, res){
    console.log("server up and running on http://localhost:9876");
});
