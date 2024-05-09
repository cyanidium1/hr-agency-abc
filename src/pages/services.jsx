import Container from "@/components/Container";
import { CustomCard } from "@/components/CustomCard";
import Layout from "@/components/Layout";
import ModalWw from "@/components/Modal";
import { ServicesCard } from "@/components/ServicesCard";
import axios from "axios";
import Image from "next/image";
import { useEffect, useState } from "react";
import { IoDocumentAttach } from "react-icons/io5";

export default function Home() {

    const [data, setData] = useState([]);
    const [trData, setTrData] = useState([]);

    // получаем
    const fetchData = async () => {
        try {
            const response = await axios.get('/api/notion');
            setData(response.data);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

    useEffect(() => {
        fetchData();
    }, []);

    // конвертим в человеческий вид костылями ))
    function transformData(data) {
        const transformedData = {};

        data.forEach(item => {

            if (!item.properties.type.select) {
                return
            }

            const type = item.properties.type.select.name;

            if (!transformedData[type] && !item.properties.image.files[0]) {
                transformedData[type] = {
                    title: item.properties.Title.title[0].plain_text,
                    description: item.properties.Description.rich_text[0].plain_text,
                    items: [],
                };
            }
        });

        data.forEach(item => {
            if (!item.properties.type.select) {
                return
            }

            const type = item.properties.type.select.name;

            if (item.properties.image.files.length > 0) {
                let price = null;

                if (item.properties.price.rich_text.length > 0) {
                    price = item.properties.price.rich_text[0].plain_text;
                }

                transformedData[type].items.push({
                    id: item.properties.Title.title[0].plain_text,
                    title: item.properties.Title.title[0].plain_text,
                    description: item.properties.Description.rich_text[0].plain_text,
                    price: price,
                    image: item.properties.image.files[0].file.url
                });
            }
        });

        return Object.values(transformedData);
    }

    // юзаем, наслаждаемся и ставим свечку разрабам ноушена
    useEffect(() => {
        if (data) {
            console.log(data)
            const transformedData = transformData(data);
            setTrData(transformedData);
            // console.log(transformedData);
        }
    }, [data]);

    return (
        <Layout>
            <section style={{ backgroundRepeat: 'no-repeat', backgroundSize: '450px' }} className="bg-[url('https://assets-global.website-files.com/651d3687e3c9c6d79a245d9c/651e848e95fdc3610db5c07d_ico-1.png')] bg-right-bottom bg-no-repeat bg-cover pb-44">
                <Container>
                    <div className="md:flex h-full items-center">
                        <div className="md:mr-8 md:space-y-8">
                            <div className="flex items-center">
                                <IoDocumentAttach />
                                <p className="text-xs md:text-xl ml-2">Мои услуги</p>
                            </div>
                            <h1 className="text-2xl md:text-5xl font-semibold my-2">
                                Что я могу <span className="text-violet-600 bg-no-repeat">предложить</span>
                            </h1>
                            {/* <h2 className="mb-2 italic md:text-2xl">
                                Онлайн-бизнес и бьюти
                            </h2> */}
                            <Image
                                src="/images/heroServ.jpg"
                                className="rounded-2xl sm:hidden"
                                width={800}
                                height={800}
                                alt="Picture of the author"
                            />
                            <p className="mt-4 md:text-2xl">
                                Добро пожаловать на страничку моих сервисов. Тут вы сможете найти найти услуги и виды консультаций которые я могу вам предложить. Если вы не нашли то что вы ищите или вам нужна индивидуальная консультация - оставьте ваши данные и я сама с вами свяжусь :)
                            </p>
                            <div className="py-4">
                                <ModalWw />
                            </div>
                        </div>
                        <Image
                            src="/images/heroServ.jpg"
                            className="rounded-2xl hidden sm:block"
                            width={500}
                            height={500}
                            alt="Picture of the author"
                        />
                    </div>
                </Container>
            </section>


            {trData && trData.map(section => (
                <section key={section.title} className="pb-20">
                    <Container>
                        <div className="divAnimated bg-violet-400 bg-opacity-20 dark:bg-gradient-to-br from-sky-950 to-violet-950 rounded-2xl p-4 py-6 sm:p-8 text-center">
                            <h3 className="text-left text-3xl sm:text-4xl font-semibold animated">{section.title}</h3>
                            <p className="mt-4 md:text-2xl text-left mb-6 ">{section.description}</p>
                            <div className="md:flex justify-between md:space-x-4">
                                {section.items.map(item => (
                                    <ServicesCard key={item.id} {...item} />
                                ))}
                            </div>
                        </div>
                    </Container>
                </section>
            ))}



            {/* NPD */}
            {/* <section className="pb-20">
                <Container>
                    <div
                        className="divAnimated bg-violet-400 bg-opacity-20 dark:bg-gradient-to-br from-sky-950 to-violet-950 rounded-2xl p-4 py-6 sm:p-8 text-center">
                        <h3 className="text-left text-3xl sm:text-4xl font-semibold animated">Плательщикам НПД</h3>
                        <p className="mt-4 md:text-2xl text-left mb-6 ">Все что касается налогообложения</p>
                        <div className="md:flex justify-between md:space-x-4">
                            {cardTextsNPD.map(el => <ServicesCard key={el.title} {...el} />)}
                        </div>
                    </div>
                </Container>
            </section> */}
            {/* Course */}
            {/* <section className="pb-20">
                <Container>
                    <div
                        className="divAnimated bg-violet-400 bg-opacity-20 dark:bg-gradient-to-br from-sky-950 to-violet-950 rounded-2xl p-4 py-6 sm:p-8 text-center">
                        <h3 className="text-left text-3xl sm:text-4xl font-semibold animated">Продажа онлайн-курсов по закону</h3>
                        <p className="mt-4 md:text-2xl text-left mb-6 ">Вся необходимая информация и консультации для продажи онлайн-курсов</p>
                        <div className="md:flex justify-between md:space-x-4">
                            {cardTextsCourse.map(el => <ServicesCard key={el.title} {...el} />)}
                        </div>
                    </div>
                </Container>
            </section> */}
            {/* Psy */}
            {/* <section className="">
                <Container>
                    <div
                        className="divAnimated bg-violet-400 bg-opacity-20 dark:bg-gradient-to-br from-sky-950 to-violet-950 rounded-2xl p-4 py-6 sm:p-8 text-center">
                        <h3 className="text-left text-3xl sm:text-4xl font-semibold animated">Психолог и частная практика</h3>
                        <p className="mt-4 md:text-2xl text-left mb-6 ">Вся необходимая информация и консультации для продажи услуг психолога и подобных</p>
                        <div className="md:flex justify-between md:space-x-4">
                            {cardTextsPsycho.map(el => <ServicesCard key={el.title} {...el} />)}
                        </div>
                    </div>
                </Container>
            </section> */}
            {/* useful webinars */}
            {/* <section
                style={{
                    backgroundImage: 'url("https://assets-global.website-files.com/651d3687e3c9c6d79a245d9c/651eab0460bc5fd7357ffed6_ico-3.png")',
                    backgroundPosition: '100% 100%',
                    backgroundRepeat: 'no-repeat',
                    backgroundSize: '200px'
                }}
                className="py-20"
            >
                <Container>
                    <div
                        className="divAnimated bg-violet-400 bg-opacity-20 dark:bg-gradient-to-br from-sky-950 to-violet-950 rounded-2xl p-4 py-6 sm:p-8 text-center">
                        <h3 className="text-left text-3xl sm:text-4xl font-semibold animated">Полезные вебинары</h3>
                        <p className="mt-4 md:text-2xl text-left mb-6 ">Оставьте заявку и я пришлю подробности, в каждой теме есть разные продукты</p>
                        <div className="md:flex justify-between md:space-x-4">
                            {cardTexts2.map(el => <ServicesCard key={el.title} {...el} />)}
                        </div>
                    </div>
                </Container>
            </section> */}
            {/* action btn */}
            {/* <section
                className="pb-20"
            >
                <Container>
                    <div className="divAnimated bg-violet-400 bg-opacity-20 dark:bg-gradient-to-br from-sky-950 to-violet-950 rounded-2xl space-x-8 flex p-4 py-6 sm:p-8">
                        <div>
                            <h3 className="text-3xl sm:text-4xl font-semibold mb-8  animated">Не нашли интересующую услугу или остались вопросы?
                            </h3>
                            <p className="my-4 md:text-2xl">
                                Оставьте заявку и я обязательно с вами свяжусь
                            </p>
                            <ModalWw />
                        </div>
                        <Image
                            src="/images/documents.jpg"
                            className="rounded-2xl hidden md:block w-56"
                            width={800}
                            height={250}
                            alt="Picture of the author"
                        />
                    </div>

                </Container>
            </section> */}

        </Layout >
    );
}
