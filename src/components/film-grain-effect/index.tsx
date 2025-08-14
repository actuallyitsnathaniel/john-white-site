import { memo } from 'react';

const FilmGrainEffect = memo(() => {
  return (
    <div className="grain grain-background animate-grain pointer-events-none" />
  );
});

FilmGrainEffect.displayName = 'FilmGrainEffect';

export default FilmGrainEffect;
