import { Fira_Code } from 'next/font/google'

export const firaCode = Fira_Code({
  subsets: ['latin'],
})

export const customTheme = {
  base: 'vs-dark',
  inherit: true,
  rules: [],
  colors: {
    'editor.background': '#1c2333',
    'editor.lineHighlightBackground': '#00000000',
    'editor.lineHighlightBorder': '#00000000',
  },
}

export const optionsEditor = {
  fontFamily: firaCode.style.fontFamily,
  fontSize: 16,
  scrollBeyondLastLine: false,
  minimap: {
    enabled: false,
  },
  fontLigatures: true,
}
