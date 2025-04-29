import { Wifi, Tv, Package, Download, Zap, Globe, Shield, MapPin, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import ServiceCard from "@/components/ServiceCard";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <section className="gradient-bg relative pt-32 pb-20 md:pt-40 md:pb-32 overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
          <div className="absolute w-80 h-80 rounded-full bg-electron-neon-blue/10 blur-3xl -top-20 -left-20"></div>
          <div className="absolute w-96 h-96 rounded-full bg-electron-neon-blue/5 blur-3xl bottom-10 right-10"></div>
          <div className="absolute w-1 h-40 bg-electron-neon-blue/30 top-40 left-[20%] rounded-full"></div>
          <div className="absolute w-1 h-20 bg-electron-neon-blue/30 top-80 left-[30%] rounded-full"></div>
          <div className="absolute w-1 h-32 bg-electron-neon-blue/30 top-60 right-[25%] rounded-full"></div>
          
          {/* Added circuit-like lines */}
          <div className="absolute w-[300px] h-[1px] bg-gradient-to-r from-transparent via-electron-neon-blue/40 to-transparent top-1/3 left-0"></div>
          <div className="absolute w-[200px] h-[1px] bg-gradient-to-r from-transparent via-electron-neon-blue/40 to-transparent bottom-1/4 right-0"></div>
        </div>
        
        <div className="container mx-auto px-4 relative">
          <div className="flex flex-col lg:flex-row items-center">
            <div className="lg:w-1/2 mb-10 lg:mb-0">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
                Подключайся к <span className="text-electron-neon-blue animate-pulse-gentle">будущему</span> с технологиями нового поколения
              </h1>
              <p className="text-white/80 text-lg mb-8">
                Оптоволоконный интернет со скоростью до 1 Гбит/с и сотни HD-каналов с безупречным качеством изображения и звука.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button className="neon-button group">
                  Подключить сейчас
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Button>
                <Button variant="outline" className="bg-transparent text-white border-white hover:text-electron-neon-blue hover:border-electron-neon-blue transition-colors">
                  Наши тарифы
                </Button>
              </div>
              
              <div className="flex items-center gap-6 mt-12">
                <div className="text-center">
                  <div className="text-electron-neon-blue text-2xl font-bold">500+</div>
                  <div className="text-white/70 text-sm">ТВ-каналов</div>
                </div>
                <div className="h-10 w-px bg-white/20"></div>
                <div className="text-center">
                  <div className="text-electron-neon-blue text-2xl font-bold">1 Гбит/с</div>
                  <div className="text-white/70 text-sm">Скорость</div>
                </div>
                <div className="h-10 w-px bg-white/20"></div>
                <div className="text-center">
                  <div className="text-electron-neon-blue text-2xl font-bold">24/7</div>
                  <div className="text-white/70 text-sm">Поддержка</div>
                </div>
              </div>
            </div>
            
            <div className="lg:w-1/2 lg:pl-16 relative">
              <div className="relative">
                <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-1 neon-border-subtle rotate-3 animate-float">
                  <img 
                    src="https://images.unsplash.com/photo-1593508512255-86ab42a8e620?auto=format&fit=crop&q=80&w=800" 
                    alt="Подключенный дом" 
                    className="rounded-xl object-cover"
                  />
                </div>
                <div className="absolute -bottom-6 -right-6 bg-electron-dark-blue rounded-lg neon-border p-4 animate-float-slower">
                  <div className="flex items-center gap-3">
                    <Download className="text-electron-neon-blue" />
                    <div>
                      <div className="text-xs text-white/70">Скорость скачивания</div>
                      <div className="text-white font-semibold">940 Мбит/с</div>
                    </div>
                  </div>
                </div>
                <div className="absolute -top-6 -left-6 bg-electron-dark-blue rounded-lg neon-border p-4 animate-float-reverse">
                  <div className="flex items-center gap-3">
                    <Tv className="text-electron-neon-blue" />
                    <div>
                      <div className="text-xs text-white/70">Каналов в HD</div>
                      <div className="text-white font-semibold">200+</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Services Section */}
      <section className="py-20 bg-electron-midnight relative">
        {/* Decorative elements */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
          <div className="absolute w-[1px] h-40 bg-electron-neon-blue/20 top-20 left-[10%]"></div>
          <div className="absolute w-[1px] h-60 bg-electron-neon-blue/20 top-40 left-[30%]"></div>
          <div className="absolute w-[1px] h-80 bg-electron-neon-blue/20 top-20 right-[20%]"></div>
        </div>
        
        <div className="container mx-auto px-4 relative">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Наши <span className="text-electron-neon-blue">тарифы</span>
            </h2>
            <p className="text-white/70 max-w-2xl mx-auto">
              Выберите подходящий тариф или пакет услуг, который отвечает именно вашим потребностям
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <ServiceCard
              title="Интернет"
              description="Высокоскоростной доступ в интернет с безлимитным трафиком"
              icon={<Wifi size={24} />}
              price="490"
              features={[
                "Скорость до 500 Мбит/с",
                "Безлимитный трафик",
                "Стабильное подключение",
                "Бесплатная настройка оборудования"
              ]}
              linkTo="/internet"
            />
            
            <ServiceCard
              title="Телевидение"
              description="Сотни каналов на любой вкус в HD и 4K качестве"
              icon={<Tv size={24} />}
              price="390"
              features={[
                "Более 200 каналов",
                "Каналы в HD и 4K качестве",
                "Архив передач на 7 дней",
                "Мультискрин до 5 устройств"
              ]}
              linkTo="/tv"
              popular={true}
            />
            
            <ServiceCard
              title="Пакеты услуг"
              description="Комплексные решения по выгодной цене"
              icon={<Package size={24} />}
              price="790"
              features={[
                "Интернет + ТВ",
                "Экономия до 20%",
                "Единый личный кабинет",
                "Одна служба поддержки"
              ]}
              linkTo="/packages"
            />
          </div>
        </div>
      </section>
      
      {/* Features Section */}
      <section className="py-20 gradient-bg relative">
        {/* Decorative network grid */}
        <div className="absolute inset-0 grid grid-cols-6 grid-rows-6 opacity-5">
          {Array.from({length: 36}).map((_, i) => (
            <div key={i} className="border border-electron-neon-blue"></div>
          ))}
        </div>
        
        <div className="container mx-auto px-4 relative">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Почему выбирают <span className="text-electron-neon-blue">Электрон</span>
            </h2>
            <p className="text-white/70 max-w-2xl mx-auto">
              Мы предоставляем не просто услуги связи, а комплексные решения для комфортной цифровой жизни
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
            <div className="bg-white/5 backdrop-blur-sm p-6 rounded-xl hover:neon-border-subtle transition-all duration-300">
              <div className="w-12 h-12 bg-electron-neon-blue/10 rounded-lg flex items-center justify-center mb-4">
                <Zap className="text-electron-neon-blue" size={24} />
              </div>
              <h3 className="text-white text-xl font-bold mb-3">Высокая скорость</h3>
              <p className="text-white/70">
                Современное оборудование и оптоволоконная сеть гарантируют скорость до 1 Гбит/сек.
              </p>
            </div>
            
            <div className="bg-white/5 backdrop-blur-sm p-6 rounded-xl hover:neon-border-subtle transition-all duration-300">
              <div className="w-12 h-12 bg-electron-neon-blue/10 rounded-lg flex items-center justify-center mb-4">
                <Shield className="text-electron-neon-blue" size={24} />
              </div>
              <h3 className="text-white text-xl font-bold mb-3">Безопасность</h3>
              <p className="text-white/70">
                Защита от DDoS-атак и базовый антивирус включены во все тарифы бесплатно.
              </p>
            </div>
            
            <div className="bg-white/5 backdrop-blur-sm p-6 rounded-xl hover:neon-border-subtle transition-all duration-300">
              <div className="w-12 h-12 bg-electron-neon-blue/10 rounded-lg flex items-center justify-center mb-4">
                <MapPin className="text-electron-neon-blue" size={24} />
              </div>
              <h3 className="text-white text-xl font-bold mb-3">Обширное покрытие</h3>
              <p className="text-white/70">
                Наша сеть охватывает более 200 городов, и мы продолжаем расширяться.
              </p>
            </div>
          </div>
          
          <div className="text-center mt-16">
            <Button className="neon-button group">
              Проверить доступность в вашем доме
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
          </div>
        </div>
      </section>
      
      {/* Testimonials */}
      <section className="py-20 bg-electron-midnight">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Что говорят <span className="text-electron-neon-blue">клиенты</span>
            </h2>
            <p className="text-white/70 max-w-2xl mx-auto">
              Отзывы наших пользователей о качестве услуг и сервиса
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-electron-dark-blue/50 to-electron-midnight/80 p-6 rounded-xl backdrop-blur-sm border border-white/5">
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 rounded-full bg-electron-neon-blue/20 flex items-center justify-center mr-3">
                  <span className="text-electron-neon-blue font-bold">А</span>
                </div>
                <div>
                  <div className="text-white font-semibold">Андрей Смирнов</div>
                  <div className="text-white/50 text-sm">Москва</div>
                </div>
              </div>
              <p className="text-white/80 italic">
                "Перешли на Электрон после трех лет мучений с другим провайдером. Скорость стабильная, техподдержка отвечает быстро. Очень доволен!"
              </p>
              <div className="flex text-electron-neon-blue mt-4">
                {'★'.repeat(5)}
              </div>
            </div>
            
            <div className="bg-gradient-to-br from-electron-dark-blue/50 to-electron-midnight/80 p-6 rounded-xl backdrop-blur-sm border border-white/5">
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 rounded-full bg-electron-neon-blue/20 flex items-center justify-center mr-3">
                  <span className="text-electron-neon-blue font-bold">Е</span>
                </div>
                <div>
                  <div className="text-white font-semibold">Елена Петрова</div>
                  <div className="text-white/50 text-sm">Санкт-Петербург</div>
                </div>
              </div>
              <p className="text-white/80 italic">
                "Отличное ТВ-приложение! Можно смотреть на телевизоре, планшете и телефоне одновременно. Архив передач очень выручает."
              </p>
              <div className="flex text-electron-neon-blue mt-4">
                {'★'.repeat(5)}
              </div>
            </div>
            
            <div className="bg-gradient-to-br from-electron-dark-blue/50 to-electron-midnight/80 p-6 rounded-xl backdrop-blur-sm border border-white/5">
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 rounded-full bg-electron-neon-blue/20 flex items-center justify-center mr-3">
                  <span className="text-electron-neon-blue font-bold">М</span>
                </div>
                <div>
                  <div className="text-white font-semibold">Максим Иванов</div>
                  <div className="text-white/50 text-sm">Казань</div>
                </div>
              </div>
              <p className="text-white/80 italic">
                "Подключил комбо-пакет, сэкономил прилично. Интернет летает, ТВ без зависаний. Мастер при установке всё настроил и объяснил."
              </p>
              <div className="flex text-electron-neon-blue mt-4">
                {'★'.repeat(4)}{'☆'}
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Footer */}
      <footer className="bg-electron-dark-blue py-12">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between">
            <div className="mb-8 md:mb-0">
              <div className="text-electron-neon-blue font-bold text-2xl mb-4">ЭЛЕКТРОН</div>
              <p className="text-white/70 max-w-sm">
                Ваш надежный провайдер интернета и телевидения. Мы делаем цифровой мир доступнее.
              </p>
              <div className="mt-6 flex gap-4">
                <a href="#" className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-electron-neon-blue/20 hover:text-electron-neon-blue transition-colors">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className=""><path d="M18 2H15C13.6739 2 12.4021 2.52678 11.4645 3.46447C10.5268 4.40215 10 5.67392 10 7V10H7V14H10V22H14V14H17L18 10H14V7C14 6.73478 14.1054 6.48043 14.2929 6.29289C14.4804 6.10536 14.7348 6 15 6H18V2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path></svg>
                </a>
                <a href="#" className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-electron-neon-blue/20 hover:text-electron-neon-blue transition-colors">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className=""><path d="M23 3.00005C22.0424 3.67552 20.9821 4.19216 19.86 4.53005C19.2577 3.83756 18.4573 3.34674 17.567 3.12397C16.6767 2.90121 15.7395 2.95724 14.8821 3.2845C14.0247 3.61176 13.2884 4.19445 12.773 4.95376C12.2575 5.71308 11.9877 6.61238 12 7.53005V8.53005C10.2426 8.57561 8.50127 8.18586 6.93101 7.39549C5.36074 6.60513 4.01032 5.43868 3 4.00005C3 4.00005 -1 13 8 17C5.94053 18.398 3.48716 19.099 1 19C10 24 21 19 21 7.50005C20.9991 7.2215 20.9723 6.94364 20.92 6.67005C21.9406 5.66354 22.6608 4.39276 23 3.00005Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path></svg>
                </a>
                <a href="#" className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-electron-neon-blue/20 hover:text-electron-neon-blue transition-colors">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className=""><rect x="2" y="2" width="20" height="20" rx="5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></rect><path d="M16 11.37C16.1234 12.2022 15.9813 13.0522 15.5938 13.799C15.2063 14.5458 14.5931 15.1514 13.8416 15.5297C13.0901 15.9079 12.2384 16.0396 11.4078 15.9059C10.5771 15.7723 9.80976 15.3801 9.21484 14.7852C8.61992 14.1902 8.22773 13.4229 8.09407 12.5922C7.9604 11.7615 8.09207 10.9099 8.47033 10.1584C8.84859 9.40685 9.45419 8.79374 10.201 8.40624C10.9478 8.01874 11.7978 7.87659 12.63 8C13.4789 8.12588 14.2649 8.52146 14.8717 9.12831C15.4785 9.73515 15.8741 10.5211 16 11.37Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path><circle cx="16.5" cy="7.5" r="1.5" fill="currentColor"></circle></svg>
                </a>
                <a href="#" className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-electron-neon-blue/20 hover:text-electron-neon-blue transition-colors">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className=""><path d="M16 8C17.5913 8 19.1174 8.63214 20.2426 9.75736C21.3679 10.8826 22 12.4087 22 14V21H18V14C18 13.4696 17.7893 12.9609 17.4142 12.5858C17.0391 12.2107 16.5304 12 16 12C15.4696 12 14.9609 12.2107 14.5858 12.5858C14.2107 12.9609 14 13.4696 14 14V21H10V14C10 12.4087 10.6321 10.8826 11.7574 9.75736C12.8826 8.63214 14.4087 8 16 8Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path><path d="M6 9H2V21H6V9Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path><circle cx="4" cy="4" r="2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></circle></svg>
                </a>
              </div>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
              <div>
                <h4 className="text-white font-semibold mb-4">Услуги</h4>
                <ul className="space-y-2">
                  <li><a href="/internet" className="text-white/70 hover:text-electron-neon-blue transition-colors">Интернет</a></li>
                  <li><a href="/tv" className="text-white/70 hover:text-electron-neon-blue transition-colors">Телевидение</a></li>
                  <li><a href="/packages" className="text-white/70 hover:text-electron-neon-blue transition-colors">Пакеты услуг</a></li>
                  <li><a href="/equipment" className="text-white/70 hover:text-electron-neon-blue transition-colors">Оборудование</a></li>
                </ul>
              </div>
              
              <div>
                <h4 className="text-white font-semibold mb-4">Компания</h4>
                <ul className="space-y-2">
                  <li><a href="#" className="text-white/70 hover:text-electron-neon-blue transition-colors">О нас</a></li>
                  <li><a href="#" className="text-white/70 hover:text-electron-neon-blue transition-colors">Новости</a></li>
                  <li><a href="#" className="text-white/70 hover:text-electron-neon-blue transition-colors">Карьера</a></li>
                  <li><a href="#" className="text-white/70 hover:text-electron-neon-blue transition-colors">Блог</a></li>
                </ul>
              </div>
              
              <div>
                <h4 className="text-white font-semibold mb-4">Контакты</h4>
                <ul className="space-y-2">
                  <li className="text-white/70">8 (800) 123-45-67</li>
                  <li className="text-white/70">info@electron.ru</li>
                  <li className="text-white/70">г. Москва, ул. Технологическая, 42</li>
                </ul>
              </div>
            </div>
          </div>
          
          <div className="border-t border-white/10 mt-12 pt-6 flex flex-col md:flex-row justify-between items-center">
            <div className="text-white/50 text-sm">
              © 2025 Электрон. Все права защищены.
            </div>
            <div className="flex gap-4 mt-4 md:mt-0">
              <a href="#" className="text-white/70 hover:text-electron-neon-blue transition-colors">Политика конфиденциальности</a>
              <a href="#" className="text-white/70 hover:text-electron-neon-blue transition-colors">Публичная оферта</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
