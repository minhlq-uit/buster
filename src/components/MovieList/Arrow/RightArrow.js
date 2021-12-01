import ChevronRightIcon from "@mui/icons-material/ChevronRight";
const RightArrow = (props) => (
  <div onClick={props.onClick} className="icon rightArrow">
    <ChevronRightIcon />
  </div>
);
export default RightArrow;
