import { Wifi, Tv, Package, Download, Zap, Globe } from "lucide-react";
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
        </div>
        
        <div className="container mx-auto px-4 relative">
          <div className="flex flex-col lg:flex-row items-center">
            <div className="lg:w-1/2 mb-10 lg:mb-0">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
                Высокоскоростной интернет и ТВ с качеством
                <span className="text-electron-neon-blue"> нового поколения</span>
              </h1>
              <p className="text-white/80 text-lg mb-8">
                Мы предлагаем стабильное подключение с минимальными задержками, безлимитные тарифы и сотни телеканалов в отличном качестве.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button className="neon-button">
                  Подключить сейчас
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
                <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-1">
                  <img 
                    src="https://images.unsplash.com/photo-1567690187548-f07b1d7bf5a9?auto=format&fit=crop&q=80&w=800" 
                    alt="Connected home" 
                    className="rounded-xl object-cover"
                  />
                </div>
                <div className="absolute -bottom-6 -right-6 bg-electron-dark-blue rounded-lg neon-border p-4 animate-float">
                  <div className="flex items-center gap-3">
                    <Download className="text-electron-neon-blue" />
                    <div>
                      <div className="text-xs text-white/70">Скорость скачивания</div>
                      <div className="text-white font-semibold">940 Мбит/с</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Services Section */}
      <section className="py-20 bg-electron-midnight">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Наши <span className="text-electron-neon-blue">услуги</span>
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
      <section className="py-20 gradient-bg">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Почему выбирают <span className="text-electron-neon-blue">нас</span>
            </h2>
            <p className="text-white/70 max-w-2xl mx-auto">
              Мы предоставляем не просто услуги связи, а комплексные решения для комфортной цифровой жизни
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
            <div className="bg-white/5 backdrop-blur-sm p-6 rounded-xl">
              <div className="w-12 h-12 bg-electron-neon-blue/10 rounded-lg flex items-center justify-center mb-4">
                <Zap className="text-electron-neon-blue" size={24} />
              </div>
              <h3 className="text-white text-xl font-bold mb-3">Высокая скорость</h3>
              <p className="text-white/70">
                Современное оборудование и оптоволоконная сеть гарантируют скорость до 1 Гбит/сек.
              </p>
            </div>
            
            <div className="bg-white/5 backdrop-blur-sm p-6 rounded-xl">
              <div className="w-12 h-12 bg-electron-neon-blue/10 rounded-lg flex items-center justify-center mb-4">
                <Globe className="text-electron-neon-blue" size={24} />
              </div>
              <h3 className="text-white text-xl font-bold mb-3">Обширное покрытие</h3>
              <p className="text-white/70">
                Наша сеть охватывает более 200 городов, и мы продолжаем расширяться.
              </p>
            </div>
            
            <div className="bg-white/5 backdrop-blur-sm p-6 rounded-xl">
              <div className="w-12 h-12 bg-electron-neon-blue/10 rounded-lg flex items-center justify-center mb-4">
                <Package className="text-electron-neon-blue" size={24} />
              </div>
              <h3 className="text-white text-xl font-bold mb-3">Гибкие тарифы</h3>
              <p className="text-white/70">
                Возможность настроить услуги под себя и менять тариф в любое время.
              </p>
            </div>
          </div>
          
          <div className="text-center mt-16">
            <Button className="neon-button">
              Проверить доступность в вашем доме
            </Button>
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
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
              <div>
                <h4 className="text-white font-semibold mb-4">Услуги</h4>
                <ul className="space-y-2">
                  <li><a href="#" className="text-white/70 hover:text-electron-neon-blue transition-colors">Интернет</a></li>
                  <li><a href="#" className="text-white/70 hover:text-electron-neon-blue transition-colors">Телевидение</a></li>
                  <li><a href="#" className="text-white/70 hover:text-electron-neon-blue transition-colors">Пакеты услуг</a></li>
                </ul>
              </div>
              
              <div>
                <h4 className="text-white font-semibold mb-4">Компания</h4>
                <ul className="space-y-2">
                  <li><a href="#" className="text-white/70 hover:text-electron-neon-blue transition-colors">О нас</a></li>
                  <li><a href="#" className="text-white/70 hover:text-electron-neon-blue transition-colors">Новости</a></li>
                  <li><a href="#" className="text-white/70 hover:text-electron-neon-blue transition-colors">Карьера</a></li>
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
