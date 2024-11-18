let users = {}; // Simple in-memory user storage

function login() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    if (users[username] && users[username] === password) {
        window.location.href = 'index.html'; // Redirect to main page
    } else {
        alert('Invalid username or password. Please try again.');
    }
}

function createAccount() {
    const newUsername = document.getElementById('new-username').value;
    const newPassword = document.getElementById('new-password').value;

    if (users[newUsername]) {
        alert('Username already exists. Please choose another one.');
    } else {
        users[newUsername] = newPassword; // Store the user
        alert('Account created successfully! You can now log in.');
        window.location.href = 'login.html'; // Redirect to login
    }
}

function resetPassword() {
    const email = document.getElementById('reset-email').value;
    alert(`Password reset link sent to ${email}`);
    window.location.href = 'login.html'; // Back to login after reset
}

function changeLanguage() {
    const language = document.getElementById('language').value;
    const texts = {
        en: {
            login: 'Login',
            createAccount: 'Create Account',
            forgotPassword: 'Forgot Password?',
            back: 'Back'
        },
        am: {
            login: 'ግባ',
            createAccount: 'አዲስ ይፍጠሩ',
            forgotPassword: 'የይለፍ ቁጥር አለመጣል?',
            back: 'ወደ ኋላ'
        }
    };

    const selectedTexts = texts[language];
    document.getElementById('login-section').querySelector('h1').innerText = selectedTexts.login;
    document.getElementById('create-account-section').querySelector('h1').innerText = selectedTexts.createAccount;
    document.getElementById('forgot-password-section').querySelector('h1').innerText = selectedTexts.forgotPassword;
    document.querySelector('p a').innerText = selectedTexts.back;
}

function showLocations() {
    document.getElementById('locations').style.display = 'block';
}

function showHotels() {
    document.getElementById('hotels').style.display = 'block';
    document.getElementById('locations').style.display = 'none';
}

function showMenu(hotel) {
    document.getElementById('menu').style.display = 'block';
    document.getElementById('hotels').style.display = 'none';
}

function showFood() {
    document.getElementById('food-items').style.display = 'block';
    document.getElementById('menu').style.display = 'none';
}

function showFoodDetails(food) {
    const foodDetails = {
        lazagna: { price: "$15.00" },
        beyeayinet: { price: "$10.00" },
        qurt: { price: "$12.00" }
    };
    
    document.getElementById('food-name').innerText = food.charAt(0).toUpperCase() + food.slice(1);
    document.getElementById('price').innerText = foodDetails[food].price;
    document.getElementById('food-detail').style.display = 'block';
    document.getElementById('food-items').style.display = 'none';
    document.getElementById('payment').style.display = 'block'; // Show payment options
}

function showPaymentDetails() {
    const paymentMethod = document.getElementById('payment-method').value;
    const bankDetails = document.getElementById('bank-details');
    const telebirDetails = document.getElementById('telebir-details');

    bankDetails.style.display = paymentMethod === 'bank' ? 'block' : 'none';
    telebirDetails.style.display = paymentMethod === 'telebir' ? 'block' : 'none';
}

function processPayment() {
    const bankAccount = document.getElementById('account-number').value;
    const amount = document.getElementById('amount').value;
    alert(`Payment of ${amount} has been processed to ${bankAccount}.`);
}

function processTelebirPayment() {
    const phoneNumber = document.getElementById('phone-number').value;
    const amount = document.getElementById('telebir-amount').value;
    alert(`Telebirr payment of ${amount} has been processed to ${phoneNumber}.`);
}

function getLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPosition);
    } else {
        document.getElementById('location-output').innerText = "Geolocation is not supported by this browser.";
    }
}

function showPosition(position) {
    const output = `Latitude: ${position.coords.latitude}, Longitude: ${position.coords.longitude}`;
    document.getElementById('location-output').innerText = output;
}