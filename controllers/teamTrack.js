'use strict';

var TeamTrackModel = require('../models/teamTrack');

module.exports = function (router) {
    var model = new TeamTrackModel();

    router.get('/', function (req, res) {
        res.render('teamTrack', model);
    });
};
