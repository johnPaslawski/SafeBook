import './Header.css'
import BottomPart from './Content/BottomPart';
import TopPart from './Content/TopPart';

const Header = (props) => {  //props.userInfo
    return(
        <div className="header">
            <TopPart />
            <BottomPart />
        </div>
    );
}


export default Header;