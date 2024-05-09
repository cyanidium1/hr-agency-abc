import Container from "@/components/Container";
import { CustomCard } from "@/components/CustomCard";
import Layout from "@/components/Layout";
import { Accordion, AccordionItem } from "@nextui-org/react";
import Image from "next/image";
import Link from "next/link";
import { CiLocationOn } from "react-icons/ci";
import ReactImageGallery from "react-image-gallery";

const cardTexts = [
  {
    text: 'Нести ответственность за себя и своих близких',
    imageUrl: '/images/family.jpg'
  },
  {
    text: 'Не зависеть от “начальства”, иметь свободный график',
    imageUrl: '/images/freelance.jpg'
  },
  {
    text: 'Развивать себя и свое дело, увеличивать доходы',
    imageUrl: '/images/business.jpg'
  }
];

const cardServTexts = [
  {
    title: 'Бизнес в сфере красоты и ухода за собой',
    text: 'Консультирую по законодательству в сфере красоты с 2017 года. Подскажу что писать в чеке, как оформить коворкинг, пройти проверку санстанции или выгодно нанять сотрудников.',
    imageUrl: '/images/cosmetologist.jpg'
  },
  {
    title: 'Плательщики НПД',
    text: 'Можно ли по вашему виду деятельности применять налог на профессиональный доход (и что сделать, чтобы было можно), что писать в чеке, как учитывать выручку, как оформлять возвраты.',
    imageUrl: '/images/taxes.jpg'
  },
  {
    title: 'Продажа онлайн-курсов по закону',
    text: 'Как оформить договор и внутреннюю рассрочку, что делать с возвратами клиентам, как можно рекламировать и что нельзя обещать на курсе.',
    imageUrl: '/images/online.jpg'
  },
  {
    title: 'Психолог и частная практика',
    text: 'Как выгодно оформить свою практику, можно ли быть репетитором, прием оплат от клиентов из-за рубежа, договор для психолога.',
    imageUrl: '/images/psycho.jpg'
  },
]

const images = [
  {
    original: "/reviews/1.jpg",
    thumbnail: "/reviews/1.jpg",
  },
  {
    original: "/reviews/2.jpg",
    thumbnail: "/reviews/2.jpg",
  },
  {
    original: "/reviews/3.jpg",
    thumbnail: "/reviews/3.jpg",
  },
  {
    original: "/reviews/4.jpg",
    thumbnail: "/reviews/4.jpg",
  },
  {
    original: "/reviews/5.jpg",
    thumbnail: "/reviews/5.jpg",
  },
  {
    original: "/reviews/6.jpg",
    thumbnail: "/reviews/6.jpg",
  },
  {
    original: "/reviews/7.jpg",
    thumbnail: "/reviews/7.jpg",
  },
];


export default function Home() {
  return (
    <Layout>
      <section style={{ backgroundRepeat: 'no-repeat', backgroundSize: '450px' }} className="bg-[url('https://assets-global.website-files.com/651d3687e3c9c6d79a245d9c/651e848e95fdc3610db5c07d_ico-1.png')] bg-right-bottom bg-no-repeat bg-cover pb-44">
        <Container>
          <div className="md:flex h-full items-center">
            <div className="md:mr-8 md:space-y-8">
              <div className="flex items-center">
                <CiLocationOn />
                <p className="text-xs md:text-xl ml-2">Беларусь | Польша</p>
              </div>
              <h1 className="text-2xl md:text-5xl font-semibold my-1">
                Юрист <span className="text-violet-600 bg-no-repeat">Анастасия Жаврид</span>
              </h1>
              <h2 className="mb-2 italic md:text-2xl">
                Онлайн-бизнес и бьюти
              </h2>
              <Image
                src="/images/hero.webp"
                loading="eager"

                className="rounded-2xl sm:hidden"
                width={800}
                height={800}
                alt="Picture of the author"
              />
              <p className="mt-4 md:text-2xl">
                Привет! Я - юрист, предприниматель и консультант.
                Мой опыт юридической работы 14 лет, из которых 7 лет я фрилансер - работаю сама на себя.
              </p>
              <div className="md:space-x-4">
                <Link href="/services">
                  <button className="btn-hover mt-4">МОИ УСЛУГИ</button>
                </Link>
                <Link href="/contact">
                  <button className="btn-hover-empty dark:bg-sky-950 mt-4 bg-white">СВЯЗАТЬСЯ</button>
                </Link>
              </div>
            </div>
            <Image
              src="/images/hero.webp"
              loading="eager"
              className="rounded-2xl hidden sm:block"
              width={500}
              height={500}
              alt="Picture of the author"
            />
          </div>
        </Container>
      </section>

      <section
        className="pb-20"
        style={{
          backgroundImage: 'url("https://assets-global.website-files.com/651d3687e3c9c6d79a245d9c/651e859ce78c11856ac5a994_ico-2.png")',
          backgroundPosition: '-0px 400px',
          backgroundRepeat: 'no-repeat',
          backgroundSize: '180px'
        }}>
        <Container>
          <div className="divAnimated bg-violet-100  dark:bg-gradient-to-br from-violet-950 to-cyan-600 rounded-2xl p-4 sm:p-8">
            <h3 className="text-4xl font-semibold ml-2 mb-8 animated">Чем я занимаюсь:</h3>
            <div className="sm:flex">
              <Image
                src="/images/documents.jpg"
                className="rounded-2xl sm:w-1/2 my-4 sm:my-0"
                width={800}
                height={450}
                alt="Picture of the author"
              />
              <Accordion fullWidth className="w-full sm:w-1/2 " variant="splitted">
                <AccordionItem key="1" aria-label="Accordion 1" title="Помогаю бизнесу не сойти с ума от новых законов и требований">
                  В 2024 году в Беларуси полностью меняются правила для предпринимателей: ограничивают виды деятельности для индивидуальных предпринимателей, предусматривают возможность перехода из ИП в юридическое лицо, пересматривают список видов деятельности для плательщиков НПД. Буквально каждую неделю выходят какие новости и разъяснения. Я помогаю своим клиентам получать нужную и актуальную информацию, которая касается их бизнеса. Это позволяет избежать переплаты налогов и штрафов.
                </AccordionItem>
                <AccordionItem key="2" aria-label="Accordion 2" title="Консультирую по законодательству Беларуси и некоторым вопросам, связанным с работой на себя в Европе">
                  Консультирование по законодательству Беларуси и Польши играет важную роль в оказании поддержки гражданам и организациям, помогая им разобраться в требованиях и нормах, действующих в обеих странах. Это включает в себя анализ законодательства, консультации по интерпретации правовых актов, а также помощь в разработке стратегий соблюдения законодательства. Обеспечивая понимание и соблюдение законов, консультации по праву способствуют укреплению прав и защите интересов граждан в различных сферах жизни.
                </AccordionItem>
                <AccordionItem key="3" aria-label="Accordion 3" title="Консультирую по вопросам о работе на себя в Европе">
                  Я консультирую по всем вопросам, связанным с бизнесом и самозанятостью. Мои клиенты - консультанты, психологи, онлайн-школы, таргетологи, владельцы салонов красоты и мастера из бьюти-сферы.
                  После переезда в Варшаву в 2023 году я стала активно разбираться с правилами работы на себя в Польше. На сегодняшний день я могу проконсультировать по переезду и релокации бизнеса из Беларуси в Польшу, а также о том, с чего лучше всего начать в работе на себя в Польше.
                </AccordionItem>
              </Accordion>
            </div>
          </div>
        </Container>
      </section>

      <section
        className="pb-20"
      >
        <Container>
          <div
            className="divAnimated bg-violet-400 bg-opacity-20 dark:bg-gradient-to-br from-sky-950 to-violet-950 rounded-2xl p-4 py-6 sm:p-8 text-center">
            <h3 className="text-3xl sm:text-4xl font-semibold  mb-8  animated">Отзывы</h3>
            <ReactImageGallery thumbnailPosition="left" items={images} />
            {/* <Link href="/services">
              <button className="btn-hover px-6 mt-4 mx-auto ">ЗАПИСАТЬСЯ НА КОНСУЛЬТАЦИЮ</button>
            </Link> */}
          </div>
        </Container>

      </section>


      <section
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
            <h3 className="text-left text-3xl sm:text-4xl font-semibold  animated">Нестабильное время не повод откладывать своё развитие и независимость</h3>
            <div className="md:flex justify-between md:space-x-4 mt-4 ">
              {cardTexts.map(el => <CustomCard {...el} />)}
            </div>
            <p className="mt-4 md:text-2xl text-left">Не представляю свою жизнь без фриланса и помогаю своим клиентам <span className="px-[2px] bg-cyan-400 bg-opacity-60 rounded-md">становиться независимыми</span></p>
            <p className="mt-4 md:text-2xl text-left">
              Нестабильное время не повод откладывать своё развитие и независимость.
              Приходите ко мне на консультацию, чтобы успокоиться и заниматься своим делом.
            </p>

            <Link href="/services">
              <button className="btn-hover px-6 mt-4 mx-auto ">ЗАПИСАТЬСЯ НА КОНСУЛЬТАЦИЮ</button>
            </Link>

          </div>
        </Container>
      </section>

      <section
        className="pb-20"
      >
        <Container>
          <div className="divAnimated bg-violet-400 bg-opacity-20 dark:bg-gradient-to-br from-sky-950 to-violet-950 rounded-2xl p-4 py-6 sm:p-8 flex flex-col items-center">

            {cardServTexts.map(el => (
              <div className="mt-4 flex space-x-4 divAnimated" key={el.id} >
                <div>
                  <h3 className="text-3xl sm:text-4xl font-semibold  mb-8  animated">{el.title}</h3>
                  <p className="mt-4 md:text-2xl">
                    {el.text}
                  </p>

                </div>
                <Image
                  src={el.imageUrl}
                  className="rounded-2xl hidden md:block w-56 h-56"
                  width={800}
                  height={250}
                  alt="Picture of the author"
                />
              </div>
            ))}
            <Link className="" href="/services">
              <button className="btn-hover px-6 mt-10">ПОСМОТРЕТЬ УСЛУГИ</button>
            </Link>
          </div>

        </Container>

      </section>

    </Layout >
  );
}
