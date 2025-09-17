import React from 'react';

// ShadCN/UI components
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
  ArrowRight as ArrowRightIcon,
} from 'lucide-react';

const AuthSelectionPage = ({ setCurrentPage, setAuthUserType }) => {
  const handleSelection = (type) => {
    setAuthUserType(type);
    setCurrentPage('login');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-100 to-blue-100 flex flex-col items-center justify-center pt-24 px-4 sm:px-6 lg:px-8 font-inter">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-gray-900 mb-4">Join Our Network</h2>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Whether you're starting your career or looking for the next star for your team, you're in the right place.
        </p>
      </div>
      <div className="flex flex-col md:flex-row gap-8 max-w-4xl w-full">
        {/* Student Card */}
        <div className="flex-1 group" onClick={() => handleSelection('student')}>
          <Card className="p-8 text-center h-full shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 cursor-pointer overflow-hidden">
            <CardHeader>
              <div className="bg-blue-100 rounded-full p-4 mx-auto mb-4 w-max group-hover:bg-blue-500 transition-colors">
                <GraduationCapIcon className="h-16 w-16 text-blue-500 group-hover:text-white transition-colors" />
              </div>
              <CardTitle className="text-3xl">I'm a Student</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription>
                Find jobs, create your video resume, and get noticed by top companies.
              </CardDescription>
              <div className="mt-6 flex items-center justify-center text-blue-600 font-semibold opacity-0 group-hover:opacity-100 transition-opacity">
                Get Started <ArrowRightIcon className="ml-2 h-5 w-5" />
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Recruiter Card */}
        <div className="flex-1 group" onClick={() => handleSelection('recruiter')}>
          <Card className="p-8 text-center h-full shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 cursor-pointer overflow-hidden">
            <CardHeader>
              <div className="bg-green-100 rounded-full p-4 mx-auto mb-4 w-max group-hover:bg-green-500 transition-colors">
                <UsersIcon className="h-16 w-16 text-green-500 group-hover:text-white transition-colors" />
              </div>
              <CardTitle className="text-3xl">I'm a Recruiter</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription>
                Post jobs, discover talented candidates, and streamline your hiring process.
              </CardDescription>
              <div className="mt-6 flex items-center justify-center text-green-600 font-semibold opacity-0 group-hover:opacity-100 transition-opacity">
                Find Talent <ArrowRightIcon className="ml-2 h-5 w-5" />
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default AuthSelectionPage;
