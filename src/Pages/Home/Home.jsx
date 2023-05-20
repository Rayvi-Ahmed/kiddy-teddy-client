
import Banner from './Banner/Banner';
import Gallery from '../Gallery/Gallery';
import ShopCategory from '../ShopCategory/ShopCategory';
import DiscountBanner from '../DiscountBanner/DiscountBanner';
import DiscountProduct from '../DiscountProduct/DiscountProduct';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <DiscountBanner></DiscountBanner>
            <ShopCategory></ShopCategory>
            <Gallery></Gallery>
            <DiscountProduct></DiscountProduct>

        </div>
    );
};

export default Home;