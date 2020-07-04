/** 初始化游戏 */
LInit(60, "mygame", 390, 580, main);

var imgBmpd;
/** 游戏层 */
var stageLayer, gameLayer, overLayer;
/** 拼图块列表 */

function main () {
	/** 全屏设置 */
	if (LGlobal.mobile) {
		LGlobal.stageScale = LStageScaleMode.SHOW_ALL;
	}
	LGlobal.screen(LGlobal.FULL_SCREEN);

	/** 添加加载提示 */
	var loadingHint = new LTextField();
	loadingHint.text = "资源加载中……";
	loadingHint.size = 20;
	loadingHint.x = (LGlobal.width - loadingHint.getWidth()) / 2;
	loadingHint.y = (LGlobal.height - loadingHint.getHeight()) / 2;
	addChild(loadingHint);

	/** 加载图片 */
	LLoadManage.load(
		[
			{path : "./Block.js"},
			{name : "img", path : "./images/1.jpg"}
		],
		null,
		function (result) {
			/** 移除加载提示 */
			loadingHint.remove();

			/** 保存位图数据，方便后续使用 */
			imgBmpd = new LBitmapData(result["img"]);

			gameInit();
		}
	);
}

function gameInit (e) {
	/** 初始化舞台层 */
	stageLayer = new LSprite();
	stageLayer.graphics.drawRect(0, "", [0, 0, LGlobal.width, LGlobal.height], true, "#EFEFEF");
	addChild(stageLayer);

	/** 初始化游戏层 */
	gameLayer = new LSprite();
	stageLayer.addChild(gameLayer);

	/** 初始化最上层 */
	overLayer = new LSprite();
	stageLayer.addChild(overLayer);

	/** 添加开始界面 */
	addBeginningUI();
}

function addBeginningUI () {
	var beginningLayer = new LSprite();
	beginningLayer.graphics.drawRect(0, "", [0, 0, LGlobal.width, LGlobal.height], true, "#EDEDED");
	stageLayer.addChild(beginningLayer);

	/** 游戏标题 */
	var title = new LTextField();
	title.text = "拼图游戏";
	title.size = 50;
	title.weight = "bold";
	title.x = (LGlobal.width - title.getWidth()) / 2;
	title.y = 160;
	title.color = "#FFFFFF";
	title.lineWidth = 5;
	title.lineColor = "#000000";
	title.stroke = true;
	beginningLayer.addChild(title);

	/** 开始游戏提示 */
	var hint = new LTextField();
	hint.text = "- 点击屏幕开始游戏 -";
	hint.size = 25;
	hint.x = (LGlobal.width - hint.getWidth()) / 2;
	hint.y = 370;
	beginningLayer.addChild(hint);

	/** 开始游戏 */
	beginningLayer.addEventListener(LMouseEvent.MOUSE_UP, function () {
		beginningLayer.remove();
		
		startGame();
	});
}

function startGame () {
	/** 初始化时间和步数 */
	startTime = (new Date()).getTime();
	time = 0;
	steps = 0;
}