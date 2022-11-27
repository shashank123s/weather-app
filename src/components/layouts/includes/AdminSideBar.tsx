import clsx from 'clsx';
import { NavLink } from 'react-router-dom';
import logo from '../../../assets/images/logo.png'

export default function AdminSideBar({ adminNavMenuList, toggleSidebar }: any) {
    return (
        <div className={clsx('bg-primary p-3 sideMenuLayout', toggleSidebar && 'sideMenuCollapsed')}>
            <div className='bg-white rounded--2 mb-3 text-center sideMenuTitleSection'>
                {/* <img src={logo} alt={"Bharat-RE"} style={{ height: '80px' }} /> */}
                <h3 className="pt-3">Weather app</h3>
            </div>
            <div className="sideMenuList">
                <ul className="nav flex-column mb-auto gap-1" id="side-menu" style={{ whiteSpace: "nowrap" }}>
                    {adminNavMenuList?.map((item: any, index: number) => <NavItem key={index} index={index} item={item} />)}
                </ul>
            </div>
        </div>
    )
}
const NavIcon = ({ icon = '' }) => {
    if (icon === '') return null;
    return <img src={icon} />;
}

const NavItem = ({ index, item }: any) => {
    if (!item.sub) {
        return (
            <li>
                <NavLink to={item.to} className={clsx('nav-link d-flex side-menu-item rounded--1 text-white')} style={{ padding: '1rem 1.25rem' }}>
                    <div className="flex-shrink-0" style={{ width: '2.4rem' }}>
                        <div className='imgActive' >
                            <NavIcon icon={item.icon} />
                        </div>
                    </div>
                    <div className="flex-shrink-1">{item.name}</div>
                </NavLink>
            </li>
        );
    }

    if (item.sub) {
        return (
            <li>
                <NavLink to={item.to} className="nav-link d-flex accordion-button collapsed bg-transparent border-0 side-menu-item rounded--1 text-white" data-bs-toggle="collapse" data-bs-target={'#ul-menu-' + index} aria-expanded="false">
                    <div className="flex-shrink-0" style={{ width: '2.4rem' }}>
                        <div className='imgActive' >
                            <NavIcon icon={item.icon} />
                        </div>
                    </div>
                    <div className="flex-shrink-1">{item.name}</div>
                </NavLink>
                <div className="accordion-collapse collapse" id={'ul-menu-' + index} data-bs-parent="#side-menu">
                    <ul className="nav  flex-column pb-3 mt-3" style={{ marginLeft: '2.6rem' }}>
                        {item.sub.map((subItem: any, subIndex: number) => (
                            <li key={subIndex}>
                                <NavLink to={subItem.to} className="nav-link fw-normal side-menu-sub-item rounded-0  text-white">
                                    {subItem.name}
                                </NavLink>
                            </li>
                        ))}
                    </ul>
                </div>
            </li>
        );
    }
    return null;
};
