const { Router } = require('express')
const route = Router()

route.get('/admin', (req, res) => {
    res.json({
        title: "Admin page",
        message: "Hello express!",
        moreData: "/more"
    })
})
route.get('/more', (req, res) => {
    res.json({
        title: "More page",
        message: "Welcome More!",
        data: [
            {
                route: "teachers",
                routes: [
                    {
                        "route": "teachers",
                        "method": "GET",
                        "url": "/admin/teachers",
                        "data": "All teachers"
                    },
                    {
                        "route": "teachers",
                        "method": "GET",
                        "url": "/admin/teachers/:id",
                        "data": "Get one teacher"
                    },
                    {
                        "route": "teachers",
                        "method": "POST",
                        "url": "/admin/teachers/",
                        "data": "Create teacher"
                    },
                    {
                        "route": "teachers",
                        "method": "DELETE",
                        "url": "/admin/teachers/:id",
                        "data": "Delete teacher"
                    },
                    {
                        "route": "teachers",
                        "method": "PUT",
                        "url": "/admin/teachers/:id",
                        "data": "Update teacher"
                    }

                ],
            }
        ]
    })
})

module.exports = route