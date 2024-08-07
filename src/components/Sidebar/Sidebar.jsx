/* eslint-disable no-unused-vars */
import { Link,NavLink,useLocation } from "react-router-dom"
import { useState,useEffect } from 'react';

export const Sidebar = () => {
    const location = useLocation();
    const [activeTab, setactiveTab] = useState('')
    const [isToggleSubmenu, setisToggleSubmenu] = useState(false)
    const isOpenSubmenu = async(index) =>{
        if(index === activeTab){
          setactiveTab('');
          setisToggleSubmenu(!isToggleSubmenu)
        }else{
          setactiveTab(index);
          setisToggleSubmenu(!isToggleSubmenu)
        }
    }

    useEffect(() => {
      // This effect will run after each state update
    }, [activeTab]);
    
  return (
    <>
    {/* ======= Sidebar ======= */}
  <aside id="sidebar" className="sidebar">
    <ul className="sidebar-nav" id="sidebar-nav">
      <li className="nav-item">
        <NavLink className="nav-link" to='/' onClick={()=> isOpenSubmenu(0)}
        >
          <i className="bi bi-grid" />
          <span>Dashboard</span>
        </NavLink>
      </li>
      <li className="nav-item">
        <NavLink className="nav-link"   to='/dashboard2' onClick={()=> isOpenSubmenu(1)}
        >
          <i className="bi bi-grid" />
          <span>Customer Details</span>
        </NavLink>
      </li>
      {/* End Dashboard Nav */}
      <li className="nav-item">

        <Link className={`nav-link ${activeTab !== 2 ?'collapsed':''}`}
          data-bs-target="#components-nav"
          data-bs-toggle="collapse"
          onClick={()=> isOpenSubmenu(2)}
          >
          <i className="bi bi-menu-button-wide" />
          <span>Inventory</span>
          <i className="bi bi-chevron-down ms-auto" />
        </Link>
        <ul
          id="components-nav"
          className={`nav-content collapse ${activeTab === 2 ?'show':''}`}
          data-bs-parent="#sidebar-nav"
        >
          <li>
            <NavLink to="/alert" activeclassname="active">
              <i className="bi bi-circle" />
              <span>Stocks</span>
            </NavLink>
          </li>
          <li>
          <NavLink to="/sample" activeclassname="active">
              <i className="bi bi-circle" />
              <span>Purchase</span>
            </NavLink>
          </li>
          <li>
          <NavLink to="/sample" activeclassname="active">
              <i className="bi bi-circle" />
              <span>Supplier</span>
            </NavLink>
          </li>
          
          
        </ul>
      </li>
      {/* End Components Nav */}
      <li className="nav-item">
        <Link
          className={`nav-link ${activeTab !== 3 ?'collapsed':''}`}
          data-bs-target="#forms-nav"
          data-bs-toggle="collapse"
          onClick={()=> isOpenSubmenu(3)}
        >
          <i className="bi bi-journal-text" />
          <span>Products</span>
          <i className="bi bi-chevron-down ms-auto" />
        </Link>
        <ul
          id="forms-nav"
          className={`nav-content collapse ${activeTab === 3 ?'show':''}`}
          data-bs-parent="#sidebar-nav"
        >
          <li>
            <a href="forms-elements.html">
              <i className="bi bi-circle" />
              <span>Form Elements</span>
            </a>
          </li>
          <li>
            <a href="forms-layouts.html">
              <i className="bi bi-circle" />
              <span>Form Layouts</span>
            </a>
          </li>
          <li>
            <a href="forms-editors.html">
              <i className="bi bi-circle" />
              <span>Form Editors</span>
            </a>
          </li>
          <li>
            <a href="forms-validation.html">
              <i className="bi bi-circle" />
              <span>Form Validation</span>
            </a>
          </li>
        </ul>
      </li>
      {/* End Forms Nav */}
      
    </ul>
  </aside>
  {/* End Sidebar*/}
    </>
  )
}
