import React, { Suspense } from 'react';

function About() {
  const LazyComponent = React.lazy(()=>import('../components/LazyComponent'));
  return (
    <div>
      <h2>About</h2>
      <p>This is the About page.</p>
      <Suspense fallback={<div>Loading...</div>}><LazyComponent/></Suspense>
    </div>
  );
}

export default About;
