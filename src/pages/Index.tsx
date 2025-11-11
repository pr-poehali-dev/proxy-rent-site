import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

export default function Index() {
  const [bandwidth, setBandwidth] = useState(100);
  const bandwidthTiers = [
    { min: 100, max: 500, price: 1500 },
    { min: 500, max: 1000, price: 5000 },
    { min: 1000, max: 10000, price: 8500 }
  ];
  
  const calculatePrice = (mbps: number) => {
    if (mbps <= 500) return 1500;
    if (mbps <= 1000) return 5000;
    return 8500;
  };

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen">
      <header className="fixed top-0 w-full bg-white/80 backdrop-blur-md z-50 border-b">
        <nav className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Icon name="Shield" size={24} className="text-primary" />
            <span className="font-bold text-xl">RuProxy</span>
          </div>
          <div className="hidden md:flex items-center gap-6">
            <button onClick={() => scrollToSection('pricing')} className="hover:text-primary transition-colors">Тарифы</button>
            <button onClick={() => scrollToSection('features')} className="hover:text-primary transition-colors">Преимущества</button>
            <button onClick={() => scrollToSection('api')} className="hover:text-primary transition-colors">API</button>
            <button onClick={() => scrollToSection('faq')} className="hover:text-primary transition-colors">FAQ</button>
            <button onClick={() => scrollToSection('contacts')} className="hover:text-primary transition-colors">Контакты</button>
          </div>
          <Button>Начать</Button>
        </nav>
      </header>

      <section className="pt-32 pb-20 px-4 bg-gradient-to-b from-blue-50 to-white">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <Badge className="mb-4">Резидентные прокси России</Badge>
              <h1 className="text-5xl font-bold mb-6 leading-tight">
                Платите только за <span className="text-primary">полосу</span>
              </h1>
              <p className="text-lg text-muted-foreground mb-8">
                Доступ к российским резидентным IP-адресам с оплатой за полосу пропускания. 
                Выбирайте скорость от 100 Мбит/с, никаких скрытых комиссий.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button size="lg" onClick={() => scrollToSection('pricing')}>
                  Выбрать тариф
                </Button>
                <Button size="lg" variant="outline" onClick={() => scrollToSection('api')}>
                  Документация API
                </Button>
              </div>
              <div className="mt-8 flex gap-8 text-sm">
                <div>
                  <div className="text-2xl font-bold text-primary">99.9%</div>
                  <div className="text-muted-foreground">Uptime</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-primary">50k+</div>
                  <div className="text-muted-foreground">Прокси</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-primary">24/7</div>
                  <div className="text-muted-foreground">Поддержка</div>
                </div>
              </div>
            </div>
            <div className="animate-scale-in">
              <img 
                src="https://cdn.poehali.dev/projects/d4167b13-320b-4d03-add5-6d3575276980/files/ca7da217-4914-4323-8553-a77e03b83652.jpg" 
                alt="Proxy Network" 
                className="rounded-lg shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      <section id="pricing" className="py-20 px-4 bg-white">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Прозрачные тарифы</h2>
            <p className="text-lg text-muted-foreground">Фиксированная цена за скорость канала</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <CardHeader>
                <CardTitle>Старт</CardTitle>
                <CardDescription>Для тестирования и небольших задач</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="mb-6">
                  <div className="text-3xl font-bold">1 500 ₽<span className="text-base font-normal text-muted-foreground">/мес</span></div>
                  <div className="text-sm text-muted-foreground mt-1">100 Мбит/с</div>
                </div>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-start gap-2">
                    <Icon name="Check" size={20} className="text-primary mt-0.5" />
                    <span className="text-sm">Канал 100 Мбит/с</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Icon name="Check" size={20} className="text-primary mt-0.5" />
                    <span className="text-sm">Безлимитный трафик</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Icon name="Check" size={20} className="text-primary mt-0.5" />
                    <span className="text-sm">HTTP/HTTPS/SOCKS5</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Icon name="Check" size={20} className="text-primary mt-0.5" />
                    <span className="text-sm">Базовая поддержка</span>
                  </li>
                </ul>
                <Button className="w-full" variant="outline">Начать</Button>
              </CardContent>
            </Card>

            <Card className="hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-primary border-2 relative">
              <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                <Badge className="bg-primary">Популярный</Badge>
              </div>
              <CardHeader>
                <CardTitle>Профи</CardTitle>
                <CardDescription>Оптимальный для бизнеса</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="mb-6">
                  <div className="text-3xl font-bold">5 000 ₽<span className="text-base font-normal text-muted-foreground">/мес</span></div>
                  <div className="text-sm text-muted-foreground mt-1">500 Мбит/с</div>
                </div>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-start gap-2">
                    <Icon name="Check" size={20} className="text-primary mt-0.5" />
                    <span className="text-sm">Канал 500 Мбит/с</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Icon name="Check" size={20} className="text-primary mt-0.5" />
                    <span className="text-sm">Безлимитный трафик</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Icon name="Check" size={20} className="text-primary mt-0.5" />
                    <span className="text-sm">API доступ</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Icon name="Check" size={20} className="text-primary mt-0.5" />
                    <span className="text-sm">Приоритетная поддержка</span>
                  </li>
                </ul>
                <Button className="w-full">Начать</Button>
              </CardContent>
            </Card>

            <Card className="hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <CardHeader>
                <CardTitle>Энтерпрайз</CardTitle>
                <CardDescription>Для крупных проектов</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="mb-6">
                  <div className="text-3xl font-bold">8 500 ₽<span className="text-base font-normal text-muted-foreground">/мес</span></div>
                  <div className="text-sm text-muted-foreground mt-1">1 Гбит/с</div>
                </div>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-start gap-2">
                    <Icon name="Check" size={20} className="text-primary mt-0.5" />
                    <span className="text-sm">Канал 1 Гбит/с</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Icon name="Check" size={20} className="text-primary mt-0.5" />
                    <span className="text-sm">Выделенные IP-адреса</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Icon name="Check" size={20} className="text-primary mt-0.5" />
                    <span className="text-sm">Персональный менеджер</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Icon name="Check" size={20} className="text-primary mt-0.5" />
                    <span className="text-sm">SLA 99.9%</span>
                  </li>
                </ul>
                <Button className="w-full" variant="outline">Связаться</Button>
              </CardContent>
            </Card>
          </div>

          <Card className="mt-12 p-8 bg-gradient-to-r from-blue-50 to-white">
            <div className="max-w-2xl mx-auto">
              <h3 className="text-2xl font-bold mb-4 text-center">Калькулятор стоимости</h3>
              <div className="space-y-4">
                <div>
                  <Label htmlFor="bandwidth">Полоса пропускания: {bandwidth} Мбит/с</Label>
                  <input 
                    type="range" 
                    id="bandwidth"
                    min="100" 
                    max="1000" 
                    step="50"
                    value={bandwidth}
                    onChange={(e) => setBandwidth(Number(e.target.value))}
                    className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer mt-2"
                  />
                </div>
                <div className="bg-white p-6 rounded-lg text-center">
                  <div className="text-sm text-muted-foreground mb-2">Стоимость в месяц</div>
                  <div className="text-4xl font-bold text-primary">
                    {calculatePrice(bandwidth).toLocaleString('ru-RU')} ₽
                  </div>
                  <div className="text-sm text-muted-foreground mt-2">
                    {bandwidth >= 1000 ? '1 Гбит/с' : `${bandwidth} Мбит/с`}
                  </div>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </section>

      <section id="features" className="py-20 px-4 bg-gray-50">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Почему выбирают нас</h2>
            <p className="text-lg text-muted-foreground">Технологии и сервис для вашего успеха</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="border-none shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <Icon name="Zap" size={24} className="text-primary" />
                </div>
                <CardTitle>Высокая скорость</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Резидентные IP-адреса с минимальной задержкой и максимальной пропускной способностью для ваших задач.
                </p>
              </CardContent>
            </Card>

            <Card className="border-none shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <Icon name="MapPin" size={24} className="text-primary" />
                </div>
                <CardTitle>География России</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  50,000+ реальных IP-адресов по всей России. Выбирайте регион для таргетированного доступа.
                </p>
              </CardContent>
            </Card>

            <Card className="border-none shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <Icon name="Shield" size={24} className="text-primary" />
                </div>
                <CardTitle>Безопасность</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Шифрование трафика, защита данных и полная анонимность. Ваша конфиденциальность — наш приоритет.
                </p>
              </CardContent>
            </Card>

            <Card className="border-none shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <Icon name="Code" size={24} className="text-primary" />
                </div>
                <CardTitle>API интеграция</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Простой REST API для автоматизации. Документация, примеры кода и SDK для популярных языков.
                </p>
              </CardContent>
            </Card>

            <Card className="border-none shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <Icon name="RotateCw" size={24} className="text-primary" />
                </div>
                <CardTitle>Ротация IP</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Автоматическая или ручная смена IP-адресов. Гибкие настройки интервалов ротации под ваши задачи.
                </p>
              </CardContent>
            </Card>

            <Card className="border-none shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <Icon name="Headphones" size={24} className="text-primary" />
                </div>
                <CardTitle>Поддержка 24/7</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Техподдержка всегда на связи. Решаем вопросы быстро через чат, email или телефон.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section id="api" className="py-20 px-4 bg-white">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">API документация</h2>
            <p className="text-lg text-muted-foreground">Интеграция за считанные минуты</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <Card className="p-6">
              <h3 className="text-xl font-bold mb-4">Быстрый старт</h3>
              <div className="space-y-4">
                <div>
                  <div className="text-sm font-medium mb-2">1. Получите API ключ</div>
                  <div className="bg-gray-100 p-3 rounded font-mono text-sm">
                    GET /api/v1/auth/key
                  </div>
                </div>
                <div>
                  <div className="text-sm font-medium mb-2">2. Запросите прокси</div>
                  <div className="bg-gray-100 p-3 rounded font-mono text-sm">
                    POST /api/v1/proxy/get<br/>
                    {'{'}"region": "moscow"{'}'} 
                  </div>
                </div>
                <div>
                  <div className="text-sm font-medium mb-2">3. Используйте прокси</div>
                  <div className="bg-gray-100 p-3 rounded font-mono text-sm text-xs">
                    proxy://user:pass@ip:port
                  </div>
                </div>
              </div>
            </Card>

            <Card className="p-6">
              <h3 className="text-xl font-bold mb-4">Пример на Python</h3>
              <div className="bg-accent text-white p-4 rounded-lg font-mono text-sm overflow-x-auto">
                <pre>{`import requests

api_key = "your_api_key"
headers = {
  "Authorization": f"Bearer {api_key}"
}

response = requests.post(
  "https://api.ruproxy.ru/v1/proxy/get",
  headers=headers,
  json={"region": "moscow"}
)

proxy = response.json()["proxy"]
print(f"Proxy: {proxy}")`}</pre>
              </div>
            </Card>
          </div>

          <div className="mt-8 grid md:grid-cols-3 gap-6">
            <Card className="p-6 text-center hover:shadow-lg transition-shadow">
              <Icon name="Book" size={32} className="text-primary mx-auto mb-3" />
              <h4 className="font-bold mb-2">Полная документация</h4>
              <p className="text-sm text-muted-foreground mb-4">Все эндпоинты и параметры</p>
              <Button variant="outline" size="sm">Читать</Button>
            </Card>
            <Card className="p-6 text-center hover:shadow-lg transition-shadow">
              <Icon name="FileCode" size={32} className="text-primary mx-auto mb-3" />
              <h4 className="font-bold mb-2">Примеры кода</h4>
              <p className="text-sm text-muted-foreground mb-4">Python, Node.js, PHP, Java</p>
              <Button variant="outline" size="sm">Скачать</Button>
            </Card>
            <Card className="p-6 text-center hover:shadow-lg transition-shadow">
              <Icon name="Package" size={32} className="text-primary mx-auto mb-3" />
              <h4 className="font-bold mb-2">SDK библиотеки</h4>
              <p className="text-sm text-muted-foreground mb-4">Готовые пакеты для быстрой интеграции</p>
              <Button variant="outline" size="sm">Получить</Button>
            </Card>
          </div>
        </div>
      </section>

      <section id="faq" className="py-20 px-4 bg-gray-50">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Частые вопросы</h2>
            <p className="text-lg text-muted-foreground">Ответы на популярные вопросы о сервисе</p>
          </div>

          <Accordion type="single" collapsible className="space-y-4">
            <AccordionItem value="item-1" className="bg-white px-6 rounded-lg border">
              <AccordionTrigger className="text-left font-semibold hover:no-underline">
                Что такое резидентные прокси и чем они отличаются от обычных?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                Резидентные прокси используют IP-адреса реальных пользователей, выданные интернет-провайдерами. 
                Это делает их неотличимыми от обычных пользователей и значительно снижает вероятность блокировки.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-2" className="bg-white px-6 rounded-lg border">
              <AccordionTrigger className="text-left font-semibold hover:no-underline">
                Как работает оплата за трафик?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                Вы выбираете полосу пропускания (от 100 Мбит/с) и платите фиксированную месячную плату. 
                Трафик не ограничен — используйте столько, сколько нужно в рамках выбранной скорости канала.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-3" className="bg-white px-6 rounded-lg border">
              <AccordionTrigger className="text-left font-semibold hover:no-underline">
                Можно ли выбрать конкретный регион или город?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                Да, наш сервис поддерживает выбор региона через API или личный кабинет. 
                Доступны все федеральные округа России и крупные города. 
                Точность геолокации зависит от выбранного тарифа.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-4" className="bg-white px-6 rounded-lg border">
              <AccordionTrigger className="text-left font-semibold hover:no-underline">
                Есть ли ограничения по количеству запросов?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                Количество запросов не ограничено на всех тарифах. Единственное ограничение — скорость канала, 
                которую вы выбрали в тарифе. Трафик безлимитный, справедливое использование приветствуется.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-5" className="bg-white px-6 rounded-lg border">
              <AccordionTrigger className="text-left font-semibold hover:no-underline">
                Какая техническая поддержка доступна?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                Мы предоставляем круглосуточную поддержку 24/7 через онлайн-чат, email и телефон. 
                Среднее время ответа — 5 минут. Для тарифа Enterprise доступен персональный менеджер.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-6" className="bg-white px-6 rounded-lg border">
              <AccordionTrigger className="text-left font-semibold hover:no-underline">
                Можно ли протестировать сервис перед покупкой?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                Да, мы предоставляем тестовый период с 500 МБ бесплатного трафика для новых пользователей. 
                Просто зарегистрируйтесь и начните пользоваться сразу без привязки карты.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </section>

      <section id="contacts" className="py-20 px-4 bg-white">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Свяжитесь с нами</h2>
            <p className="text-lg text-muted-foreground">Ответим на ваши вопросы в течение 30 минут</p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <Card className="p-6 mb-6">
                <div className="flex items-start gap-4 mb-6">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Icon name="Mail" size={24} className="text-primary" />
                  </div>
                  <div>
                    <h3 className="font-bold mb-1">Email</h3>
                    <p className="text-muted-foreground">support@ruproxy.ru</p>
                  </div>
                </div>
                <div className="flex items-start gap-4 mb-6">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Icon name="Phone" size={24} className="text-primary" />
                  </div>
                  <div>
                    <h3 className="font-bold mb-1">Телефон</h3>
                    <p className="text-muted-foreground">+7 (495) 123-45-67</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Icon name="MessageCircle" size={24} className="text-primary" />
                  </div>
                  <div>
                    <h3 className="font-bold mb-1">Telegram</h3>
                    <p className="text-muted-foreground">@ruproxy_support</p>
                  </div>
                </div>
              </Card>

              <div className="bg-gradient-to-br from-primary to-blue-600 text-white p-6 rounded-lg">
                <h3 className="text-xl font-bold mb-2">Нужна консультация?</h3>
                <p className="mb-4 opacity-90">Наши специалисты помогут подобрать оптимальный тариф</p>
                <Button variant="secondary">Заказать звонок</Button>
              </div>
            </div>

            <Card className="p-6">
              <form className="space-y-4">
                <div>
                  <Label htmlFor="name">Ваше имя</Label>
                  <Input id="name" placeholder="Иван Иванов" />
                </div>
                <div>
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" type="email" placeholder="ivan@example.com" />
                </div>
                <div>
                  <Label htmlFor="message">Сообщение</Label>
                  <Textarea id="message" placeholder="Расскажите о вашей задаче..." rows={5} />
                </div>
                <Button type="submit" className="w-full">Отправить сообщение</Button>
              </form>
            </Card>
          </div>
        </div>
      </section>

      <footer className="bg-accent text-white py-12 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Icon name="Shield" size={24} />
                <span className="font-bold text-xl">RuProxy</span>
              </div>
              <p className="text-sm opacity-80">
                Надёжные резидентные прокси России с оплатой за трафик
              </p>
            </div>
            <div>
              <h4 className="font-bold mb-4">Продукт</h4>
              <ul className="space-y-2 text-sm opacity-80">
                <li><button onClick={() => scrollToSection('pricing')} className="hover:opacity-100">Тарифы</button></li>
                <li><button onClick={() => scrollToSection('features')} className="hover:opacity-100">Преимущества</button></li>
                <li><button onClick={() => scrollToSection('api')} className="hover:opacity-100">API</button></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Поддержка</h4>
              <ul className="space-y-2 text-sm opacity-80">
                <li><button onClick={() => scrollToSection('faq')} className="hover:opacity-100">FAQ</button></li>
                <li><button onClick={() => scrollToSection('contacts')} className="hover:opacity-100">Контакты</button></li>
                <li><a href="#" className="hover:opacity-100">Документация</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Компания</h4>
              <ul className="space-y-2 text-sm opacity-80">
                <li><a href="#" className="hover:opacity-100">О нас</a></li>
                <li><a href="#" className="hover:opacity-100">Блог</a></li>
                <li><a href="#" className="hover:opacity-100">Вакансии</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-white/20 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm opacity-80">
            <p>© 2024 RuProxy. Все права защищены.</p>
            <div className="flex gap-6">
              <a href="#" className="hover:opacity-100">Политика конфиденциальности</a>
              <a href="#" className="hover:opacity-100">Условия использования</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}