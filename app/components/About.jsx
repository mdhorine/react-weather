var React = require('react');
var {Link} = require('react-router');

var About = props => {
    return (
        <div>
            <h1 className='text-center'>About</h1>
            <p>This application was created as a demo app to use the following technologies:</p>
                <ul>
                    <li><a href='https://facebook.github.io/react/' target='_blank'>React</a></li>
                    <li><a href='https://github.com/ReactTraining/react-router' target='_blank'>React Router</a></li>
                    <li><a href='http://openweathermap.org/' target='_blank'>OpenWeatherMap</a></li>
                    <li><a href="http://foundation.zurb.com/sites/docs/" target="_blank">Foundation Sites</a></li>
                </ul>
            <p>The code for this application can be found in my GitHub repository: <a href='https://github.com/mdhorine/react-weather' target='_blank'>https://github.com/mdhorine/react-weather</a></p>
        </div>
    );
};

module.exports = About;