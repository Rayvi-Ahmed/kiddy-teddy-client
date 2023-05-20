
import Banner from './Banner/Banner';
import Gallery from '../Gallery/Gallery';
import ShopCategory from '../ShopCategory/ShopCategory';
import DiscountBanner from '../DiscountBanner/DiscountBanner';
import ReviweBanner from '../ReviweBanner/ReviweBanner';
import UseTitle from '../../Hooks/setTitle';

const Home = () => {
    UseTitle('Home')
    return (
        <div>
            <Banner></Banner>
            <DiscountBanner></DiscountBanner>
            <ShopCategory></ShopCategory>
            <Gallery></Gallery>
            <ReviweBanner></ReviweBanner>

        </div>
    );
};

export default Home;