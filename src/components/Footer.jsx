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
            <footer class="bg-white rounded-lg shadow dark:bg-gray-900 mb-6">
                <div class="w-full max-w-screen-xl mx-auto p-4 md:py-8">
                    <div class="sm:flex sm:items-center sm:justify-between">
                        <a href="https://flowbite.com/" class="flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse">
                            <div className="flex flex-col items-center">
                                <div className="flex items-center">
                                    <GiBookmark size={24} />
                                    <p className="font-bold text-inherit text-2xl ml-1">A. Zhavrid</p>
                                </div>
                                <p className="text-xs">юрист | предприниматель</p>
                            </div>
                        </a>
                        <div className="flex space-x-4 my-4 items-center">

                            <a href="tel:+375291563277" target="_blank" rel="noreferrer" className="hover:text-violet-300 duration-300">
                                <FaPhone />
                            </a>
                            <a href="mailto:svoedelo.pl@gmail.com" target="_blank" rel="noreferrer" className="hover:text-violet-300 duration-300">
                                <IoIosMail size={25} />
                            </a>
                            <a href="https://www.facebook.com/" target="_blank" rel="noreferrer" className="hover:text-violet-300 duration-300">
                                <FaFacebookSquare size={20} />
                            </a>
                            <a href="https://www.instagram.com/svoedelo_by" target="_blank" rel="noreferrer" className="hover:text-violet-300 duration-300">
                                <FaInstagram size={20} />
                            </a>
                            <a href="https://www.tiktok.com/svoe_delo_pl" target="_blank" rel="noreferrer" className="hover:text-violet-300 duration-300">
                                <FaTiktok />
                            </a>
                        </div>
                        <ul class="flex flex-wrap items-center mb-6 text-sm font-medium text-gray-500 sm:mb-0 dark:text-gray-400">
                            <li>
                                <Link href="/" class="hover:underline me-4 md:me-6">Главная</Link>
                            </li>
                            <li>
                                <Link href="/services" class="hover:underline me-4 md:me-6">Услуги</Link>
                            </li>
                            <li>
                                <Link href="/contact" class="hover:underline me-4 md:me-6">Контакты</Link>
                            </li>
                            <li>
                                <Link href="/privacy" class="hover:underline">Служебное</Link>
                            </li>
                        </ul>
                    </div>
                    <hr class="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
                    <span class="block text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2024 <Link href="/" class="hover:underline">A.Zhavrid™</Link>. All Rights Reserved.</span>
                    <a href="mailto:cyanidium1@gmail.com" class="mt-2 block text-xs text-gray-500 sm:text-center dark:text-gray-400">Detected a bug? Please <span className="underline">notify</span> the developer!</a>
                </div>
            </footer>
        </Container>

    )
}