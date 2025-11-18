import { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import Icon from '@/components/ui/icon';
import { toast } from 'sonner';

const Contacts = () => {
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
      <Header cartItemsCount={0} />
      
      <main className="flex-1 py-8">
        <div className="container px-4">
          <div className="text-center mb-12">
            <h1 className="font-heading text-4xl md:text-5xl font-bold text-foreground mb-4">
              Свяжитесь с нами
            </h1>
            <p className="text-lg text-muted-foreground">
              Мы всегда рады помочь и ответить на ваши вопросы
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <Card>
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center">
                  <Icon name="Phone" size={24} className="text-primary" />
                </div>
                <h3 className="font-heading font-semibold text-foreground mb-2">Телефон</h3>
                <p className="text-muted-foreground mb-2">+7 (999) 123-45-67</p>
                <p className="text-sm text-muted-foreground">Пн-Вс: 9:00 - 21:00</p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center">
                  <Icon name="Mail" size={24} className="text-primary" />
                </div>
                <h3 className="font-heading font-semibold text-foreground mb-2">Email</h3>
                <p className="text-muted-foreground mb-2">info@greenstyle.ru</p>
                <p className="text-sm text-muted-foreground">Ответим в течение 24 часов</p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center">
                  <Icon name="MapPin" size={24} className="text-primary" />
                </div>
                <h3 className="font-heading font-semibold text-foreground mb-2">Адрес</h3>
                <p className="text-muted-foreground mb-2">Москва, ул. Примерная, 1</p>
                <p className="text-sm text-muted-foreground">ТЦ "Модный", 2 этаж</p>
              </CardContent>
            </Card>
          </div>

          <Card className="max-w-3xl mx-auto">
            <CardContent className="p-8">
              <h2 className="font-heading text-2xl font-bold text-foreground mb-6">
                Форма обратной связи
              </h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium mb-2">
                      Ваше имя <span className="text-destructive">*</span>
                    </label>
                    <Input
                      placeholder="Иван Иванов"
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
                      placeholder="ivan@example.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      required
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">
                    Телефон
                  </label>
                  <Input
                    type="tel"
                    placeholder="+7 (999) 123-45-67"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">
                    Сообщение <span className="text-destructive">*</span>
                  </label>
                  <Textarea
                    placeholder="Расскажите, чем мы можем помочь..."
                    rows={6}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    required
                  />
                </div>

                <Button type="submit" size="lg" className="w-full">
                  <Icon name="Send" size={20} className="mr-2" />
                  Отправить сообщение
                </Button>
              </form>
            </CardContent>
          </Card>

          <div className="mt-12 rounded-lg overflow-hidden border max-w-5xl mx-auto">
            <div className="aspect-[16/9] bg-muted">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2244.7025836823165!2d37.61731431592424!3d55.75582998055696!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46b54a50b315e573%3A0xa886bf5a3d9b2e68!2z0JrRgNCw0YHQvdCw0Y8g0L_Qu9C-0YnQsNC00Yw!5e0!3m2!1sru!2sru!4v1234567890123"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Contacts;
