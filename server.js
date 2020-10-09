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

//注册
const regis = require("./datas/regis.json");
router.post("/getRegis", (ctx, next) => {
  ctx.body = regis;
});

//登陆
const login = require("./datas/login.json");
router.post("/getLogin", (ctx, next) => {
  ctx.body = login;
});

//商品详情
//商品
const cart = require("./datas/cart.json");
router.get("/getCart", (ctx, next) => {
  ctx.body = cart;
});

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

//点击商品查看属性(是否有货等)
const checkProduct = require("./datas/checkProduct.json");
router.get("/getCheckProduct", (ctx, next) => {
  ctx.body = checkProduct;
});

//商品详情信息等
const alsoLikeList = require("./datas/alsoLikeList.json");
router.get("/getAlsoLikeList", (ctx, next) => {
  ctx.body = alsoLikeList;
});

//购物车
const cartList = require("./datas/cartList.json");
router.post("/getCartList", (ctx, next) => {
  ctx.body = cartList;
});

//订单
const order = require("./datas/order.json");
router.get("/getOrder", (ctx, next) => {
  ctx.body = order;
});

//支付
const pay = require("./datas/pay.json");
router.get("/getPay", (ctx, next) => {
  ctx.body = pay;
});

//2.运行并监听服务器
app.listen(3000, (error) => {
  if (error) {
    console.log("启动服务器失败");
  } else {
    console.log("服务器启动成功,启动与http://localhost:3000");
  }
});
