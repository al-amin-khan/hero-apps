import { Link } from 'react-router';
import bannerImage from '../../assets/hero.png';

const Banner = () => {
    return (
        <div className="bg-base-200 pt-15">
            <div className="flex flex-col items-center text-center w-[90%] md:w-[80%] lg:w-[80%] mx-auto">
                <div className="max-w-3xl">
                    <h1 className="text-5xl font-bold max-w-md mx-auto">
                        We Build <span className='bg-linear-[125deg,#632EE3,#9F62F2] bg-clip-text text-transparent'>Productive</span> Apps
                    </h1>
                    <p className="py-6 text-[#627382] text-base">
                        At HERO.IO, we craft innovative apps designed to make everyday life simpler, smarter, and more exciting. Our goal is to turn your ideas into digital experiences that truly make an impact.
                    </p>
                    <div className="flex justify-center gap-2">
                        <button
                            className="btn btn-ghost border-2 border-gray-300 text-gray-700 hover:bg-gray-300"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" shape-rendering="geometricPrecision" text-rendering="geometricPrecision" image-rendering="optimizeQuality" fill-rule="evenodd" clip-rule="evenodd" width="25" height="25"
                                viewBox="0 0 466 511.98">
                                <g id="Layer_x0020_1">
                                    <path fill="#EA4335" fill-rule="nonzero" d="M199.9 237.8l-198.5 232.37c7.22,24.57 30.16,41.81 55.8,41.81 11.16,0 20.93,-2.79 29.3,-8.37l0 0 244.16 -139.46 -130.76 -126.35z" />
                                    <path fill="#FBBC04" fill-rule="nonzero" d="M433.91 205.1l0 0 -104.65 -60 -111.61 110.22 113.01 108.83 104.64 -58.6c18.14,-9.77 30.7,-29.3 30.7,-50.23 -1.4,-20.93 -13.95,-40.46 -32.09,-50.22z" />
                                    <path fill="#34A853" fill-rule="nonzero" d="M199.42 273.45l129.85 -128.35 -241.37 -136.73c-8.37,-5.58 -19.54,-8.37 -30.7,-8.37 -26.5,0 -50.22,18.14 -55.8,41.86 0,0 0,0 0,0l198.02 231.59z" />
                                    <path fill="#4285F4" fill-rule="nonzero" d="M1.39 41.86c-1.39,4.18 -1.39,9.77 -1.39,15.34l0 397.64c0,5.57 0,9.76 1.4,15.34l216.27 -214.86 -216.28 -213.46z" />
                                </g>
                            </svg>

                            <Link to='https://play.google.com/store/apps'>Google Play</Link>
                        </button>
                        <button className="btn btn-ghost border-2 border-gray-300 text-gray-700 hover:bg-gray-300">
                            <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="30" height="30" viewBox="0 0 48 48">
                                <path fill="#0091ea" d="M14.1,42h19.8c4.474,0,8.1-3.627,8.1-8.1V27H6v6.9C6,38.373,9.626,42,14.1,42z"></path><rect width="36" height="11" x="6" y="16" fill="#00b0ff"></rect><path fill="#40c4ff" d="M33.9,6H14.1C9.626,6,6,9.626,6,14.1V16h36v-1.9C42,9.626,38.374,6,33.9,6z"></path><path fill="#fff" d="M22.854,18.943l1.738-2.967l-1.598-2.727c-0.418-0.715-1.337-0.954-2.052-0.536	c-0.715,0.418-0.955,1.337-0.536,2.052L22.854,18.943z"></path><path fill="#fff" d="M26.786,12.714c-0.716-0.419-1.635-0.179-2.052,0.536L16.09,28h3.477l7.754-13.233	C27.74,14.052,27.5,13.133,26.786,12.714z"></path><path fill="#fff" d="M34.521,32.92l-7.611-12.987l-0.763,1.303c-0.444,0.95-0.504,2.024-0.185,3.011l5.972,10.191	c0.279,0.476,0.78,0.741,1.295,0.741c0.257,0,0.519-0.066,0.757-0.206C34.701,34.554,34.94,33.635,34.521,32.92z"></path><path fill="#fff" d="M25.473,27.919l-0.171-0.289c-0.148-0.224-0.312-0.434-0.498-0.621H12.3	c-0.829,0-1.5,0.665-1.5,1.484s0.671,1.484,1.5,1.484h13.394C25.888,29.324,25.835,28.595,25.473,27.919z"></path><path fill="#fff" d="M16.66,32.961c-0.487-0.556-1.19-0.934-2.03-0.959l-0.004,0c-0.317-0.009-0.628,0.026-0.932,0.087	l-0.487,0.831c-0.419,0.715-0.179,1.634,0.536,2.053c0.238,0.14,0.5,0.206,0.757,0.206c0.515,0,1.017-0.266,1.295-0.741	L16.66,32.961z"></path><path fill="#fff" d="M30.196,27.009H35.7c0.829,0,1.5,0.665,1.5,1.484s-0.671,1.484-1.5,1.484h-5.394	C30.112,29.324,30.01,27.196,30.196,27.009z"></path>
                            </svg>
                            <Link to='https://www.apple.com/app-store/'>App Store</Link>
                        </button>
                    </div>
                </div>
                <figure className='mt-6 max-w-xl mx-auto'>
                    <img src={bannerImage} alt="Banner" />
                </figure>
            </div>
        </div>
    );
};

export default Banner;