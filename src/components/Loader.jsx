// import './loader.css'

const Loader = () => {
    return <div className='backdropL dark:bg-black bg-violet-50'>
        <div className="loader relative">
            <div className="loader-text w-screen -translate-x-[45%] bg-violet-600 bg-opacity-40 h-20">
                <p className=' text-4xl absolute right-[-50px] -translate-x-[50%] top-[50%] -translate-y-[50%] text-white'>
                    A. Zhavrid
                    {/* Loader v.0.1.3 by cyanidium */}
                </p>
            </div>
        </div>
    </div>;
}

export default Loader;