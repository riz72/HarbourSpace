import React, { createContext, useContext, useState } from 'react';

const CommitmentContext = createContext();

export function useCommitment() {
  return useContext(CommitmentContext);
}

export function CommitmentProvider({ children }) {
  const [studyCommitment, setStudyCommitment] = useState('');
  const [internshipCommitment, setInternshipCommitment] = useState('');

  return (
    <CommitmentContext.Provider
      value={{
        studyCommitment,
        setStudyCommitment,
        internshipCommitment,
        setInternshipCommitment,
      }}
    >
      {children}
    </CommitmentContext.Provider>
  );
}