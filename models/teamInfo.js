var yearOfTeamMate1 = [
    ['', '', '', '', ''], // week 1
    ['', '', '', '', ''],
    ['', '', '', '', ''],
    ['', '', '', '', ''],
    ['', '', '', '', ''],
    ['', '', '', '', ''], // week 6
    ['', '', '', '', ''],
    ['', '', '', '', ''],
    ['', '', '', '', ''],
    ['', '', '', '', ''],
    ['', '', '', '', ''], // week 11
    ['', '', '', '', ''],
    ['', '', '', '1. Read about kraken-js and lusca code.', '1. Worked on this app. 2. Contributed to kraken-js'] // week 13
];

module.exports = {
    name: 'team davy jones',
    members: [{
        name: 'Team Mate #1',
        yearOfWorkInWeeks: yearOfTeamMate1
    },
    {
        name: 'Team Mate #2',
        yearOfWorkInWeeks: yearOfTeamMate1
    }],
    week: function(chunk, context, bodies){
        return chunk.map(function(chunk){
            chunk.render(bodies.block, context).end();
        });
    }
};
