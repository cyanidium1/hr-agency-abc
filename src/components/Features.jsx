import React from 'react';
import { FaUser, FaBuilding, FaHandshake } from 'react-icons/fa';
import ModalWw from './Modal';

function Features() {
    const features = [
        {
            type: "Специалистам",
            description: "Для тех кто ищет работу",
            benefits: 'Помогаем максимально раскрывать свой потенциал, подбирая работу, релевантную опыту, компетенциям, характеру и жизненным целям. Бесплатно консультируем по вопросам развития, образования и карьеры.',
            buttonText: "Вперед!"
        },
        {
            type: "Компаниям",
            description: "Для тех кто ищет работников",
            benefits:
                "Мы решим ваши кадровые вопросы и дадим гарантии. Удобство сервиса, его оперативность и качество, ваша удовлетворенность от работы с нами являются основными критериями оценки успешности нашего бизнеса. ",
            buttonText: "Заказать услуги"
        },
        {
            type: "Партнерам",
            description: "Для HR агенств",
            benefits:
                "Кадровые и рекрутинговые агентства, специалисты и фрилансеры, менеджеры и руководители HR, хантеры, владельцы групп и сообществ любой тематики могут увеличить свой доход, сотрудничая со SmartHR Agency.",
            buttonText: "Стать партнером"
        }
    ];

    const icons = [FaUser, FaBuilding, FaHandshake];

    return (
        <div className="sm:flex sm:space-x-6 ">
            {features.map((feature, index) => (
                <div key={index} className={`py-1 hover:scale-105 duration-300 neon-gradient-card${index + 1}`}>
                    <div className="neon-content-card bg-white dark:bg-black flex flex-col p-6 mx-auto max-w-md text-center rounded-box shadow-xl xl:p-8 border border-base-300 shadow-primary/10 border-primary/10 transition hover:border-primary-focus/20 hover:shadow-primary-focus/20">
                        <h3 className="mb-4 text-3xl font-semibold">{feature.type}</h3>
                        <div className='flex justify-center py-4'>
                            {React.createElement(icons[index], { size: 40 })}
                        </div>
                        <div className="flex justify-center items-baseline my-1 h-10">
                            <p className="font-light sm:text-lg">{feature.description}</p>
                        </div>
                        <p className="mb-8 space-y-4 text-left text-base">
                            {feature.benefits}
                        </p>
                        <div>
                            <ModalWw text={feature.buttonText} />
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default Features;
