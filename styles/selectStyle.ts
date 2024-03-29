const selectStyle = {
  indicatorSeparator: (provided: any) => ({
    ...provided,
    display: 'none',
  }),
  menu: (provided: any) => ({
    ...provided,
    color: 'white',
    border: 'none',
    borderRadius: 8,
    backgroundColor: '#1c2333',
  }),
  menuList: (provided: any) => ({
    ...provided,
    color: 'white',
    border: 'none',
    borderRadius: 8,
    cursor: 'pointer',
  }),
  control: (provided: any) => ({
    ...provided,
    width: 200,
    backgroundColor: '#1c2333',
    color: 'white',
    border: 'none',
    borderRadius: 8,
    cursor: 'pointer',
  }),
  singleValue: (provided: any) => ({
    ...provided,
    color: 'white',
  }),
  option: (provided: any, state: any) => ({
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
