import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    //Viteはデフォのままだと（仮想環境の）内部のみアクセス許可がある。
    //外部（元のOS上）のブラウザからアクセス出来るようにするには、host:trueが必要
    host: true,
    port: 3000
  }
})
