import { Smartphone, Download, Shield, Star, Mail, MessageCircle, Twitter, Facebook, Instagram, Youtube, Heart } from 'lucide-react';
import logo from '../../assets/logo.png';
const HeroFooter = () => {
    return (
        <footer className="bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white">
            {/* Newsletter Section */}
            <div className="border-b border-purple-500/20">
                <div className="max-w-7xl mx-auto px-6 py-16">
                    <div className="flex flex-col md:flex-col items-center justify-between gap-8">
                        <div className="flex-1 text-center md:text-center">
                            <h3 className="text-3xl font-bold mb-2 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                                Never Miss an App Update
                            </h3>
                            <p className="text-purple-200">Get the latest apps and exclusive deals delivered to your inbox</p>
                        </div>
                        <div className="flex-1 max-w-md w-full">
                            <div className="flex gap-2">
                                <input
                                    type="email"
                                    placeholder="Enter your email"
                                    className="flex-1 px-4 py-3 rounded-lg bg-white/10 border border-purple-400/30 backdrop-blur-sm focus:outline-none focus:border-purple-400 placeholder-purple-300/50"
                                />
                                <button className="px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg font-semibold hover:from-purple-600 hover:to-pink-600 transition-all transform hover:scale-105 shadow-lg shadow-purple-500/50">
                                    Subscribe
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Main Footer Content */}
            <div className="max-w-7xl mx-auto px-6 py-12">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-12">
                    {/* Brand Section */}
                    <div className="lg:col-span-2">
                        <div className="flex items-center gap-2 mb-4">
                            <div className="w-12 h-12  rounded-xl flex items-center justify-center">
                                <img src={logo} alt="logo-hero-io" />
                            </div>
                            {/* <span className="text-3xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                                Hero.io
                            </span> */}
                            <span className="text-3xl font-bold bg-gradient bg-clip-text text-transparent">
                                Hero.io
                            </span>
                        </div>
                        <p className="text-purple-200 mb-6 leading-relaxed">
                            Your ultimate destination for discovering the best Android and iOS apps. Download safely from trusted sources and explore thousands of applications curated just for you.
                        </p>
                        <div className="flex gap-3">
                            <a href="#" className="w-10 h-10 bg-white/10 hover:bg-purple-500 rounded-lg flex items-center justify-center transition-all transform hover:scale-110 backdrop-blur-sm">
                                <Twitter className="w-5 h-5" />
                            </a>
                            <a href="#" className="w-10 h-10 bg-white/10 hover:bg-pink-500 rounded-lg flex items-center justify-center transition-all transform hover:scale-110 backdrop-blur-sm">
                                <Facebook className="w-5 h-5" />
                            </a>
                            <a href="#" className="w-10 h-10 bg-white/10 hover:bg-purple-500 rounded-lg flex items-center justify-center transition-all transform hover:scale-110 backdrop-blur-sm">
                                <Instagram className="w-5 h-5" />
                            </a>
                            <a href="#" className="w-10 h-10 bg-white/10 hover:bg-pink-500 rounded-lg flex items-center justify-center transition-all transform hover:scale-110 backdrop-blur-sm">
                                <Youtube className="w-5 h-5" />
                            </a>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="text-lg font-bold mb-4 text-purple-300">Discover</h4>
                        <ul className="space-y-3">
                            <li><a href="#" className="text-purple-200 hover:text-purple-400 transition-colors flex items-center gap-2 group">
                                <span className="w-1 h-1 bg-purple-400 rounded-full group-hover:w-2 transition-all"></span>
                                Top Apps
                            </a></li>
                            <li><a href="#" className="text-purple-200 hover:text-purple-400 transition-colors flex items-center gap-2 group">
                                <span className="w-1 h-1 bg-purple-400 rounded-full group-hover:w-2 transition-all"></span>
                                New Releases
                            </a></li>
                            <li><a href="#" className="text-purple-200 hover:text-purple-400 transition-colors flex items-center gap-2 group">
                                <span className="w-1 h-1 bg-purple-400 rounded-full group-hover:w-2 transition-all"></span>
                                Categories
                            </a></li>
                            <li><a href="#" className="text-purple-200 hover:text-purple-400 transition-colors flex items-center gap-2 group">
                                <span className="w-1 h-1 bg-purple-400 rounded-full group-hover:w-2 transition-all"></span>
                                Featured
                            </a></li>
                            <li><a href="#" className="text-purple-200 hover:text-purple-400 transition-colors flex items-center gap-2 group">
                                <span className="w-1 h-1 bg-purple-400 rounded-full group-hover:w-2 transition-all"></span>
                                Collections
                            </a></li>
                        </ul>
                    </div>

                    {/* Support */}
                    <div>
                        <h4 className="text-lg font-bold mb-4 text-purple-300">Support</h4>
                        <ul className="space-y-3">
                            <li><a href="#" className="text-purple-200 hover:text-purple-400 transition-colors flex items-center gap-2 group">
                                <span className="w-1 h-1 bg-purple-400 rounded-full group-hover:w-2 transition-all"></span>
                                Help Center
                            </a></li>
                            <li><a href="#" className="text-purple-200 hover:text-purple-400 transition-colors flex items-center gap-2 group">
                                <span className="w-1 h-1 bg-purple-400 rounded-full group-hover:w-2 transition-all"></span>
                                Contact Us
                            </a></li>
                            <li><a href="#" className="text-purple-200 hover:text-purple-400 transition-colors flex items-center gap-2 group">
                                <span className="w-1 h-1 bg-purple-400 rounded-full group-hover:w-2 transition-all"></span>
                                FAQ
                            </a></li>
                            <li><a href="#" className="text-purple-200 hover:text-purple-400 transition-colors flex items-center gap-2 group">
                                <span className="w-1 h-1 bg-purple-400 rounded-full group-hover:w-2 transition-all"></span>
                                Safety Guide
                            </a></li>
                            <li><a href="#" className="text-purple-200 hover:text-purple-400 transition-colors flex items-center gap-2 group">
                                <span className="w-1 h-1 bg-purple-400 rounded-full group-hover:w-2 transition-all"></span>
                                Report an App
                            </a></li>
                        </ul>
                    </div>

                    {/* Company */}
                    <div>
                        <h4 className="text-lg font-bold mb-4 text-purple-300">Company</h4>
                        <ul className="space-y-3">
                            <li><a href="#" className="text-purple-200 hover:text-purple-400 transition-colors flex items-center gap-2 group">
                                <span className="w-1 h-1 bg-purple-400 rounded-full group-hover:w-2 transition-all"></span>
                                About Us
                            </a></li>
                            <li><a href="#" className="text-purple-200 hover:text-purple-400 transition-colors flex items-center gap-2 group">
                                <span className="w-1 h-1 bg-purple-400 rounded-full group-hover:w-2 transition-all"></span>
                                Careers
                            </a></li>
                            <li><a href="#" className="text-purple-200 hover:text-purple-400 transition-colors flex items-center gap-2 group">
                                <span className="w-1 h-1 bg-purple-400 rounded-full group-hover:w-2 transition-all"></span>
                                Blog
                            </a></li>
                            <li><a href="#" className="text-purple-200 hover:text-purple-400 transition-colors flex items-center gap-2 group">
                                <span className="w-1 h-1 bg-purple-400 rounded-full group-hover:w-2 transition-all"></span>
                                Press Kit
                            </a></li>
                            <li><a href="#" className="text-purple-200 hover:text-purple-400 transition-colors flex items-center gap-2 group">
                                <span className="w-1 h-1 bg-purple-400 rounded-full group-hover:w-2 transition-all"></span>
                                Partners
                            </a></li>
                        </ul>
                    </div>
                </div>

                {/* Trust Badges */}
                <div className="border-y border-purple-500/20 py-8 mb-8">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                        <div className="flex items-center gap-3 justify-center">
                            <div className="w-12 h-12 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-lg flex items-center justify-center">
                                <Shield className="w-6 h-6 text-purple-400" />
                            </div>
                            <div>
                                <div className="font-bold text-white">Secure</div>
                                <div className="text-sm text-purple-300">Safe Downloads</div>
                            </div>
                        </div>
                        <div className="flex items-center gap-3 justify-center">
                            <div className="w-12 h-12 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-lg flex items-center justify-center">
                                <Download className="w-6 h-6 text-purple-400" />
                            </div>
                            <div>
                                <div className="font-bold text-white">50M+</div>
                                <div className="text-sm text-purple-300">Downloads</div>
                            </div>
                        </div>
                        <div className="flex items-center gap-3 justify-center">
                            <div className="w-12 h-12 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-lg flex items-center justify-center">
                                <Star className="w-6 h-6 text-purple-400" />
                            </div>
                            <div>
                                <div className="font-bold text-white">4.8/5</div>
                                <div className="text-sm text-purple-300">User Rating</div>
                            </div>
                        </div>
                        <div className="flex items-center gap-3 justify-center">
                            <div className="w-12 h-12 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-lg flex items-center justify-center">
                                <Smartphone className="w-6 h-6 text-purple-400" />
                            </div>
                            <div>
                                <div className="font-bold text-white">100K+</div>
                                <div className="text-sm text-purple-300">Apps Available</div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="flex flex-col md:flex-row items-center justify-between gap-4 pt-8">
                    <div className="text-purple-300 text-sm text-center md:text-left">
                        © 2025 Hero.io. All rights reserved. Made with <Heart className="w-4 h-4 inline text-pink-400" /> for app lovers.
                    </div>
                    <div className="flex flex-wrap gap-6 text-sm">
                        <a href="#" className="text-purple-300 hover:text-purple-400 transition-colors">Privacy Policy</a>
                        <a href="#" className="text-purple-300 hover:text-purple-400 transition-colors">Terms of Service</a>
                        <a href="#" className="text-purple-300 hover:text-purple-400 transition-colors">Cookie Policy</a>
                        <a href="#" className="text-purple-300 hover:text-purple-400 transition-colors">DMCA</a>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default HeroFooter;