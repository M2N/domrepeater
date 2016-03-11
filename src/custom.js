var head = document.getElementsByTagName('head')[0];
var customUrl = '/loom-portal/custom/super/';

var scriptTag0 = document.createElement('script');
scriptTag0.setAttribute('type', 'text/javascript');
scriptTag0.setAttribute('src', '/loom-portal/custom/super/domrepeater.js');
head.appendChild(scriptTag0);

gadget.functions.domrepeater = function() {
	'use strict';

	var jq = (this.form.ownerDocument.defaultView != null)
			? this.form.ownerDocument.defaultView.jQuery
			: this.form.ownerDocument.parentWindow.jQuery;

	setTimeout(function($, ctx) {

		DOMRepeater(ctx.form, ctx.entity);

		gadget.functions.addCallback = function() {
			console.log(this);
		};

		gadget.functions.remCallback = function() {
			console.log(this);
		};
		
	}.bind(this, jq, this), 1);

};