'use strict';

var Meetup = function(meetupURL, maxEvents) {
	this.meetupURL = (typeof meetupURL!=='undefined') ? meetupURL :
	"https://api.meetup.com/2/events?offset=0&format=json&limited_events=False&group_urlname=techcorridorio&page=200&fields=&order=time&desc=false&status=upcoming&sig_id=168857872&sig=e659cc6038d27adf6eae600a44905c69196c77df";
	// If maxEvents==0, show all.
	this.maxEvents = (typeof maxEvents!=='undefined') ? maxEvents : 0;

	var printDate = function(date) {
		// Pretty print the event date
		var day = [ "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
		var months = [
			"January", "February", "March", "April",
			"May", "June", "July", "August",
			"September", "October", "November", "December"
		];

		return day[date.getDay()]  + ', '
			+ months[date.getMonth()] + ' '
			+ date.getDate() + ', '
			+ date.getFullYear()
			+ ' at '
			+ (date.getHours() % 12) + ':'
			+ (date.getMinutes() < 10 ? '0'+date.getMinutes() : date.getMinutes())
			+ ' '
			+ (date.getHours() < 12 ? 'AM' : 'PM');
	}

	var printVenue = function(venue) {
		// Pretty print the event venue
		var template = '<a href="https://www.google.com/maps/place/'
			+ encodeURI(venue.address_1) + '+'
			+ encodeURI(venue.city) + '" target="_blank">'
			+ venue.name
			+ '</a>';
        return template
	}

	var createEventPanel = function(event) {
		// Generates a Bootstrap panel for each event
	}

	this.getEvents = function(callback) {
		$.ajax({
			url: this.meetupURL,
			dataType: 'jsonp'
		})
		.done(function(data) {
            callback(data);
		})
		.fail(function(error) {
			console.log("Meetup API Request Failed");
		});
	}
};
