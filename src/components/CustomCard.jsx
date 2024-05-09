import React from "react";
import { Card } from "@nextui-org/react";
import Image from "next/image";



export const CustomCard = ({ imageUrl, text }) => (
    <Card className="sm:w-1/3 sm:space-y-5 mb-2 p-2 sm:p-4 divAnimated" radius="2xl">
        <Image
            src={imageUrl}
            className="rounded-xl"
            width={500}
            height={200}
            alt="Picture of the author"
        />
        <div className="space-y-3 p-4 sm:p-0">
            <p className="text-2xl">{text}</p>
        </div>
    </Card>
);
