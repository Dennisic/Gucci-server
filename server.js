const Koa = require("koa");
const KoaRouter = require("koa-router");

//1.创建服务器应用实例
//express()->获取实例
const app = new Koa();

//3.注册路由
//3.1创建路由器实例
const router = new KoaRouter();

//3.2使用中间件
//中间件app.use(中间件函数)
app.use(router.routes()).use(router.allowedMethods());

//3.3注册后端路由
/*
express接收实参:
    1)req->请求报文对象
    2)res->响应报文对象->res.send(数据)
    3)next->执行下一个中间件函数
koa接收实参:
    1)ctx->req+res  ->  ctx.body=响应数据
    2)next->执行下一个中间件函数
*/

//首页
//按秀场款式选购
const showStyle = require("./datas/showstyle.json");
router.get("/getShowStyles", (ctx, next) => {
  ctx.body = showStyle;
});

//古驰花悦梦意系
const flowerDream = require("./datas/flowerdream.json");
router.get("/getFlowerDream", (ctx, next) => {
  ctx.body = flowerDream;
});

//商品详情
//搜索
const search = require("./datas/search.json");
router.get("/getSearch", (ctx, next) => {
  ctx.body = search;
});

//手提包&波士顿包
const handbagDatas = require("./datas/handbag.json");
router.get("/getHandbagDatas", (ctx, next) => {
  ctx.body = handbagDatas;
});

//登陆注册
const login = require("./datas/login.json");
router.post("getLogin", (ctx, next) => {});

//2.运行并监听服务器
app.listen(3000, (error) => {
  if (error) {
    console.log("启动服务器失败");
  } else {
    console.log("服务器启动成功,启动与http://localhost:3000上");
  }
});
