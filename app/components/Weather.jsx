var React = require('react');
var WeatherForm = require('WeatherForm');
var WeatherMessage = require('WeatherMessage');
var OpenWeatherMap = require('OpenWeatherMap');

var Weather = React.createClass({
    render: function() {
        var {isLoading, location, temp} = this.state;
        return (
            <div>
                <h3>Weather page</h3>
                <WeatherForm updateLocation={this.handleUpdate}/>
                <WeatherMessage location={location} temp={temp} isLoading={isLoading} className='float-center'/>
            </div>
        )
    },
    propTypes: {
        location: React.PropTypes.object,
        temp: React.PropTypes.number,
        isLoading: React.PropTypes.bool
    },
    getInitialState: function() {
        return {
            isLoading: false
        };
    },
    handleUpdate: function(location) {
        if (location.length > 0 && typeof location === 'string') {
            this.setState({isLoading: true});
            var temp = OpenWeatherMap(location)
                .then(temp => {
                    console.log('Temp is: ' + temp);
                    this.setState({
                        location: location,
                        temp: temp,
                        isLoading: false
                    });
                })
                .catch(err => {
                    this.setState({
                        location: '',
                        temp: '',
                        isLoading: false});
                    alert(err);
                });
        }
    }
});

module.exports = Weather;