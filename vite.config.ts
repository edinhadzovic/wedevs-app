import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tsconfigPaths from 'vite-tsconfig-paths'
import svgr from "vite-plugin-svgr"

export default ({ mode }) => {
    return defineConfig({
        plugins: [
            tsconfigPaths(),
            react(),
            svgr({
                svgrOptions: {
                    icon: true
                }
            })
        ],
        define: {
            "process.env.NODE_ENV": `"${mode}"`,
            "VITE_BACKEND_URL": process.env.VITE_BACKEND_URL
        },
        server: {
            port: Number(process.env.PORT) || 3000,
        }
    })
}