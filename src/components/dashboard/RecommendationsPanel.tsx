
import React from 'react';

type Recommendation = {
  type: string;
  title: string;
  date?: string;
  company?: string;
  platform?: string;
};

type RecommendationsPanelProps = {
  recommendations: Recommendation[];
};

const RecommendationsPanel = ({ recommendations }: RecommendationsPanelProps) => {
  return (
    <div className="bg-white shadow-sm rounded-lg divide-y divide-gray-200">
      <div className="p-4">
        <h2 className="text-lg font-medium">Recommended For You</h2>
      </div>
      <div className="divide-y divide-gray-200">
        {recommendations.map((rec, index) => (
          <div key={index} className="p-4">
            {rec.type === 'event' && (
              <>
                <div className="text-brand-purple font-medium">{rec.title}</div>
                <p className="text-gray-600 text-sm">Event on {new Date(rec.date!).toLocaleDateString()}</p>
              </>
            )}
            {rec.type === 'job' && (
              <>
                <div className="text-brand-purple font-medium">{rec.title}</div>
                <p className="text-gray-600 text-sm">Job at {rec.company}</p>
              </>
            )}
            {rec.type === 'learning' && (
              <>
                <div className="text-brand-purple font-medium">{rec.title}</div>
                <p className="text-gray-600 text-sm">Course on {rec.platform}</p>
              </>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecommendationsPanel;
