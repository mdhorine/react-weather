var request = require('request');

var OpenWeatherMap = function(location) { 

    var options = {
        url: 'http://api.openweathermap.org/data/2.5/weather',
        qs: {
            q: location,
            units: 'imperial',
            appid: '584e843d629e882e9a927b2a5771b6c4'
        }
    }

    return new Promise(function(resolve, reject) {
        request(options, function(err, res, body) {
            console.log(res.statusCode);
            debugger;
            if (res.statusCode == 200) {
                console.log(body);
                var weather = JSON.parse(body);
                resolve(weather.main.temp);
            }
        else {
            reject(err.message);
        }
    }
    )});
};

module.exports = OpenWeatherMap;