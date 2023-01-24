import { Outlet, Link } from 'react-router-dom';

const Links = () => (
  <>
    <div>
      <Link to="/">Books</Link>
      <Link to="categories">Categories</Link>
    </div>
    <Outlet />

  </>
);
export default Links;
