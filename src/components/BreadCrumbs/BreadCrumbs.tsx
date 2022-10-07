import { Breadcrumbs, Typography } from '@mui/material';
import NavLink from '../../assets/styles/GlobalLink';

interface IBreadCrumbs {
  currentPage?: string
  pageOne?: string
  pageTwo?: string
  pageThree?: string
}

export default function BreadCrumbs({
  currentPage, pageOne, pageTwo, pageThree,
}: IBreadCrumbs) {
  return (
    <Breadcrumbs aria-label="breadcrumb" style={{ marginTop: '100px' }}>
      <NavLink to="/">Página Inicial</NavLink>
      {pageOne ? <NavLink to={`/${pageOne}`}>{pageOne}</NavLink> : ''}
      {pageTwo ? <NavLink to={`/${pageOne}/${pageTwo}`}>{pageTwo}</NavLink> : ''}
      {pageThree ? <NavLink to={`/${pageOne}/${pageTwo}/${pageThree}`}>{pageThree}</NavLink> : ''}
      {currentPage ? <Typography color="gray">{currentPage}</Typography> : ''}
    </Breadcrumbs>
  );
}
