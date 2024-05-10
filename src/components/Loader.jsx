// import './loader.css'

const Loader = () => {
    return <div className="loader dark:bg-black bg-violet-50">
        <div className="flex">
            <div className="circle">
                {[...Array(21).keys()].map((index) => (
                    <span key={index} style={{ '--rot': index }}></span>
                ))}
            </div>
            <div className="circle">
                {[...Array(21).keys()].map((index) => (
                    <span key={index} style={{ '--rot': index }}></span>
                ))}
            </div>
        </div>

        <p className="firstAnimText text-3xl mt-4 ">
            <span className="font-bold">ABC</span> Group
        </p>
        <p className="secondAnimText text-xl">
            Smart HR Agency
        </p>
    </div>
}

export default Loader;