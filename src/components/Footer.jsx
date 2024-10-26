import { FaFacebookF, FaGooglePlusG, FaInstagram, FaTwitter } from "react-icons/fa";

const Footer = () => {
    return (
        <div className="bg-gradient-to-r from-blue-100 via-green-100 to-red-100 text-gray-800 py-10 z-20 mt-4 rounded-lg">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                    
                    {/* Logo and Description */}
                    <div>
                        <div className='flex justify-start items-center'>
                            <img src="/images/makerbleLogo.png" alt="Makerble Logo" className="h-9" />
                        </div>
                        <p className='my-4 text-gray-700'>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia earum impedit laborum iste porro vel, asperiores illo possimus, temporibus sed eligendi ratione totam quisquam. Iste illum quasi nemo consectetur alias?
                        </p>

                        {/* Social Media Icons */}
                        <div className="flex space-x-4 mt-4">
                            <a href="#" className="text-[#4267B2] hover:text-blue-500">
                                <FaFacebookF />
                            </a>
                            <a href="#" className="text-[#1DA1F2] hover:text-blue-400">
                                <FaTwitter />
                            </a>
                            <a href="#" className="text-[#E1306C] hover:text-pink-500">
                                <FaInstagram />
                            </a>
                            <a href="#" className="text-[#DB4437] hover:text-red-400">
                                <FaGooglePlusG />
                            </a>
                        </div>
                    </div>

                    {/* Service Links */}
                    <div>
                        <h3 className="font-bold text-lg text-gray-900 mb-4">Services</h3>
                        <ul className="space-y-2">
                            {/* Replace 'Service Name' with actual services */}
                            <li><a href="#" className="hover:text-gray-600">Service Name</a></li>
                            <li><a href="#" className="hover:text-gray-600">Service Name</a></li>
                            <li><a href="#" className="hover:text-gray-600">Service Name</a></li>
                            <li><a href="#" className="hover:text-gray-600">Service Name</a></li>
                            <li><a href="#" className="hover:text-gray-600">Service Name</a></li>
                        </ul>
                    </div>

                    {/* Useful Links */}
                    <div>
                        <h3 className="font-bold text-lg text-gray-900 mb-4">Useful Links</h3>
                        <ul className="space-y-2">
                            {/* Replace links with actual routes */}
                            <li><a href="/about" className="hover:text-gray-600">About Us</a></li>
                            <li><a href="/services" className="hover:text-gray-600">Our Services</a></li>
                            <li><a href="/contact" className="hover:text-gray-600">Contact Us</a></li>
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h3 className="font-bold text-lg text-gray-900 mb-4">Get in Touch</h3>
                        <p className="mb-2 text-gray-700">
                            Have questions? Contact us at:
                        </p>
                        <p className="mb-2 text-gray-700">
                            <span className="font-semibold">Address:</span> 1234 Makerble, New York, USA
                        </p>
                        <p className="mb-2 text-gray-700">
                            <span className="font-semibold">Phone:</span> +11 234 567 890
                        </p>
                        <p className="text-gray-700">
                            <span className="font-semibold">Email:</span> hr@makerble.com
                        </p>
                    </div>
                </div>

                {/* Copyright */}
                <div className="text-center mt-8 text-gray-500">
                    © 2023-24 Makerble. All rights reserved.
                </div>
            </div>
        </div>
    );
};

export default Footer;
