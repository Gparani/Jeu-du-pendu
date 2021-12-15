import {useContext} from 'react' ;
import './Contenu.css'
import { ThemeContext } from '../../Context/ThemeContext';

export default function Contenu() {

    const {theme} = useContext(ThemeContext);

    return (
    <div
    className={theme ? 'contenu light' : 'contenu dark'}
    >
    <h1>Jeu du pendu
        <br/>
        <p>Trouvez le noms des animaux</p>
        <form>
            <label>

                <input type="text" name="name" placeholder="username" />
            </label>
            <input type="submit" value="Envoyer" />
        </form>
        <br/>
        
        <img src="https://www.kastete.fr/img/potence.png" />
    </h1>
    
    </div>
    )
}