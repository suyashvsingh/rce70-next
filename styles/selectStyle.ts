import { StylesConfig } from 'react-select'

const selectStyle: StylesConfig = {
  indicatorSeparator: (provided) => ({
    ...provided,
    display: 'none',
  }),
  menu: (provided) => ({
    ...provided,
    color: 'white',
    border: 'none',
    borderRadius: 8,
    backgroundColor: '#1c2333',
  }),
  menuList: (provided) => ({
    ...provided,
    color: 'white',
    border: 'none',
    borderRadius: 8,
    cursor: 'pointer',
  }),
  control: (provided) => ({
    ...provided,
    width: 200,
    backgroundColor: '#1c2333',
    color: 'white',
    border: 'none',
    borderRadius: 8,
    cursor: 'pointer',
  }),
  singleValue: (provided) => ({
    ...provided,
    color: 'white',
  }),
  option: (provided, state) => ({
    ...provided,
    backgroundColor: state.isSelected
      ? '#1c2365'
      : state.isFocused
        ? '#1c2350'
        : '#1c2333',
    color: 'white',
    cursor: 'pointer',
  }),
}

export default selectStyle
