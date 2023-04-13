import { signal } from "@angular/core"
import "./app.css"
import angularSignalsJSXLogo from "./assets/angular-signals-jsx.svg"
import viteLogo from "/vite.svg"

export function App() {
    let count = signal(0)

    return (
        <>
            <div>
                <a href="https://vitejs.dev" target="_blank">
                    <img src={viteLogo} class="logo" alt="Vite logo" />
                </a>
                <a href="https://github.com/markmals/angular-signals-jsx" target="_blank">
                    <img
                        src={angularSignalsJSXLogo}
                        class="logo angular-signals-jsx"
                        alt="Angular Signals JSX logo"
                    />
                </a>
            </div>
            <h1>Vite + Angular Signals JSX</h1>
            <div class="card">
                <button onClick={() => count.update(count => count + 1)}>count is {count()}</button>
                <p>
                    Edit <code>src/app.tsx</code> and save to test HMR
                </p>
            </div>
            <p class="read-the-docs">
                Click on the Vite and Angular Signals JSX logos to learn more
            </p>
        </>
    )
}
