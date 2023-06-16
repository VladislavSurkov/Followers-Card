
export const colorStyles = {
  control: () => ({
    display: "flex",
  }),
  placeholder: (base) => ({
    ...base,
    color: "#3737376e",
    margin: 0,
  }),
  singleValue: (base) => ({
    ...base,
    color: "#373737",
    margin: 0,
  }),
  valueContainer: (base) => ({
    ...base,
    padding: 0,
    margin: 0,
    marginLeft: "5px",
  }),
  option: (base, { isSelected }) => ({
    ...base,

    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",

    color: isSelected ? "#AD1FEA" : "#647196",
    ":active": {
      color: "#AD1FEA",
    },
    ":not(:last-child)": {
      borderBottom: "1px solid #3a43747f",
    },
  }),
};

export const themeStyles = theme => ({
  ...theme,
  colors: {
    ...theme.colors,
    primary25: 'none',
    primary: 'none',
  },
});

export const IndicatorSeparator = ({
  innerProps,
}) => {
  return <span style={{ display: 'none' }} {...innerProps} />;
};
