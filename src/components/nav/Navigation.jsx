import React from 'react';
import "./navigation.css"

const Navigation = () => {
    return (
        <nav>
            <section>
                <div>
                <img src="logo" alt="logo" />
                </div>
                <div>
                    <ul>
                        <li>About</li>
                        <li>Work</li>
                        <li>Contact</li>
                        <li>
                            <button>Resume</button>
                        </li>
                    </ul>
                </div>
            </section>
            <section>
                <div className="navSticky">
                    <div>Git Icon</div>
                    <div>Instagram Icon</div>
                </div>
                <div className="navSticky">
                    emilzlatinov1@abv.bg
                </div>
            </section>
        </nav>
    );
}

export default Navigation;
