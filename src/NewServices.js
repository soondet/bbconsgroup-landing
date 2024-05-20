import React, { useState } from "react";
import {
  FaRegBuilding,
  FaGavel,
  FaRegHandshake,
  FaClipboardList,
  FaBriefcase,
  FaChalkboardTeacher,
} from "react-icons/fa";
import bgImage from "./assets/images/4375.jpg"; // Adjust the path as necessary

const NewServices = () => {
  const [showFullText1, setShowFullText1] = useState(false);
  const [showFullText2, setShowFullText2] = useState(false);

  const toggleText1 = () => {
    setShowFullText1(!showFullText1);
  };

  const toggleText2 = () => {
    setShowFullText2(!showFullText2);
  };

  return (
    <section
      className="pt-6 pb-20 px-4"
      style={{
        backgroundImage: `url(${bgImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="bg-white bg-opacity-90 py-20 px-6 rounded-lg shadow-lg">
        <div className="container mx-auto">
          <h2 className="text-3xl md:text-5xl font-bold mb-6 text-gray-800 text-center">
            Список предоставляемых услуг
          </h2>

          <div className="mt-8">
            <h3 className="text-2xl md:text-3xl font-bold mb-4 text-gray-800 flex items-center">
              <FaRegBuilding className="text-blue-500 mr-2" /> Регистрация и
              управление бизнесом
            </h3>
            <ul className="list-disc list-inside text-gray-600 mb-8">
              <li>Профессиональное юридическое сопровождение компании</li>
              <li>
                Разработка учредительных документов (устава, учредительного
                договора) для юридических лиц, а также пакета сопутствующих
                документов (протоколы, решения, заявления) при регистрации,
                перерегистрации компаний и внесении изменений
              </li>
              <li>Регистрация и Перерегистрация ТОО и ИП «под ключ»</li>
              <li>Ликвидация (закрытие) ТОО и ИП «под ключ»</li>
              <li>Приостановление деятельности ТОО и ИП</li>
              <li>Получение ЭЦП</li>
            </ul>

            <h3
              id="consulting"
              className="text-2xl md:text-3xl font-bold mb-4 text-gray-800 flex items-center"
            >
              <FaRegHandshake className="text-green-500 mr-2" /> Консалтинг
            </h3>
            <ul className="list-disc list-inside text-gray-600 mb-8">
              <li>Юридические консультации для бизнеса в РК</li>
              <li>
                Юридические консультации для поставщиков по тендерам
                (государственные и коммерческие закупки)
              </li>
              <li>Консультация на всех этапах участия в закупках (тендерах)</li>
              <li>
                Трактовка законов, а также правил, касающихся проведения
                тендеров
              </li>
            </ul>

            <h3
              id="tenders"
              className="text-2xl md:text-3xl font-bold mb-4 text-gray-800 flex items-center"
            >
              <FaGavel className="text-red-500 mr-2" /> Тендеры
            </h3>
            <div className="mb-8">
              <h4 className="text-xl md:text-2xl font-bold mb-2 text-gray-800 flex items-center">
                <FaClipboardList className="text-yellow-500 mr-2" /> Разовые
                услуги по тендерам
              </h4>
              <ul className="list-disc list-inside text-gray-600 mb-4">
                <li>
                  Регистрация на ведущих тендерных площадках (goszakup.gov.kz,
                  zakup.sk.kz, reestr.nadloc.kz)
                </li>
                <li>Регистрация на частных порталах (по запросу клиента)</li>
                <li>
                  Подготовка и подача документов на участие в тендерах (подача
                  ценовых предложений)
                </li>
                <li>
                  Подготовка и подача документов на участие в тендерах (подача
                  на открытые конкурса)
                </li>
                <li>
                  Подготовка электронных актов на порталах goszakup.gov.kz,
                  zakup.sk.kz
                </li>
                <li>Заполнение отчета о местном содержании</li>
                <li>Сопровождение торгов и аукционов</li>
                <li>
                  Отслеживание результатов (протокол допуска, протокол итогов)
                </li>
                <li>Аудит тендерной документации</li>
                <li>Проверка потенциальных контрагентов</li>
              </ul>

              <h4 className="text-xl md:text-2xl font-bold mb-2 text-gray-800 flex items-center">
                <FaBriefcase className="text-purple-500 mr-2" /> Сопровождение
                тендеров «под ключ»
              </h4>
              <p
                className={`text-gray-600 mb-4 ${
                  showFullText1 ? "" : "line-clamp-3"
                }`}
              >
                Тендерное сопровождение под ключ представляет собой полный
                комплекс экспертных услуг от специалистов в области тендеров и
                закупок. Цель такого сопровождения - обеспечить вашу компанию
                всем необходимым для победы в тендерных процедурах.
              </p>
              <p
                className={`text-gray-600 mb-4 ${
                  showFullText1 ? "" : "hidden"
                }`}
              >
                В рамках сопровождения тендеров «под ключ» наши специалисты
                выполняют следующие виды работ:
              </p>
              <ul
                className={`list-disc list-inside text-gray-600 mb-4 ${
                  showFullText1 ? "" : "hidden"
                }`}
              >
                <li>
                  Мониторинг и подбор актуальных тендеров, соответствующих
                  интересам и специфике деятельности клиента.
                </li>
                <li>
                  Анализ тендерной документации, изучение всех требований и
                  условий закупки.
                </li>
                <li>
                  Подготовка полного комплекта документов (заявок, ценовых
                  предложений, технических спецификаций и т.д.) с учетом
                  требований тендерной документации.
                </li>
                <li>Сбор необходимых дополнительных документов.</li>
                <li>Юридическая экспертиза тендерных документов.</li>
                <li>Персональные консультации специалистов в сфере закупок.</li>
                <li>
                  Аккредитация на электронных торговых площадках и подача
                  тендерной заявки.
                </li>
                <li>
                  Участие в переговорах, разъяснениях, очных процедурах от лица
                  клиента.
                </li>
                <li>
                  Отслеживание результатов (протокол допуска, протокол итогов).
                </li>
                <li>Сопровождение на этапе рассмотрения и оценки заявок.</li>
                <li>
                  Оказание правовой поддержки в случае возникновения споров.
                </li>
                <li>
                  Заключение контракта по результатам выигранного тендера.
                </li>
                <li>
                  Подготовка электронных актов на порталах: goszakup.gov.kz,
                  zakup.sk.kz.
                </li>
                <li>Заполнение отчета о местном содержании.</li>
              </ul>
              <p
                className={`text-gray-600 mb-4 ${
                  showFullText1 ? "" : "hidden"
                }`}
              >
                Преимущества комплексного тендерного сопровождения:
              </p>
              <ul
                className={`list-disc list-inside text-gray-600 mb-4 ${
                  showFullText1 ? "" : "hidden"
                }`}
              >
                <li>
                  Экономия времени и ресурсов. Привлечение профессионалов в
                  области тендерного сопровождения позволяет сэкономить
                  значительное количество времени и усилий, которые пришлось бы
                  затратить на самостоятельную подготовку к участию в тендерах.
                </li>
                <li>
                  Эффективная стратегия участия. Опытные специалисты
                  разрабатывают оптимальную стратегию для успешного прохождения
                  тендерных процедур с учетом специфики вашего бизнеса и
                  требований конкретных тендеров.
                </li>
                <li>
                  Повышение шансов на победу. Комплексное тендерное
                  сопровождение значительно увеличивает вероятность выигрыша
                  благодаря глубокому анализу условий, профессиональной
                  подготовке документации и грамотному представлению заявки.
                </li>
                <li>
                  Соблюдение законодательных норм. Эксперты гарантируют строгое
                  следование всем требованиям и нормативам, установленным для
                  участников тендерных процедур, обеспечивая полное соответствие
                  вашей заявки действующему законодательству.
                </li>
              </ul>
              <button
                onClick={toggleText1}
                className="text-blue-500 hover:text-blue-700 transition-colors duration-300 mt-4 bg-white border border-blue-500 rounded-md px-4 py-2"
              >
                {showFullText1 ? "Скрыть" : "Показать больше"}
              </button>
            </div>

            <h3
              id="training"
              className="text-2xl md:text-3xl font-bold mb-4 text-gray-800 flex items-center"
            >
              <FaChalkboardTeacher className="text-orange-500 mr-2" /> Обучение
              тендерам
            </h3>
            <div className="mb-8">
              <p
                className={`text-gray-600 mb-4 ${
                  showFullText2 ? "" : "line-clamp-3"
                }`}
              >
                Обучение тендерам – это процесс получения теоретических знаний и
                практических навыков, необходимых для эффективного участия в
                государственных и коммерческих закупках. Оно включает в себя
                изучение законодательных норм, регулирующих сферу закупок,
                освоение методик подготовки тендерной документации, стратегий
                участия в торгах, особенностей работы на электронных торговых
                площадках и многого другого. Качественное обучение тендерам
                позволяет значительно повысить шансы на победу в желаемых
                тендерах, снизить риски и успешно развивать бизнес за счет
                получения выгодных контрактов.
              </p>
       
              {showFullText2 && (
                <>
                  <p className="text-gray-600 mb-4">
                    Обучиться тендерам самостоятельно: возможно ли это? Конечно,
                    однако, сколько на это понадобится времени и будет ли оно
                    эффективным? Лучше всего приобретать знания у экспертов –
                    опытных практикующих специалистов. К вашим услугам вся
                    команда BB Consulting Group.
                  </p>
                  <p className="text-gray-600 mb-4">
                    Мы разработали комплексную программу обучения для освоения
                    всех аспектов участия в государственных и коммерческих
                    закупках. Теоретические знания и практический опыт под
                    руководством опытных закупщиков позволят вам эффективно
                    участвовать в тендерах.
                  </p>
                  <p className="text-gray-600 mb-4">
                    Обучение в нашей компании может проводиться как в
                    индивидуальном формате, так и в групповом – в соответствии с
                    вашими предпочтениями.
                  </p>
                  <p className="text-gray-600 mb-4">
                    Обучение по электронным закупкам на площадках:
                  </p>
                  <ul className="list-disc list-inside text-gray-600 mb-4">
                    <li>Государственные закупки</li>
                    <li>Закупки АО ФНБ Самрук-Казына</li>
                    <li>Закупки Недропользователей</li>
                  </ul>
                  <p className="text-gray-600 mb-4">
                    Вас ждут глубокие теоретические знания и ценный практический
                    опыт под руководством опытных специалистов по закупкам.
                  </p>
                  <ul className="list-disc list-inside text-gray-600 mb-4">
                    <li>
                      Раздаточные материалы (шаблоны документов, писем и многое
                      другое)
                    </li>
                    <li>Персональный наставник</li>
                    <li>Поддержка по тендерным вопросам</li>
                    <li>Регистрация на торговых площадках</li>
                    <li>Юридическая консультация</li>
                    <li>Помощь в подготовке и подаче заявок</li>
                    <li>Содействие в открытии ИП/ТОО</li>
                    <li>Выдача сертификата по окончании обучения</li>
                  </ul>
                  <div className="flex flex-col md:flex-row md:space-x-4 mb-8">
                    <div className="w-full md:w-1/2">
                      <h4 className="text-2xl font-bold mb-4 text-gray-800">
                        В программу обучения входит:
                      </h4>
                      <div className="bg-white p-6 rounded-lg shadow-md">
                        <ul className="list-disc list-inside text-gray-600">
                          <li>Что такое тендер?</li>
                          <li>Процесс закупок</li>
                          <li>Способы закупок</li>
                          <li>Виды обеспечений</li>
                          <li>Практика подачи заявок</li>
                          <li>Закрывающая документация</li>
                        </ul>
                      </div>
                    </div>
                    <div className="w-full md:w-1/2 mt-8 md:mt-0">
                      <h4 className="text-2xl font-bold mb-4 text-gray-800">
                        Чему вы научитесь?
                      </h4>
                      <div className="bg-white p-6 rounded-lg shadow-md">
                        <ul className="list-disc list-inside text-gray-600">
                          <li>Находить тендеры</li>
                          <li>Изучать документацию</li>
                          <li>Составлять пакет документов</li>
                          <li>Подавать и отзывать заявки</li>
                          <li>Работать с Законами</li>
                          <li>Консорциум и субподряд</li>
                          <li>Вносить обеспечения</li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  <div className="bg-white p-6 rounded-lg shadow-md mb-8 flex flex-col lg:flex-row md:space-x-4 divide-y lg:divide-y-0 lg:divide-x divide-gray-300">
                    <p className="text-gray-600 px-4 py-2">
                      1) Мы обучаем как начинающих специалистов, так и тех, кто
                      уже имеет солидный практический опыт в сфере тендеров.
                    </p>
                    <p className="text-gray-600 px-4 py-2">
                      2) После завершения обучения мы предоставляем
                      сопровождение и оказываем поддержку по тендерным вопросам.
                    </p>
                    <p className="text-gray-600 px-4 py-2">
                      3) Мы гарантируем получение практических результатов. В
                      ходе обучения вы пройдете все этапы тендерной сделки: от
                      подачи заявки, победы в тендере, исполнения обязательств
                      по контракту, завершения работ и получения оплаты.
                    </p>
                    <p className="text-gray-600 px-4 py-2">
                      4) Наш подход отличается эффективностью. Мы обучаем не
                      только инструментам и методам, но также законодательным
                      нормам и всем нюансам, которые не прописаны в правилах.
                    </p>
                    <p className="text-gray-600 px-4 py-2">
                      5) Практика с первого дня. Наши занятия состоят из 70%
                      практики и 30% теории.
                    </p>
                  </div>
                </>
              )}
                     <button
                onClick={toggleText2}
                className="text-blue-500 hover:text-blue-700 transition-colors duration-300 mt-4 bg-white border border-blue-500 rounded-md px-4 py-2"
              >
                {showFullText2 ? "Скрыть" : "Показать больше"}
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewServices;
