import Index from "./ui/pages/index";
import { useApp } from "../src/data/hooks/useApp.page";
import { createContext } from "react";
import { Header } from "./App.style";

export const AppContext = createContext({});

function App() {
    const useAppValues = useApp();

    return (
        <div>
            <Header>
                <h1>
                    Dev<span>Music</span>
                </h1>
            </Header>
            <AppContext.Provider value={useAppValues}>
                <Index />
            </AppContext.Provider>
        </div>
    );
}

export default App;
