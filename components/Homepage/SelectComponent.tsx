import Select from 'react-select'
import selectStyle from '@/styles/selectStyle'
import languages from '@/data/languages'
import { FC } from 'react'
import Image from 'next/image'
import { Language } from '@/types'

type SelectComponentProps = {
  selectedLanguage: Language
  setSelectedLanguage: (selectedLanguage: Language) => void
}

const SelectComponent: FC<SelectComponentProps> = ({
  selectedLanguage,
  setSelectedLanguage,
}) => {
  return (
    <Select
      isMulti={false}
      value={selectedLanguage}
      options={languages}
      styles={selectStyle}
      instanceId={selectedLanguage.value}
      formatOptionLabel={(language: Language) => (
        <div className="flex gap-2 items-center ">
          <Image
            src={`/images/${language.value}.png`}
            alt={language.label}
            width={16}
            height={16}
            className="h-5 w-5"
          />
          <span>{language.label}</span>
        </div>
      )}
      onChange={(selectedOption) => {
        setSelectedLanguage(selectedOption as Language)
      }}
    />
  )
}

export default SelectComponent
