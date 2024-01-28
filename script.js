
//progress bar in login page to open signup page
$(document).ready(function() {
  $('#signupBtn').click(function(event) {
    event.preventDefault();
    $('#loader').show();
    setTimeout(function() {
      window.location.href = 'signup.html';
    }, 500); // Simulating a delay of 2 seconds before redirecting
  });
});
// Function to validate the registration form
function validateRegistrationForm() {
  var isValid = true;

  // Validation logic for registration form
  // Example: Check if required fields are not empty

  var userId = document.getElementById('userId').value;
  var password = document.getElementById('password').value;
  var confirmPassword = document.getElementById('confirmPassword').value;

  // Check if user ID is empty
  if (userId.trim() === '') {
    isValid = false;
    alert('User ID is required.');
    return isValid;
  }

  // Check if password is empty
  if (password.trim() === '') {
    isValid = false;
    alert('Password is required.');
    return isValid;
  }

  // Check if password matches confirm password
  if (password !== confirmPassword) {
    isValid = false;
    alert('Passwords do not match.');
    return isValid;
  }

  return isValid;
}

// Function to validate the login form
function validateLoginForm() {
  var isValid = true;

  // Validation logic for login form
  // Example: Check if required fields are not empty

  var userId = document.getElementById('loginUserId').value;
  var password = document.getElementById('loginPassword').value;

  // Check if user ID is empty
  if (userId.trim() === '') {
    isValid = false;
    alert('User ID is required.');
    return isValid;
  }

  // Check if password is empty
  if (password.trim() === '') {
    isValid = false;
    alert('Password is required.');
    return isValid;
  }

  return isValid;
}

// Function to store form data in local storage
function storeFormData() {
  // Get form values (registration form)
  var consumerNumber = document.getElementById('consumerNumber').value;
  var billNumber = document.getElementById('billNumber').value;
  var title = document.getElementById('title').value;
  var name = document.getElementById('name').value;
  var email = document.getElementById('email').value;
  var countryCode = document.getElementById('countryCode').value;
  var mobileNumber = document.getElementById('mobileNumber').value;
  var userId = document.getElementById('userId').value;
  var password = document.getElementById('password').value;

  // Create JSON object with form data (registration form)
  var formData = {
    "consumerNumber": consumerNumber,
    "billNumber": billNumber,
    "title": title,
    "name": name,
    "email": email,
    "countryCode": countryCode,
    "mobileNumber": mobileNumber,
    "userId": userId,
    "password": password
  };

  // Convert JSON object to string
  var formDataString = JSON.stringify(formData);

  // Store form data in local storage
  localStorage.setItem('formData', formDataString);
}

// Function to handle login
function handleLogin() {
  var userId = document.getElementById('loginUserId').value;
  var password = document.getElementById('loginPassword').value;

  // Retrieve stored form data from local storage
  var storedFormDataString = localStorage.getItem('formData');

  if (storedFormDataString) {
    // Parse stored form data string to JSON
    var storedFormData = JSON.parse(storedFormDataString);

    // Check if user ID and password match stored credentials
    if (userId === storedFormData.userId && password === storedFormData.password) {
      alert('Login successful!');
    } else {
      alert('Invalid user ID or password.');
    }
  } else {
    alert('No user registered. Please sign up first.');
  }
}

// Event listener for registration form submission
// Wait for the DOM to be fully loaded
$(document).ready(function() {
  // Event listener for form submission
  $('#registrationForm').submit(function(event) {
   event.preventDefault(); // Prevent default form submission
    
    // Validate form data
    if (validateRegistrationForm()) {
      // Store form data in local storage
      storeFormData();
      
      // Display success message
      alert('Registered successfully!');
      window.location.href = 'index.html';
      $(window).on('alert.close', function() {
        window.location.href = 'index.html';
      });
      
      
    }
  });
  
 
});

// Event listener for login form submission
$(document).ready(function() {
  // Event listener for login button click
  $('#loginForm').submit(function(event) {
    event.preventDefault(); // Prevent default form submission
     // Validate login form
    if (validateLoginForm()) {
      handleLogin(); // Handle login process
    }
    else{
      alert("Please check the input");
    }
  });
});



// Responsive Menu in view bill page 
$(document).ready(function(){
    $('.navbar-toggler').on('click', function(){
      var target = $(this).data('target');
      $(target).toggleClass('show');
    });
  });



  //Table data in view bill page

  var bills = [
    { consumerNumber: "123456789", selectOption: true, dueAmount: "1000", payableAmount: "500" },
    { consumerNumber: "987654321", selectOption: false, dueAmount: "1500", payableAmount: "750" },
    { consumerNumber: "456789123", selectOption: true, dueAmount: "800", payableAmount: "400" },
    { consumerNumber: "789123456", selectOption: false, dueAmount: "120", payableAmount: "120" },
    { consumerNumber: "654321987", selectOption: true, dueAmount: "200", payableAmount: "100" }
  ];

  // Function to populate table with data
  function populateTable() {
    var totalPayableAmount = 0;
    var html = "";
    bills.forEach(function(bill) {
      html += "<tr>";
      html += "<td>" + bill.consumerNumber + "</td>";
      html += "<td><input type='checkbox' class='form-check-input ml-auto mr-auto'" + (bill.selectOption ? " checked" : "") + "></td>";
      html += "<td>" + bill.dueAmount + "</td>";
      html += "<td>" + bill.payableAmount + "</td>";
      html += "</tr>";
      totalPayableAmount += parseInt(bill.payableAmount.replace(/\D/g, ""));
    });
    $("#billTableBody").html(html);
    $("#totalPayableAmount").text("Rs" +" " + totalPayableAmount);
  }
  $(document).ready(() => {
    $('#showPasswordBtn').click(function () {
        var passwordInput = $('#password');
        var passwordFieldType = passwordInput.attr('type');

        if (passwordFieldType === 'password') {
            passwordInput.attr('type', 'text');
        } else {
            passwordInput.attr('type', 'password');
        }
    });
});

  // Call the function to populate the table
  populateTable();
