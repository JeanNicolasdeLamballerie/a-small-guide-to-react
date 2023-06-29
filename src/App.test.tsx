import React from 'react';
import { render, screen } from '@testing-library/react';
import AppBase from './App';

test( 'renders learn react link', () => {
  render( <AppBase /> );
  const linkElement = screen.getByText( /learn react/i );
  expect( linkElement ).toBeInTheDocument();
} );
