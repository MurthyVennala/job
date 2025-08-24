import React, { useState } from 'react';
import Card from '../ui/Card';
import Button from '../ui/Button';
import clsx from 'clsx';

interface JobDescriptionProps {
  description: string;
}

export default function JobDescription({ description }: JobDescriptionProps): React.ReactNode {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <Card>
      <h2 className="text-xl font-bold mb-4">Job Details</h2>
      <div className="relative">
        <div 
          className={clsx(
            "prose prose-sm dark:prose-invert max-w-none prose-headings:font-semibold transition-all duration-300",
            !isExpanded && "line-clamp-5"
          )}
          dangerouslySetInnerHTML={{ __html: description }}
        />
        <div className="text-center mt-4">
          <Button variant="outline" onClick={() => setIsExpanded(!isExpanded)}>
            {isExpanded ? 'Read Less' : 'Read More'}
          </Button>
        </div>
      </div>
    </Card>
  );
}