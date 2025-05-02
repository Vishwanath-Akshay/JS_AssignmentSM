let users = [];

    // Load users BEFORE enabling form
    fetch('users.json')
      .then(response => response.json())
      .then(data => {
        users = data;

        console.log('Loaded users:', users); // Debug log

        // Hide loading message and show form
        document.getElementById('loading').style.display = 'none';
        document.getElementById('loginForm').style.display = 'block';

        // Now attach form event listener AFTER users loaded
        document.getElementById('loginForm').addEventListener('submit', function(event) {
          event.preventDefault();

          const emailInput = document.getElementById('email');
          const passwordInput = document.getElementById('password');
          const inputEmail = emailInput.value.trim();
          const inputPassword = passwordInput.value.trim();
          const message = document.getElementById('message');

          // Clear previous message and input styles
          message.textContent = '';
          emailInput.classList.remove('error');
          passwordInput.classList.remove('error');

          // Input validation
          if (inputEmail === '' || inputPassword === '') {
            message.style.color = 'red';
            message.textContent = 'Please fill all fields.';
            if (inputEmail === '') emailInput.classList.add('error');
            if (inputPassword === '') passwordInput.classList.add('error');
            return;
          }

          // Email validation using regex for a basic email format check
          const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
          if (!emailRegex.test(inputEmail)) {
            message.style.color = 'red';
            message.textContent = 'Please enter a valid email address.';
            emailInput.classList.add('error');
            return;
          }

          // User validation
          const validUser = users.find(user =>
            user.email === inputEmail && user.password === inputPassword
          );

          if (validUser) {
            message.style.color = 'green';
            message.textContent = 'Login successful!';
          } else {
            message.style.color = 'red';
            message.textContent = 'Invalid email or password.';
          }
        });
      })
      .catch(error => {
        console.error('Error loading users:', error);
        document.getElementById('loading').textContent = 'Error loading users file!';
      });