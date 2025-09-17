import React from 'react';

// ShadCN/UI components
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from '../components/ui/card';
import { Input } from '../components/ui/input';
import { Button } from '../components/ui/button';

// Icon
import { Mail as MailIcon } from 'lucide-react';

const ContactPage = () => (
  <div className="min-h-screen bg-gray-50 pt-24 px-4 sm:px-6 lg:px-8 font-inter">
    <div className="max-w-xl mx-auto py-12">
      <h2 className="text-4xl font-bold text-gray-900 mb-8 text-center">Contact Us</h2>

      <Card className="p-6 shadow-md">
        <CardHeader>
          <MailIcon className="h-8 w-8 text-blue-500 mb-2" />
          <CardTitle>Get in Touch</CardTitle>
          <CardDescription>
            We'd love to hear from you! Please fill out the form below or reach us directly.
          </CardDescription>
        </CardHeader>

        <CardContent className="space-y-4">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
              Your Name
            </label>
            <Input id="name" placeholder="John Doe" />
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
              Your Email
            </label>
            <Input id="email" type="email" placeholder="you@example.com" />
          </div>

          <div>
            <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
              Message
            </label>
            <textarea
              id="message"
              rows="5"
              className="w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-sm placeholder:text-gray-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 transition-all duration-200 ease-in-out"
              placeholder="Your message..."
            />
          </div>

          <Button className="w-full">Send Message</Button>
        </CardContent>

        <CardFooter className="flex flex-col items-center text-center text-gray-600 text-sm">
          <p>
            Or email us directly at:{' '}
            <a href="mailto:support@ascra.com" className="text-blue-600 hover:underline">
              support@ascra.com
            </a>
          </p>
          <p className="mt-2">Follow us on social media for updates!</p>
        </CardFooter>
      </Card>
    </div>
  </div>
);

export default ContactPage;
