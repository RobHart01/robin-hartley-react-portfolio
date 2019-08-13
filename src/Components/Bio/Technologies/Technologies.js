import React from 'react';

import './Technologies.css';

function Technologies() {
    return (
        <div className="technologies">
            <p className="tech-title">Technologies</p>
            <p className="tech-subtitle">Most of my experience is in JavaScript, but other than that, here are all of the technologies in which I am familiar and comfortable with.</p>
            <ul className="tech-ul">
                <div class="tech-languages">
                    <li className="tech-lang-title">Languages:</li>
                    <li className="tech-lang">C#</li>
                    <li className="tech-lang">CSS3</li>
                    <li className="tech-lang">HTML5</li>
                    <li className="tech-lang">JavaScript</li>
                    <li className="tech-lang">Python</li>
                    <li className="tech-lang">TypeScript</li>
                </div>
                <div class="tech-framework">
                    <li className="tech-frame-title">Frameworks/Libraries:</li>
                    <li className="tech-frame">Angular</li>
                    <li className="tech-frame">BootStrap</li>
                    <li className="tech-frame">Django</li>
                    <li className="tech-frame">Express.js</li>
                    <li className="tech-frame">Flask</li>
                    <li className="tech-frame">jQuery</li>
                    <li className="tech-frame">Mongoose</li>
                    <li className="tech-frame">Next.js</li>
                    <li className="tech-frame">Node.js</li>
                    <li className="tech-frame">React</li>
                    <li className="tech-frame">Redux</li>
                    <li className="tech-frame">SASS/SCSS/LESS</li>
                    <li className="tech-frame">Socket.Io</li>
                    <li className="tech-frame">Vue.js</li>
                    <li className="tech-frame">Vuex</li>
                </div>
                <div class="tech-database">
                    <li className="tech-data-title">Databases:</li>
                    <li className="tech-data">MongoDB</li>
                    <li className="tech-data">MySQL</li>
                </div>
                <div class="tech-methodologies">
                    <li className="tech-meth-title">Methodologies:</li>
                    <li className="tech-meth">Agile/Lean Software Development</li>
                    <li className="tech-meth">DOM manipulation</li>
                    <li className="tech-meth">MVC Framework</li>
                    <li className="tech-meth">OOP</li>
                    <li className="tech-meth">SCRUM</li>
                    <li className="tech-meth">TDD</li>
                </div>
                <div className="tech-other">
                    <li className="tech-oth-title">Other:</li>
                    <li className="tech-oth">AWS</li>
                    <li className="tech-oth">Git/Github</li>
                    <li className="tech-oth">Postman</li>
                    <li className="tech-oth">VS Code</li>
                </div>
            </ul>
        </div>
    )
}

export default Technologies;