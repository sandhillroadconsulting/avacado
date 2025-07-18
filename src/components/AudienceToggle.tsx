import { useState } from 'react';

export type Audience = 'employer' | 'employee';

interface AudienceToggleProps {
  onChange: (audience: Audience) => void;
}

const AudienceToggle = ({ onChange }: AudienceToggleProps) => {
  const [audience, setAudience] = useState<Audience>('employer');

  const handleToggle = (newAudience: Audience) => {
    setAudience(newAudience);
    onChange(newAudience);
  };

  return (
    <div className="relative">
      <div className="flex items-center bg-gray-800 rounded-full p-1 shadow-inner">
        <button
          onClick={() => handleToggle('employer')}
          className={`relative px-6 py-2 text-sm font-medium rounded-full transition-all duration-200 ${
            audience === 'employer'
              ? 'bg-avocado text-white shadow-lg'
              : 'text-gray-400 hover:text-white'
          }`}
        >
          Employer
        </button>
        <button
          onClick={() => handleToggle('employee')}
          className={`relative px-6 py-2 text-sm font-medium rounded-full transition-all duration-200 ${
            audience === 'employee'
              ? 'bg-avocado text-white shadow-lg'
              : 'text-gray-400 hover:text-white'
          }`}
        >
          Employee
        </button>
      </div>
    </div>
  );
};

export default AudienceToggle; 