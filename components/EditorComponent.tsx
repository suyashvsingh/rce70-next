import Editor from '@monaco-editor/react'
import { customTheme, optionsEditor } from '../styles/editorStyles'
import { FC } from 'react'

interface EditorComponentProps {
  code: string
  setCode: (code: string) => void
  selectedLanguage: {
    value: string
  }
}

const EditorComponent: FC<EditorComponentProps> = ({
  code,
  setCode,
  selectedLanguage,
}) => {
  return (
    <Editor
      height={'100%'}
      width={'100%'}
      language={selectedLanguage.value}
      value={code}
      onChange={(value) => setCode(value ?? '')}
      beforeMount={(monaco) => {
        monaco.editor.defineTheme('customTheme', customTheme as any)
        monaco.editor.setTheme('customTheme')
      }}
      theme="customTheme"
      options={optionsEditor}
    />
  )
}

export default EditorComponent
