var React = require('react');
var {Link, IndexLink} = require('react-router');

var Nav = props => {
    return (
        <div className='top-bar'>
            <ul className='dropdown menu'>
                <li className='menu-text'>React Weather</li>
                <li><IndexLink to='/' activeClassName="active">Get Weather</IndexLink></li>
                <li><Link to='/about' activeClassName="active">About</Link></li>
                <li><Link to='/examples' activeClassName="active">Examples</Link></li>
            </ul>
        </div>
    );
};

module.exports = Nav;