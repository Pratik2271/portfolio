import React from 'react';
import Menu from './components/Menu/Menu';
import TopSection from './sections/TopSection/TopSection';
import ProjectsSection from './sections/ProjectsSection/ProjectsSection';
import CustomSections from './sections/CustomSections/CustomSections';
import Footer from './sections/Footer/Footer';
import FreePalestine from './components/FreePalestine/FreePalestine';

import { CustomSectionsConfig, CommonConfig } from './CONFIG';

class App extends React.Component {

    constructor(props) {
        super(props);
        const theme = localStorage.getItem('theme');
        if (theme) {
            if (theme === 'dark') {
                document.body.classList.add('dark-mode');
            }
        } else if (window.matchMedia && matchMedia('(prefers-color-scheme: dark)').matches) {
            localStorage.setItem('theme', 'dark');
            document.body.classList.add('dark-mode');
        }

        this.sectionRefs = {
            'projects': React.createRef()
        };

        // Creating refs for sections for smooth scrolling
        CustomSectionsConfig.forEach((customSection) => {
            this.sectionRefs[customSection.name] = React.createRef();
        });

        // Setting document title
        document.title = CommonConfig.name + ' - ' + CommonConfig.tagline;
    }

    render() {
        return (
            <>
                {CommonConfig.addFreePalestine && <FreePalestine />}
                <Menu sectionRefs={this.sectionRefs} />
                <TopSection />
                <ProjectsSection ref={this.sectionRefs['projects']} />
                <CustomSections sectionRefs={this.sectionRefs} />
                <Footer />
            </>
        );
    }
}

export default App;