import React from 'react';

function ResultDisplay({ generatedEntries }) {
  return (
    <div>
      <h2>Generated Entries:</h2>
      <ul>
        {generatedEntries.map((entry, index) => (
          <li key={index}>Entry {index + 1}: {entry}</li>
        ))}
      </ul>
    </div>
  );
}

export default ResultDisplay;
