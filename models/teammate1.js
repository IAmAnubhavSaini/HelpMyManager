module.exports = {
    name: 'Team Mate',
    yearOfWorkInWeeks: [
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
    ],
    week: function(chunk, context, bodies){
        return chunk.map(function(chunk){
            chunk.render(bodies.block, context).end();
        });
    }
};
