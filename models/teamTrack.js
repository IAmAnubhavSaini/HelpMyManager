'use strict';

var team = require('./teamInfo');

module.exports = function TeamTrackModel() {
    return {
        teamName: team.name,
        members: team.members,
        week: team.week
    };
};
