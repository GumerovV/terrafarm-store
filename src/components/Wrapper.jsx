function Wrapper({ children }) {
    return (
        <div className="bg-bg">
            <div className='mx-auto py-4 px-2 container min-h-screen'>
                { children }
            </div>
        </div>
    );
}

export default Wrapper;