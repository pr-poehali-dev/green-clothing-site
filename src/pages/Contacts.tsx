import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import Icon from '@/components/ui/icon';
import { toast } from 'sonner';

export default function Contacts() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.name || !formData.email || !formData.message) {
      toast.error('Пожалуйста, заполните все обязательные поля');
      return;
    }

    toast.success('Сообщение отправлено! Мы свяжемся с вами в ближайшее время.');
    setFormData({ name: '', email: '', phone: '', message: '' });
  };

  return (
    <div className="min-h-screen flex flex-col">
      <div className="bg-gradient-to-r from-primary/10 to-secondary/20 py-12">
        <div className="container mx-auto px-4">
          <h1 className="font-heading text-4xl md:text-5xl font-bold text-foreground mb-4">Контакты</h1>
          <p className="text-muted-foreground text-lg">Свяжитесь с нами удобным способом</p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <h2 className="font-heading text-3xl font-bold mb-6">Наши контакты</h2>
            <p className="text-muted-foreground mb-8 leading-relaxed">
              Мы всегда рады помочь вам с выбором товаров, ответить на вопросы о доставке и оплате. 
              Свяжитесь с нами любым удобным способом.
            </p>

            <div className="space-y-6">
              <Card>
                <CardContent className="p-6 flex items-start gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                    <Icon name="Phone" className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-1">Телефон</h3>
                    <p className="text-muted-foreground mb-2">Звоните в любое время</p>
                    <a href="tel:+78001234567" className="text-primary font-semibold hover:underline">
                      +7 (800) 123-45-67
                    </a>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6 flex items-start gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                    <Icon name="Mail" className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-1">Email</h3>
                    <p className="text-muted-foreground mb-2">Ответим в течение 24 часов</p>
                    <a href="mailto:info@greenstyle.ru" className="text-primary font-semibold hover:underline">
                      info@greenstyle.ru
                    </a>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6 flex items-start gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                    <Icon name="MapPin" className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-1">Адрес</h3>
                    <p className="text-muted-foreground mb-2">Приходите в наш шоурум</p>
                    <p className="font-semibold">Москва, ул. Примерная, 123</p>
                    <p className="text-sm text-muted-foreground mt-1">Пн-Вс: 10:00 - 21:00</p>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6 flex items-start gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                    <Icon name="MessageCircle" className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-1">Мессенджеры</h3>
                    <p className="text-muted-foreground mb-3">Пишите нам напрямую</p>
                    <div className="flex gap-3">
                      <Button variant="outline" size="sm">
                        WhatsApp
                      </Button>
                      <Button variant="outline" size="sm">
                        Telegram
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          <div>
            <Card>
              <CardContent className="p-8">
                <h2 className="font-heading text-3xl font-bold mb-6">Форма обратной связи</h2>
                <p className="text-muted-foreground mb-8">
                  Заполните форму, и мы обязательно свяжемся с вами
                </p>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium mb-2">
                      Ваше имя <span className="text-destructive">*</span>
                    </label>
                    <Input
                      placeholder="Введите ваше имя"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2">
                      Email <span className="text-destructive">*</span>
                    </label>
                    <Input
                      type="email"
                      placeholder="your@email.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2">
                      Телефон
                    </label>
                    <Input
                      type="tel"
                      placeholder="+7 (___) ___-__-__"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2">
                      Сообщение <span className="text-destructive">*</span>
                    </label>
                    <Textarea
                      placeholder="Напишите ваше сообщение..."
                      rows={6}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      required
                    />
                  </div>

                  <Button type="submit" size="lg" className="w-full">
                    <Icon name="Send" className="mr-2 h-5 w-5" />
                    Отправить сообщение
                  </Button>

                  <p className="text-xs text-muted-foreground text-center">
                    Нажимая кнопку, вы соглашаетесь с политикой конфиденциальности
                  </p>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>

        <Card className="mt-12 overflow-hidden">
          <CardContent className="p-0">
            <div className="aspect-[21/9] bg-muted">
              <iframe
                src="https://yandex.ru/map-widget/v1/?ll=37.617644%2C55.755826&z=13&l=map"
                className="w-full h-full border-0"
                title="Карта"
              />
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
