import React from 'react'

const Nav = (props) => {
  return (
    <div>
    <nav className="navbar navbar-default">
  <div className="container-fluid">
    <div className="navbar-header">
    <div className="navbar-brand"><a href='/'>Home</a></div>
      <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1">
        <span className="sr-only">Toggle navigation</span>
        <span className="icon-bar"></span>
        <span className="icon-bar"></span>
        <span className="icon-bar"></span>
      </button>
    </div>

    <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
      <ul className="nav navbar-nav">
        <li className="dropdown">
          <ul className="dropdown-menu" role="menu">
            <li className="divider"></li>
            <li className="divider"></li>
          </ul>
        </li>
      </ul>
      <form className="navbar-form navbar-left" role="search">
        <div className="form-group">
          <input type="text" className="form-control" placeholder="Search" />
        </div>
        <button type="submit" className="btn btn-default">Submit</button>
      </form>
    </div>
  </div>
</nav>
    </div>
  )
}

export default Nav;
