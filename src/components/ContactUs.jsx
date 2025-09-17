import toast from "react-hot-toast";
import assets from "../assets/assets";
import Title from "./Title";

const ContactUs = () => {

    const onSubmit = async (event) => {
        event.preventDefault();
        const formData = new FormData(event.target);

        formData.append('access_key', '07d01a0c-d719-4527-88d6-759d26212c3d');

        try {
            const response = await fetch('https://api.web3forms.com/submit', {
                method: "POST",
                body: formData
            });

            const data = await response.json();

            if (data.success) {
                toast.success(data.message);
                event.target.reset();
            }
            else {
                toast.error(data.message);
            }
        } catch (error) {
            toast.error(error.message);
        }

    }

    return (
        <div id="contact-us" className="flex flex-col items-center gap-7 px-4 sm:px-12 lg:px-24 xl:px-40 pt-30 text-gray-700 dark:text-white">
            <Title title='Reach out to us' desc="Ready to grow your brand? Let's connect and build something exceptional together." />
            <form onSubmit={onSubmit} className="grid sm:grid-cols-2 gap-3 sm:gap-5 max-w-2xl w-full">
                <div>
                    <p className="mb-2 text-sm font-medium">Your name</p>
                    <div className="flex pl-3 rounded-lg border border-gray-300 dark:border-gray-600">
                        <img src={assets.person_icon} alt="person icon" />
                        <input name="name" required type="text" className="w-full p-3 text-sm outline-none" placeholder="Enter your name" />
                    </div>
                </div>
                <div>
                    <p className="mb-2 text-sm font-medium">Email id</p>
                    <div className="flex pl-3 rounded-lg border border-gray-300 dark:border-gray-600">
                        <img src={assets.email_icon} alt="email icon" />
                        <input name="email" required type="email" className="w-full p-3 text-sm outline-none" placeholder="Enter your email" />
                    </div>
                </div>
                <div className="sm:col-span-2">
                    <p className="mb-2 text-sm font-medium">Message</p>
                    <textarea name="message" required placeholder="Enter your message" rows={8} className="w-full p-3 text-sm outline-none rounded-lg border border-gray-300 dark:border-gray-600" />
                </div>
                <button type="submit" className="w-max flex gap-2 bg-primary text-white text-sm px-10 py-3 rounded-full cursor-pointer hover:scale-103 transition-transform">
                    Submit <img src={assets.arrow_icon} alt="arrow icon" className="w-4" />
                </button>
            </form>
        </div>
    );
};

export default ContactUs;