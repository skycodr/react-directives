import React, { useState } from 'react';

import { Selector } from './components';

import { EXAMPLES } from './constants';

export default () => {
  const [example, setExample] = useState(null);
  return (
    <>
      <Selector onSelect={(comp) => setExample(comp)} dataSrc={EXAMPLES} valueExtractor={(data) => data.title} />
      {example}
    </>
  );
};
