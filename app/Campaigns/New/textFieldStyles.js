 const textFieldStyles = {
root: {
            minWidth: "250px",
            "& .MuiFormHelperText-root": {
              borderWidth: "1px",
              m: "0",
              mt:"10px",
              bgcolor: "rgba(250, 239, 239, 1)",
              borderStyle: "solid",     // required for the border to show
              borderColor: "red",       // fixed property name
              borderRadius: "4px",      // optional: makes corners rounded
              padding: "4px",           // optional: spacing inside the border
              height: "30px",
            },
            "& .MuiInputBase-input": {
              height: 16,               // inner input height
              fontSize: "1.2rem",
              width: "100%",
              bgcolor: "white",

            },
            "& .MuiOutlinedInput-root": {
              bgcolor: "lightgrey",
              display: "flex",
              justifyContent: "space-between",
            },
            "& input[type=number]": {
              MozAppearance: "textfield", // Firefox
            },
            "& input[type=number]::-webkit-outer-spin-button, & input[type=number]::-webkit-inner-spin-button": {
              WebkitAppearance: "none", // Chrome, Safari, Edge
              margin: 0,
            }, 
}
}

export default textFieldStyles