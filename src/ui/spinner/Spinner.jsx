import { ImSpinner8 } from 'react-icons/im'

function ClassicSpinner() {
    return (
        <div className="h-[80vh] flex justify-center items-center">
            <ImSpinner8 className='animate-spin text-btn' size={40}/>
        </div>
    );
}

export default ClassicSpinner;