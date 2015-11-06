import React from 'react';
import ReactDom from 'react-dom';
import ArenaContainer from './components/arena-container.jsx';

var App = React.createClass({
    /*ES6 - method properties*/
    render() {
        return <div>
            <ArenaContainer sportsArenas={data} />
        </div>
    }
});

var data = [
    {
        sportsName: 'Badminton',
        arenas: [
            {
                name : 'A',
                area: 'Kothrud',
                rating: 8
            },
            {
                name : 'B',
                area: 'ShivajiNagar',
                rating: 7
            },
            {
                name : 'C',
                area: 'Balewadi',
                rating: 8.5
            }
        ]
    },
    {
        sportsName: 'Tennis',
        arenas: [
            {
                name : 'A',
                area: 'Deccan',
                rating: 8
            },
            {
                name : 'B',
                area: 'Aundh',
                rating: 7
            },
            {
                name : 'C',
                area: 'Satara Road',
                rating: 8.5
            },
            {
                name : 'Solaris Club',
                area: 'Kothrud',
                rating: 8
            }
        ]
    }
];

ReactDom.render(<App />, document.querySelector('#app'));