import Icons from './components/icons';
import NFTmarket from '../../assets/images/sidebar/nft_market_place.png'
import activeBid from '../../assets/images/sidebar/active_bid.png'
import saved from '../../assets/images/sidebar/saved.png'
import message from '../../assets/images/sidebar/message.png'
import collection from '../../assets/images/sidebar/collection.png'
import wallet from '../../assets/images/sidebar/wallet.png'
import logout from '../../assets/images/sidebar/logout.png'
import { getProfileMe } from '../../data/atom';
import { useRecoilValue } from 'recoil';
import { nftLink } from '../../common/link';

function Sidebar() {
    const profileMe = useRecoilValue(getProfileMe);
    return (
        <div className="sidebar-panel">
            <ul className="sidebar-icon">
                <Icons to={`${nftLink}`} icon={NFTmarket} title="NFT Marketplace" />
                <Icons to={`${nftLink}/active-bids`} icon={activeBid} title="Active Bid" />
                <Icons to={`/saved/${profileMe._id}`} icon={saved} title="Saved" />
                <Icons to={`${nftLink}`} icon={message} title="Messages" />
                <Icons to={`${nftLink}/collections/${profileMe._id}`} icon={collection} title="My Collection" />
                <Icons to={`${nftLink}/wallet`} icon={wallet} title="Wallet" />
                <Icons to='/login' icon={logout} title="Logout" />
            </ul>
        </div>
    )
}

export default Sidebar