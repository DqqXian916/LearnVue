const path = require('path');
//构建服务器架构，配置好art-template,路由
const Koa = require('koa');
const fs = require('fs');

//处理请求体数据
let app = new Koa();

const Router = require('koa-router');
const router = new Router();
//处理文字和文件的请求体数据

const formidable = require('koa-formidable');

router.post('upload',async(ctx,next)=>{
    console.log('上传成功');
    ctx.body = 'ok';
})
.get('/',async ctx=>{
    ctx.body = {
        token:'abc',
        msg:'ok'
    };
})
.post('/add',async ctx=>{
    ctx.req.on('data',data=>{
        console.log(data);
        console.log(data.toString());
    });
    ctx.body = 'post ok';
})

