var React = require('react');

var WeatherMessage = ({isLoading, location, temp}) => {
    function renderMessage() {
        if (isLoading) {
            return <h4>Getting weather...</h4>;
        }
        else if (temp && location) {
            return (
                <h4>The temperature in {location} is {temp}.</h4>
            )
        }
    }

    return (
        <div className='row'>
            <div className='large-3 columns'>&nbsp;</div>
            <div className='large-6 columns float-center'>
                {renderMessage()}
            </div>
            <div className='large-3 columns'>&nbsp;</div>
        </div>
    );
};

module.exports = WeatherMessage;