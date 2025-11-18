import BannerImage from '../assets/banner.png'
const Banner = () => {
    return (
        <>
            <div className="mainbanner">
                <div className='banner'>
                    <img src={BannerImage} alt="" />
                </div>
            </div>
        </>
    )
}
export default Banner