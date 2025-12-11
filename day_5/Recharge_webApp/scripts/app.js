// Main Application JavaScript - Handles all app functionality

// Global variables
let selectedOperator = '';
let selectedPlan = null;
let rechargeData = {};

// Initialize app on page load
document.addEventListener('DOMContentLoaded', function() {
    initializePage();
});

// Initialize page based on current location
function initializePage() {
    const currentPage = window.location.pathname.split('/').pop();
    
    // Check authentication for protected pages
    if (!checkAuthStatus()) return;
    
    switch(currentPage) {
        case 'dashboard.html':
            initializeDashboard();
            break;
        case 'recharge.html':
            initializeRecharge();
            break;
        case 'plans.html':
            initializePlans();
            break;
        case 'payment.html':
            initializePayment();
            break;
        case 'success.html':
            initializeSuccess();
            break;
        case 'history.html':
            initializeHistory();
            break;
        case 'profile.html':
            initializeProfile();
            break;
    }
}

// Check authentication status
function checkAuthStatus() {
    const currentUser = localStorage.getItem('currentUser');
    const paymentPages = ['payment.html', 'success.html', 'dashboard.html', 'profile.html'];
    const currentPage = window.location.pathname.split('/').pop();
    
    // Only redirect to login for payment and user-specific pages
    if (paymentPages.includes(currentPage) && !currentUser) {
        window.location.href = 'login.html';
        return false;
    }
    
    // Update navigation based on login status
    updateNavigation();
    return true;
}

// Update navigation based on login status
function updateNavigation() {
    const currentUser = localStorage.getItem('currentUser');
    const userMenu = document.getElementById('userMenu');
    
    if (currentUser && userMenu) {
        const user = JSON.parse(currentUser);
        userMenu.innerHTML = `
            <span>Welcome, ${user.name}!</span>
            <a href="dashboard.html" class="btn btn-primary">Dashboard</a>
            <a href="profile.html" class="btn btn-secondary">Profile</a>
        `;
    }
}

// Dashboard initialization
function initializeDashboard() {
    const currentUser = JSON.parse(localStorage.getItem('currentUser'));
    if (currentUser) {
        document.getElementById('userName').textContent = `Welcome, ${currentUser.name}!`;
    }
    
    loadRecentTransactions();
}

// Load recent transactions for dashboard
function loadRecentTransactions() {
    const transactions = JSON.parse(localStorage.getItem('transactions') || '[]');
    const recentTransactions = transactions.slice(-3).reverse(); // Last 3 transactions
    
    const container = document.getElementById('recentTransactions');
    
    if (recentTransactions.length === 0) {
        container.innerHTML = '<p class="no-transactions">No recent transactions</p>';
        return;
    }
    
    container.innerHTML = recentTransactions.map(transaction => `
        <div class="transaction-item">
            <div class="transaction-header">
                <span class="transaction-amount">₹${transaction.amount}</span>
                <span class="transaction-status status-success">Success</span>
            </div>
            <div class="transaction-details">
                ${transaction.mobile} • ${transaction.operator} • ${formatDate(transaction.date)}
            </div>
        </div>
    `).join('');
}

// Recharge page initialization
function initializeRecharge() {
    // Operator selection
    document.querySelectorAll('.operator-card').forEach(card => {
        card.addEventListener('click', function() {
            // Remove previous selection
            document.querySelectorAll('.operator-card').forEach(c => c.classList.remove('selected'));
            
            // Add selection to clicked card
            this.classList.add('selected');
            
            // Store selected operator
            selectedOperator = this.dataset.operator;
            document.getElementById('selectedOperator').value = selectedOperator;
            
            // Enable view plans button if all fields are filled
            checkRechargeForm();
        });
    });
    
    // Form validation
    document.getElementById('mobileNumber').addEventListener('input', checkRechargeForm);
    document.getElementById('circle').addEventListener('change', checkRechargeForm);
    
    // View plans button
    document.getElementById('viewPlansBtn').addEventListener('click', function() {
        const mobile = document.getElementById('mobileNumber').value;
        const circle = document.getElementById('circle').value;
        
        if (mobile && selectedOperator && circle) {
            // Store recharge data for next page
            rechargeData = {
                mobile: mobile,
                operator: selectedOperator,
                circle: circle
            };
            localStorage.setItem('rechargeData', JSON.stringify(rechargeData));
            
            // Navigate to plans page
            window.location.href = 'plans.html';
        }
    });
}

// Check recharge form completion
function checkRechargeForm() {
    const mobile = document.getElementById('mobileNumber').value;
    const circle = document.getElementById('circle').value;
    const viewPlansBtn = document.getElementById('viewPlansBtn');
    
    if (mobile.length === 10 && selectedOperator && circle) {
        viewPlansBtn.disabled = false;
        viewPlansBtn.classList.add('fade-in');
    } else {
        viewPlansBtn.disabled = true;
    }
}

// Plans page initialization
function initializePlans() {
    const rechargeData = JSON.parse(localStorage.getItem('rechargeData'));
    
    if (!rechargeData) {
        window.location.href = 'recharge.html';
        return;
    }
    
    // Display recharge info
    document.getElementById('operatorInfo').textContent = rechargeData.operator.toUpperCase();
    document.getElementById('mobileInfo').textContent = rechargeData.mobile;
    
    // Initialize category buttons
    document.querySelectorAll('.category-btn').forEach(btn => {
        btn.addEventListener('click', function() {
            // Remove active class from all buttons
            document.querySelectorAll('.category-btn').forEach(b => b.classList.remove('active'));
            
            // Add active class to clicked button
            this.classList.add('active');
            
            // Load plans for selected category
            loadPlans(rechargeData.operator, this.dataset.category);
        });
    });
    
    // Load default plans (popular)
    loadPlans(rechargeData.operator, 'popular');
}

// Load plans for operator and category
function loadPlans(operator, category) {
    const plans = getPlans(operator, category);
    const plansGrid = document.getElementById('plansGrid');
    
    if (plans.length === 0) {
        plansGrid.innerHTML = '<p class="no-transactions">No plans available for this category</p>';
        return;
    }
    
    plansGrid.innerHTML = plans.map(plan => `
        <div class="plan-card" onclick="selectPlan('${plan.id}')">
            <div class="plan-price">₹${plan.price}</div>
            <div class="plan-validity">Valid for ${plan.validity}</div>
            <div class="plan-benefits">${plan.benefits}</div>
        </div>
    `).join('');
}

// Select plan and proceed to payment
function selectPlan(planId) {
    const plan = getPlanById(planId);
    const rechargeData = JSON.parse(localStorage.getItem('rechargeData'));
    
    if (plan && rechargeData) {
        // Check if user is logged in before proceeding to payment
        const currentUser = localStorage.getItem('currentUser');
        
        if (!currentUser) {
            // Store plan selection and redirect to login
            const completeRechargeData = {
                ...rechargeData,
                plan: plan,
                amount: plan.price
            };
            localStorage.setItem('completeRechargeData', JSON.stringify(completeRechargeData));
            localStorage.setItem('redirectAfterLogin', 'payment.html');
            
            showMessage('Please login to proceed with payment', 'info');
            setTimeout(() => {
                window.location.href = 'login.html';
            }, 2000);
            return;
        }
        
        // Store complete recharge data
        const completeRechargeData = {
            ...rechargeData,
            plan: plan,
            amount: plan.price
        };
        
        localStorage.setItem('completeRechargeData', JSON.stringify(completeRechargeData));
        
        // Navigate to payment page
        window.location.href = 'payment.html';
    }
}

// Payment page initialization
function initializePayment() {
    const rechargeData = JSON.parse(localStorage.getItem('completeRechargeData'));
    
    if (!rechargeData) {
        window.location.href = 'recharge.html';
        return;
    }
    
    // Display order summary
    document.getElementById('paymentMobile').textContent = rechargeData.mobile;
    document.getElementById('paymentOperator').textContent = rechargeData.operator.toUpperCase();
    document.getElementById('paymentPlan').textContent = `₹${rechargeData.plan.price} - ${rechargeData.plan.validity}`;
    document.getElementById('paymentAmount').textContent = `₹${rechargeData.amount}`;
    
    // Payment method selection
    document.querySelectorAll('.payment-option').forEach(option => {
        option.addEventListener('click', function() {
            document.querySelectorAll('.payment-option').forEach(o => o.classList.remove('selected'));
            this.classList.add('selected');
        });
    });
    
    // Pay now button
    document.getElementById('payNowBtn').addEventListener('click', processPayment);
}

// Process payment simulation
function processPayment() {
    const modal = document.getElementById('paymentModal');
    modal.style.display = 'block';
    
    // Simulate payment processing
    setTimeout(() => {
        // Generate transaction ID
        const transactionId = 'TXN' + Date.now();
        
        // Get recharge data
        const rechargeData = JSON.parse(localStorage.getItem('completeRechargeData'));
        
        // Create transaction record
        const transaction = {
            id: transactionId,
            mobile: rechargeData.mobile,
            operator: rechargeData.operator,
            amount: rechargeData.amount,
            plan: rechargeData.plan,
            date: new Date().toISOString(),
            status: 'success'
        };
        
        // Save transaction
        const transactions = JSON.parse(localStorage.getItem('transactions') || '[]');
        transactions.push(transaction);
        localStorage.setItem('transactions', JSON.stringify(transactions));
        
        // Store transaction for success page
        localStorage.setItem('lastTransaction', JSON.stringify(transaction));
        
        // Hide modal and redirect
        modal.style.display = 'none';
        window.location.href = 'success.html';
    }, 3000);
}

// Success page initialization
function initializeSuccess() {
    const transaction = JSON.parse(localStorage.getItem('lastTransaction'));
    
    if (!transaction) {
        window.location.href = 'dashboard.html';
        return;
    }
    
    // Display transaction details
    document.getElementById('transactionId').textContent = transaction.id;
    document.getElementById('successMobile').textContent = transaction.mobile;
    document.getElementById('successOperator').textContent = transaction.operator.toUpperCase();
    document.getElementById('successAmount').textContent = `₹${transaction.amount}`;
    document.getElementById('successDate').textContent = formatDate(transaction.date);
    
    // Clean up temporary data
    localStorage.removeItem('rechargeData');
    localStorage.removeItem('completeRechargeData');
    localStorage.removeItem('lastTransaction');
}

// History page initialization
function initializeHistory() {
    const currentUser = localStorage.getItem('currentUser');
    
    if (!currentUser) {
        // Show login prompt for history
        document.getElementById('transactionsList').innerHTML = `
            <div style="text-align: center; padding: 50px;">
                <h3>Login Required</h3>
                <p>Please login to view your transaction history</p>
                <a href="login.html" class="btn btn-primary">Login</a>
            </div>
        `;
        return;
    }
    
    loadTransactionHistory();
    
    // Filter functionality
    document.getElementById('filterPeriod').addEventListener('change', function() {
        loadTransactionHistory(this.value);
    });
}

// Load transaction history
function loadTransactionHistory(filter = 'all') {
    const transactions = JSON.parse(localStorage.getItem('transactions') || '[]');
    let filteredTransactions = transactions;
    
    // Apply filter
    if (filter !== 'all') {
        const now = new Date();
        const filterDate = new Date();
        
        switch(filter) {
            case 'today':
                filterDate.setHours(0, 0, 0, 0);
                break;
            case 'week':
                filterDate.setDate(now.getDate() - 7);
                break;
            case 'month':
                filterDate.setMonth(now.getMonth() - 1);
                break;
        }
        
        filteredTransactions = transactions.filter(t => new Date(t.date) >= filterDate);
    }
    
    const container = document.getElementById('transactionsList');
    
    if (filteredTransactions.length === 0) {
        container.innerHTML = '<p class="no-transactions">No transactions found</p>';
        return;
    }
    
    // Sort by date (newest first)
    filteredTransactions.sort((a, b) => new Date(b.date) - new Date(a.date));
    
    container.innerHTML = filteredTransactions.map(transaction => `
        <div class="transaction-item">
            <div class="transaction-header">
                <span class="transaction-amount">₹${transaction.amount}</span>
                <span class="transaction-status status-success">Success</span>
            </div>
            <div class="transaction-details">
                <div><strong>Mobile:</strong> ${transaction.mobile}</div>
                <div><strong>Operator:</strong> ${transaction.operator.toUpperCase()}</div>
                <div><strong>Transaction ID:</strong> ${transaction.id}</div>
                <div><strong>Date:</strong> ${formatDate(transaction.date)}</div>
            </div>
        </div>
    `).join('');
}

// Profile page initialization
function initializeProfile() {
    const currentUser = JSON.parse(localStorage.getItem('currentUser'));
    
    if (!currentUser) {
        window.location.href = 'login.html';
        return;
    }
    
    // Populate form with current user data
    document.getElementById('profileName').value = currentUser.name;
    document.getElementById('profileEmail').value = currentUser.email;
    document.getElementById('profileMobile').value = currentUser.mobile;
    
    // Profile form submission
    document.getElementById('profileForm').addEventListener('submit', function(e) {
        e.preventDefault();
        
        const updatedUser = {
            ...currentUser,
            name: document.getElementById('profileName').value,
            email: document.getElementById('profileEmail').value,
            mobile: document.getElementById('profileMobile').value
        };
        
        // Update user in users array
        const users = JSON.parse(localStorage.getItem('users') || '[]');
        const userIndex = users.findIndex(u => u.id === currentUser.id);
        
        if (userIndex !== -1) {
            users[userIndex] = updatedUser;
            localStorage.setItem('users', JSON.stringify(users));
            localStorage.setItem('currentUser', JSON.stringify(updatedUser));
            
            showMessage('Profile updated successfully!', 'success');
        }
    });
    
    // Logout button
    document.getElementById('logoutBtn').addEventListener('click', function() {
        localStorage.removeItem('currentUser');
        showMessage('Logged out successfully!', 'success');
        setTimeout(() => {
            window.location.href = 'index.html';
        }, 1500);
    });
}

// Utility function to format date
function formatDate(dateString) {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-IN') + ' ' + date.toLocaleTimeString('en-IN', { 
        hour: '2-digit', 
        minute: '2-digit' 
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
        ${type === 'success' ? 'background: #28a745;' : type === 'info' ? 'background: #17a2b8;' : 'background: #dc3545;'}
    `;
    
    // Add to page
    document.body.appendChild(messageDiv);
    
    // Remove after 3 seconds
    setTimeout(() => {
        messageDiv.style.animation = 'slideUp 0.3s ease-out';
        setTimeout(() => messageDiv.remove(), 300);
    }, 3000);
}

// Add click animations to buttons
document.addEventListener('click', function(e) {
    if (e.target.classList.contains('btn') || e.target.classList.contains('operator-card') || e.target.classList.contains('plan-card')) {
        e.target.style.transform = 'scale(0.95)';
        setTimeout(() => {
            e.target.style.transform = '';
        }, 150);
    }
});