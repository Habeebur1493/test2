import { NavLink } from "react-router-dom"

const Nav = () => {
  return (
    <nav>
            <div className="logo">
              <img src="src\Frontend\Firstpage\M-removebg-preview.png" />
              <h1>ary London</h1>
            </div>

            <ul>
              <li>
                <a href="#">Home</a>
              </li>
              <li>
                <a href="#">About</a>
              </li>
              <li>
                <a href="#">Services</a>
              </li>
              <li>
                <a href="#">Contact</a>
              </li>
              <li>
                <a href="#">Blog</a>
              </li>
            </ul>
          </nav>
  )
}

export default Nav