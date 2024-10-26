import { useState } from 'react';
import { FaUserFriends, FaProjectDiagram, FaPhotoVideo, FaBuilding, FaUserCircle } from 'react-icons/fa';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css'; // Importing CSS for Tabs

const LeftSidebar = () => {
  // State to manage the collapse sections
  const [isContactsOpen, setContactsOpen] = useState(true);
  const [isProjectsOpen, setProjectsOpen] = useState(false);
  const [isAlbumsOpen, setAlbumsOpen] = useState(false);
  const [isOrganizationsOpen, setOrganizationsOpen] = useState(false);

  return (
    <div className="z-10 mt-4 rounded-lg bg-gradient-to-r from-blue-100 via-green-100 to-red-100 h-[calc(100vh-92px)] w-64 shadow-lg p-4 space-y-4 text-[#333] overflow-y-auto">
      
      {/* Contacts Section */}
      <div className="collapse collapse-arrow border border-blue-300 bg-white rounded-box">
        <input
          type="checkbox"
          checked={isContactsOpen}
          onChange={() => setContactsOpen(!isContactsOpen)} // Toggle visibility of Contacts section
        />
        <div className="collapse-title text-lg font-semibold flex items-center text-blue-600 hover:text-blue-500">
          <FaUserFriends className="mr-2" /> Contacts
        </div>
        <div className="collapse-content space-y-2">
          {/* Contact list */}
          <div className="flex items-center text-[#444]">
            <FaUserCircle className="w-8 h-8 mr-2 text-blue-600" />
            <span>Henry</span>
          </div>
          <div className="flex items-center text-[#444]">
            <FaUserCircle className="w-8 h-8 mr-2 text-blue-600" />
            <span>Agnes</span>
          </div>
          <div className="flex items-center text-[#444]">
            <FaUserCircle className="w-8 h-8 mr-2 text-blue-600" />
            <span>John</span>
          </div>
          {/* Buttons for additional actions */}
          <div className="flex space-x-4 mt-2">
            <button
              className="text-blue-500 text-sm hover:text-blue-700"
              onClick={() => alert('View All Contacts')}
            >
              View All
            </button>
            <button
              className="text-green-500 text-sm hover:text-green-700"
              onClick={() => alert('Open Add Contact Modal')}
            >
              + Add
            </button>
          </div>
        </div>
      </div>

      {/* Projects Section */}
      <div className="collapse collapse-arrow border border-blue-300 bg-white rounded-box">
        <input
          type="checkbox"
          checked={isProjectsOpen}
          onChange={() => setProjectsOpen(!isProjectsOpen)} // Toggle visibility of Projects section
        />
        <div className="collapse-title text-lg font-semibold flex items-center text-blue-600 hover:text-blue-500">
          <FaProjectDiagram className="mr-2" /> Projects
        </div>
        <div className="collapse-content space-y-2 text-[#444]">
          {/* Project list */}
          <div>Project Alpha</div>
          <div>Project Beta</div>
          <div>Project Gamma</div>
          {/* Buttons for additional actions */}
          <div className="flex space-x-4 mt-2">
            <button
              className="text-blue-500 text-sm hover:text-blue-700"
              onClick={() => alert('View All Projects')}
            >
              View All
            </button>
            <button
              className="text-green-500 text-sm hover:text-green-700"
              onClick={() => alert('Open Add Project Modal')}
            >
              + Add
            </button>
          </div>
        </div>
      </div>

      {/* Albums Section */}
      <div className="collapse collapse-arrow border border-blue-300 bg-white rounded-box">
        <input
          type="checkbox"
          checked={isAlbumsOpen}
          onChange={() => setAlbumsOpen(!isAlbumsOpen)} // Toggle visibility of Albums section
        />
        <div className="collapse-title text-lg font-semibold flex items-center text-blue-600 hover:text-blue-500">
          <FaPhotoVideo className="mr-2" /> Albums
        </div>
        <div className="collapse-content space-y-2 text-[#444]">
          {/* Album list */}
          <div>Vacation 2024</div>
          <div>Wedding Photos</div>
          <div>Family Album</div>
          {/* Buttons for additional actions */}
          <div className="flex space-x-4 mt-2">
            <button
              className="text-blue-500 text-sm hover:text-blue-700"
              onClick={() => alert('View All Albums')}
            >
              View All
            </button>
            <button
              className="text-green-500 text-sm hover:text-green-700"
              onClick={() => alert('Open Add Album Modal')}
            >
              + Add
            </button>
          </div>
        </div>
      </div>

      {/* Organizations Section */}
      <div className="collapse collapse-arrow border border-blue-300 bg-white rounded-box">
        <input
          type="checkbox"
          checked={isOrganizationsOpen}
          onChange={() => setOrganizationsOpen(!isOrganizationsOpen)} // Toggle visibility of Organizations section
        />
        <div className="collapse-title text-lg font-semibold flex items-center text-blue-600 hover:text-blue-500">
          <FaBuilding className="mr-2" /> Organizations
        </div>
        <div className="collapse-content space-y-2 text-[#444]">
          {/* Organization list */}
          <div>Organization Alpha</div>
          <div>Organization Beta</div>
          <div>Organization Gamma</div>
          {/* Buttons for additional actions */}
          <div className="flex space-x-4 mt-2">
            <button
              className="text-blue-500 text-sm hover:text-blue-700"
              onClick={() => alert('View All Organizations')}
            >
              View All
            </button>
            <button
              className="text-green-500 text-sm hover:text-green-700"
              onClick={() => alert('Open Add Organization Modal')}
            >
              + Add
            </button>
          </div>
        </div>
      </div>

      {/* Followers & People You Follow Section with Tabs */}
      <div className="card w-full bg-white shadow-md border border-blue-300">
        <div className="card-body">
          <Tabs>
            {/* Tab headers */}
            <TabList className="tabs">
              <Tab className="tab tab-bordered tab-active text-blue-600">Followers</Tab>
              <Tab className="tab tab-bordered text-blue-600">Following</Tab>
            </TabList>

            {/* Tab panel for Followers */}
            <TabPanel>
              <div className="flex space-x-3 py-4">
                <div className="avatar">
                  <div className="w-10 rounded-full ring ring-blue-300 ring-offset-2">
                    <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" alt="Follower 1" />
                  </div>
                </div>
                <div className="avatar">
                  <div className="w-10 rounded-full ring ring-blue-300 ring-offset-2">
                    <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" alt="Follower 2" />
                  </div>
                </div>
              </div>
              <button className="text-blue-500 text-sm hover:text-blue-700">View All</button>
            </TabPanel>

            {/* Tab panel for Following */}
            <TabPanel>
              <div className="flex space-x-3 py-4">
                <div className="avatar">
                  <div className="w-10 rounded-full ring ring-blue-300 ring-offset-2">
                    <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" alt="Following 1" />
                  </div>
                </div>
                <div className="avatar">
                  <div className="w-10 rounded-full ring ring-blue-300 ring-offset-2">
                    <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" alt="Following 2" />
                  </div>
                </div>
              </div>
              <button className="text-blue-500 text-sm hover:text-blue-700">View All</button>
            </TabPanel>
          </Tabs>
        </div>
      </div>
    </div>
  );
};

export default LeftSidebar;
