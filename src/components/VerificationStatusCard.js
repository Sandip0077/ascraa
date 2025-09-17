// src/components/VerificationStatusCard.js

import React, { useState } from 'react';


import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
} from './ui/card';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { Loader2, CheckCircle2, XCircle } from 'lucide-react';

const VerificationStatusCard = ({ docStatus, onVerify }) => {
  const [loading, setLoading] = useState(false);

  const getStatusBadge = (status) => {
    switch (status) {
      case 'Verified':
        return <Badge className="bg-green-500 hover:bg-green-600">✅ Verified</Badge>;
      case 'Verification Failed':
        return <Badge className="bg-red-500 hover:bg-red-600">❌ Failed</Badge>;
      case 'Verification Pending':
        return <Badge className="bg-yellow-500 hover:bg-yellow-600">⏳ Pending</Badge>;
      default:
        return <Badge className="bg-gray-400 hover:bg-gray-500">❓ Not Verified</Badge>;
    }
  };

  const handleClick = async () => {
    setLoading(true);
    await onVerify(); // simulate API call
    setLoading(false);
  };

  return (
    <Card className="mb-10 border shadow-sm max-w-xl mx-auto">
      <CardHeader>
        <CardTitle className="text-center text-xl font-semibold">
          📄 Document Verification
        </CardTitle>
      </CardHeader>
      <CardContent className="flex flex-col items-center gap-4 pb-6">
        <div className="text-md font-medium text-gray-700">
          Status: {getStatusBadge(docStatus)}
        </div>
        <Button
          onClick={handleClick}
          disabled={loading}
          className="px-6 py-2 text-md"
        >
          {loading ? (
            <>
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              Verifying...
            </>
          ) : (
            'Verify Documents'
          )}
        </Button>
      </CardContent>
    </Card>
  );
};

export default VerificationStatusCard;
