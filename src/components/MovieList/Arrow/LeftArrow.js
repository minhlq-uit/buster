import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
const LeftArrow = (props) => (
  <div onClick={props.onClick} className="icon leftArrow">
    <ChevronLeftIcon />
  </div>
);
export default LeftArrow;
