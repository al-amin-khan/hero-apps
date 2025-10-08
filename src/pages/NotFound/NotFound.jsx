import { MdArrowBackIos } from 'react-icons/md';
import { useNavigate } from 'react-router';

const NotFound = () => {
    const navigate = useNavigate();
    return (
        <div className='text-center my-10'>
            <div className='flex flex-col justify-center items-center my-4'>
                <img className='w-[40%] h-full' src="../../src/assets/error-404.png" alt="404 Not Found" />
                <p className='text-2xl text-gray-400'>The page you are looking for does not exist.</p>
                <button 
                className='btn btn-soft mt-5 flex justify-center items-center'
                onClick={() => {navigate(-1)}}
                >
                    <MdArrowBackIos className='font-bold mt-0.5' />
                    <span>Back To Previous Page</span>
                </button>
            </div>
        </div>
    );
};

export default NotFound;