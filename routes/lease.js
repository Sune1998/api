var express = require('express')
var fs = require('fs')
var router = express.Router()

router.get('/', function(req, res, next){
    res.render('lease', {title: 'Leasing'})
})

router.post('/sucess', function(req, res, next){
    fs.readFile("./public/data/combined.json", function(err, data){
        if(err){
            console.log(err.message)
            return
        }
        let json = JSON.parse(data)
        let name = req.body.name
        let color = req.body.color
        let type = req.body.type

        json.cars.push({"name": name, "color": color, "type": type})

        fs.writeFile("./public/data/combined.json", JSON.stringify(json, null, 4), function(err){
            if(err){
                console.log(err.message)
            }

        })
    })
    res.render('sucess', {title: 'sucess'})
})
module.exports = router