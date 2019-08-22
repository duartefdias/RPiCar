module.exports = app => {
    app.get('/test', function(req, res){
        res.send('Test route is woking!')
    })
}