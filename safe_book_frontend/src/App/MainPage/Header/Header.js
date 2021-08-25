import './Header.css'
import BottomPart from './Content/BottomPart';
import TopPart from './Content/TopPart';

const Header = (props) => {  //props.userInfo
    return(
        <div className="header">
            <TopPart />
            <BottomPart SetLookingValue = {props.SetLookingValue}/>
        </div>
    );
}


export default Header;