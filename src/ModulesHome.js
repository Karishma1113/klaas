// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import "./Modules.css";

// const ModulesHome = () => {
//   const navigate = useNavigate();
//   const [searchQuery, setSearchQuery] = useState("");

//   const modules = [
//     {
//       title: "Securing Your Google Account",
//       submodules: ["MFA Setup", "Device Setup", "Password Setup", "Private Browsing", "Recovery Email"],
//     },
//     {
//       title: "Securing Kids’ Devices & Talking About Online Safety",
//       submodules: [],
//     },
//     {
//       title: "Module Title",
//       submodules: [],
//     },
//     {
//       title: "Module Title",
//       submodules: [],
//     },
//   ];

//   const filteredModules = modules.filter((module) =>
//     module.title.toLowerCase().includes(searchQuery.toLowerCase())
//   );

//   return (
//     <div className="modules-container">
//       <input
//         type="text"
//         placeholder="Search modules..."
//         className="search-bar"
//         value={searchQuery}
//         onChange={(e) => setSearchQuery(e.target.value)}
//       />

//       <h1 className="modules-title">MODULES</h1>

//       <div className="modules-grid">
//         {filteredModules.length > 0 ? (
//           filteredModules.map((module, index) => (
//             <div key={index} className="module-card">
//               <div className="module-header">
//                 <h2 className="module-title">{module.title}</h2>
//                 <button className="btn overview-btn" onClick={() => navigate(`/module/${index}`)}>
//                   Overview →
//                 </button>
//               </div>

//               {module.submodules.length > 0 && (
//                 <div className="submodules-list">
//                   {module.submodules.map((submodule, idx) => (
//                     <div key={idx} className="submodule-item">
//                       {submodule}
//                       <button className="btn module-btn" onClick={() => navigate(`/module/${index}/submodule/${idx}`)}>
//                         Module →
//                       </button>
//                     </div>
//                   ))}
//                 </div>
//               )}
//             </div>
//           ))
//         ) : (
//           <p className="no-results">No modules found</p>
//         )}
//       </div>
//     </div>
//   );
// };

// export default ModulesHome;


import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Modules.css";

const ModulesHome = () => {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState("");

  const modules = [
    {
      title: "Securing Your Google Account",
      submodules: [
        { name: "MFA Setup", path: "/mfa1" },
        { name: "Device Setup", path: "/device-setup" },
        { name: "Password Setup", path: "/password-setup" },
        { name: "Private Browsing", path: "/private-browsing" },
        { name: "Recovery Email", path: "/recovery-email" },
      ],
    },
    {
      title: "Securing Kids’ Devices & Talking About Online Safety",
      submodules: [],
    },
    {
      title: "Module Title",
      submodules: [],
    },
    {
      title: "Module Title",
      submodules: [],
    },
  ];

  const filteredModules = modules.filter((module) =>
    module.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="modules-container">
      <input
        type="text"
        placeholder="Search modules..."
        className="search-bar"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      />

      <h1 className="modules-title">MODULES</h1>

      <div className="modules-grid">
        {filteredModules.length > 0 ? (
          filteredModules.map((module, index) => (
            <div key={index} className="module-card">
              <div className="module-header">
                <h2 className="module-title">{module.title}</h2>
                <button className="btn overview-btn" onClick={() => navigate(`/module/${index}`)}>
                  Overview →
                </button>
              </div>

              {module.submodules.length > 0 && (
                <div className="submodules-list">
                  {module.submodules.map((submodule, idx) => (
                    <div key={idx} className="submodule-item">
                      {submodule.name}
                      <button className="btn module-btn" onClick={() => navigate(submodule.path)}>
                        Module →
                      </button>
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))
        ) : (
          <p className="no-results">No modules found</p>
        )}
      </div>
    </div>
  );
};

export default ModulesHome;
