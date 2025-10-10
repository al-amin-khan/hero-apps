import { MdArrowBackIos } from 'react-icons/md';
import { useNavigate } from 'react-router';
import errorImage from '../../assets/error-404.png'

const NotFound = () => {
    const navigate = useNavigate();
    return (
        <div className='text-center my-10'>
            <div className='flex flex-col justify-center items-center my-4 space-y-2'>
                <img className='h-full' src={errorImage} alt="404 Not Found" />
                <p className='text-5xl text-gray-700'>Oops, page not found</p>
                <p className='text-xl text-gray-400'>The page you are looking for does not available.</p>
                <button 
                className='btn bg-linear-[125deg,#632EE3,#9F62F2] text-white mt-5 flex justify-center items-center'
                onClick={() => {navigate(-1)}}
                >
                    <MdArrowBackIos className='font-bold mt-0.5' />
                    Go Back!
                </button>
            </div>
        </div>
    );
};

export default NotFound;