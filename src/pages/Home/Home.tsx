import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import NavLink from '../../assets/styles/GlobalLink';
import Components from '../../components';
import hooks from '../../hooks';
import HomeWrapper from './HomeStyles';

export default function Home() {
  const { categories } = hooks.useCategories();
  const navigate = useNavigate();

  return (
    <HomeWrapper.Container>
      <Components.BreadCrumbs />
      <Components.PageTitle title="Categorias/Gêneros musicais" />
      <div>
        {categories?.map((category) => (
          <div className="categories">
            <div className="card" onClick={() => navigate(`/${category.name}`)}>
              <img src={category.imageUrl} alt="category-img" />
            </div>
            <h2>{category.name}</h2>
          </div>
        ))}
      </div>
    </HomeWrapper.Container>
  );
}
