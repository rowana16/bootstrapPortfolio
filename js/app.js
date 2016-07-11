$(function(){
	var form = $('#ajax-contact');
	var formMessages = $('#form-messages');
});

$(form).submit(function(event){
	event.preventDefault();
	var formData = $(form).serialize();
});

$.ajax({
	type: 'POST',
	url: $(form).attr('action'),
	data: formData
})

.done(function(response){
	$(formMessages).removeClass('error');
	$(formMessages).addClass('success');

	$(formMessages).text(reponse);

	$("#name").val('');
	$("#email").val('');
	$("#message").val('');
})

.fail(function(data) {
	$(formMessages).remoeClass('success');
	$(formMessages).addClass('error');
	if(data.responseText !== '') {
		$(formMessages).text(data.responseText);
	}
	else{
		$(formMessages).text('Oops! An error occured and your meassage could not be sent.');
	}
});