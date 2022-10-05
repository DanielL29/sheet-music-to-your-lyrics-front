import { useState } from 'react';
import NavLink from '../../assets/styles/GlobalLink';
import HomeWrapper from './HomeStyles';

export default function Home() {
  return (
    <HomeWrapper.Container>
      <NavLink to="/Pop/1Kilo/Deixe-me Ir">Music</NavLink>
    </HomeWrapper.Container>
  );
}
