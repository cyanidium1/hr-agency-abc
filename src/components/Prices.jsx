import React from 'react';

function Prices() {
    const features = [
        {
            type: "Зарплата до $1000",
            description: "100% ЗП",

        },
        {
            type: "Зарплата от $1000 до $3000",
            description: "200% ЗП",

        },
        {
            type: "Зарплата от $3000 и выше",
            description: "250% ЗП",

        }
    ];


    return (
        <div className="flex justify-between space-x-6 w-full">
            {features.map((feature, index) => (
                <>
                    <div key={index} className={` box `}>
                        <div className="inset-1 rounded-2xl absolute z-10 bg-white dark:bg-black flex flex-col justify-center items-center p-6 mx-auto max-w-md text-center">
                            <h3 className="mb-4 text-xl font-semibold">{feature.type}</h3>

                            <div className="flex justify-center items-baseline my-1 h-10">
                                <p className="font-light text-3xl">{feature.description}</p>
                            </div>
                        </div>
                    </div>
                    {/* <div class="border-blur"></div> */}
                </>
            ))}
        </div>
    );
}

export default Prices;

{/* <div class="box">
  <span></span>
  <h2>01</h2>
</div>
<div class="border-blur"></div> */}