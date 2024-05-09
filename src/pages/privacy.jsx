import Container from "@/components/Container";
import Layout from "@/components/Layout";

export default function Services() {
    return (
        <Layout>
            <section style={{ backgroundRepeat: 'no-repeat', backgroundSize: '450px' }} className="bg-[url('https://assets-global.website-files.com/651d3687e3c9c6d79a245d9c/651e848e95fdc3610db5c07d_ico-1.png')] bg-right-bottom bg-no-repeat bg-cover pb-44">
                <Container>
                    <div className="md:flex h-full items-center">
                        <div className="md:mr-8 md:space-y-8">

                            <h1 className="text-2xl md:text-5xl font-semibold my-2">
                                Политика  <span className="text-violet-600 bg-no-repeat">конфиденциальности</span>
                            </h1>


                            <div className="mt-4 md:text-1xl">
                                <h3 className="text-2xl font-bold mb-2">Приветствую вас на моем сайте!</h3>
                                <p>
                                    Я ценю вашу конфиденциальность и стремлюсь обеспечить ее защиту. В этой Политике конфиденциальности я объясню, как я собираю, использую и защищаю информацию, которую вы предоставляете при использовании моего сайта.
                                </p>
                                <h4 className="font-bold text-2xl mt-4">Сбор и использование информации</h4>
                                <p>
                                    Я не использую файлы cookie и не собираю личную информацию о вас при посещении моего сайта. Я могу собирать информацию, которую вы предоставляете добровольно через формы на моем сайте, такие как формы для отправки заявок или обратной связи. Эта информация может включать ваше имя, адрес электронной почты, номер телефона и другую информацию, которую вы решите предоставить.
                                </p>
                                <h4 className="font-bold text-2xl mt-4">Использование и передача информации</h4>
                                <p>
                                    Я использую предоставленную вами информацию исключительно для целей, связанных с вашим запросом или обращением. Я не передаю вашу личную информацию третьим лицам без вашего согласия, за исключением случаев, когда это необходимо в соответствии с применимым законодательством. Ваши данные также могут использоваться для рассылки информации о моих услугах или продуктах, если вы дали на это согласие.
                                </p>
                                <h4 className="font-bold text-2xl mt-4">Безопасность информации</h4>
                                <p>
                                    Я принимаю все необходимые меры для защиты предоставленной вами информации от несанкционированного доступа, использования или раскрытия. Однако я не могу гарантировать абсолютную безопасность передачи данных через интернет.
                                </p>
                                <h4 className="font-bold text-2xl mt-4">Ссылки на сторонние сайты</h4>
                                <p>
                                    Мой сайт может содержать ссылки на сторонние сайты. Я не несу ответственности за политику конфиденциальности или практики защиты информации на таких сайтах.
                                </p>
                                <h4 className="font-bold text-2xl mt-4">Изменения в политике конфиденциальности</h4>
                                <p>
                                    Я могу время от времени обновлять мою Политику конфиденциальности. Любые изменения будут опубликованы на этой странице с указанием даты последнего обновления.
                                </p>
                                <h4 className="font-bold text-2xl mt-4">Связь со мной</h4>
                                <p>
                                    Если у вас есть вопросы или предложения относительно моей Политики конфиденциальности, пожалуйста, свяжитесь со мной по адресу:
                                </p>
                            </div>

                            <a className="text-violet-600 text-4xl hover:text-violet-400 duration-300" href="mailto:svoedelo.pl@gmail.com">svoedelo.pl@gmail.com</a>
                        </div>

                    </div>
                </Container>
            </section>
        </Layout>
    );
}