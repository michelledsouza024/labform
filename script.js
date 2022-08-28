jQuery('#frm').validate({
	rules: {
		username: "required",
		email: {
			required: true,
			email: true
		},
		phonenum: {
			required: true,
			digits: true,
			minlength: 10,
			maxlength: 10
		},
		password: {
			required: true,
			minlength: 7
		},
		cpassword: {
			required: true,
			minlength: 7,
			equalTo: '#password'
		}
	},

	messages: {
		username: "Please enter your username",
		email: {
			required: "Please enter email",
			email: "Please enter valid email",
		},
		phonenum: {
			required: "Please enter phone number!",
			digits: "Phone number can contain only digits!",
			minlength: "A phone number should contain 10 digits!",
			maxlength: "A phone number should contain 10 digits!"
		},
		password: {
			required: "Please enter your password",
			minlength: "Password must be 5 char long"
		},
		cpassword: {
			required: "Please confirm your password",
			minlength: "Password must be 5 char long",
			equalTo: "Passwords must match"
		}
	},

	submitHandler: function (form) {
		form.submit();
	}
});