const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));

let posts = [
    {
        id: 1,
        title: 'This is post 1'
    },
    {
        id: 2,
        title: 'This is post 2'
    }
];

app.get('/posts', (req, res) => {
    res.send(posts);
});

app.get('/posts/:id', (req, res) => {
    let post = posts.find((post) => {
        return post.id === parseInt(req.params.id);
    });
    res.send(post);
});

app.post('/posts', (req, res) => {
    let post = {
        id: posts.length + 1,
        title: req.body.title
    };
    posts.push(post);
    res.send('Post added');
});

app.listen(3000, () => {
    console.log('Server is started');
});