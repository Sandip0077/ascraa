import React, { useState } from 'react';

// ShadCN/UI components
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from '../components/ui/card';
import { Input } from '../components/ui/input';
import { Button } from '../components/ui/button';

// Icons
import { FcGoogle as GoogleIcon } from 'react-icons/fc';

const LoginPage = ({
  setCurrentPage,
  handleLogin,
  showMessage,
  userType,
  setAuthUserType,
}) => {
  const [email, setEmail] = useState('');
  const [otp, setOtp] = useState('');
  const [otpSent, setOtpSent] = useState(false);

  const handleSendOtp = () => {
    if (!email) {
      showMessage('Please enter your email.', 'error');
      return;
    }
    console.log(`Sending OTP to ${email}...`);
    setTimeout(() => {
      setOtpSent(true);
      showMessage('OTP sent to your email!', 'success');
      console.log('Simulated OTP: 123456');
    }, 1000);
  };

  const handleLoginSubmit = () => {
    if (!email || !otp) {
      showMessage('Please enter both email and OTP.', 'error');
      return;
    }
    if (otp !== '123456') {
      showMessage('Invalid OTP. Please try again.', 'error');
      return;
    }
    console.log(`Logging in as ${userType} with ${email} and OTP ${otp}`);
    handleLogin(email, userType);
    showMessage('Login successful!', 'success');
    setCurrentPage('home');
  };

  const handleGoogleLogin = () => {
    console.log('Initiating Google Login...');
    setTimeout(() => {
      handleLogin(`google_${userType}_123`, userType);
      showMessage(`Logged in with Google as a ${userType}!`, 'success');
      setCurrentPage('home');
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center pt-24 px-4 sm:px-6 lg:px-8 font-inter">
      <Card className="p-8 max-w-md w-full shadow-lg">
        <CardHeader className="text-center">
          <CardTitle className="capitalize">{userType} Login</CardTitle>
          <CardDescription>Access your {userType} account on ascra.</CardDescription>
        </CardHeader>

        <CardContent className="space-y-6">
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Email Address
            </label>
            <Input
              id="email"
              type="email"
              placeholder="your@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              disabled={otpSent}
            />
          </div>

          {!otpSent ? (
            <Button onClick={handleSendOtp} className="w-full">
              Send OTP
            </Button>
          ) : (
            <div>
              <label
                htmlFor="otp"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                One‑Time Password (OTP)
              </label>
              <Input
                id="otp"
                type="text"
                placeholder="Enter 6‑digit OTP"
                value={otp}
                onChange={(e) => setOtp(e.target.value)}
              />
              <Button onClick={handleLoginSubmit} className="w-full mt-4">
                Login
              </Button>
            </div>
          )}

          <div className="relative flex items-center justify-center">
            <div className="flex-grow border-t border-gray-300" />
            <span className="flex-shrink mx-4 text-gray-500">OR</span>
            <div className="flex-grow border-t border-gray-300" />
          </div>

          <Button
            variant="outline"
            onClick={handleGoogleLogin}
            className="w-full flex items-center justify-center space-x-2"
          >
            <GoogleIcon className="h-5 w-5" />
            <span>Continue with Google</span>
          </Button>

          <p className="text-center text-sm text-gray-600">
            Don't have an account?{' '}
            <a
              href="#"
              onClick={(e) => {
                e.preventDefault();
                setCurrentPage('signup');
              }}
              className="text-blue-600 hover:underline"
            >
              Sign Up
            </a>
          </p>
          <p className="text-center text-sm text-gray-600">
            Not a {userType}?{' '}
            <a
              href="#"
              onClick={(e) => {
                e.preventDefault();
                setAuthUserType(null);
                setCurrentPage('auth-selection');
              }}
              className="text-blue-600 hover:underline"
            >
              Change Role
            </a>
          </p>
        </CardContent>
      </Card>
    </div>
  );
};

export default LoginPage;
