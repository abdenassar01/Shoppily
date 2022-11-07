import PacmanLoader from "react-spinners/PacmanLoader";
import { Wrapper } from "./styles/Styles";

const Loading = ({ size, props }) => {
  return (
    <Wrapper>
        <PacmanLoader size={ size } color="#2374E1" />
    </Wrapper>
  )
}

export default Loading