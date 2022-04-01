const appendData=(data,parent)=>{
    data.map(function(el){
        console.log('el',el)
        let div=document.createElement('div')
        div.id='items-div'

        let image=document.createElement('img')
        image.src=el.image
        image.id='item_image'

        let title=document.createElement('p')
        title.innerHTML=el.title

        let mrp=document.createElement('p')
        mrp.innerText=el.mrp

        let price=document.createElement('p')
        price.innerHTML=el.price

        div.append(image,title,mrp,price)

        parent.append(div)
    })
}


export default appendData
