'use strict';

var teamMate1 = require('./teammate1');

module.exports = function TeamMateTrackModel() {
    return {
        name: teamMate1.name,
        yow: teamMate1.yearOfWorkInWeeks,
        week: teamMate1.week
    };
};
