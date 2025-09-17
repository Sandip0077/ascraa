import React from 'react';
// UI primitives
import { Button } from '../components/ui/button';
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardDescription,
} from '../components/ui/card';
// Icons
import {
  GraduationCap as GraduationCapIcon,
  Users as UsersIcon,
  CheckCircle as CheckCircleIcon,
  UserCircle as UserCircleIcon,
  Video as VideoIcon,
  Lightbulb as LightbulbIcon,
  Quote as QuoteIcon,
} from 'lucide-react';
// Accordion for FAQs
import FAQAccordion from '../components/FAQAccordion';
// import VerificationStatusCard from '../components/VerificationStatusCard';

const HomePage = ({ setCurrentPage }) => (
  <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50 flex flex-col items-center pt-24 px-4 sm:px-6 lg:px-8 font-inter">
    <div className="max-w-4xl text-center py-12">
      <h1 className="text-5xl md:text-6xl font-extrabold text-gray-900 leading-tight mb-6">
        Your Story, Your <span className="text-blue-600">Video Resume</span>
      </h1>
      <p className="text-lg md:text-xl text-gray-600 mb-10 max-w-2xl mx-auto">
        Redefining the job application process with concise 1-minute video introductions. Stand out, connect authentically, and land your dream job with ascra.
      </p>
      <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
        <Button size="default" onClick={() => setCurrentPage('apply-jobs')} className="shadow-lg hover:shadow-xl transition-shadow duration-300">
          Find Your Next Job
        </Button>
        <Button size="default" variant="outline" onClick={() => setCurrentPage('auth-selection')} className="shadow-lg hover:shadow-xl transition-shadow duration-300">
          Create Your Profile
        </Button>
      </div>
    </div>

    <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl w-full">
      <Card className="text-center p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 bg-white/60 backdrop-blur-sm">
        <CardHeader>
          <GraduationCapIcon className="h-12 w-12 text-blue-500 mx-auto mb-4" />
          <CardTitle>For Students</CardTitle>
        </CardHeader>
        <CardContent>
          <CardDescription>Showcase your personality and skills beyond a traditional resume. Get matched with relevant jobs.</CardDescription>
        </CardContent>
      </Card>

      <Card className="text-center p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 bg-white/60 backdrop-blur-sm">
        <CardHeader>
          <UsersIcon className="h-12 w-12 text-green-500 mx-auto mb-4" />
          <CardTitle>For Recruiters</CardTitle>
        </CardHeader>
        <CardContent>
          <CardDescription>Efficiently discover top talent with AI-powered video assessments and skill matching.</CardDescription>
        </CardContent>
      </Card>

      <Card className="text-center p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 bg-white/60 backdrop-blur-sm">
        <CardHeader>
          <CheckCircleIcon className="h-12 w-12 text-purple-500 mx-auto mb-4" />
          <CardTitle>Secure & Verified</CardTitle>
        </CardHeader>
        <CardContent>
          <CardDescription>Ensure authenticity with government document verification and secure platform features.</CardDescription>
        </CardContent>
      </Card>
    </div>

    <div className="mt-20 py-12 bg-white w-full max-w-7xl rounded-lg shadow-xl px-6 md:px-12">
      <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">How It Works</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
        <div className="flex flex-col items-center text-center p-4">
          <div className="bg-blue-100 rounded-full p-4 mb-4">
            <UserCircleIcon className="h-10 w-10 text-blue-600" />
          </div>
          <h3 className="text-xl font-semibold text-gray-800 mb-2">1. Create Your Profile</h3>
          <p className="text-gray-600">Sign up as a student or recruiter. Verify your documents for a trusted profile.</p>
        </div>
        <div className="flex flex-col items-center text-center p-4">
          <div className="bg-green-100 rounded-full p-4 mb-4">
            <VideoIcon className="h-10 w-10 text-green-600" />
          </div>
          <h3 className="text-xl font-semibold text-gray-800 mb-2">2. Upload Video Resume</h3>
          <p className="text-gray-600">Record a concise 1-minute video. Our AI scores it and extracts your key skills.</p>
        </div>
        <div className="flex flex-col items-center text-center p-4">
          <div className="bg-purple-100 rounded-full p-4 mb-4">
            <LightbulbIcon className="h-10 w-10 text-purple-600" />
          </div>
          <h3 className="text-xl font-semibold text-gray-800 mb-2">3. Get Matched & Hired</h3>
          <p className="text-gray-600">Explore jobs, apply with your video, and get matched with recruiters looking for your talent.</p>
        </div>
      </div>
    </div>

    <div className="mt-20 py-12 w-full max-w-7xl px-6 md:px-12">
      <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">Frequently Asked Questions</h2>
      <FAQAccordion />
    </div>

    {/* <div className="mt-20 w-full max-w-7xl px-6 md:px-12">
      <VerificationStatusCard docStatus="Not Verified" onVerify={() => alert('Verifying...')} />
    </div> */}

    <div className="mt-20 py-12 w-full max-w-7xl px-6 md:px-12 bg-white rounded-lg shadow-xl">
      <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">What Our Users Say</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <Card className="p-6 shadow-none border-0">
          <CardContent>
            <QuoteIcon className="h-8 w-8 text-gray-400 mb-4" />
            <p className="text-lg italic text-gray-700 mb-4">
              "ascra changed the game for me! I landed an interview within a week, and the video helped me showcase my communication skills far better than a traditional resume ever could."
            </p>
            <p className="font-semibold text-right text-gray-800">- Jane Doe, Software Engineer</p>
          </CardContent>
        </Card>
        <Card className="p-6 shadow-none border-0">
          <CardContent>
            <QuoteIcon className="h-8 w-8 text-gray-400 mb-4" />
            <p className="text-lg italic text-gray-700 mb-4">
              "Finding candidates used to be a chore. With ascra, I can quickly assess personality and fit, and the ML-powered matching saves us so much time. Highly recommend for recruiters!"
            </p>
            <p className="font-semibold text-right text-gray-800">- John Smith, HR Manager</p>
          </CardContent>
        </Card>
      </div>
    </div>

    <div className="mt-20 py-12 text-center w-full max-w-4xl">
      <h2 className="text-4xl font-bold text-gray-900 mb-6">Ready to Transform Your Job Search?</h2>
      <p className="text-lg text-gray-600 mb-8">Join thousands of students and recruiters already benefiting from ascra.</p>
      <Button size="default" onClick={() => setCurrentPage('auth-selection')} className="shadow-lg hover:shadow-xl transition-shadow duration-300">
        Get Started Today
      </Button>
    </div>
  </div>
);

export default HomePage;
