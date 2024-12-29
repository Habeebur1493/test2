import { NavLink } from "react-router-dom"

const Nav = () => {
  return (
    <nav>
        
            <div className="logo">
              <img src="src\Frontend\Firstpage\M-removebg-preview.png" />
              <h1>ary London</h1>
            </div>

            <Navlink className={(e) => (e.isActive ? "text-red-600" : "")}
                style={(e) =>
                    e.isActive ? { textdecoration: "underline"} : {}
                }
                to"/"
                >
             Home
            </Navlink>

          </nav>
  )
}

export default Nav