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
      fontWeight:"bold",
      color: "white",
      cursor: "pointer",
      backgroundColor: selected ? "gold" : "",
      margin:"10px",
      "&:hover": {
        backgroundColor: "gold"
      },
      width: "22%",
      //   margin: 5,
    },
  });

  const classes = useStyles();

  return (
    <span type='button'onClick={onClick} className={classes.selectbutton}>
      {children}
    </span>
  );
};

export default SelectButton;
