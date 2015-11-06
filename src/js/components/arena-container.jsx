import React from 'react';
import ArenaList from './arena-list.jsx';
import FilterBy from './filterBy.jsx';
import HeaderRow from './headerRow.jsx';

export default React.createClass({
    componentWillReceiveProps({sportsArenas}) {
        this.setState({sportsArenas});
    },
    getInitialState() {
        return {
            sportsArenas : this.props.sportsArenas || []
        };
    },
    render() {
        return <div>
            <div className='panel text-center panel-default'>
                <h2>Arenas</h2>
            </div>
            <FilterBy sportsArenas={this.props.sportsArenas} onFilterchange={this.onFilterChange} />
            <HeaderRow keys={['name', 'area', 'rating']} />
            {this.getArenaList()}
        </div>
    },
    getArenaList() {
        return this.state.sportsArenas.map(({sportsName, arenas}) => /*ES6 - object destructuring , arrow function*/
            <ArenaList arenas={arenas} name={sportsName} key={sportsName}/>
        );
    },
    onFilterChange(sportsArenas) {
        this.setState({sportsArenas}); /*ES6 - property shorthand*/
    }
});