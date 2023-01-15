import React, { useEffect, useState } from 'react';

import { FALLBACK_IMG_SRC } from '../../constants';

type Props = {
  src: string,
  alt: string,
  className: string
};

const Image: React.FC<Props> = ({ src, alt, className }) => {
  const [source, setSource] = useState(src);

  useEffect(() => setSource(src), [src]);

  return (
    <img
      src={source}
      alt={alt}
      className={className}
      onError={() => setSource(FALLBACK_IMG_SRC)}
    />
  );
};

export default Image;
