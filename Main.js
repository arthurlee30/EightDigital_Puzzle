
/** 初始化游戏 */
LInit(60, "mygame", 390, 580, main);

var imgBmpd;
/** 游戏层 */
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
			{path : "./js/Block.js"},
			{name : "img", path : "./images/IMG_2440.JPG"}
		],
		null,
		function (result) {
			/** 移除加载提示 */
			loadingHint.remove();

			/** 保存位图数据，方便后续使用 */
			imgBmpd = new LBitmapData(result["img"]);

			
		}
	);
}
