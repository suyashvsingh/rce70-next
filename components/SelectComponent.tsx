import Select from 'react-select'
import selectStyle from '../styles/selectStyle'
import languages from '../data/languages'
import { FC } from 'react'

interface SelectComponentProps {
  selectedLanguage: {
    value: string
    label: string
  }
  setSelectedLanguage: (selectedLanguage: {
    value: string
    label: string
  }) => void
}

const SelectComponent: FC<SelectComponentProps> = ({
  selectedLanguage,
  setSelectedLanguage,
}) => {
  return (
    <Select
      value={selectedLanguage}
      options={languages}
      formatOptionLabel={(language) => (
        <div className="flex gap-2 items-center ">
          <img src={`images/${language.value}.png`} className="w-4 h-4" />
          <span>{language.label}</span>
        </div>
      )}
      onChange={(selectedOption) => {
        setSelectedLanguage(selectedOption as { value: string; label: string })
      }}
      styles={selectStyle}
    />
  )
}

export default SelectComponent
