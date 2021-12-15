import React from 'react';
import Index from './index.js';

/**
 * Force renders Index component; 404 page is not needed at the moment.
 */
const NotFound = () => {
  return <Index />;
};

export default NotFound;
