import React, { useState } from 'react';

// ShadCN/UI components
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from '../components/ui/card';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';

// Icons (lucide-react)
import {
  Briefcase as BriefcaseIcon,
  FileText as FileTextIcon,
  Users as UsersIcon,
  Star as StarIcon,
  Mail as MailIcon,
  MessageSquare as MessageSquareIcon,
} from 'lucide-react';

// Our verification status card
import VerificationStatusCard from '../components/VerificationStatusCard';

const RecruiterDashboardPage = ({
  userId,
  docStatus,
  onVerify,      // pull in your verification callback
  showMessage,
}) => {
  const [jobTitle, setJobTitle] = useState('');
  const [jobSkills, setJobSkills] = useState('');
  const [jobDomain, setJobDomain] = useState('');

  const [postedJobs, setPostedJobs] = useState([
    { id: 1, title: 'Senior Frontend Dev', applicants: 5, matches: 3, domain: 'Web Development', skills: ['React', 'TypeScript'] },
    { id: 2, title: 'Data Analyst', applicants: 12, matches: 8, domain: 'Data Science', skills: ['Python', 'SQL', 'Tableau'] },
  ]);

  const matchedCandidates = [
    { id: 1, name: 'Alice Johnson', email: 'alice.j@example.com', videoScore: 92, skills: ['React','JavaScript','Problem Solving'], domain: 'Web Development' },
    { id: 2, name: 'Bob Williams', email: 'bob.w@example.com', videoScore: 88, skills: ['Python','Machine Learning','Data Analysis'], domain: 'Data Science' },
    { id: 3, name: 'Charlie Brown', email: 'charlie.b@example.com', videoScore: 75, skills: ['Node.js','Express','React'], domain: 'Web Development' },
  ];

  const handlePostJob = () => {
    if (docStatus !== 'Verified') {
      showMessage('Please verify your ID before posting jobs.', 'error');
      return;
    }
    if (!jobTitle || !jobSkills || !jobDomain) {
      showMessage('Please fill all job details.', 'error');
      return;
    }
    const newJob = {
      id: postedJobs.length + 1,
      title: jobTitle,
      applicants: 0,
      matches: Math.floor(Math.random() * 10),
      domain: jobDomain,
      skills: jobSkills.split(',').map(s => s.trim()),
    };
    setPostedJobs([...postedJobs, newJob]);
    setJobTitle('');
    setJobSkills('');
    setJobDomain('');
    showMessage('Job posted successfully!', 'success');
  };

  const handleContactCandidate = name => {
    showMessage(`Starting in-app chat with ${name}…`, 'success');
  };

  const handleMailCandidate = candidate => {
    const subject = encodeURIComponent('Job Opportunity at Your Company');
    const body = encodeURIComponent(
      `Hi ${candidate.name},\n\nWe’d love to discuss a role matching your profile.\n\nBest,\nRecruiter`
    );
    window.location.href = `mailto:${candidate.email}?subject=${subject}&body=${body}`;
  };

  return (
    <div className="min-h-screen bg-gray-50 pt-24 px-4 sm:px-6 lg:px-8 font-inter">
      <div className="max-w-4xl mx-auto py-12">
        <h2 className="text-4xl font-bold text-gray-900 mb-4 text-center">
          Recruiter Dashboard
        </h2>
        <p className="text-center text-gray-600 mb-8">
          User ID: <span className="font-mono text-sm bg-gray-200 px-2 py-1 rounded">{userId}</span>
        </p>

        {/* Verification step */}
        <VerificationStatusCard docStatus={docStatus} onVerify={onVerify} />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-6">
          {/* Post a New Job */}
          <Card className="p-6 shadow-md">
            <CardHeader>
              <BriefcaseIcon className="h-8 w-8 text-blue-500 mb-2" />
              <CardTitle>Post a New Job</CardTitle>
              <CardDescription>Define requirements for your next hire.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <label htmlFor="jobTitle" className="block text-sm font-medium text-gray-700 mb-1">
                  Job Title
                </label>
                <Input
                  id="jobTitle"
                  placeholder="e.g., Frontend Developer"
                  value={jobTitle}
                  onChange={e => setJobTitle(e.target.value)}
                  disabled={docStatus !== 'Verified'}
                />
              </div>
              <div>
                <label htmlFor="jobSkills" className="block text-sm font-medium text-gray-700 mb-1">
                  Required Skills (comma-separated)
                </label>
                <Input
                  id="jobSkills"
                  placeholder="e.g., React, JavaScript"
                  value={jobSkills}
                  onChange={e => setJobSkills(e.target.value)}
                  disabled={docStatus !== 'Verified'}
                />
              </div>
              <div>
                <label htmlFor="jobDomain" className="block text-sm font-medium text-gray-700 mb-1">
                  Job Domain
                </label>
                <Input
                  id="jobDomain"
                  placeholder="e.g., Web Development"
                  value={jobDomain}
                  onChange={e => setJobDomain(e.target.value)}
                  disabled={docStatus !== 'Verified'}
                />
              </div>
              <Button
                onClick={handlePostJob}
                disabled={docStatus !== 'Verified'}
                className="w-full"
              >
                Post Job
              </Button>
            </CardContent>
          </Card>

          {/* Your Posted Jobs */}
          <Card className="p-6 shadow-md">
            <CardHeader>
              <FileTextIcon className="h-8 w-8 text-orange-500 mb-2" />
              <CardTitle>Your Posted Jobs</CardTitle>
              <CardDescription>Overview of your job postings and applicants.</CardDescription>
            </CardHeader>
            <CardContent>
              {postedJobs.length ? (
                postedJobs.map(job => (
                  <div key={job.id} className="mb-4 bg-gray-50 p-4 rounded shadow-sm">
                    <h3 className="font-semibold text-gray-800">{job.title}</h3>
                    <p className="text-sm text-gray-600">Domain: {job.domain}</p>
                    <p className="text-sm text-gray-600">Skills: {job.skills.join(', ')}</p>
                    <div className="flex justify-between mt-2 text-sm text-gray-700">
                      <span>Applicants: <strong className="text-blue-600">{job.applicants}</strong></span>
                      <span>Matches: <strong className="text-green-600">{job.matches}</strong></span>
                    </div>
                  </div>
                ))
              ) : (
                <p className="text-gray-600 text-center">No jobs posted yet.</p>
              )}
            </CardContent>
          </Card>

          {/* Matched Candidates */}
          <Card className="p-6 shadow-md lg:col-span-2">
            <CardHeader>
              <UsersIcon className="h-8 w-8 text-purple-500 mb-2" />
              <CardTitle>Matched Candidates</CardTitle>
              <CardDescription>
                Candidates whose video resumes match your job requirements.
              </CardDescription>
            </CardHeader>
            <CardContent>
              {matchedCandidates.length ? (
                matchedCandidates.map(c => (
                  <div key={c.id} className="flex flex-col sm:flex-row justify-between items-start sm:items-center bg-gray-50 p-4 rounded shadow-sm mb-4">
                    <div>
                      <h4 className="font-semibold text-gray-800">{c.name}</h4>
                      <p className="text-sm text-gray-600">Domain: {c.domain}</p>
                      <p className="text-sm text-gray-600">Skills: {c.skills.join(', ')}</p>
                    </div>
                    <div className="flex items-center space-x-2 mt-2 sm:mt-0">
                      <span className="flex items-center text-purple-600 font-semibold text-sm">
                        <StarIcon className="h-4 w-4 mr-1" /> {c.videoScore}
                      </span>
                      <Button size="sm" variant="outline" onClick={() => console.log(`Viewing ${c.name}`)}>
                        Profile
                      </Button>
                      <Button size="sm" variant="outline" onClick={() => handleMailCandidate(c)}>
                        <MailIcon className="h-4 w-4" />
                      </Button>
                      <Button size="sm" onClick={() => handleContactCandidate(c.name)}>
                        <MessageSquareIcon className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                ))
              ) : (
                <p className="text-gray-600 text-center">No candidates matched yet.</p>
              )}
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default RecruiterDashboardPage;
