import { makeStyles } from "@material-ui/core";

const SelectButton = ({ children, selected, onClick }) => {
  const useStyles = makeStyles({
    selectbutton: {
      border: "1px solid gold",
      borderRadius: 5,
      padding: 10,
      paddingLeft: 20,
      paddingRight: 20,
      fontFamily: "Arial",
      textAlign:"center",
      cursor: "pointer",
      backgroundColor: selected ? "gold" : "",
      color: selected ? "black" : "black",
      margin:"10px",
      fontWeight: selected ? 700 : 500,
      "&:hover": {
        backgroundColor: "gold"
      },
      width: "22%",
      //   margin: 5,
    },
  });

  const classes = useStyles();

  return (
    <button type='button'onClick={onClick} className={classes.selectbutton}>
      {children}
    </button>
  );
};

export default SelectButton;
