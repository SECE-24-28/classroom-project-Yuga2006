# Mobile Recharge App - Setup Instructions

## Installation

1. Install dependencies:
```bash
npm install
```

## Running the Application

1. Start the development server:
```bash
npm run dev
```

2. Open your browser and navigate to the URL shown in the terminal (usually http://localhost:5173)

## Features

- **Home Page**: Welcome page with quick access to recharge
- **Recharge**: Select mobile operator (Jio, Airtel, VI)
- **Plans**: View available recharge plans for selected operator
- **Offers**: Browse special offers and promo codes
- **Authentication**: Login/Signup functionality
- **Payment**: Protected payment page (requires login)
- **Success**: Recharge confirmation page

## How to Use

1. **Sign Up**: Create an account from the signup page
2. **Login**: Login with your email/mobile and password
3. **Select Operator**: Choose your mobile operator from the recharge page
4. **Choose Plan**: Select a recharge plan
5. **Payment**: Enter mobile number and payment details
6. **Success**: View recharge confirmation

## Test Credentials

After signing up, use your registered credentials to login.

## Project Structure

- `/src/components` - Reusable UI components
- `/src/pages` - Page components
- `/src/context` - React Context for authentication
- `/src/services` - API and authentication services
- `/src/assets` - Images and static files
- `/src/styles` - CSS files
