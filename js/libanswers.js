
// Make a better placeholder message
//document.getElementById('s-la-content-search-query-4120').placeholder = 'How can we help you?';

// Drop the Q business from the front of the question title

	var questionText = $('#s-la-public-header-title').text();
	questionParts = questionText.split('Q. ');
	$('#s-la-public-header-title').text(questionParts[1]);

// Rainbows and Unicorns

	var rainbowArray = new Array('rainbow','unicorn');
	$('input[name="q"]').keyup(function(e) {


			var searchValue = $(this).val();
			console.log(searchValue);
			var reg = new RegExp(searchValue.split('').join('\\w*').replace(/\W/, ""), 'i');
				if (searchValue.length > 5) {
	        		return rainbowArray.filter(function(item) {
		            if (item.match(reg)) {
		            	$('form').submit(function(e){
			        		e.preventDefault();
			        		console.log('Stopping');
			        	});
		                $('body').unicornblast({
				    		start : 'delay',
			            	delayTime : 0
			        	});

		            }});
				}
		});


