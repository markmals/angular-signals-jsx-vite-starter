import babel from "@rollup/plugin-babel"
import { defineConfig } from "vite"

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [
        babel({
            exclude: "node_modules/**",
            babelHelpers: "bundled",
            extensions: ["ts", "tsx"],
            plugins: [
                [
                    "jsx-dom-expressions",
                    {
                        moduleName: "angular-signals-jsx",
                    },
                ],
            ],
        }),
    ],
})
