// src/components/ApplyForJobsPage.js

import React, { useState } from 'react';

// shadcn/ui components
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from '../components/ui/card';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';

// Icon from lucide-react
import { Search as SearchIcon } from 'lucide-react';

// Your own helper component to show verification status
import VerificationStatusCard from '../components/VerificationStatusCard';

const ApplyForJobsPage = ({ docStatus, setDocStatus, showMessage }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [isSearchFocused, setIsSearchFocused] = useState(false);

  // Sample job data; replace with real data or API fetch
  const jobListings = [
    {
      id: '1',
      title: 'Frontend Developer',
      company: 'Acme Corp',
      location: 'Paris, France',
      skills: ['React', 'JavaScript', 'CSS'],
    },
    {
      id: '2',
      title: 'Backend Engineer',
      company: 'Globex Inc',
      location: 'Lyon, France',
      skills: ['Node.js', 'Express', 'MongoDB'],
    },
    {
      id: '3',
      title: 'Full‑Stack Developer',
      company: 'InnovateX',
      location: 'Remote',
      skills: ['React', 'Node.js', 'GraphQL'],
    },
  ];

  const handleApplyClick = (job) => {
    if (docStatus === 'Verified') {
      showMessage(`Successfully applied for ${job.title}!`, 'success');
    }
  };

  const handleVerify = () => {
    setDocStatus('Verification Pending');
    setTimeout(() => {
      const status = Math.random() > 0.3 ? 'Verified' : 'Verification Failed';
      setDocStatus(status);
      showMessage(
        status === 'Verified'
          ? 'Documents Verified Successfully! You can now apply.'
          : 'Document Verification Failed. Please try again.',
        status === 'Verified' ? 'success' : 'error'
      );
    }, 2000);
  };

  // Filter jobs by search query (title, company, or skills)
  const filteredJobs = jobListings.filter((job) => {
    const q = searchQuery.trim().toLowerCase();
    if (!q) return true;
    if (
      job.title.toLowerCase().includes(q) ||
      job.company.toLowerCase().includes(q)
    ) {
      return true;
    }
    return job.skills.some((skill) =>
      skill.toLowerCase().includes(q)
    );
  });

  return (
    <div className="min-h-screen bg-gray-50 pt-24 px-4 sm:px-6 lg:px-8 font-inter">
      <div className="max-w-4xl mx-auto py-12">
        <h2 className="text-4xl font-bold text-gray-900 mb-8 text-center">
          Explore Job Opportunities
        </h2>

        {/* Verification status card */}
        <VerificationStatusCard docStatus={docStatus} onVerify={handleVerify} />

        {/* Search input */}
        <div className="relative mb-12 max-w-xl mx-auto">
          <Input
            type="text"
            placeholder="Search by title, company, or skills..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            onFocus={() => setIsSearchFocused(true)}
            onBlur={() => setIsSearchFocused(false)}
            className={`pl-12 pr-4 py-3 rounded-full shadow-md transition-all duration-300 ease-in-out ${
              isSearchFocused ? 'border-blue-500' : ''
            }`}
          />
          <SearchIcon className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
        </div>

        {/* Job cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filteredJobs.length > 0 ? (
            filteredJobs.map((job) => (
              <Card key={job.id} className="p-6 shadow-md hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="text-xl">{job.title}</CardTitle>
                  <CardDescription>
                    {job.company} &bull; {job.location}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700 mb-4">
                    Skills: {job.skills.join(', ')}
                  </p>
                  <Button
                    className="w-full"
                    onClick={() => handleApplyClick(job)}
                    disabled={docStatus !== 'Verified'}
                    title={
                      docStatus !== 'Verified'
                        ? 'Please verify your ID to apply'
                        : 'Apply Now'
                    }
                  >
                    {docStatus === 'Verified' ? 'Apply Now' : 'Verify to Apply'}
                  </Button>
                </CardContent>
              </Card>
            ))
          ) : (
            <p className="col-span-full text-center text-gray-600 text-lg">
              No jobs found matching your search.
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default ApplyForJobsPage;
