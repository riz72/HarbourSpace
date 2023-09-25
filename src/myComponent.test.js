import React from 'react';
import { render, screen } from '@testing-library/react';
import Commitment from './screens/Commitment';

jest.mock('./components/services/getData.service', () => ({
  fetchData: jest.fn(() => Promise.resolve({
    scholarship: {
      study_commitment: '3',
      study_commitment_text: 'Study commitment description',
      internship_commitment: '30 hours',
      internship_commitment_text: 'Internship commitment description',
    },
  })),
}));

test('renders Commitment component with data', async () => {
  render(<Commitment />);

  await screen.findByText('3');

  // Assertions
  expect(screen.getByText('Study Commitment')).toBeInTheDocument();
  expect(screen.getByText('Study commitment description')).toBeInTheDocument();
  expect(screen.getByText('Work Commitment')).toBeInTheDocument();
  expect(screen.getByText('Internship commitment description')).toBeInTheDocument();
});
