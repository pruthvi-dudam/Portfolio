import React from 'react';
import MenuItems from '../Components/MenuItems';
import Title from '../Components/Title';
import projects from '../Components/allProjects';
import { useState } from 'react';


function ProjectPage() {
    const [menuItems] = useState(projects);


    return (
        <div className="ProjectPage">
            <div className="title">
                <Title title={'Projects'} />
            </div>
            <div className="projects-data">
                <MenuItems menuItem={menuItems} />
            </div>
        </div>
    )
}

export default ProjectPage;
