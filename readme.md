# Node.JS Session With Header!

sessionID in header!

```bash
>>> requests.post("http://localhost:3000/login", data={"id": "this_is_id", "pw": "this_is_pw"}).text
'{"token":"s:TE7vWhYEvyV1rMzsONjZsknhFb4pEW3m.0myE/7ryfzdsM+pMw31K8T68D2TeYPOYy/8aGkRwhlw"}'
>>> requests.post("http://localhost:3000/status", headers={"authrization": "s:TE7vWhYEvyV1rMzsONjZsknhFb4pEW3m.0myE/7ryfzdsM+pMw31K8T68D2TeYPOYy/8aGkRwhlw"}).text
'{"loggedin":true}'
```
