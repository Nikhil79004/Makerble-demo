import { Outlet } from "react-router-dom";
// import Left from "./LeftSidebar";
import Navbar from "../components/Navbar"
import Right from "./RightSidebar";
import Footer from "../components/Footer";

const Root = () => {
    return (
        <div className="layout">

            {/* Navbar Section */}
            <header>
                <Navbar/>
            </header>

            {/* Main Content Layout */}
            <div className="main-content md:flex">
                {/* Left Panel (Sidebar or Navigation) */}
                <div className="hidden md:flex">
                    <eft/>
                </div>

                {/* Outlet for Main Content */}
                <div
                    className="content"
                    style={{
                        flexGrow: 1,
                        overflowY: 'auto',
                        overflowX: 'hidden',
                        padding: '1rem'
                    }}
                >
                    <Outlet />
                </div>

                {/* Right Panel (Tasks/Notifications/Other) */}
                <div className="hidden md:flex">
                    <Right />
                </div>
            </div>

            {/* Footer Section */}
            <footer>
                <Footer />
            </footer>
        </div>
    );
};

export default Root;
