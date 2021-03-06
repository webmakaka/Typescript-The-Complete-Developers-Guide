"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var router = express_1.Router();
exports.router = router;
function requreAuth(req, res, next) {
    if (req.session && req.session.loggedIn) {
        next();
        return;
    }
    return res.status(403).send('Not Permitted');
}
router.get('/', function (req, res) {
    if (req.session && req.session.loggedIn) {
        return res.send("\n    <div>\n      <div>You are logged in</div>\n      <a href=\"/logout\">Logout</a>\n    </div>\n  ");
    }
    else {
        return res.send("\n    <div>\n      <div>You are not loged in</div>\n      <a href=\"/login\">Login</a>\n    </div>\n  ");
    }
});
router.get('/login', function (req, res) {
    return res.send("\n      <form method=\"POST\">\n        <div>\n          <label>Email</label>\n          <input name=\"email\" />\n        </div>\n        <div>\n          <label>Password</label>\n          <input name=\"password\" type=\"password\" />\n        </div>\n        <button>Submit</button>\n      </form>\n    ");
});
router.get('/logout', function (req, res) {
    req.session = undefined;
    return res.redirect('/');
});
router.post('/login', function (req, res) {
    var _a = req.body, email = _a.email, password = _a.password;
    if (email && password && email === 'hi@hi.com' && password === 'password') {
        req.session = {
            loggedIn: true,
        };
        return res.redirect('/');
    }
    else {
        return res.send('Invalid email or password');
    }
});
router.get('/protected', requreAuth, function (req, res) {
    res.send('Welcome to protected route, logged in user');
});
