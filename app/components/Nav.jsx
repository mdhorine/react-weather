var React = require('react');
var {Link, IndexLink} = require('react-router');

var Nav = React.createClass({
    submitForm: function(e) {
        e.preventDefault();
        var location = this.refs.locationName.value.trim();
        if (location != null && typeof location === 'string' ) {
            this.refs.locationName.value = ''
            this.props.updateLocation(location);
        }
    },
    render: function() {
        return (
            <div className='top-bar'>
                <div className='top-bar-left'>
                    <ul className='dropdown menu'>
                        <li className='menu-text'>React Weather</li>
                        <li><IndexLink to='/' activeClassName="active">Get Weather</IndexLink></li>
                        <li><Link to='/about' activeClassName="active">About</Link></li>
                        <li><Link to='/examples' activeClassName="active">Examples</Link></li>
                    </ul>
                </div>
                <form onSubmit={this.submitForm}>
                    <div className='top-bar-right'>
                        <ul className="menu">
                            <li><input type="search" placeholder="Search Weather" /></li>
                            <li><input type="submit" className="button" value="Get Weather" /></li>
                        </ul>
                    </div>
                </form>
            </div>
        );
    }
});

module.exports = Nav;