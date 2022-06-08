
import { RiShoppingCartFill } from 'react-icons/ri';
import { LogoLink } from '../../utils';

const Logo = (props) => {
  return (
    <LogoLink to="/" >
        <h2 style={{ color: props.color }}>Shoppily</h2>
        <RiShoppingCartFill size={32} color={props.color}/>
    </LogoLink>
  )
}


export default Logo