Parse.initialize("lBhz3NG4FCGrjJNtEtcox8I1d2gWWvkEitCf2sa6", "GepbjrK1M3tfV3JnatR1MdyRzJiE9HuB6AZH9ShM");
// ------------------------------------------------------ SIGN UP PAGE ------- //
// Listen for when the signup page has been created
$(document).on("pagecreate", "#request", function () {
    
	// Hijack the submit button
   	$('#send-request').on('tap', function(e){
        
		// prevent the browser from navigating away from this page
        e.preventDefault();
        
		// NEXT CODE GOES HERE
		// retrieve the form values and save them to variables.
		var name = $('input[name=name]').val();
		var email = $('input[name=email]').val();
		var info = $('textarea[name=info]').val();

		var Request = Parse.Object.extend("Request");
		var request = new Request();
		request.save({name: name, email: email, info: info}).then(function(object) {
			$('input[name=name]').val('');
			$('input[name=email]').val('');
			$('textarea[name=info]').val('');
			$.mobile.changePage('#home', 'pop', true, true);
		  	alert("Reqest sent!");
		});
    });
});