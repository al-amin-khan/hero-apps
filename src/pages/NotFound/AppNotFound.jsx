import { MdArrowBackIos } from 'react-icons/md';
import { useNavigate } from 'react-router';
import appErrorImage from '../../assets/App-Error.png';

const AppNotFound = () => {
    const navigate = useNavigate();
    return (
        <div className='text-center my-10'>
            <div className='flex flex-col justify-center items-center my-4 space-y-2'>
                <img className='h-full' src={appErrorImage} alt="404 Not Found" />
                <p className='text-4xl text-gray-700'>Oops, The App Not Found</p>
                <p className='text-lg text-gray-400'>The app you are looking for does not available.</p>
                <button
                    className='btn bg-linear-[125deg,#632EE3,#9F62F2] text-white mt-5 flex justify-center items-center'
                    onClick={() => { navigate(-1) }}
                >
                    <MdArrowBackIos className='font-bold mt-0.5' />
                    Go Back!
                </button>
            </div>
        </div>
    );
};

export default AppNotFound;