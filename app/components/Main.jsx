var React = require('react');
var Nav = require('Nav');

var Main = props => {
    return (
        <div>
            <Nav />
            <div style={{paddingTop: '25px'}}>
                {props.children}
            </div>
        </div>
    );
};

module.exports = Main;