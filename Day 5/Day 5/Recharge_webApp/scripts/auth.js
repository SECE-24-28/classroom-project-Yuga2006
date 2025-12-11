// Authentication JavaScript - Handles login and signup functionality

// Check if user is already logged in on page load
document.addEventListener('DOMContentLoaded', function() {
    const currentUser = localStorage.getItem('currentUser');
    if (currentUser && (window.location.pathname.includes('login.html') || window.location.pathname.includes('signup.html'))) {
        window.location.href = 'dashboard.html';
    }
});

// Login Form Handler
if (document.getElementById('loginForm')) {
    document.getElementById('loginForm').addEventListener('submit', function(e) {
        e.preventDefault();
        
        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;
        
        // Get users from localStorage
        const users = JSON.parse(localStorage.getItem('users') || '[]');
        
        // Find user with matching credentials
        const user = users.find(u => u.email === email && u.password === password);
        
        if (user) {
            // Store current user session
            localStorage.setItem('currentUser', JSON.stringify(user));
            
            // Show success message with animation
            showMessage('Login successful! Redirecting...', 'success');
            
            // Check if there's a redirect URL stored
            const redirectUrl = localStorage.getItem('redirectAfterLogin');
            
            // Redirect after short delay
            setTimeout(() => {
                if (redirectUrl) {
                    localStorage.removeItem('redirectAfterLogin');
                    window.location.href = redirectUrl;
                } else {
                    window.location.href = 'dashboard.html';
                }
            }, 1500);
        } else {
            showMessage('Invalid email or password!', 'error');
        }
    });
}

// Signup Form Handler
if (document.getElementById('signupForm')) {
    document.getElementById('signupForm').addEventListener('submit', function(e) {
        e.preventDefault();
        
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const mobile = document.getElementById('mobile').value;
        const password = document.getElementById('password').value;
        
        // Validate mobile number (10 digits)
        if (!/^\d{10}$/.test(mobile)) {
            showMessage('Please enter a valid 10-digit mobile number!', 'error');
            return;
        }
        
        // Validate email format
        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
            showMessage('Please enter a valid email address!', 'error');
            return;
        }
        
        // Validate password length
        if (password.length < 6) {
            showMessage('Password must be at least 6 characters long!', 'error');
            return;
        }
        
        // Get existing users
        const users = JSON.parse(localStorage.getItem('users') || '[]');
        
        // Check if user already exists
        if (users.find(u => u.email === email)) {
            showMessage('User with this email already exists!', 'error');
            return;
        }
        
        // Create new user object
        const newUser = {
            id: Date.now().toString(),
            name: name,
            email: email,
            mobile: mobile,
            password: password,
            createdAt: new Date().toISOString()
        };
        
        // Add user to array and save
        users.push(newUser);
        localStorage.setItem('users', JSON.stringify(users));
        
        // Show success message
        showMessage('Account created successfully! Please login.', 'success');
        
        // Redirect to login after delay
        setTimeout(() => {
            window.location.href = 'login.html';
        }, 2000);
    });
}

// Utility function to show messages
function showMessage(message, type) {
    // Remove existing message if any
    const existingMessage = document.querySelector('.message');
    if (existingMessage) {
        existingMessage.remove();
    }
    
    // Create message element
    const messageDiv = document.createElement('div');
    messageDiv.className = `message ${type}`;
    messageDiv.textContent = message;
    
    // Style the message
    messageDiv.style.cssText = `
        position: fixed;
        top: 20px;
        left: 50%;
        transform: translateX(-50%);
        padding: 15px 25px;
        border-radius: 25px;
        color: white;
        font-weight: bold;
        z-index: 1000;
        animation: slideDown 0.3s ease-out;
        ${type === 'success' ? 'background: #28a745;' : 'background: #dc3545;'}
    `;
    
    // Add CSS animation
    const style = document.createElement('style');
    style.textContent = `
        @keyframes slideDown {
            from { transform: translateX(-50%) translateY(-100%); }
            to { transform: translateX(-50%) translateY(0); }
        }
    `;
    document.head.appendChild(style);
    
    // Add to page
    document.body.appendChild(messageDiv);
    
    // Remove after 3 seconds
    setTimeout(() => {
        messageDiv.style.animation = 'slideUp 0.3s ease-out';
        setTimeout(() => messageDiv.remove(), 300);
    }, 3000);
}

// Check authentication for protected pages
function checkAuth() {
    const currentUser = localStorage.getItem('currentUser');
    const paymentPages = ['payment.html', 'success.html', 'dashboard.html', 'profile.html'];
    
    const currentPage = window.location.pathname.split('/').pop();
    
    // Only protect payment and user-specific pages
    if (paymentPages.includes(currentPage) && !currentUser) {
        window.location.href = 'login.html';
        return false;
    }
    
    return true;
}

// Logout function
function logout() {
    localStorage.removeItem('currentUser');
    showMessage('Logged out successfully!', 'success');
    setTimeout(() => {
        window.location.href = 'index.html';
    }, 1500);
}

// Initialize authentication check
checkAuth();