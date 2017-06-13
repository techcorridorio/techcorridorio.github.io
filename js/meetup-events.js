/* globals define */
(function(root, factory) {
	if (typeof define === 'function' && define.amd) {
		// AMD. Register as an anonymous module.
		define([], function() {
			// Also create a global in case some scripts
			// that are loaded still are looking for
			// a global even when an AMD loader is in use.
			return (root.Meetup = factory());
		});
	} else {
		// Browser globals
		root.Meetup = factory();
	}
}(this, function() {
	'use strict';

	var MISSING_REOURCE_MSG = 'resourceUrl not defined. Please see ' +
		'http://www.meetup.com/meetup_api/auth/#keysign ' +
		'to see how to create a signed resource URL.';

	function Meetup(resourceUrl) {
		var requestedPage = parseInt(URI().getQuery('page'), 10);
		this.offset = Math.max(0,  (requestedPage - 1) || 0);
		this.resourceUrl = resourceUrl;
	}

	Meetup.prototype.fetch = function(limit) {
		if (!this.resourceUrl) {
			return $.Deferred()
				.reject(new Error(MISSING_REOURCE_MSG))
				.promise();
		}

		var url = URI(this.resourceUrl)
			.setQuery({
				offset: this.offset,
				format: 'json'
			})
			.toString();

		return $.ajax({url: url, dataType: 'jsonp'})
			.then(function(data) {
				if (!limit) { return data.results; }
				return $.grep(data.results, function(item_, index) {
					return index <= limit;
				});
			});
	};

	return Meetup;
}));
