

import Gallery from '../Gallery/Gallery';
import ShopCategory from '../ShopCategory/ShopCategory';
import DiscountBanner from '../DiscountBanner/DiscountBanner';
import ReviweBanner from '../ReviweBanner/ReviweBanner';
import UseTitle from '../../Hooks/setTitle';
import Banner2 from './Banner/Banner2';
import Features from '../../../Features/Features';

const Home = () => {
    UseTitle('Home')
    return (
        <div>
            <Banner2></Banner2>
            <DiscountBanner></DiscountBanner>
            <ShopCategory></ShopCategory>
            <Features></Features>
            <Gallery></Gallery>
            <ReviweBanner></ReviweBanner>

        </div>
    );
};

export default Home;