import styles from "./App.module.css";
import Index from "./ui/pages/index";
import { useApp } from '../src/data/hooks/useApp.page';

function App() {
    return (
        <div>
            <header className={styles['header']}>
                <h1>
                    Dev<span>Music</span>
                </h1>
            </header>
            <Index/>
        </div>
    );
}

export default App;
