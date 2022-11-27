import React, { Suspense, useEffect, useState } from 'react'
import { Outlet, useNavigate } from 'react-router-dom';
import NotificationsIcon from '@mui/icons-material/Notifications';
import { Badge, IconButton, Stack } from '@mui/material';
import Logout from '../../assets/images/Logout.png'
import { paths } from '../../configs/constants';
import AdminSideBar from './includes/AdminSideBar';
import { authService } from '../../services/authService';
import { adminNavMenuList } from '../../configs/sideMenuItem';
import clsx from 'clsx';
import {
  FormatAlignLeft as IconFormatAlignLeft,
} from '@mui/icons-material';



export default function AdminLayout() {
  const navigate = useNavigate();
  const isDesktop = useMediaQuery('(min-width: 768px)');
  const [_toggleSidebar, _setToggleSidebar] = useState<boolean>(false);


  const adminLogout = () => {
    authService.removeUser();
    navigate(paths.home);
  }

  const toggleSidebarClick = () => {
    _setToggleSidebar(!_toggleSidebar);
  }

  useEffect(() => {
    _setToggleSidebar(!isDesktop);
  }, [isDesktop])

  useEffect(() => {
    const tempUser: any = authService.user();
    if (!tempUser) {
      navigate(paths.home);
      return () => { };
    }
  }, []); // eslint-disable-line react-hooks/exhaustive-deps


  return (<>
    <Suspense fallback={null}>
      <div className="min-vh-100">
        <div>
          <AdminSideBar adminNavMenuList={adminNavMenuList} toggleSidebar={_toggleSidebar} />
        </div>
        <div>
          <div className={clsx("navHeader", _toggleSidebar && 'navHeaderFull')}>
            <Stack direction="row" spacing={2} className="align-items-center bg-white py-3 px-3 justify-content-between">
              <IconButton onClick={toggleSidebarClick}><IconFormatAlignLeft /></IconButton>
              <div>

                <span className='bolder' role="button" onClick={adminLogout}>Logout<img src={Logout} style={{ width: "1.5rem" }} className="ms-3" /></span>
              </div>
            </Stack>
            <hr style={{ margin: "0px" }} />
          </div>
          <main className={clsx('contentPage', _toggleSidebar && 'contentPageFull')}>
            <div className='rounded--1 bg-light m-2 p-3 min-vh-100'>
            <Outlet />
            </div>
          </main>
        </div>
      </div>
    </Suspense>
  </>)
}

const useMediaQuery = (query: any) => {
  const [matches, setMatches] = useState(false);
  useEffect(() => {
    const media = window.matchMedia(query);
    if (media.matches !== matches) {
      setMatches(media.matches);
    }
    const listener = () => setMatches(media.matches);
    window.addEventListener("resize", listener);
    return () => window.removeEventListener("resize", listener);
  }, [matches, query]);

  return matches;
}
