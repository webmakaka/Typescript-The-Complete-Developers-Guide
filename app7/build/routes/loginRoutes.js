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
router.get('/logout', function (req, res) {
    req.session = undefined;
    return res.redirect('/');
});
router.get('/protected', requreAuth, function (req, res) {
    res.send('Welcome to protected route, logged in user');
});
