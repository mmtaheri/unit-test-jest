const puppeteer = require('puppeteer')
const {generateTex,checkAndGenerate}  = require('./util')

test('title and price',()=>{
    const text = generateTex('book' ,29)
    expect(text).toBe('book 29')
})

test('chech and generate input',() =>{
    const text = checkAndGenerate('book' ,80)
    expect(text).toBe('book 80')
})

test('clicked', async ()=>{
    jest.setTimeout(5000000);
    const browser = await puppeteer.launch({
        headless:false,
        args:['--window-size=1000,800']
    })
const page = await browser.newPage()

await page.goto("http://127.0.0.1:5500/")
await page.click('#title')
await page.type('#title','mmtaheri')

await page.click('#price')
await page.type('#price','80')
await page.click('#add-product')

})