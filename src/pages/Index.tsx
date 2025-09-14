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
  
  const [currentPhotoIndex, setCurrentPhotoIndex] = useState(0);
  
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

  const nextPhoto = () => {
    setCurrentPhotoIndex((prev) => (prev + 1) % photos.length);
  };

  const prevPhoto = () => {
    setCurrentPhotoIndex((prev) => (prev - 1 + photos.length) % photos.length);
  };
  
  const photos = [
    "/img/022e928e-7337-4e3d-8f71-9dcc467a5c15.jpg",
    "/img/240425e2-f6fa-453a-b069-9c2804c82818.jpg", 
    "/img/820444e3-3941-4520-bcaa-405f42bb920d.jpg",
    "https://images.unsplash.com/photo-1566737236500-c8ac43014a8e?w=500",
    "https://images.unsplash.com/photo-1516627145497-ae4050fb1bb3?w=500",
    "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=500",
    "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=500",
    "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=500",
    "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=500",
    "https://images.unsplash.com/photo-1520637836862-4d197d17c512?w=500",
    "https://images.unsplash.com/photo-1463453091185-61582044d556?w=500",
    "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=500",
    "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=500",
    "https://images.unsplash.com/photo-1542596768-5d1ddd3008a9?w=500",
    "https://images.unsplash.com/photo-1546820389-44d77e1f3b31?w=500",
    "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=500",
    "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=500",
    "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=500",
    "https://images.unsplash.com/photo-1520975954732-35dd22299614?w=500",
    "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=500"
  ];

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Header Section */}
      <div className="bg-white shadow-sm">
        <div className="max-w-4xl mx-auto px-4 py-8">
          <div className="text-center">
            <div className="mb-6">
              <img 
                src="https://cdn.poehali.dev/files/7cee0d08-dadd-48ee-817d-53dd8cfb7e27.jpg"
                alt="Николай Стефанович"
                className="w-40 h-40 rounded-full mx-auto object-cover object-top border-4 border-slate-200 shadow-lg"
              />
            </div>
            <h1 className="text-4xl font-serif text-slate-800 mb-2">Николай Стефанович Бондарев</h1>
            <p className="text-slate-600 text-lg mb-4">15 мая 1935 года — 22 апреля 2014 года</p>
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
              Жизнь — это не мерный шаг по утоптанной дороге. Это путь сквозь ветра и непогоду, где надо выстоять, построить свой дом, посадить дерево и согреть тех, кто идет рядом. Таким путём, полным труда, любви и несгибаемой стойкости, прошёл <strong>Николай Стефанович Бондарев</strong>. Его не стало 22 апреля 2014 года.
            </p>
            
            <p className="text-slate-700 leading-relaxed mb-4">
              Его жизнь началась в суровое время, в мае 1935-го, в городе Ипатово. Детство, опалённое войной, рано закончилось. В восемь лет он узнал, что такое холод зимних дорог в стоптанной обуви, что такое горечь утраты — отец и старший брат не вернулись с фронта. Он, мальчишка, стал опорой для семьи. Ловля сусликов, чтобы мама могла приготовить ужин, стала не забавой, а средством выживания. Тогда же, в отрочестве, он познал жестокую цену ошибки — самодельный пистолет лишил его глаза. Но он не сломился. Эта травма лишь закалила его характер.
            </p>
            
            <p className="text-slate-700 leading-relaxed mb-4">
              Вскоре, начался его путь труженика. Плотницкое ремесло стало для него не просто профессией, а призванием. Дерево в его руках обретало душу, а его бригада славилась на весь Ипатовский район как самая умелая и справная. Он не строил дворцов, он возводил храмы детства — школы и сады, в стенах которых и по сей день учатся дети. Он был человеком дела, а не слов. Предложение о бесплатной путёвке в Москву он отклонил с простой и ясной прямотой: «Что я там не видел?». Его мир был здесь, в его семье, в его работе, в его городе.
            </p>
            
            <p className="text-slate-700 leading-relaxed mb-4">
              Весь этот мир он создавал сам. Найдя своё счастье поздно, в 28 лет, он на всю жизнь связал его с Валентиной — своей музой, своей «идейной вдохновительницей». Их союз складывался из взаимного уважения, терпения и бесконечной заботы. Николай Стефанович был тем фундаментом, на котором держалась вся семья. Для сына Владимира он стал первым и главным учителем, не только передав ему секреты мастерства, но и поддержав его юношеский порыв — построить для семьи новый дом. Вместе они месили глину для самана, и в этом общем труде крепла отцовская гордость.
            </p>
            
            <p className="text-slate-700 leading-relaxed mb-4">
              Его доброта и терпение стали тихой гаванью для его дочери Татьяны и её детей, рано оставшихся без отца. Для внуков — Миши, Кати, Димы, Анюты — дед Коля был настоящим волшебником. Он мог чинить сломанные табуретки, играть на баяне, выращивать самую сладкую в мире клубнику. Лето у дедушки с бабушкой было золотым временем: балка для исследований, вишнёвое дерево для набегов, велосипед, на котором еле-еле достаёшь до педалей, и тёплые вечера за лото. Он никогда не повышал голос, а его вкусный борщ внуки запомнили навсегда.
            </p>
            
            <p className="text-slate-700 leading-relaxed mb-4">
              Его жизнь не была бы полной без тех светлых и курьёзных моментов, которые с любовью вспоминает семья. Кто бы мог подумать, что Николай Стефанович однажды предстанет перед домочадцами… ярким рыжим! Такова была воля его Валентины, решившей побороть седину супруга. «Был я чёрным, был я белым, но рыжим еще не был никогда», — смиренно и с юмором констатировал Николай, безропотно принимая все предприимчивые затеи жены. Будь то продажа тыкв, орехов или веников — он был «идейным исполнителем», и в этом был его особый, тихий способ любить.
            </p>
            
            <p className="text-slate-700 leading-relaxed mb-4">
              Он прошёл через многие испытания, но последнее оказалось не по силам даже его крепкому духу. Год, проведённый у постели любимой Валентины после её инсульта, стал для него годом отчаяния. Он, видевший столько потерь, не мог смириться с самой страшной — возможностью остаться без своей половины. Их лебединая верность, начавшаяся когда-то со свадьбы в снежном плену, не могла закончиться в одиночестве. Его уход стал последним, горьким свидетельством этой любви.
            </p>
            
            <p className="text-slate-700 leading-relaxed mb-4">
              Николай Стефанович Бондарев ушёл, оставив после себя не просто память. Он оставил крепкий дом, построенный руками его сына, школы, где учатся дети. Он оставил уроки стойкости, доброты и безграничной преданности семье.
            </p>
            
            <p className="text-slate-700 leading-relaxed italic">
              Он дождался свою Валентину. Теперь они снова вместе, как и всегда были — неразлучные, два лебедя, нашедшие свой вечный покой.
            </p>
            
            <p className="text-slate-800 font-semibold text-center mt-6 text-lg">
              Вечная вам память и светлый покой, Николай Стефанович и Валентина Егоровна!
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
            <div className="relative">
              {/* Main Photo Display */}
              <div className="aspect-[4/3] max-w-2xl mx-auto overflow-hidden rounded-lg border border-slate-200 shadow-lg">
                <img 
                  src={photos[currentPhotoIndex]} 
                  alt={`Фото ${currentPhotoIndex + 1}`} 
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Navigation Arrows */}
              <button
                onClick={prevPhoto}
                className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white text-slate-700 p-2 rounded-full shadow-lg transition-all duration-200 hover:scale-110"
                disabled={photos.length <= 1}
              >
                <Icon name="ChevronLeft" size={24} />
              </button>
              
              <button
                onClick={nextPhoto}
                className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white text-slate-700 p-2 rounded-full shadow-lg transition-all duration-200 hover:scale-110"
                disabled={photos.length <= 1}
              >
                <Icon name="ChevronRight" size={24} />
              </button>

              {/* Photo Counter */}
              <div className="text-center mt-4 text-slate-600">
                <span className="text-sm">
                  {currentPhotoIndex + 1} из {photos.length}
                </span>
              </div>

              {/* Thumbnail Navigation */}
              <div className="flex justify-center gap-2 mt-4 overflow-x-auto pb-2">
                {photos.map((photo, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentPhotoIndex(index)}
                    className={`flex-shrink-0 w-16 h-16 rounded-lg border-2 overflow-hidden transition-all duration-200 ${
                      index === currentPhotoIndex 
                        ? 'border-slate-500 ring-2 ring-slate-300' 
                        : 'border-slate-200 hover:border-slate-400'
                    }`}
                  >
                    <img 
                      src={photo} 
                      alt={`Миниатюра ${index + 1}`} 
                      className="w-full h-full object-cover"
                    />
                  </button>
                ))}
              </div>
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