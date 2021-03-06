/**
 * @copyright  Copyright (C) 2005 - 2017 Open Source Matters, Inc. All rights reserved.
 * @license    GNU General Public License version 2 or later; see LICENSE.txt
 */
(function() {
	"use strict";

	window.insertPagebreak = function(editor) {
		/** Get the pagebreak title **/
		var alt, tag, title = document.getElementById('title').value;

		if (!window.parent.Joomla.getOptions('xtd-pagebreak')) {
			throw new Error('Joomla API is not properly initialised')
		}

		/** Get the pagebreak toc alias -- not inserting for now **/
		/** don't know which attribute to use... **/
		alt = document.getElementById('alt').value;

		title  = (title != '') ? 'title="' + title + '"' : '';
		alt    = (alt != '') ? 'alt="' + alt + '"' : '';

		tag = '<hr class="system-pagebreak" ' + title + ' ' + alt + '>';

		window.parent.Joomla.editors.instances[editor].replaceSelection(tag);

		if (window.parent.Joomla.currentModal) {
			// @TODO Remove jQuery, use Joomla-UI
			parent.window.jQuery(window.parent.Joomla.currentModal).modal('hide');
		}

		return false;
	};
})();
