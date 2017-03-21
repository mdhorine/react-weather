var React = require('react');

var WeatherForm = React.createClass({
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
            <form onSubmit={this.submitForm}>
                <div className='expanded row'>
                    <div className='large-3 columns'>&nbsp;</div>
                    <div className='large-6 columns float-center'>
                        <label>Location
                        <input type="text" ref='locationName' placeholder="Enter City Name"/>
                        </label>               
                    </div>
                    <div className='large-3 columns'>&nbsp;</div>
                </div>
                <div className='expanded row'>
                    <div className='large-3 columns'>&nbsp;</div>
                    <div className='large-6 columns'>
                        <input className='button float-center' type='submit' value='Get Weather' />
                    </div>
                    <div className='large-3 columns'>&nbsp;</div>
                </div>
            </form>
        );
    }
});

module.exports = WeatherForm;