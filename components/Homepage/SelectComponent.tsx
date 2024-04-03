import Select from 'react-select'
import selectStyle from '@/styles/selectStyle'
import languages from '@/data/languages'
import { FC } from 'react'
import Image from 'next/image'
import { Language } from '@/styles/selectStyle'

type SelectComponentProps = {
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
      styles={selectStyle}
      formatOptionLabel={(language: Language) => (
        <div className="flex gap-2 items-center ">
          <Image
            src={`/images/${language.value}.png`}
            alt={language.label}
            width={16}
            height={16}
          />
          <span>{language.label}</span>
        </div>
      )}
      onChange={(selectedOption) => {
        setSelectedLanguage(selectedOption as { value: string; label: string })
      }}
    />
  )
}

export default SelectComponent
