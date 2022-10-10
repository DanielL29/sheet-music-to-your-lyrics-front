import { useState, useEffect } from 'react';
import { useMatch, useLocation } from 'react-router-dom';

export default function useRoute() {
  const [showHeader, setShowHeader] = useState<'show' | 'notfound' | ''>('');
  const location = useLocation();
  const matchSignIn = useMatch('/');
  const matchSignUp = useMatch('/sign-up');
  const matchHome = useMatch('/home');
  const matchMusic = useMatch('/:category/:author/:musicName');
  const matchAllMusics = useMatch('/musics');
  const matchAllAuthors = useMatch('/authors');
  const matchCategory = useMatch('/:category');
  const matchAuthor = useMatch('/:category/:author');
  const matchAddMusic = useMatch('/add-music');

  useEffect(() => {
    if (matchSignIn || matchSignUp) {
      setShowHeader('');
    } else if (
      matchHome
      || matchMusic
      || matchAllMusics
      || matchAllAuthors
      || matchCategory
      || matchAuthor
      || matchAddMusic
    ) {
      setShowHeader('show');
    } else {
      setShowHeader('notfound');
    }
  }, [location]);

  return {
    showHeader,
  };
}
