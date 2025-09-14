import { useState } from 'react';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [comments, setComments] = useState([
    { id: 1, name: "Анна Петрова", message: "Светлая память дорогому человеку. Соболезнования семье.", date: "14.09.2025" },
    { id: 2, name: "Михаил Сидоров", message: "Помню его как замечательного человека. Покойся с миром.", date: "13.09.2025" }
  ]);
  
  const [newComment, setNewComment] = useState({ name: "", message: "" });
  
  const addComment = () => {
    if (newComment.name && newComment.message) {
      setComments([...comments, {
        id: comments.length + 1,
        name: newComment.name,
        message: newComment.message,
        date: new Date().toLocaleDateString('ru-RU')
      }]);
      setNewComment({ name: "", message: "" });
    }
  };
  
  const photos = [
    "/img/022e928e-7337-4e3d-8f71-9dcc467a5c15.jpg",
    "/img/240425e2-f6fa-453a-b069-9c2804c82818.jpg", 
    "/img/820444e3-3941-4520-bcaa-405f42bb920d.jpg",
    "/placeholder.svg"
  ];

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Header Section */}
      <div className="bg-white shadow-sm">
        <div className="max-w-4xl mx-auto px-4 py-8">
          <div className="text-center">
            <div className="mb-6">
              <img 
                src="/img/022e928e-7337-4e3d-8f71-9dcc467a5c15.jpg" 
                alt="Портрет" 
                className="w-40 h-40 rounded-full mx-auto object-cover border-4 border-slate-200 shadow-lg"
              />
            </div>
            <h1 className="text-4xl font-serif text-slate-800 mb-2">Владимир Николаевич Петров</h1>
            <p className="text-slate-600 text-lg mb-4">15 марта 1945 — 12 сентября 2025</p>
            <div className="flex items-center justify-center gap-2 text-slate-500">
              <Icon name="Heart" size={20} />
              <span className="italic">"В памяти наших сердец навсегда"</span>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 py-8 space-y-12">
        {/* Main Text Section */}
        <Card className="animate-fade-in">
          <CardHeader>
            <h2 className="text-2xl font-serif text-slate-800 flex items-center gap-2">
              <Icon name="BookOpen" size={24} />
              О жизни
            </h2>
          </CardHeader>
          <CardContent className="prose prose-slate max-w-none">
            <p className="text-slate-700 leading-relaxed mb-4">
              Владимир Николаевич прожил долгую и яркую жизнь, полную любви к семье, преданности работе и заботы о близких. 
              Он был замечательным мужем, отцом и дедушкой, оставившим неизгладимый след в сердцах всех, кто его знал.
            </p>
            <p className="text-slate-700 leading-relaxed mb-4">
              Более 40 лет проработал инженером, был уважаемым коллегой и наставником для многих молодых специалистов. 
              Его профессионализм и человечность помнят все, кто с ним работал.
            </p>
            <p className="text-slate-700 leading-relaxed">
              В свободное время любил читать, работать в саду и проводить время с внуками. 
              Его мудрые советы и теплая улыбка останутся с нами навсегда.
            </p>
          </CardContent>
        </Card>

        {/* Photo Gallery */}
        <Card className="animate-fade-in">
          <CardHeader>
            <h2 className="text-2xl font-serif text-slate-800 flex items-center gap-2">
              <Icon name="Camera" size={24} />
              Галерея воспоминаний
            </h2>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {photos.map((photo, index) => (
                <div key={index} className="aspect-square overflow-hidden rounded-lg border border-slate-200 hover:shadow-md transition-shadow">
                  <img 
                    src={photo} 
                    alt={`Фото ${index + 1}`} 
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Video Section */}
        <Card className="animate-fade-in">
          <CardHeader>
            <h2 className="text-2xl font-serif text-slate-800 flex items-center gap-2">
              <Icon name="Play" size={24} />
              Видео памяти
            </h2>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="bg-slate-100 rounded-lg p-8 text-center border-2 border-dashed border-slate-300">
                <Icon name="Video" size={48} className="mx-auto mb-4 text-slate-400" />
                <p className="text-slate-600 mb-4">Здесь можно разместить видео с Rutube</p>
                <div className="text-sm text-slate-500">
                  <p>Поддерживаемые форматы: ссылки Rutube</p>
                  <p>Пример: https://rutube.ru/video/...</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Comments Section */}
        <Card className="animate-fade-in">
          <CardHeader>
            <h2 className="text-2xl font-serif text-slate-800 flex items-center gap-2">
              <Icon name="MessageCircle" size={24} />
              Соболезнования
            </h2>
          </CardHeader>
          <CardContent className="space-y-6">
            {/* Add Comment Form */}
            <div className="bg-slate-50 p-4 rounded-lg">
              <h3 className="text-lg font-medium text-slate-700 mb-4">Оставить соболезнование</h3>
              <div className="space-y-4">
                <Input
                  placeholder="Ваше имя"
                  value={newComment.name}
                  onChange={(e) => setNewComment({...newComment, name: e.target.value})}
                  className="bg-white"
                />
                <Textarea
                  placeholder="Ваше сообщение..."
                  value={newComment.message}
                  onChange={(e) => setNewComment({...newComment, message: e.target.value})}
                  className="bg-white min-h-[100px]"
                />
                <Button 
                  onClick={addComment}
                  className="bg-slate-700 hover:bg-slate-800 text-white"
                >
                  <Icon name="Send" size={16} className="mr-2" />
                  Отправить
                </Button>
              </div>
            </div>
            
            <Separator />
            
            {/* Comments List */}
            <div className="space-y-4">
              {comments.map((comment) => (
                <div key={comment.id} className="border-l-4 border-slate-300 pl-4 py-2">
                  <div className="flex items-center justify-between mb-2">
                    <h4 className="font-medium text-slate-800">{comment.name}</h4>
                    <Badge variant="outline" className="text-slate-500">
                      {comment.date}
                    </Badge>
                  </div>
                  <p className="text-slate-700">{comment.message}</p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Footer */}
      <footer className="bg-white mt-16 py-8 border-t border-slate-200">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <div className="flex items-center justify-center gap-2 text-slate-500 mb-4">
            <Icon name="Heart" size={16} />
            <span>Светлая память</span>
            <Icon name="Heart" size={16} />
          </div>
          <p className="text-sm text-slate-400">Создано с любовью для сохранения памяти</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;