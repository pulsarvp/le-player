# le-player

> le-player - это веб плеер созданный для Лектория. Плеер поддерживает все фичи HTML5, так же, как YouTube и Vimeo. le-player использует jqeury.

[Ссылка на документацию](http://player.ciot-env.ru/docs/out/Player.html) (Work in progress)


[Ссылка на пример](http://player.ciot-env.ru/demo/)

## Быстрый старт

Для начала нужно скачать плеер себе в проект.


```
npm install --save le-player
```

или


```
bower install --save le-player
```

Для работы с плеером достаточно подключить два файла в `head`, указать путь к svg иконкам плеера и убедиться что подключен jQuery.


```javascript
<link href="path/to/le-player.min.css" rel="stylesheet">
<script src="path/to/le-player.min.js"></script>
```

Теперь, если вы хотите использовать le-player, мы можете просто задать вашему элементу `<video>` какой-нибудь ID или класс и инилизировать его:

HTML:
```HTML
<video id="video1" src="sample1.mp4"></video>
```

JS:
```javascript
$('#video1').lePlayer({
	/** настройки, которые переопределяют дефолтные настройки */
});

// или

const player = new lePlayer($('#video1'), { //..options });

// Дефолтные настройки
const defaultOptions = {
	autoplay : false,
	height : 'auto',
	loop : false,
	muted : false,
	preload : 'metadata',
	poster : null,
	svgPath : '../dist/svg/svg-defs.svg',
	innactivityTimeout : 10000,
	fullscreen : {
		hideTimelineTime : 10000
	},
	rate : {
		step : 0.25,
		min : 0.5,
		max : 4.0,
		'default' : 1
	},
	playback : {
		step : {
			short : 5,
			medium : 10,
			long : 30
		}
	},
	controls : {
		common : [
			[ 'play', 'volume', 'divider', 'timeline',  'divider', 'section', 'divider', 'fullscreen' ],
			[ 'rate', 'divider', 'backward', 'divider', 'source', 'divider', 'subtitle', 'divider', 'download', 'divider', 'kebinding info' ]
		],
		fullscreen : [
			[ 'play', 'volume', 'divider', 'timeline', 'divider', 'rate', 'divider', 'kebinding info',  'divider', 'backward', 'divider', 'source', 'divider', 'subtitle', 'divider', 'download', 'divider', 'section', 'divider', 'fullscreen' ]
		],
		mini : [
			[ 'play', 'volume', 'divider', 'fullscreen', 'divider', 'timeinfo']
		]
	},
	volume : {
		default : 0.4,
		mutelimit : 0.05,
		step : 0.1
	},
	keyBinding : [
		{
			key : 32,
			info : ['Space'],
			description : 'Начать проигрывание / поставить на паузу',
			fn : (player) => {
				player.video.togglePlay();
			}
		},
		{
			key : 37,
			info : ['←'],
			description : `Перемотать на 10 секунд назад`,
			fn : (player) => {
				player.video.currentTime -= player.options.playback.step.medium;
			}
		},
		{
			key : 39,
			info : ['→'],
			description : `Перемотать на 10 секунд вперёд`,
			fn : (player) => {
				player.video.currentTime += player.options.playback.step.medium;
			}
		},
		{
			shiftKey : true,
			info : ['Shift', '←'],
			description : 'Перейти на предыдущую секцию',
			key : 37,
			fn : (player) => {
				if(player.sections == null) {
					return;
				}
				player.sections.prev();

			}
		},
		{
			shiftKey : true,
			key : 39,
			info : ['Shift', '→'],
			description : 'Перейти на следующую секцию',
			fn : (player) => {
				if(player.sections == null) {
					return;
				}
				player.sections.next()
			}
		},
		{
			key : 38,
			info : ['↑'],
			description : 'Увеличить громкость',
			fn : (player) => {
				player.video.volume += player.options.volume.step;
			}
		},

		{
			key : 40,
			info : ['↓'],
			description : 'Уменьшить громкость',
			fn : (player) => {
				player.video.volume -= player.options.volume.step;
			}
		},

		{
			key : 70,
			info : ['f'],
			description : 'Открыть/закрыть полноэкраный режим',
			fn : (player) => {
				player.toggleFullscreen();
			}
		}
	],
	miniplayer : {
		width: '100%',
		offsetShow : (player) => {
			const offset = player.element.offset().top + player.element.outerHeight() - player.getControls('common').element.height();

			return offset;
		}
	},
	onPlayerInited : function() {}
};
```
