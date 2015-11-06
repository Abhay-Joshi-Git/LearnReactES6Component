import React from 'react';
import Arena from './arena.jsx'

export default React.createClass({
    render() {
        var arenas = this.getArenas();
        if (arenas && arenas.length) {
            return <div className='panel panel-group'>
                <h4>{this.props.name}</h4>
                <div>
                    {this.getArenas()}
                </div>
            </div>
        } else {
            return null;
        }
    },
    getArenas() {
        return this.props.arenas.map(arena => <Arena arena={arena} key={arena.name}/>);
    }
});