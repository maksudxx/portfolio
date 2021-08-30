import {Link} from 'react-router-dom'
export default function NavBar() {
  return (
    <nav class="navbar navbar-light bg-light">
      <ul class="nav nav-tabs">
        <li class="nav-item">
          <Link to ='/home' class="nav-link">
            Active
          </Link>
        </li>
        <li class="nav-item">
          <Link to ='/home' class="nav-link" >
            Link
          </Link>
        </li>
        <li class="nav-item">
          <Link to ='/home' class="nav-link" >
            Link
          </Link>
        </li>
        <li class="nav-item">
          <Link to ='/home' class="nav-link">
            Disabled
          </Link>
        </li>
      </ul>
    </nav>
  );
}
