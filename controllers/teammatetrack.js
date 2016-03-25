'use strict';

var TeamMateTrackModel = require('../models/teammatetrack');

module.exports = function (router) {
    var model = new TeamMateTrackModel();

    router.get('/', function (req, res) {
        res.render('teammatetrack', model);
    });
};
