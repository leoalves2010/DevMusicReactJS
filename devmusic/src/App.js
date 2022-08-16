import styles from "./App.module.css";
import Index from "./ui/pages/index";
import { useApp } from "../src/data/hooks/useApp.page";
import { createContext } from "react";

export const AppContext = createContext({});

function App() {
    const useAppValues = useApp();

    return (
        <div>
            <header className={styles["header"]}>
                <h1>
                    Dev<span>Music</span>
                </h1>
            </header>
            <AppContext.Provider value={useAppValues}>
                <Index />
            </AppContext.Provider>
        </div>
    );
}

export default App;
