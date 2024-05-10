import React from "react";

export const CustomCard = ({ icon, text, title }) => {

    return (
        <div class="mb-3 rounded-xl py-4 px-4 shadow-md transition-all hover:shadow-lg sm:p-3 lg:px-3 xl:px-4 divAnimated bg-white dark:bg-black dark:bg-opacity-30">
            <div class="mx-auto mb-7 inline-block">
                {icon}
            </div>
            <div>
                <h3 class="mb-4 text-xl font-bold sm:text-2xl lg:text-xl xl:text-2xl">{title}
                </h3>
                <p class="text-base font-medium text-body-color">
                    {text}
                </p>
            </div>
        </div>
    );
};
