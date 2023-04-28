const { Router } = require('express')
const route = Router()
const { v4 } = require('uuid')
const fs = require('fs')
const path = require('path')


route.get('/', (req, res) => {
    fs.readFile(path.join(__dirname, '../data.json'), "utf-8", (err, data) => {
        if (err) {
            console.log(err);
        }
        else {
            data = JSON.parse(data)
            res.json({
                title: "Teachers page",
                message: "List all teachers",
                data: data
            })
        }
    })

})

route.get('/:id', (req, res) => {
    res.json({
        title: "Teachers page",
        message: "One teacher",
        data: data.filter(item => item.id == req.params.id)
    })
})

route.post('/', (req, res) => {
    fs.readFile(path.join(__dirname, '../data.json'), "utf-8", (err, data) => {
        if (err) {
            console.log(err);
        }
        else {
            data = JSON.parse(data)
            let body = req.body
            let obj = {
                "firstName": body.firstName,
                "lastName": body.lastName,
                "email": body.email,
                "phoneNumber": body.phoneNumber,
                "password": body.password,
                "subject": body.subject,
                "id": v4(),
                "group": [
                    {
                        "title": body.group[0].title,
                        "time": body.group[0].time
                    }
                ]
            }
            data.push(obj)
            fs.writeFile(path.join(__dirname, "../data.json"), JSON.stringify(data), (err) => {
                if (err) {
                    console.log(err);
                }
                else {
                    res.json({
                        title: "Teachers page",
                        message: "Create a teacher",
                        data: data
                    })
                }
            })


        }
    })



})

route.delete('/:id', (req, res) => {
    fs.readFile(path.join(__dirname, '../data.json'), "utf-8", (err, data) => {
        if (err) {
            console.log(err);
        }
        else {
            data = JSON.parse(data)
            data = data.filter(item => item.id !== req.params.id)
            fs.writeFile(path.join(__dirname, "../data.json"), JSON.stringify(data), (err) => {
                if (err) {
                    console.log(err);
                }
                else {
                    res.json({
                        title: "Teacher page",
                        message: "Remove a teacher",
                        data: data
                    })
                }
            })
        }
    })

})

route.put('/:id', (req, res) => {
    fs.readFile(path.join(__dirname, '../data.json'), "utf-8", (err, data) => {
        if (err) {
            console.log(err);
        }
        else {
            data = JSON.parse(data)
            data.map(item => {
                if (item.id == req.params.id) {
                    item.firstName = req.body.firstName ? req.body.firstName : item.firstName
                    item.lastName = req.body.lastName ? req.body.lastName : item.lastName
                    item.email = req.body.email ? req.body.email : item.email
                    item.phoneNumber = req.body.phoneNumber ? req.body.phoneNumber : item.phoneNumber
                    item.password = req.body.password ? req.body.password : item.password
                    item.subject = req.body.subject ? req.body.subject : item.subject
                    item.group[0].title = req.body.group[0].title ? req.body.group[0].title : item.group[0].title
                    item.group[0].time = req.body.group[0].time ? req.body.group[0].time : item.group[0].time
                }
            })
            fs.writeFile(path.join(__dirname, "../data.json"), JSON.stringify(data), (err) => {
                if (err) {
                    console.log(err);
                }
                else {
                    res.json({
                        title: "Teacher page",
                        message: "Remove a teacher",
                        data: data
                    })
                }
            })
        }
    })
    
    
})

module.exports = route


