import Link from "next/link";
import Container from "./Container";
import { GiBookmark } from "react-icons/gi";

import { FaPhone } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";
import { FaFacebookSquare } from "react-icons/fa";
import { FaTiktok } from "react-icons/fa";

export default function Footer() {
    return (
        <Container>
            <footer class="bg-white rounded-lg shadow dark:bg-slate-950 mb-6">
                <div class="w-full max-w-screen-xl mx-auto p-4 md:py-8">
                    <div class="sm:flex sm:items-center sm:justify-between">
                        <Link href="/" color="foreground" className="">
                            <div className="items-center">
                                <p className="text-8xl text-center my-[-30px] text-red-500">∞</p>
                                <p className=" sm:block text-2xl "><span className="font-bold">ABC</span> Group</p>
                            </div>
                        </Link>
                        <div className="flex space-x-4 my-4 items-center">

                            <a href="" target="_blank" rel="noreferrer" className="hover:text-violet-300 duration-300">
                                <FaPhone />
                            </a>
                            <a href="" target="_blank" rel="noreferrer" className="hover:text-violet-300 duration-300">
                                <IoIosMail size={25} />
                            </a>
                            <a href="" target="_blank" rel="noreferrer" className="hover:text-violet-300 duration-300">
                                <FaFacebookSquare size={20} />
                            </a>
                            <a href="" target="_blank" rel="noreferrer" className="hover:text-violet-300 duration-300">
                                <FaInstagram size={20} />
                            </a>
                            <a href="" target="_blank" rel="noreferrer" className="hover:text-violet-300 duration-300">
                                <FaTiktok />
                            </a>
                        </div>
                        <ul class="flex flex-wrap items-center mb-6 text-sm font-medium text-gray-500 sm:mb-0 dark:text-gray-400">
                            <li>
                                <Link href="/" class="hover:underline me-4 md:me-6">Главная</Link>
                            </li>
                            <li>
                                <Link href="/services" class="hover:underline me-4 md:me-6">О нас</Link>
                            </li>
                            <li>
                                <Link href="/contact" class="hover:underline me-4 md:me-6">Сотрудничество</Link>
                            </li>
                            <li>
                                <Link href="/privacy" class="hover:underline me-4 md:me-6">Как мы работаем</Link>
                            </li>
                            <li>
                                <Link href="/privacy" class="hover:underline">Служебное</Link>
                            </li>
                        </ul>
                    </div>
                    <hr class="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
                    <span class="block text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2024 <Link href="/" class="hover:underline">Smart HR Agency™</Link>. All Rights Reserved.</span>
                    <a href="mailto:cyanidium1@gmail.com" class="mt-2 block text-xs text-gray-500 sm:text-center dark:text-gray-400">Detected a bug? Please <span className="underline">notify</span> the developer!</a>
                </div>
            </footer>
        </Container>

    )
}