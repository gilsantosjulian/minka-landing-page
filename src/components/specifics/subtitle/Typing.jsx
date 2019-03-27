import React, { useState } from 'react';
import Typist from 'react-typist';

export default ({ texts, styles }) => {
  const [position, setPosition] = useState(0);
  const [visibility, setVisibility] = useState(true);
    
  const onTypingDone = () => {
    setVisibility(false);
    setPosition(position < texts.length - 1 ? position + 1 : 0);
    setVisibility(true);
  }

  if (visibility)
    return (
      <Typist
        className='cursor'
        onTypingDone={onTypingDone}
        cursor={{ element: '_' }}>
        <Typist.Delay ms={1000} />
        <span
          style={styles[position]}>
          {texts[position]}
        </span>
        <Typist.Backspace count={texts[position].length} delay={1000} />
      </Typist>
    );

  return null;
}