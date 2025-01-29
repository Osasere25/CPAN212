const express = require ('express');
const router = express.Router();

router.get('/name', (req, res) => {
    res.send('Osasere Obazogobn');
});

router.get('/greeting', (req, res) => {
    res.send('Osasere Obazogbon - Student Number: N01651999');
});

router.get('/add', (req, res) => {
    const x = parseFloat(req.query.x);
    const y = parseFloat(req.query.y);

    if (isNaN(x) || isNaN(y)) {
        return res.status(400).send('Invalid numbers provided.');
    }
    res.send(`Result: ${x+y}`);
});

router.get ('/calculate', (req, res) => {
    const a = parseFloat(req.query.a);
    const b = parseFloat(req.query.b);
    const operation = req.query.operation;

    if (isNaN(a) || isNaN(b)) {
        return res.status(400).send('Invalid numbers provided.');
    }

    let result;
    switch(operation){
        case '-':
            result = a - b;
            break;
        case '+':
            result = a + b;
            break;
        case '*':
            result = a * b;
            break;
        case '/':
            result = a / b;
            break;   
        case '**':
            result = a ** b;
            break;
        default:
            return res.status(400).send('Invalid operation. Use +, -, *,/ , **');     
    }

    res.send(`Result: ${result}`);
})

module.exports = router;
