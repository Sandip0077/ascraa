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

// Icon for Google
import { FcGoogle as GoogleIcon } from 'react-icons/fc';

const SignUpPage = ({
  setCurrentPage,
  handleLogin,
  showMessage,
  userType,
  setAuthUserType,
}) => {
  const [fullName, setFullName] = useState('');
  const [companyName, setCompanyName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [otp, setOtp] = useState('');
  const [otpSent, setOtpSent] = useState(false);

  const handleSendOtp = () => {
    if (!fullName || !email || (userType === 'recruiter' && !companyName)) {
      showMessage('Please fill all required fields before requesting OTP.', 'error');
      return;
    }
    console.log(`Sending OTP to ${email} for signup...`);
    setTimeout(() => {
      setOtpSent(true);
      showMessage('OTP sent to your email for verification!', 'success');
      console.log('Simulated OTP: 123456');
    }, 1000);
  };

  const handleSignUpSubmit = () => {
    if (!fullName || !email || !password || !confirmPassword || !otp || (userType === 'recruiter' && !companyName)) {
      showMessage('Please fill all fields and enter OTP.', 'error');
      return;
    }
    if (password !== confirmPassword) {
      showMessage('Passwords do not match.', 'error');
      return;
    }
    if (otp !== '123456') {
      showMessage('Invalid OTP. Please try again.', 'error');
      return;
    }
    console.log(`Signing up ${userType} ${fullName} (${email}) ${userType === 'recruiter' ? 'at ' + companyName : ''}`);
    handleLogin(email, userType);
    showMessage('Account created and logged in successfully!', 'success');
    setCurrentPage('home');
  };

  const handleGoogleSignUp = () => {
    console.log('Initiating Google Sign Up...');
    setTimeout(() => {
      handleLogin(`google_new_${userType}_456`, userType);
      showMessage(`Account created and logged in with Google as a ${userType}!`, 'success');
      setCurrentPage('home');
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center pt-24 px-4 sm:px-6 lg:px-8 font-inter">
      <Card className="p-8 max-w-md w-full shadow-lg">
        <CardHeader className="text-center">
          <CardTitle>
            Create Your {userType && <span className="capitalize">{userType}</span>} Account
          </CardTitle>
          <CardDescription>
            Join ascra to {userType === 'student' ? 'find your dream job' : 'discover top talent'}.
          </CardDescription>
        </CardHeader>

        <CardContent className="space-y-6">
          {/* Full Name */}
          <div>
            <label htmlFor="fullName" className="block text-sm font-medium text-gray-700 mb-1">
              Full Name
            </label>
            <Input
              id="fullName"
              type="text"
              placeholder="Jane Doe"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
            />
          </div>

          {/* Company Name (Recruiter only) */}
          {userType === 'recruiter' && (
            <div>
              <label htmlFor="companyName" className="block text-sm font-medium text-gray-700 mb-1">
                Company Name
              </label>
              <Input
                id="companyName"
                type="text"
                placeholder="Acme Corp"
                value={companyName}
                onChange={(e) => setCompanyName(e.target.value)}
              />
            </div>
          )}

          {/* Email / OTP Flow */}
          {!otpSent ? (
            <>
              <div>
                <label htmlFor="signup-email" className="block text-sm font-medium text-gray-700 mb-1">
                  Email Address
                </label>
                <Input
                  id="signup-email"
                  type="email"
                  placeholder="your@example.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  disabled={otpSent}
                />
              </div>
              <Button onClick={handleSendOtp} className="w-full">
                Send OTP for Verification
              </Button>
            </>
          ) : (
            <>
              <div>
                <label htmlFor="signup-otp" className="block text-sm font-medium text-gray-700 mb-1">
                  One‑Time Password (OTP)
                </label>
                <Input
                  id="signup-otp"
                  type="text"
                  placeholder="Enter 6‑digit OTP"
                  value={otp}
                  onChange={(e) => setOtp(e.target.value)}
                />
              </div>
              <div>
                <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">
                  Password
                </label>
                <Input
                  id="password"
                  type="password"
                  placeholder="Enter your password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              <div>
                <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700 mb-1">
                  Confirm Password
                </label>
                <Input
                  id="confirmPassword"
                  type="password"
                  placeholder="Confirm your password"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                />
              </div>
              <Button onClick={handleSignUpSubmit} className="w-full">
                Sign Up
              </Button>
            </>
          )}

          {/* OR / Google */}
          <div className="relative flex items-center justify-center">
            <div className="flex-grow border-t border-gray-300" />
            <span className="flex-shrink mx-4 text-gray-500">OR</span>
            <div className="flex-grow border-t border-gray-300" />
          </div>

          <Button variant="outline" onClick={handleGoogleSignUp} className="w-full flex items-center justify-center space-x-2">
            <GoogleIcon className="h-5 w-5" />
            <span>Continue with Google</span>
          </Button>

          <p className="text-center text-sm text-gray-600">
            Already have an account?{' '}
            <a
              href="#"
              onClick={(e) => {
                e.preventDefault();
                setCurrentPage('login');
              }}
              className="text-blue-600 hover:underline"
            >
              Login
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

export default SignUpPage;
