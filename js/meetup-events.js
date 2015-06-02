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
		return '<a href="https://www.google.com/maps/place/'
			+ encodeURI(venue.address_1) + '+'
			+ encodeURI(venue.city) + '" target="_blank">'
			+ venue.name
			+ '</a>';
	}

	var createEventPanel = function(event) {
		// Generates a Bootstrap panel for each event
		var panelHTML = '<div class="panel-heading">' 
			+ '<a href="' + event.event_url + '" target="_blank">'
				+ event.name 
			+ '</a></div>'
			+ '<div class="panel-body">'
				+ '<div class="col-sm-8">' 
					+ event.description
				+ '</div>'
				+ '<div class="col-sm-4">' 
					+ '<b>WHEN:</b> ' + printDate(new Date(event.time))
					+ '<br>'
					+ '<b>WHERE:</b> ' + printVenue(event.venue)
					+ '<br>'
					+ '<b>WHO:</b> ' + event.yes_rsvp_count + ' already going'
				+ '</div>'
			+ '</div>';

		$("<div>", {
			"class": "panel panel-default",
			html: panelHTML
		}).appendTo("#meetup-events");
	}

	this.getEvents = function(callback) {
		$.ajax({
			url: this.meetupURL,
			dataType: 'jsonp'
		})
		.done(function(data) {
			$.each(data.results, function(i, event) {
				// Generate Bootstrap panels for each event
				if (maxEvents === undefined || i < maxEvents) {
					createEventPanel(event);					
				}
			})
		})
		.fail(function(error) {
			console.log("Meetup API Request Failed");
		});
	}
};