import React, { useState } from 'react';

// ShadCN/UI components
import { Card } from '../components/ui/card';
import { CardTitle, CardDescription } from '../components/ui/card';
import { Button } from '../components/ui/button';

// Icons
import { GraduationCap as GraduationCapIcon, Users as UsersIcon } from 'lucide-react';

// Your modal component for displaying full article content
import ArticleModal from '../components/ArticleModal';

const ResourcesPage = () => {
  const [selectedArticle, setSelectedArticle] = useState(null);

  const studentArticles = [
    {
      title: '5 Tips for a Killer Video Resume',
      description: 'Learn how to script, shoot, and edit a video that grabs attention.',
      content: `
1. **Script, Don't Read:** Outline your key talking points but avoid reading from a script. Let your natural personality come through.

2. **Lighting is Key:** Face a window or a soft light source. Avoid backlighting which can put your face in shadow.

3. **Clean Background:** Choose a simple, uncluttered, and professional background. A plain wall or a neat bookshelf works well.

4. **Clear Audio:** Use a microphone if possible, or record in a quiet room to avoid echo and background noise.

5. **Dress the Part:** Wear what you would wear to an interview for the job you're targeting. It shows professionalism.
      `,
    },
    {
      title: 'How to Highlight Your Skills on Camera',
      description: 'Techniques to confidently showcase your technical and soft skills.',
      content: `
Instead of just listing skills, tell a short story. Use the STAR method (Situation, Task, Action, Result) to describe a project or challenge. For example:

> “In my last project (Situation), I was tasked with improving app performance (Task). I implemented code-splitting and lazy loading (Action), which resulted in a 30% faster load time (Result).”
      `,
    },
    {
      title: 'Understanding AI-Powered Job Matching',
      description: "A look under the hood at how our AI connects you with the right jobs.",
      content: `
Our AI does more than just match keywords. It analyzes the sentiment, confidence, and clarity of your video to understand your soft skills. It also extracts technical skills and concepts you mention. This holistic profile is then compared against a recruiter's job description to find the best potential fit.
      `,
    },
    {
      title: 'Dressing for Success: What to Wear',
      description: 'Simple tips on professional attire for your video resume.',
      content: `
For most industries, business casual is a safe bet. Solid colors tend to look better on camera than busy patterns. Ensure your clothes are clean and wrinkle-free. Your goal is to look polished and professional, so the focus remains on you and what you're saying.
      `,
    },
  ];

  const recruiterArticles = [
    {
      title: 'Getting the Most Out of Video Resumes',
      description: 'How to quickly assess candidates and identify key potential.',
      content: `
Look beyond the words. A video resume reveals a candidate's communication skills, enthusiasm, and professionalism in a way a text resume cannot. Use the AI-generated score as a baseline, but also pay attention to how clearly they articulate their thoughts and experience.
      `,
    },
    {
      title: 'Identifying Top Talent in 60 Seconds',
      description: "Use our platform's features to streamline your screening process.",
      content: `
Use the AI-extracted skills tags to quickly filter candidates. The video score gives you an immediate impression of their presentation skills. You can screen dozens of candidates in the time it would take to read a few traditional resumes.
      `,
    },
    {
      title: 'Best Practices for AI-Assisted Hiring',
      description: 'Leverage AI to reduce bias and find hidden gems in the talent pool.',
      content: `
AI can help surface candidates who may not have the 'perfect' resume but possess excellent soft skills and potential. Use the AI analysis as a tool to broaden your perspective, not as a final decision-maker.
      `,
    },
    {
      title: 'Crafting Job Descriptions for Better Matches',
      description: 'Tips for writing job posts that attract the right candidates for our AI.',
      content: `
Be specific about the skills and qualities you're looking for. Use clear and common terminology for technical skills. Describe the company culture and the type of personality that thrives in your team. 
      `,
    },
  ];

  return (
    <>
      <ArticleModal article={selectedArticle} onClose={() => setSelectedArticle(null)} />

      <div className="min-h-screen bg-gray-50 pt-24 px-4 sm:px-6 lg:px-8 font-inter">
        <div className="max-w-5xl mx-auto py-12">
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-extrabold text-gray-900 leading-tight">
              Resources & <span className="text-blue-600">Guides</span>
            </h1>
            <p className="mt-6 text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
              Everything you need to succeed on ascra. Browse our articles and guides to get started.
            </p>
          </div>

          <section className="mb-16">
            <h2 className="text-3xl font-bold text-gray-800 mb-8 flex items-center">
              <GraduationCapIcon className="h-8 w-8 mr-3 text-blue-600" />
              For Students
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {studentArticles.map((article, idx) => (
                <Card key={idx} className="p-6 shadow-md hover:shadow-lg transition-shadow">
                  <CardTitle className="text-xl mb-2">{article.title}</CardTitle>
                  <CardDescription className="mb-4">{article.description}</CardDescription>
                  <Button variant="link" onClick={() => setSelectedArticle(article)}>
                    Read More &rarr;
                  </Button>
                </Card>
              ))}
            </div>
          </section>

          <section>
            <h2 className="text-3xl font-bold text-gray-800 mb-8 flex items-center">
              <UsersIcon className="h-8 w-8 mr-3 text-green-600" />
              For Recruiters
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {recruiterArticles.map((article, idx) => (
                <Card key={idx} className="p-6 shadow-md hover:shadow-lg transition-shadow">
                  <CardTitle className="text-xl mb-2">{article.title}</CardTitle>
                  <CardDescription className="mb-4">{article.description}</CardDescription>
                  <Button variant="link" onClick={() => setSelectedArticle(article)}>
                    Read More &rarr;
                  </Button>
                </Card>
              ))}
            </div>
          </section>
        </div>
      </div>
    </>
  );
};

export default ResourcesPage;
