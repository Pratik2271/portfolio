

import React from 'react';

import { Icons } from './icons';

// CUSTOM ICONS
import InstagramIcon from '@material-ui/icons/'; // Ensure this import exists if you use Material UI
import SettingsInputAntennaIcon from '@material-ui/icons/SettingsInputAntenna';
import WbIridescentIcon from '@material-ui/icons/WbIridescent';
import BusinessCenterIcon from '@material-ui/icons/BusinessCenter';
import ComputerIcon from '@material-ui/icons/Computer';
import InfoIcon from '@material-ui/icons/Info';
import RateReviewIcon from '@material-ui/icons/RateReview';
import Description from '@material-ui/icons/Description';

// CUSTOM COMPONENTS
import CircleButton from '../components/CircleButton/CircleButton';

// CONFIGURABLE TEXT BEGINS HERE

/** Common config for top section and footer */
/** Common config for top section and footer */
const CommonConfig = {
    // Whether to add the free Palestine screen at the start
    addFreePalestine: false,
    // Name that will be displayed at the top
    name: 'Pratik Shinde',
    // Tagline that will be displayed after the name
    tagline: 'Web Developer',
    // Configuration for signature in the top section
    signature: {
        viewBox: '0 0 24 26',
        signaturePathD: `
       M1.293,12.7073a.9994.9994,0,0,1,0-1.414l4-4a1,1,0,1,1,1.414,1.414L3.4141,12l3.2929,3.293a1,1,0,1,1-1.414,1.414Zm17.414-5.414a1,1,0,1,0-1.414,1.414L20.5859,12l-3.2929,3.293a1,1,0,1,0,1.414,1.414l4-4a.9994.9994,0,0,0,0-1.414ZM13.03,3.7576l-4,16a1,1,0,0,0,1.94.4854l4-16a1,1,0,1,0-1.94-.4854Z
       
        `,
    },

    email: 'm.fawaadali98@gmail.com',
    // Information for social media accounts
    social: [
        {
            // Name of the social media platform
            name: 'GitHub',
            // Link to your account
            link: 'https://github.com/pratikdotcom',
            // (Optional) Icon of the social media platform
            // default icon will be used in case of no value
            icon: Icons['github']
        },
        {
            name: 'LinkedIn',
            link: 'https://www.linkedin.com/in/pratik-shinde-b8715a247/'
        },
        {
            name: 'Instagram',
            link: 'https://www.instagram.com/prateeksteaparty/',
            icon: Icons['instagram'] // Assuming you have an Instagram icon imported in your `Icons` module
        },
        {
            name: 'Twitter',
            link: 'https://x.com/MRINVINCIB52361/following'
        },
        {
            name: 'Email',
            link: 'mailto:shindepratik624@gmail.com'
        },
        {
            name: 'CV',
            link: 'https://drive.google.com/file/d/1Tyaew-dk0q9AoIZRElRjFJNi9zybJeZ5/view?usp=sharing',
            icon: <Description />
        }
    ]
};


/** Config for the projects section */
const ProjectsConfig = {
    // Name / title of the section
    name: 'projects',
    // Icon next to the header title. The headerIcon can use any SVG icon, material icons are preferred
    // See https://material-ui.com/components/material-icons/
    headerIcon: <ComputerIcon />,
    // Extra classes to apply styling
    // "section-reverse" class makes a section flow from right to left
    extraClass: '',
    // Projects
    projects: [
        {
            // Name of the project
            name: 'Weatherly - API Based Web Application',
            // Icon of the project
            icon: Icons['map'],
            // Description of the project
            description: 'Developed "Weatherly" using HTML, CSS, and JavaScript to provide real-time weather updates via OpenWeather API. Designed an intuitive, responsive interface for users to input locations and receive accurate weather data instantly.',
            // Links to the project
            links: [
                {
                    // Tooltip of the link
                    tooltip: 'See source',
                    // Link URL
                    link: 'https://github.com/pratikdotcom/Weatherly',
                    // Icon of the button
                    icon: Icons['code']
                },
                {
                    tooltip: 'See app',
                    link: 'https://github.com/pratikdotcom/Weatherly',
                    icon: Icons['link']
                }
            ]
        },
        {
            name: 'Dice Game',
            icon: <SettingsInputAntennaIcon />,
            description: 'Created an interactive Dice Game using HTML, CSS, and JavaScript with dynamic dice rolling and outcome determination.',
            links: [
                {
                    tooltip: 'See source',
                    link: 'https://github.com/pratikdotcom/Virtual-IPL',
                    icon: Icons['code']
                }
            ]
        },
        {
            name: 'Todo List',
            icon: <WbIridescentIcon />,
            description: 'Created a Todo List application using React for the frontend and Node.js with MongoDB for the backend.Implemented CRUD operations for managing tasks effectively, providing users with a seamless and interactive task management experience.',
            links: [
                {
                    tooltip: 'See source',
                    link: 'https://github.com/hsf/phoenix',
                    icon: Icons['code']
                },
                {
                    tooltip: 'See app',
                    link: 'https://github.com/pratikdotcom/todo-list',
                    icon: Icons['link']
                }
            ]
        },
       
    ]
};

/** Config for sections */
const CustomSectionsConfig = [
    // PROJECTS SECTION
    {
        // Name of the section
        name: 'projects',
        // Icon next to the header title. The headerIcon can use any SVG icon, material icons are preferred
        // See https://material-ui.com/components/material-icons/
        headerIcon: <ComputerIcon />,
        // Extra classes to apply styling
        // "section-reverse" class makes a section right to left
        extraClass: '',
        // If you don't want a section in menu, make this true
        notInMenu: false,
        // Content inside the section
        content: (
            <>
                {ProjectsConfig.projects.map((project, index) => {
                    return (
                        <div key={'project-' + index}>
                            <h3 style={{ fontSize: '1.4rem' }}>{project.icon} {project.name}</h3>
                            <p>{project.description}</p>
                            <div style={{ textAlign: 'right' }}>
                                {project.links.map((link, linkIndex) => {
                                    return (
                                        <CircleButton key={'project-link-' + index + linkIndex} link={link.link} 
                                            target="_blank" tooltip={link.tooltip} size={1.4}>
                                            {link.icon}
                                        </CircleButton>
                                    );
                                })}
                            </div>
                        </div>
                    );
                })}
            </>
        )
    },
    // ABOUT SECTION
    {
        name: 'about',
        headerIcon: <InfoIcon />,
        extraClass: 'about-section section-reverse',
        content: (
            <>
                <h4>{Icons['helpoutline']} who is this guy?</h4>
                <p>
                    An easily excited and a highly passionate full stack developer trying to support the world of open source with his little efforts. Full of eagerness to learn and work on new technologies. :)
                </p>

                <h4>{Icons['code']} programming</h4>
                <p className="programming-icons">
                    {Icons['java']}
                    {Icons['cpp']}
                    {Icons['typescript']}
                    {Icons['javascript']}
                </p>

                <h4>{Icons['web']} web</h4>
                <p className="programming-icons">
                    {Icons['mysql']}
                    {Icons['mongodb']}
                    {Icons['nodejs']}
                    {Icons['react']}
                    
                </p>
            </>
        )
    },
    {
        name: 'reviews',
        headerIcon: <RateReviewIcon />,
        content: (
            <>
                <h4 style={{ fontSize: '2em' }}>{Icons['helpoutline']} what do others say?</h4>
                <p>
                    <span style={{ fontSize: '5rem', height: '30px', display: 'block' }}>“</span>
                    <br />
                    Working with Pratik was a truly exceptional experience. His deep understanding of full-stack development and his ability to tackle complex problems with innovative solutions stood out throughout our project. Pratik’s proficiency with both front-end and back-end technologies allowed him to seamlessly integrate different components of our system. His commitment to delivering high-quality work and his proactive approach to problem-solving significantly contributed to the success of our project. Highly recommended for any tech team looking to enhance their capabilities.
                </p>
                <p style={{ textAlign: 'right', fontSize: 'small' }}>
                    <i>
                        <b>Dwayne Lasrado</b>
                        <br />
                        SDE
                        <br />
                        Dylan Estate
                    </i>
                </p>
                <p>
                    <span style={{ fontSize: '5rem', height: '30px', display: 'block' }}>“</span>
                    <br />
                    Pratik is a fantastic developer with a keen eye for detail and problem-solving. His technical skills and dedication were pivotal in the success of our project. Highly recommended!
                </p>
                <p style={{ textAlign: 'right', fontSize: 'small' }}>
                    <i>
                        <b>Jane Doe &amp; Technical Lead</b>
                        <br />
                        Tech Innovations Inc.
                    </i>
                </p>
              
            </>
        )
    }
];

export { CommonConfig, ProjectsConfig, CustomSectionsConfig, Icons };
