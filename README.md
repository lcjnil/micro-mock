```JS
module.exports = {
    "/book": [{
        "name": "123"
    }, {
        "name": "321"
    }],

    "POST /book": {
        "name": "{{ word() }}"
    },
    
    "DELETE /book": ctx => ctx.status = 204
}
```