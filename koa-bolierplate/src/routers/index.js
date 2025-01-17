import Router from 'koa-router'
const router = Router()

import admin from './admin';

import sku from './goods/sku'
import unit from './goods/unit'
import category from './goods/category'
import item from './goods/item'
import upload from './upload';



// router.get('/register', async (ctx, next) => {
//   await ctx.render('register.html')
// })

// router.get('/login', async (ctx, next) => {
//   await ctx.render('login.html')
// })

// router.get('/member', async (ctx, next) => {
//   await ctx.render('member.html')
// })

// routes表示的是路由的嵌套处理
router.use('/admin', admin.routes(), admin.allowedMethods());

router.use(sku.routes(), sku.allowedMethods())
router.use(unit.routes(), unit.allowedMethods())
router.use(category.routes(), category.allowedMethods())
router.use(item.routes(), item.allowedMethods())

//图片上传
// router.use(upload.routes(), upload.allowedMethods())
router.post('/upload', async (ctx) => {
    console.log('上传的图片', ctx.request.files);
    ctx.body = JSON.stringify(ctx.request.files);
})

export default router
