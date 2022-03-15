import { ReactComponent as GithubIcon } from 'accets/img/github.svg';
import './styles.css';

function Navbar() {
    return (
        <header>
            <nav className="container">
                <div className="dsmovie-nav-content">
                    <h1>(ERN) - Avaliação de filmes!</h1>
                    <a href="https://github.com/eliezerrn" target="_blank" rel="noreferrer">
                        <div className="dsmovie-contact-container">
                            <GithubIcon />
                            <p className="dsmovie-contact-link">/eliezerrn</p>
                        </div>
                    </a>
                </div>
            </nav>
        </header>);
}

export default Navbar;