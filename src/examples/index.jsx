import React, { useState } from 'react';

import { Selector } from './components';

import { EXAMPLES } from './snippets';

export default () => {
  const [example, setExample] = useState(null);
  return (
    <>
      <Selector onSelect={(comp) => setExample(comp)} dataSrc={EXAMPLES} valueExtractor={({ title }) => title} />
      {example}
    </>
  );
};
