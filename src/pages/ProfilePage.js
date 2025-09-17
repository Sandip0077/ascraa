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
import { Upload as UploadIcon, Star as StarIcon, Briefcase as BriefcaseIcon } from 'lucide-react';

const ProfilePage = ({ userId, showMessage }) => {
  const [videoScore, setVideoScore] = useState(null);
  const [extractedSkills, setExtractedSkills] = useState([]);
  const [githubLink, setGithubLink] = useState('');

  const handleVideoUpload = () => {
    console.log('Video uploaded, simulating scoring and skill extraction...');
    setVideoScore(null);
    setTimeout(() => {
      const score = Math.floor(Math.random() * 50) + 50;
      setVideoScore(score);

      const skills = [
        'React',
        'JavaScript',
        'Problem Solving',
        'Communication',
        'Teamwork',
      ];
      setExtractedSkills(
        skills
          .sort(() => 0.5 - Math.random())
          .slice(0, Math.floor(Math.random() * 3) + 2)
      );

      showMessage('Video uploaded and processed successfully!', 'success');
    }, 3000);
  };

  const handleSaveGithub = () => {
    if (!githubLink) {
      showMessage('Please enter your GitHub profile URL.', 'error');
      return;
    }
    console.log('Saved GitHub link:', githubLink);
    showMessage('GitHub link saved!', 'success');
    // Persist to backend/localStorage as needed
  };

  const appliedJobs = [
    { id: 1, title: 'Frontend Developer', company: 'Tech Solutions Inc.', status: 'Under Review' },
    { id: 2, title: 'ML Engineer', company: 'AI Innovations', status: 'Interview Scheduled' },
    { id: 3, title: 'Full Stack Developer', company: 'Global Digital', status: 'Submitted' },
  ];

  return (
    <div className="min-h-screen bg-gray-50 pt-24 px-4 sm:px-6 lg:px-8 font-inter">
      <div className="max-w-4xl mx-auto py-12">
        <h2 className="text-4xl font-bold text-gray-900 mb-8 text-center">Student Profile</h2>
        <p className="text-center text-gray-600 mb-8">
          User ID:{' '}
          <span className="font-mono text-sm bg-gray-200 px-2 py-1 rounded">{userId}</span>
        </p>

        <div className="grid grid-cols-1 gap-8">

          {/* GitHub Link Card */}
          <Card className="p-6 shadow-md">
            <CardHeader>
              <CardTitle>GitHub Profile</CardTitle>
              <CardDescription>Share your GitHub link with recruiters.</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex items-center gap-2 mb-4">
                <Input
                  type="url"
                  placeholder="https://github.com/your-username"
                  value={githubLink}
                  onChange={(e) => setGithubLink(e.target.value)}
                />
                <Button onClick={handleSaveGithub}>Save</Button>
              </div>
            </CardContent>
          </Card>

          {/* Video Upload Card */}
          <Card className="p-6 shadow-md">
            <CardHeader>
              <UploadIcon className="h-8 w-8 text-green-500 mb-2" />
              <CardTitle>1‑Minute Video Introduction</CardTitle>
              <CardDescription>Introduce yourself to potential employers.</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex items-center justify-between mb-4">
                <span className="font-medium text-gray-700">Video Score:</span>
                {videoScore != null ? (
                  <span className="text-purple-600 font-semibold flex items-center">
                    <StarIcon className="h-5 w-5 mr-1 fill-current" /> {videoScore}/100
                  </span>
                ) : (
                  <span className="text-gray-500">N/A</span>
                )}
              </div>

              <div className="mb-4">
                <span className="font-medium text-gray-700">Extracted Skills:</span>
                <div className="mt-2 flex flex-wrap gap-2">
                  {extractedSkills.length > 0 ? (
                    extractedSkills.map((skill, i) => (
                      <span
                        key={i}
                        className="bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded-full"
                      >
                        {skill}
                      </span>
                    ))
                  ) : (
                    <span className="text-gray-500 text-sm">
                      Upload video to extract skills.
                    </span>
                  )}
                </div>
              </div>

              <Input
                type="file"
                accept="video/*"
                className="mb-4"
                onChange={() => console.log('Video file selected')}
              />
              <Button onClick={handleVideoUpload} disabled={videoScore != null}>
                {videoScore != null ? 'Re-upload Video' : 'Upload Video'}
              </Button>
              <p className="text-xs text-gray-500 mt-2">
                *AI Model 2: Scores video for clarity, confidence, content.
                <br />
                *AI Model 3: Extracts skills and domains from video.
              </p>
            </CardContent>
          </Card>

          {/* Applied Jobs Card */}
          <Card className="p-6 shadow-md">
            <CardHeader>
              <BriefcaseIcon className="h-8 w-8 text-orange-500 mb-2" />
              <CardTitle>Applied Jobs</CardTitle>
              <CardDescription>Track the status of your job applications.</CardDescription>
            </CardHeader>
            <CardContent>
              {appliedJobs.length > 0 ? (
                <ul className="space-y-4">
                  {appliedJobs.map((job) => (
                    <li
                      key={job.id}
                      className="flex justify-between items-center bg-gray-50 p-4 rounded-md shadow-sm"
                    >
                      <div>
                        <p className="font-semibold text-gray-800">{job.title}</p>
                        <p className="text-sm text-gray-600">{job.company}</p>
                      </div>
                      <span
                        className={`px-3 py-1 rounded-full text-xs font-medium ${
                          job.status === 'Under Review'
                            ? 'bg-yellow-100 text-yellow-800'
                            : job.status === 'Interview Scheduled'
                            ? 'bg-green-100 text-green-800'
                            : 'bg-blue-100 text-blue-800'
                        }`}
                      >
                        {job.status}
                      </span>
                    </li>
                  ))}
                </ul>
              ) : (
                <p className="text-gray-600 text-center">
                  You haven't applied for any jobs yet.
                </p>
              )}
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
