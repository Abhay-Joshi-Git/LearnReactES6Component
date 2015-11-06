import React from 'react';
import _ from 'lodash';

export default React.createClass({
    render() {
        return <div className='panel panel-group'>
            <input type='text' ref='searchInput' placeholder='area name to filter'/>
            <button ref='searchBtn' onClick={this.filterByArea}>Filter</button>
        </div>
    },
    filterByArea() {
        var changedState, searchValue;
        searchValue = this.refs.searchInput.value;
        if (!searchValue) {
            this.props.onFilterchange(this.props.sportsArenas);
            return;
        }
        changedState = this.props.sportsArenas.map(sportsArena => ({ /*ES6 - arrow fn returning object*/
            sportsName: sportsArena.sportsName,
            arenas: _.where(sportsArena.arenas, {area: searchValue})
        }));
        this.props.onFilterchange(changedState);
    }
});