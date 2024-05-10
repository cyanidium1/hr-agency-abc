import { useRouter } from "next/router";
import React from "react";
import { Navbar, NavbarBrand, NavbarContent, NavbarItem, NavbarMenuToggle, NavbarMenu, NavbarMenuItem, Button, Divider } from "@nextui-org/react";
import { ThemeSwitcher } from "./ThemeSwitcher";
import { GiBookmark } from "react-icons/gi";
import ModalWw from "./Modal";

export default function Header() {
    const [isMenuOpen, setIsMenuOpen] = React.useState(false);

    const router = useRouter();

    return (
        <Navbar maxWidth="xl" height={'6rem'} onMenuOpenChange={setIsMenuOpen}>
            <NavbarContent>
                <NavbarMenuToggle
                    aria-label={isMenuOpen ? "Close menu" : "Open menu"}
                    className="sm:hidden"
                />
                <NavbarBrand>
                    <a href="/" className="">
                        {/* pc */}
                        <div className="items-center">
                            <p className="text-8xl text-center my-[-30px] text-red-500">∞</p>
                            <p className=" sm:block text-2xl "><span className="font-bold">ABC</span> Group</p>
                        </div>
                    </a>
                </NavbarBrand>
            </NavbarContent>

            <NavbarContent className="hidden sm:flex gap-4 items-center" justify="center">
                <NavbarItem>
                    <a href="/" className="text-2xl">
                        Главная
                    </a>
                </NavbarItem>
                <Divider orientation="vertical" className="h-8" />
                <NavbarItem>
                    <a href="#about" className="text-2xl">
                        О нас
                    </a>
                </NavbarItem>
                <Divider orientation="vertical" className="h-8" />
                <NavbarItem>
                    <a href="#cooperation" className="text-2xl">
                        Сотрудничество
                    </a>
                </NavbarItem>
                <Divider orientation="vertical" className="h-8" />
                <NavbarItem>
                    <a href="#how-we-work" className="text-2xl">
                        Как мы работаем
                    </a>
                </NavbarItem>
                <Divider orientation="vertical" className="h-8" />
                <ThemeSwitcher />
            </NavbarContent>
            <NavbarContent justify="end">
                <NavbarItem className="mt-1">
                    <ModalWw />
                </NavbarItem>
            </NavbarContent>
            <NavbarMenu className="flex flex-col items-center space-y-8 justify-center">
                <NavbarItem>
                    <a href="#home" className="text-4xl">
                        Главная
                    </a>
                </NavbarItem>
                <NavbarItem>
                    <a href="#about" className="text-4xl">
                        О нас
                    </a>
                </NavbarItem>
                <NavbarItem>
                    <a href="#cooperation" className="text-4xl">
                        Сотрудничесво
                    </a>
                </NavbarItem>
                <NavbarItem>
                    <a href="#how-we-work" className="text-4xl">
                        Как мы работаем
                    </a>
                </NavbarItem>
                <NavbarItem>
                    <ThemeSwitcher />
                </NavbarItem>
            </NavbarMenu>
        </Navbar>
    );
}
