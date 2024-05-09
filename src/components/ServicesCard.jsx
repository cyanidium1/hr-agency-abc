import Image from "next/image";
import ModalWw from "./Modal";

export const ServicesCard = ({ title, description, price, image }) => (
    <div class="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 my-4 ">
        <Image
            src={image}
            className="rounded-t-lg h-60 object-cover"
            width={1200}
            height={900}
            alt="services"
        />
        <div class="p-5 flex flex-col justify-between sm:h-80 ">
            <div className="">
                <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{title}</h5>
                {
                    price && <p className="text-center text-2xl flex items-center justify-center my-2"><span className="text-sm mr-1">$</span> {price}</p>
                }
                <p className="text-left" dangerouslySetInnerHTML={{ __html: description.replace(/\n/g, "<br/>") }} />

            </div>
            <ModalWw text="Заказать ➔" subject={title} details={description.slice(0, 20) + '...'} price={price} />
        </div>
    </div>)