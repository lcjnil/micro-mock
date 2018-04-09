# Micro Mock
Minimal mock server.

`npm install -g micro-mock`

Write mock file like this -->

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

Start server with `micro-mock your-mock-file.js --port 3000`
