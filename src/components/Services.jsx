import assets from "../assets/assets";
import ServiceCard from "./ServiceCard";

const Services = () => {

    const servicesData = [
        {
            title: 'Advertising',
            description: 'We turn bold ideas into powerful digital solutions that connect, engage...',
            icon: assets.ads_icon
        },
        {
            title: 'Content marketing',
            description: 'We help you execute your plan and deliver results',
            icon: assets.marketing_icon
        },
        {
            title: 'Content writing',
            description: 'We help you create a marketing strategy that drives results.',
            icon: assets.content_icon
        },
        {
            title: 'Social media',
            description: 'We help you build strong a social media presence and engage with your audience',
            icon: assets.social_icon
        }
    ]

    return (
        <div id="services" className="relative flex flex-col items-center pt-30 gap-7 px-4 sm:px-12 lg:px-24 xl:px-40 text-gray-700 dark:text-white">
            <img src={assets.bgImage2} alt="background image" className="absolute -top-110 -left-70 -z-1 dark:hidden" />
            <h1 className="text-3xl font-medium sm:text-5xl">How can we help?</h1>
            <p className="max-w-lg text-center text-gray-500 dark:text-white/75 mb-6">From strategy to execution, we craft digital solutions that move your business forward.</p>
            <div className="flex flex-col md:grid grid-cols-2">
                {
                    servicesData.map((service, index) => (
                        <ServiceCard key={index} service={service}/>
                    ))
                }
            </div>
        </div>
    );
};

export default Services;