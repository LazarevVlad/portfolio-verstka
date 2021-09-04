'use strict';

// var $ = require('jquery');

module.exports = function () {

	function CheckboxToSelect(selector){
		$(document).on('click.cts', selector + ' [data-inputs]', function(e){
			if(!$(e.target).parent().find('input:radio').length)
			{
				e.stopPropagation();
			}
		});

		$(document).on('change.cts', selector + ' [data-inputs] input', function(e){
			setDisplay($(this).closest(selector));
		});

		function setDisplay($select){
			var display = [];
			var $display = $select.find('[data-display]');
			var $checked = $select.find('[data-inputs] input:checked');
			var placeholder = $display.attr('data-placeholder');

			if(placeholder === undefined)
			{
				placeholder = $display.text();
				$display.attr('data-placeholder', placeholder);
			}

			$checked.each(function(){
				display.push($(this).attr('data-value') || $(this).parent().text());
			});

			if (display.length > 0) {
				$display.html(display.join(', '));
				$display.removeClass('placeholder');
			}	else {
				$display.html(placeholder);
				$display.addClass('placeholder');
			}
		}

		function refreshDisplay(){
			$(selector).each(function(){
				setDisplay($(this));
			})
		}

		refreshDisplay();

		return {
			refreshDisplay: refreshDisplay
		};
	};

	CheckboxToSelect('[js-tabselect]');
};