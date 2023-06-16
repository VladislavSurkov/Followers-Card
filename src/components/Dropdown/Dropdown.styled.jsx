export const colorStyles = {
  control: () => ({
    display: "flex",
    width: "400px",
    backgroundColor: "white",
    borderRadius: "10px",
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

    fontFamily: "Montserrat",
    fontWeight: "500",
    fontSize: "20px",
    lineHeight: "24px",

    padding: 0,
    margin: 0,
    marginLeft: "20px",
  }),
  option: (base, { isSelected }) => ({
    ...base,

    fontFamily: "Montserrat",
    fontWeight: "500",
    fontSize: "20px",
    lineHeight: "24px",

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

export const themeStyles = (theme) => ({
  ...theme,
  colors: {
    ...theme.colors,
    primary25: "none",
    primary: "none",
  },
});

export const IndicatorSeparator = ({ innerProps }) => {
  return <span style={{ display: "none" }} {...innerProps} />;
};
