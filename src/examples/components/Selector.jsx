import React, { useState, useEffect } from 'react';

export default ({ onSelect, valueExtractor, dataSrc = [] }) => {
  const [selected, setSelected] = useState(0);

  useEffect(
    () => onSelect(React.createElement(dataSrc[selected].comp)),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [selected]
  );

  return (<select onChange={(e) => setSelected(e.target.value)}>
    {dataSrc.map((src, i) => <option key={valueExtractor(src)} value={i}>{valueExtractor(src)}</option>)}
  </select>);
};
