/* eslint-disable no-unused-vars */
import Container from 'react-bootstrap/Container';
import '../index.css'
import logo from '../assets/img/mechanfo.png'
import avatar from '../assets/img/profile-img.jpg'
import { Bell, ChatLeftText, Grid, JournalText, List, MenuButtonWide } from 'react-bootstrap-icons';
import { BiSearch } from 'react-icons/bi';
import { Outlet } from 'react-router-dom';
import { Sidebar } from '../components/Sidebar/Sidebar';
import { Header } from '../components/Header/Header';

function DashboardLayout() {
  return (
    <Container fluid >
      <Sidebar/>
      <Header/>
      <Outlet/>
    </Container>
  )
}

export default DashboardLayout