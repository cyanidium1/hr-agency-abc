import Container from "@/components/Container";
import Layout from "@/components/Layout";
import Image from "next/image";
import { FaInstagram } from "react-icons/fa";
import { FaTiktok } from "react-icons/fa";
import { sendMessage } from "@/app/sendMsg";
import { useState } from "react";
import SuccessModal from "@/components/SuccessModal";

export default function Home() {

    const [isModalOpen, setIsModalOpen] = useState(false);

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [message, setMessage] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        const msg = `<b>Заявка со страницы контакты</b> Имя: ${name}, Телефон: ${phone}, Почта: ${email}. \nСообщение: ${message}`;
        sendMessage(msg);
        setName("");
        setEmail("");
        setPhone("");
        setMessage("");
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };

    return (
        <Layout>
            <section style={{ backgroundRepeat: 'no-repeat', backgroundSize: '450px' }} className="bg-[url('https://assets-global.website-files.com/651d3687e3c9c6d79a245d9c/651e848e95fdc3610db5c07d_ico-1.png')] bg-right-bottom bg-no-repeat bg-cover pb-44">
                <Container>
                    <div className="md:flex h-full justify-between items-center">
                        <div className="md:mr-8 w-full">

                            <h1 className="text-2xl md:text-5xl font-semibold mt-2 text-center">
                                Страница <span className="text-violet-600 bg-no-repeat">связи</span>
                            </h1>

                            <Image
                                src="/images/heroCont.jpg"
                                className="my-4 rounded-2xl sm:hidden"
                                width={1000}
                                height={1000}
                                alt="Picture of the author"
                            />
                            <div className=" w-full">
                                <form className="sm:w-4/5 mx-auto" onSubmit={handleSubmit}>
                                    <div className="relative z-0 w-full mb-5 group">
                                        <input
                                            type="name"
                                            value={name}
                                            onChange={(e) => setName(e.target.value)}
                                            className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                                            placeholder=" "
                                            required
                                        />
                                        <label htmlFor="name" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Ваше имя</label>
                                    </div>
                                    <div className="relative z-0 w-full mb-5 group">
                                        <input
                                            type="email"
                                            value={email}
                                            onChange={(e) => setEmail(e.target.value)}
                                            className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                                            placeholder=" "
                                            required
                                        />
                                        <label htmlFor="email" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Электронная почта</label>
                                    </div>
                                    <div className="relative z-0 w-full mb-5 group">
                                        <input
                                            type="phone"
                                            value={phone}
                                            onChange={(e) => setPhone(e.target.value)}
                                            className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                                            placeholder=" "
                                            required
                                        />
                                        <label htmlFor="phone" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Телефон или мессенджер</label>
                                    </div>
                                    <label htmlFor="message" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Ваше сообщение</label>
                                    <textarea
                                        id="message"
                                        rows="4"
                                        value={message}
                                        onChange={(e) => setMessage(e.target.value)}
                                        className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                        placeholder="Расскажите вкратце о чем хотели бы пообщаться"
                                    ></textarea>
                                    <button type="submit" className="btn-hover mt-4">Отправить</button>
                                </form>
                            </div>
                        </div>


                        <Image
                            src="/images/heroCont.jpg"
                            className="rounded-2xl hidden sm:block"
                            width={500}
                            height={500}
                            alt="Picture of the author"
                        />
                    </div>
                </Container>
            </section>
            <section>
                <Container>
                    <div className="w-full rounded-2xl bg-slate-200 dark:bg-gradient-to-br from-sky-950 to-violet-950 mb-20 py-8 sm:flex justify-around">
                        <div className="flex flex-col items-center">
                            <a className="text-3xl mt-3 hover:text-violet-300 duration-300" href="tel:+375291563277">+375 29 156 32 77</a>

                            <a className="text-2xl mt-5 hover:text-violet-300 duration-300" href="mailto:svoedelo.pl@gmail.com">svoedelo.pl@gmail.com</a>
                        </div>

                        <div className="flex flex-col items-center">
                            <a href="https://www.instagram.com/svoedelo_by" target="_blank" rel="noreferrer" className="text-2xl mt-5 flex items-center hover:text-violet-300 duration-300">
                                <FaInstagram size={30} className="mr-1" />svoedelo_by
                            </a>

                            <a href="https://www.tiktok.com/svoe_delo_pl" target="_blank" rel="noreferrer" className="text-2xl mt-5 flex items-center hover:text-violet-300 duration-300">
                                <FaTiktok className="mr-2" />svoe_delo_pl
                            </a>
                        </div>

                    </div>
                </Container>
            </section>
            <SuccessModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
        </Layout >
    );
}
