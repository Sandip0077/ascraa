import React from 'react';

// ShadCN/UI components
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardFooter,
} from '../components/ui/card';
import { Button } from '../components/ui/button';

const MessageBox = ({ message, type, onClose }) => {
  if (!message) return null;

  const bgColor = type === 'error' ? 'bg-rose-500' : 'bg-teal-500';
  const title = type === 'error' ? 'Error' : 'Success';

  return (
    <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex items-center justify-center z-50">
      <Card className="p-6 max-w-sm w-full text-center">
        <CardHeader className={`${bgColor} text-white rounded-t-lg -mx-6 -mt-6 p-4`}>
          <CardTitle>{title}</CardTitle>
        </CardHeader>
        <CardContent className="py-4">
          <p className="text-gray-800">{message}</p>
        </CardContent>
        <CardFooter className="flex justify-center">
          <Button
            onClick={onClose}
            className={`${
              type === 'error'
                ? 'bg-rose-600 hover:bg-rose-700'
                : 'bg-teal-600 hover:bg-teal-700'
            } text-white`}
          >
            OK
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
};

export default MessageBox;
