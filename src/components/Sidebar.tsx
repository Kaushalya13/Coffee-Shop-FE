import { 
    BsCart3, BsGrid1X2Fill, BsFillArchiveFill, BsPeopleFill, BsListCheck, 
    BsMenuButtonWideFill, BsBellFill, BsGearFill, BsQuestionCircleFill  
} from "react-icons/bs";

const Sidebar = () => {
    return (
        <aside id="sidebar" className="w-[200px] h-screen bg-black text-white p-4">
            {/* Sidebar Title */}
            <div className="sidebar-title mb-6">
                <div className="sidebar-brand flex items-center gap-2">
                    <BsCart3 className="text-xl" />
                    <span className="text-lg font-semibold text-red-400">Shop</span>
                </div>
            </div>

            {/* Sidebar List */}
            <ul className="sidebar-list py-4 ">
                {/* Main Navigation Links */}
                {[
                    { icon: BsGrid1X2Fill, text: "Dashboard", link: "#" },
                    { icon: BsPeopleFill, text: "Customers", link: "#" },
                    { icon: BsMenuButtonWideFill, text: "Reports", link: "#" },
                ].map((item, index) => (
                    <li key={index} className="sidebar-list-item">
                        <a
                            href={item.link}
                            className="flex items-center gap-5 text-white p-2 hover:bg-white hover:text-black hover:rounded-lg transition-all duration-200"
                        >
                            <item.icon className="text-xl" />
                            <span className="text-lg">{item.text}</span>
                        </a>
                    </li>
                ))}

                {/* Stock & Order Section */}
                <li className="mt-4">
                    <span className="text-sm font-medium text-gray-400 uppercase pl-2">Stock & Order</span>
                    <ul className="mt-2 py-2 ">
                        {[
                            { icon: BsFillArchiveFill, text: "Products", link: "#" },
                            { icon: BsListCheck, text: "Orders", link: "#" },
                        ].map((item, index) => (
                            <li key={index} className="sidebar-list-item">
                                <a
                                    href={item.link}
                                    className="flex items-center gap-4 text-white p-2 hover:bg-white hover:text-black hover:rounded-lg  transition-all duration-200"
                                >
                                    <item.icon className="text-lg" />
                                    <span className="text-base">{item.text}</span>
                                </a>
                            </li>
                        ))}
                    </ul>
                </li>

                {/* Communication Section */}
                <li className="mt-4">
                    <span className="text-sm font-medium text-gray-400 uppercase pl-2">Communication</span>
                    <ul className="mt-2 py-2 ">
                        {[
                            { icon: BsBellFill, text: "Notification", link: "#" },
                        ].map((item, index) => (
                            <li key={index} className="sidebar-list-item">
                                <a
                                    href={item.link}
                                    className="flex items-center gap-4 text-white p-2 hover:bg-white hover:text-black hover:rounded-lg transition-all duration-200"
                                >
                                    <item.icon className="text-lg" />
                                    <span className="text-base">{item.text}</span>
                                </a>
                            </li>
                        ))}
                    </ul>
                </li>

                {/* Settings Section */}
                <li className="mt-4">
                    <span className="text-sm font-medium text-gray-400 uppercase pl-2">Settings</span>
                    <ul className="mt-2 py-2">
                        {[
                            { icon: BsGearFill, text: "Preferences", link: "#" },
                            { icon: BsQuestionCircleFill, text: "Help", link: "#" },
                        ].map((item, index) => (
                            <li key={index} className="sidebar-list-item">
                                <a
                                    href={item.link}
                                    className="flex items-center gap-4 text-white p-2 hover:bg-white hover:text-black hover:rounded-lg transition-all duration-200"
                                >
                                    <item.icon className="text-lg" />
                                    <span className="text-base">{item.text}</span>
                                </a>
                            </li>
                        ))}
                    </ul>
                </li>
            </ul>
        </aside>
    );
};

export default Sidebar;
