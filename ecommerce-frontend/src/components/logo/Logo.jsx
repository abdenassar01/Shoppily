
import { RiShoppingCartFill } from 'react-icons/ri';
import { LogoLink } from '../../utils';

const Logo = ({ size, color }) => {
  return (
    <LogoLink to="/" >
        <h2 style={{ color: color }}>Shoppily</h2>
        <RiShoppingCartFill size={ size ? size : 32 } color={ color }/>
    </LogoLink>
  )
}


export default Logo