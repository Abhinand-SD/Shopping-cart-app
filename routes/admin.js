var express = require('express');
var router = express.Router();
var productHelper=require('../helpers/product-helpers');
const productHelpers = require('../helpers/product-helpers');
const { render } = require('../app');

/* GET users listing. */
router.get('/', function(req, res, next) {

  

  let products = [{
    name: "Iphone 11",
    category: "Mobile",
    description: "Step up your style game with the Apple iPhone 14 Pro in Deep Purple. With 128 GB of storage, this phone has everything you need for work and play. Upgrade to the latest ...",
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTGVHm40JnxazlBmayEfqW5YkvhajrDVCuIDgFw5pMF01aspyoIZ4FKNo1WfHtaxBk6ETo&usqp=CAUbb'
  },
  {
    name: "Iphone 12",
    category: "Mobile",
    description: "Super Retina XDR display; 6.1‑inch (diagonal) all‑screen OLED display; 2532‑by‑1170-pixel resolution at 460 ppi; HDR display; True Tone; Wide color (P3) ...",
    image: "https://www.refurbished.store/cache/images/iphone_12_pro_grafiet_multi_2_600x600_BGresize_16777215-tj.png"
  },
  {
    name: "One Plus CE 2 Lite",
    category: "Mobile",
    description: "Big 120Hz display = more battery life Youd think a big 16.73cm (6.59?) 120Hz display? would put a huge dent in your battery life. But Nord CE 2 Lites display is an energy ...",
    image: "https://m.media-amazon.com/images/I/41zG4GHpQUL._SX300_SY300_QL70_FMwebp_.jpg"
  },
  {
    name: "Samsung S23 ",
    category: "Mobile",
    description: "The display can achieve peak brightness of up to 1750 nits, improving the contrast between dark and light aspects of digital content for a more brilliant ...",
    image: "https://m.media-amazon.com/images/I/71qGismu6NL._AC_UY327_FMwebp_QL65_.jpg"
  }]


  res.render('admin/view-products',{admin:true,products})
});
router.get('/add-product',function(req,res){
  res.render('admin/add-product')

})

router.post('/add-product',(req,res)=>{
  console.log(req.body);
  console.log(req.files.Image);

  productHelpers.addProduct(req.body,(result)=>{
    res.render("admin/add-product")
  })

})



module.exports = router;
