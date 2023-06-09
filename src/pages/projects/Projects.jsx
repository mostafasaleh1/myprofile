import React from 'react';
import ProjectsBox from './ProjectsBox';
import { project1, project2, project3, project4, project5, project6, project1Phone, project2Phone, project3Phone, project4Phone, project5Phone, project6Phone, lec10assignment, lec10assignmentPhone } from "./assets/Exports";
import { useTranslation } from "react-i18next";
import { projectsActiveLang } from '../../languages/language/ActiveLang';
import Footer from './../../Main/footer/Footer';
import "./projects.css";


const Projects = () => {
    const { t } = useTranslation("projects");
    return (
        <React.Fragment>
            <section>
                <h2 className="heading">{t(`${projectsActiveLang()}.frontend.frontend`)} <span>{t(`${projectsActiveLang()}.frontend.projects`)}</span></h2>
                <div className="projects-container">
                    <ProjectsBox desktopImg={project1}
                        mobileImg={project1Phone} githubLink="https://github.com/mostafasaleh1/mintmind"
                        liveDemoLink="https://mostafasaleh1.github.io/mintmind"
                        h4Content={t(`${projectsActiveLang()}.frontend.project1.title`)}
                        pContent={t(`${projectsActiveLang()}.frontend.project1.pcontent`)}
                    />
                    <ProjectsBox desktopImg={project2}
                        mobileImg={project2Phone}
                        githubLink="#"
                        liveDemoLink="#"
                        h4Content={t(`${projectsActiveLang()}.frontend.project2.title`)}
                        pContent={t(`${projectsActiveLang()}.frontend.project2.pcontent`)}
                    />
                    <ProjectsBox desktopImg={project3}
                        mobileImg={project3Phone}
                        githubLink="#"
                        liveDemoLink="#"
                        h4Content={t(`${projectsActiveLang()}.frontend.project3.title`)}
                        pContent={t(`${projectsActiveLang()}.frontend.project3.pcontent`)}
                    />
                    <ProjectsBox desktopImg={project4}
                        mobileImg={project4Phone}
                        githubLink="#"
                        liveDemoLink="#"
                        h4Content={t(`${projectsActiveLang()}.frontend.project4.title`)}
                        pContent={t(`${projectsActiveLang()}.frontend.project4.pcontent`)}
                    />
                    <ProjectsBox desktopImg={project5}
                        mobileImg={project5Phone}
                        githubLink="#"
                        liveDemoLink="#"
                        h4Content={t(`${projectsActiveLang()}.frontend.project5.title`)}
                        pContent={t(`${projectsActiveLang()}.frontend.project5.pcontent`)}
                    />
                    <ProjectsBox desktopImg={project6}
                        mobileImg={project6Phone}
                        githubLink="#"
                        liveDemoLink="#"
                        h4Content={t(`${projectsActiveLang()}.frontend.project6.title`)}
                        pContent={t(`${projectsActiveLang()}.frontend.project6.pcontent`)}
                    />
                </div>
            </section>

            <section className="projects-section">
                <h2 className="heading">{t(`${projectsActiveLang()}.ciscopackettracer.cisco`)} <span>{t(`${projectsActiveLang()}.ciscopackettracer.packettracer`)}</span></h2>
                <div className="projects-container">
                    <ProjectsBox desktopImg={lec10assignment}
                        mobileImg={lec10assignmentPhone} githubLink="#"
                        liveDemoLink="#"
                        hideLiveDemo={true}
                        h4Content={t(`${projectsActiveLang()}.ciscopackettracer.project1.title`)}
                        pContent={t(`${projectsActiveLang()}.ciscopackettracer.project1.pcontent`)}
                    />
                    <ProjectsBox desktopImg={project2}
                        mobileImg={project2Phone}
                        githubLink="#"
                        liveDemoLink="#"
                        hideLiveDemo={true}
                        h4Content={t(`${projectsActiveLang()}.ciscopackettracer.project2.title`)}
                        pContent={t(`${projectsActiveLang()}.ciscopackettracer.project2.pcontent`)}
                    />
                    <ProjectsBox desktopImg={project3}
                        mobileImg={project3Phone}
                        githubLink="#"
                        liveDemoLink="#"
                        hideLiveDemo={true}
                        h4Content={t(`${projectsActiveLang()}.ciscopackettracer.project3.title`)}
                        pContent={t(`${projectsActiveLang()}.ciscopackettracer.project3.pcontent`)}
                    />
                    <ProjectsBox desktopImg={project4}
                        mobileImg={project4Phone}
                        githubLink="#"
                        liveDemoLink="#"
                        hideLiveDemo={true}
                        h4Content={t(`${projectsActiveLang()}.ciscopackettracer.project4.title`)}
                        pContent={t(`${projectsActiveLang()}.ciscopackettracer.project4.pcontent`)}
                    />
                    <ProjectsBox desktopImg={project5}
                        mobileImg={project5Phone}
                        githubLink="#"
                        liveDemoLink="#"
                        hideLiveDemo={true}
                        h4Content={t(`${projectsActiveLang()}.ciscopackettracer.project5.title`)}
                        pContent={t(`${projectsActiveLang()}.ciscopackettracer.project5.pcontent`)}
                    />
                    <ProjectsBox desktopImg={project6}
                        mobileImg={project6Phone}
                        githubLink="#"
                        liveDemoLink="#"
                        hideLiveDemo={true}
                        h4Content={t(`${projectsActiveLang()}.ciscopackettracer.project6.title`)}
                        pContent={t(`${projectsActiveLang()}.ciscopackettracer.project6.pcontent`)}
                    />
                </div>
            </section>

            <Footer colour="footer-dark" />
        </React.Fragment>
    )
}

export default Projects;