import { CustomCard } from "@/components/CustomCard";
import Layout from "@/components/Layout";
import ModalWw from "@/components/Modal";

import Image from "next/image";
import Link from "next/link";

import { FiSearch, FiGlobe, FiUsers } from 'react-icons/fi';
import { BsGraphUp, BsCardText } from 'react-icons/bs';
import Features from "@/components/Features";
import { useInView } from "framer-motion";
import { useRef } from "react";
import AnimatedSection from "@/components/AnimatedSection";
import Prices from "@/components/Prices";

export default function Home() {

  const ref1 = useRef(null);
  const isInView1 = useInView(ref1, { once: true });

  const ref2 = useRef(null);
  const isInView2 = useInView(ref2, { once: true });

  const ref3 = useRef(null);
  const isInView3 = useInView(ref3, { once: true });

  {
    return (
      <Layout>
        <AnimatedSection>
          {(isInView) => (
            <>
              <div className="md:mr-8 md:space-y-8 flex-grow">
                <h1 className="py-4 text-2xl md:text-6xl font-semibold my-1 dark:bg-gradient-to-r from-blue-600 via-violet-700 to-cyan-600 inline-block dark:text-transparent dark:bg-clip-text">
                  Smart HR Agency
                </h1>
                <p style={{
                  transform: isInView ? "none" : "translateX(-200px)",
                  opacity: isInView ? 1 : 0,
                  transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s"
                }} className="mt-4 md:text-xl max-w-2xl">
                  Smart HR Agency – уникальное кадровое агентство, созданное профессионалами из сферы IT с 20-летним опытом разработки и развития крупных интернет-проектов. Агентство является частью международного холдинга ABC Group.
                </p>
                <div className="md:space-x-4">
                  <ModalWw />
                  <Link href="/contact">
                    <button className="btn-hover-empty dark:bg-sky-950 mt-4 bg-white">ПРО НАС</button>
                  </Link>
                </div>
              </div>
              <Image
                src="/images/hero.png"
                loading="eager"
                className="p-6"
                width={400}
                height={700}
                alt="Picture of the author"
              />
            </>
          )}
        </AnimatedSection>

        <AnimatedSection>
          {(isInView) => (
            <>
              <div id="about" className="divAnimated bg-gradient-to-br from-violet-100 to-sky-100 dark:from-violet-950 dark:to-sky-700 rounded-2xl p-4 sm:p-8">
                <h3 className="text-4xl font-semibold mb-8 animated">О нас</h3>
                <p style={{
                  transform: isInView ? "none" : "translateX(-200px)",
                  opacity: isInView ? 1 : 0,
                  transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s"
                }} className=" md:text-xl">
                  Работа агентства основана на <span className="text-blue-500 dark:text-white">SMART</span>-подходе, автоматизации и оптимизации процессов. Мы ориентированы на результат и особенно хорошо знакомы со сферами разработки, поддержки, продаж, digital, performance и affiliate marketing.

                </p>
                <div className="mt-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  <CustomCard icon={<FiSearch size={50} className="text-blue-500" />} text="Наша компания активно занимается поиском и подбором квалифицированных кадров уже более 7 лет. Мы уверены, что правильный человек на правильном месте - залог успеха любого проекта." title="Ищем кадры для себя 7 лет" />
                  <CustomCard icon={<BsGraphUp size={50} className="text-blue-500" />} text="Мы не ограничиваемся рамками одной страны или региона. Наш взгляд на бизнес всегда глобален, мы анализируем тренды и возможности по всему миру." title="Смотрим на бизнес глобально" />
                  <CustomCard icon={<FiGlobe size={50} className="text-blue-500" />} text="В мире многоязычия и культурного разнообразия мы стремимся к созданию команд, где каждый член может чувствовать себя комфортно и понимать своих коллег." title="Создаем мультиязычные команды" />
                  <CustomCard icon={<FiUsers size={50} className="text-blue-500" />} text="Наша команда говорит на русском, английском и испанском языках, что обеспечивает эффективное взаимодействие с клиентами и партнерами по всему миру." title="Говорим на Русском, English, Español" />
                  <CustomCard icon={<BsCardText size={50} className="text-blue-500" />} text="Мы располагаем более чем тысячей актуальных резюме в нашей базе данных, готовых к подбору наиболее подходящих кандидатов для ваших вакансий." title="Имеем 1000+ актуальных резюме в базе" />
                  <CustomCard icon={<FiUsers size={50} className="text-blue-500" />} text="Мы поддерживаем активные связи с международными партнерами и сетями, что обеспечивает нам доступ к мировым ресурсам и возможностям." title="Поддерживаем сеть международных связей" />
                  {/* <CustomCard icon={<BsCardText className="text-blue-500" />} text="Мы постоянно развиваем наше сообщество HR-специалистов, обмениваемся опытом и лучшими практиками, чтобы быть всегда на передовой в сфере управления персоналом." title="Развиваем свое сообщество HR-специалистов" /> */}
                </div>
              </div>
            </>
          )}
        </AnimatedSection>

        <AnimatedSection>
          {(isInView) => (
            <>
              <div id='cooperation' className="rounded-2xl p-4 sm:p-8 bg-violet-50  dark:bg-slate-900">
                <h3 className="text-4xl font-semibold mb-8 animated">Сотрудничесво</h3>
                <p style={{
                  transform: isInView ? "none" : "translateX(-200px)",
                  opacity: isInView ? 1 : 0,
                  transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s"
                }} className=" md:text-xl mb-6">
                  Варианты опций которые наша компания может предложить
                </p>
                <Features />
              </div></>
          )}
        </AnimatedSection>

        <AnimatedSection>
          {(isInView) => (
            <>
              <div className="divAnimated bg-gradient-to-br from-violet-100 to-sky-100 dark:from-violet-950 dark:to-sky-700 rounded-2xl w-fit flex flex-col-reverse sm:flex-row">
                <div id="how-we-work" style={{
                  transform: isInView ? "none" : "translateX(-200px)",
                  opacity: isInView ? 1 : 0,
                  transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s"
                }} className="rounded-2xl p-4 w-1/2 sm:p-8 flex-grow bg-gradient-to-r from-sky-100 dark:from-sky-900 to-violet-100 dark:to-violet-900 sm:rounded-l-xl">
                  <h3 className="text-3xl font-semibold mb-4 animated">Основные направления работы:</h3>
                  <div className="flex">
                    <div
                    >
                      {
                        [
                          { category: 'Руководители', roles: ['C-Level', 'Directors', 'Team Leaders'] },
                          { category: 'Разработчики', roles: ['PHP', 'Python', 'JS', 'Node.JS', 'React'] },
                          { category: 'Digital & Performance Marketing', roles: ['User Acquisition', 'SMM'] }
                        ].map(({ category, roles }) => (
                          <div key={category}>
                            <p>{category}:</p>
                            <ul className="max-w-md space-y-1 text-gray-500 list-inside dark:text-gray-400">
                              {roles.map(role => (
                                <li key={role} className="flex items-center">
                                  <svg className="w-3.5 h-3.5 me-2 text-green-500 dark:text-green-400 flex-shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                    <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
                                  </svg>
                                  {role}
                                </li>
                              ))}
                            </ul>
                          </div>
                        ))
                      }
                    </div>
                    {[
                      {
                        category: 'Affiliate Marketing', roles: ['Media Buyer', 'Account Manager', 'Motion Designer', 'UI/UX designer',
                          'Business Development', 'PR', 'Sales', 'SMM', 'SEO'
                        ]
                      },
                    ].map(({ category, roles }) => (
                      <div key={category}>
                        <p>{category}:</p>
                        <ul className="max-w-md space-y-1 text-gray-500 list-inside dark:text-gray-400">
                          {roles.map(role => (
                            <li key={role} className="flex items-center">
                              <svg className="w-3.5 h-3.5 me-2 text-green-500 dark:text-green-400 flex-shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
                              </svg>
                              {role}
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="relative w-fit rounded-tl-2xl sm:rounded-r-2xl">
                  <Image
                    src="/images/proger.jpg"
                    className="rounded-t-2xl sm:rounded-r-2xl"
                    width={1400}
                    height={1400}
                    alt="proger"
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-violet-100 dark:from-violet-900 via-transparent to-transparent sm:rounded-r-2xl" />
                </div>
              </div>
            </>
          )}
        </AnimatedSection>

        <AnimatedSection>
          {(isInView) => (
            <>
              <div className="divAnimated bg-gradient-to-br from-violet-100 to-sky-100 dark:from-violet-950 dark:to-sky-700 rounded-2xl w-fit flex flex-col-reverse sm:flex-row">
                <div style={{
                  transform: isInView ? "none" : "translateX(-200px)",
                  opacity: isInView ? 1 : 0,
                  transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s"
                }} className=" p-4 w-1/2 sm:p-8 flex-grow bg-gradient-to-r from-sky-100 dark:from-sky-900 to-violet-100 dark:to-violet-900 rounded-l-xl">
                  <h3 className="text-3xl font-semibold mb-4 animated">Как мы работаем:</h3>
                  <ol class="relative border-s border-gray-200 dark:border-gray-700">
                    <li class="mb-2 ms-4">
                      <div class="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-100 dark:bg-gray-500"></div>
                      <time class="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">Переговоры</time>
                      <h3 class=" text-gray-900 dark:text-white">Выясняем все детали о том, кто вам нужен</h3>

                    </li>
                    <li class="mb-2 ms-4">
                      <div class="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-100 dark:bg-gray-500"></div>
                      <time class="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">Начало работы</time>
                      <h3 class=" text-gray-900 dark:text-white">Ищем, собеседуем, тестируем кандидатов</h3>
                    </li>
                    <li class="mb-2 ms-4">
                      <div class="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-100 dark:bg-gray-500"></div>
                      <time class="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">Передача кандидатов</time>
                      <h3 class=" text-gray-900 dark:text-white">Передаем контакты подходящих кандидатов</h3>
                    </li>
                    <li class="mb-2 ms-4">
                      <div class="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-100 dark:bg-gray-500"></div>
                      <time class="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">Тестовый период</time>
                      <h3 class=" text-gray-900 dark:text-white">Подходящий кандидат выходит на испытательный срок</h3>
                    </li>
                    <li class="ms-4">
                      <div class="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-100 dark:bg-gray-500"></div>
                      <time class="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">Заключительный этап</time>
                      <h3 class=" text-gray-900 dark:text-white">По завершении испытательного срока вы оплачиваете наши услуги</h3>
                    </li>

                  </ol>
                </div>

                <div className="relative w-fit">
                  <Image
                    src="/images/laptop.jpg"
                    className="sm:rounded-r-2xl"
                    width={1400}
                    height={1400}
                    alt="laptop"
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-violet-100 dark:from-violet-900 via-transparent to-transparent sm:rounded-r-2xl" />
                </div>
              </div>
            </>
          )}
        </AnimatedSection>

        <AnimatedSection>
          {(isInView) => (
            <div className="rounded-2xl p-4 sm:p-8 bg-violet-50  dark:bg-slate-900 w-full">
              <h3 style={{
                transform: isInView ? "none" : "translateX(-200px)",
                opacity: isInView ? 1 : 0,
                transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s"
              }} className="text-4xl font-semibold mb-8 animated">Стоимость услуг</h3>

              <Prices />
              <div className="pt-8 flex justify-center">
                <ModalWw />
              </div>
            </div>
          )}
        </AnimatedSection>

      </Layout >
    );
  }
}