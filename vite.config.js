import { defineConfig } from "vite";
import React from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import path, { resolve } from "path";

export default defineConfig({
  plugins: [ React(),tailwindcss()],
  resolve : {
    alias :{
      "@" : path.resolve(__dirname, "./src"),
    },
  },
});
