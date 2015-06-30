'use strict';

var Meetup = function(meetupURL) {
	this.meetupURL = (typeof meetupURL!=='undefined') ? meetupURL :
	"https://api.meetup.com/2/events?offset=0&format=json&limited_events=False&group_urlname=techcorridorio&page=200&fields=&order=time&desc=false&status=upcoming&sig_id=168857872&sig=e659cc6038d27adf6eae600a44905c69196c77df";

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
	};

	var requested_page = window.location.search.match(/page=(\d+)/);
	var offset = (requested_page == null ? 0 : parseInt(requested_page[1]) - 1);
	offset = (offset < 0 ? 0 : offset);
	this.developersURL = "https://api.meetup.com/2/members?format=json&group_urlname=techcorridorio&photo-host=public&order=name&sig_id=70201382&sig=5b77206251c64989f61e8f45580e0d200221f5d4&page=20" +
	                     "&offset=" + offset;
	this.getDevelopers = function(callback) {
		$.ajax({
			url: this.developersURL,
			dataType: 'jsonp'
		})
		.done(function(data) {
            callback(data);
		})
		.fail(function(error) {
			console.log("Meetup API Request Failed");
		});
	};
};
