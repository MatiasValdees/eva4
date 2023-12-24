
const btnAddAsignacion=document.getElementById("btnAddAsignacion");
const containerModalRootFab=document.getElementById("containerModalRootFab");
const containerModalRootBod=document.getElementById("containerModalRootBod");
const containerModal=document.getElementById("containerModal");
const btnClose=document.getElementById("btnClose");
const containerFab=document.getElementById("containerFab");
const containerBod=document.getElementById("containerBod");
const okFab=document.getElementById("okFab")
const returnFab=document.getElementById('returnFab')
const okBod=document.getElementById("okBod")
const returnBod=document.getElementById('returnBod')
const View=document.getElementById("View")
const table=document.getElementById("table")


const btnCantFab1=document.getElementById("btnCantFab1");
const btnCantFab2=document.getElementById("btnCantFab2");
const btnCantFab3=document.getElementById("btnCantFab3");
const btnCantFab4=document.getElementById("btnCantFab4");
const btnCantFab5=document.getElementById("btnCantFab5");
const btnCantFab6=document.getElementById("btnCantFab6");

const btnCantBod1=document.getElementById("btnCantBod1");
const btnCantBod2=document.getElementById("btnCantBod2");
const btnCantBod3=document.getElementById("btnCantBod3");
const btnCantBod4=document.getElementById("btnCantBod4");
const btnCantBod5=document.getElementById("btnCantBod5");
const btnCantBod6=document.getElementById("btnCantBod6");

const cantFab=document.getElementById("cantFab")
const cantBod=document.getElementById("cantBod")

const headsFabricas=document.getElementById("headsFabricas")



btnClose.addEventListener('click',()=>{
    containerModal.style.display="none"
})
btnAddAsignacion.addEventListener('click',()=>{
    p.produccion-0
    f=[]
    a.almacenamiento=0
    almacenamiento=[]
    cantFab.style.display="none"
    containerModalRootFab.style.display="block";
    containerModal.style.display='flex'
    cantBod.style.display='none'
    containerModalRootBod.style='none'
})


btnCantFab1.addEventListener('click',()=>{
    getInputsFab(btnCantFab1);
})

btnCantFab2.addEventListener('click',()=>{
    getInputsFab(btnCantFab2);
})
btnCantFab3.addEventListener('click',()=>{
    getInputsFab(btnCantFab3);
})
btnCantFab4.addEventListener('click',()=>{
    getInputsFab(btnCantFab4);
})
btnCantFab5.addEventListener('click',()=>{
    getInputsFab(btnCantFab5);
})
btnCantFab6.addEventListener('click',()=>{
    getInputsFab(btnCantFab6);
})

btnCantBod1.addEventListener('click',()=>{
    getInputsBod(btnCantBod1);
})
btnCantBod2.addEventListener('click',()=>{
    getInputsBod(btnCantBod2);
})
btnCantBod3.addEventListener('click',()=>{
    getInputsBod(btnCantBod3);
})
btnCantBod4.addEventListener('click',()=>{
    getInputsBod(btnCantBod4);
})
btnCantBod5.addEventListener('click',()=>{
    getInputsBod(btnCantBod5);
})
btnCantBod6.addEventListener('click',()=>{
    getInputsBod(btnCantBod6);
})


var cantFabricas=0;
var p.produccion=0;
var fabricas=[]





function getInputsFab(button){
    containerFab.innerHTML=""
    cantFab.style.display="block"
    containerModalRootFab.style.display="none";
    cantFabricas=button.value;
    Inputs(cantFabricas,'fab','Fábrica',containerFab)
}




okFab.addEventListener('click',(e)=>{
    e.preventDefault();
    // produccionTotal=0;
    // for( var i=1; i<Number(cantFabricas)+1;i++){
    //     if(Number(document.getElementById('fab'+i).value)<1){
    //         alert("Favor sólo ingresar números positivos")
    //         return;
    //     }
    //     produccionTotal=(Number(document.getElementById('fab'+i).value))+produccionTotal;
    //     fabricas.push(new fabrica(i,Number(document.getElementById('fab'+i).value)))
    // }
    // containerModalRootFab.style.display='none'
    // cantFab.style.display='none'
    // containerModalRootBod.style.display='block';
    // console.log(produccionTotal)
    controllerFabricaAndProduccion()
})


function controllerFabricaAndProduccion(){
    const produccion=new ProduccionTotal();
    const fabricas=new FabricasTotales();
    const validation=new ValidateMayor();
    for( var i=1; i<Number(cantFabricas)+1;i++){
        if(validation.validateNumberPositive(Number(document.getElementById('fab'+i).value))===null)return
        produccion.calculateProduccionTotal(Number(document.getElementById('fab'+i).value));
        fabricas.addFabricaToList(new fabrica(i,Number(document.getElementById('fab'+i).value)))
    }
    changeModalFabricasToBodegas()
}


class ValidateMayor{
    number=1
    validateNumberPositive(numberCompare){
        if(this.number>numberCompare){
            alert("Favor sólo ingresar números positivos")
            return null;
        }
    }
}

class ProduccionTotal{
    produccion=0;
    calculateProduccionTotal(produccionPlus){
        this.produccion=this.produccion+produccionPlus;
    }
}

class FabricasTotales {
    fabricas=[]

    addFabricaToList(fabrica){
        this.fabricas.push(fabrica)
    }
}

function changeModalFabricasToBodegas(){
    containerModalRootFab.style.display='none'
    cantFab.style.display='none'
    containerModalRootBod.style.display='block'
}



returnFab.addEventListener('click',(e)=>{
    e.preventDefault();
    cantFab.style.display="none"
    containerModalRootFab.style.display="block";

})

var cantBodegas=0;
var a.almacenamiento=0;
var almacenamiento=[]

function getInputsBod(button){
    containerBod.innerHTML=""
    cantFab.style.display="none"
    cantBod.style.display="block"
    containerModalRootBod.style.display="none";
    cantBodegas=button.value;
    Inputs(cantBodegas,'bod','Bodega',containerBod)
}

class bodega{
    constructor(id,value){
        this.id=id;
        this.value=value
    }
}

okBod.addEventListener('click',(e)=>{
    e.preventDefault();
    a.almacenamiento=0;
    for( let i=1; i<Number(cantBodegas)+1;i++){
        if(Number(document.getElementById('bod'+i).value)<1){
            alert("Favor sólo ingresar números positivos")
            return
        }
        almacenamiento.push(new bodega(i,document.getElementById('bod'+i).value))
        a.almacenamiento=(Number(document.getElementById('bod'+i).value))+a.almacenamiento;
    }
    
    emparejar()
})

returnBod.addEventListener('click',(e)=>{
    e.preventDefault();
    cantBod.style.display="none"
    containerModalRootBod.style.display="block";
})
class fabrica{
    constructor(id,value){
        this.id=id;
        this.value=value
    }
}

function emparejar(){
    table.innerHTML=""
    const headsFabricas=document.createElement('tr')
    const number=document.createElement('th')
    headsFabricas.appendChild(number)
    table.appendChild(headsFabricas)

    const dataFabricas=document.createElement('tr')
    containerModal.style.display="none"

    if (p.produccion>a.almacenamiento){
        cantBodegas++
        almacenamiento.push(new bodega('imaginaria',p.produccion-a.almacenamiento))

    }else if(p.produccion<a.almacenamiento){
        cantFabricas++
        f.push(new fabrica('imaginaria',a.almacenamiento-p.produccion))
    }


    for(let i=1;i<Number(cantFabricas)+1;i++){
        const f=document.createElement('th');
        f.innerText='Fabrica '+(f[i-1].id)
        headsFabricas.appendChild(f)
    }

    const almacen=document.createElement('th')
    almacen.innerText="Almacenamiento"
    headsFabricas.appendChild(almacen)

    const d=document.createElement('td')
    const str=document.createElement('strong')
    str.innerText="Producción"
    d.appendChild(str)
    dataFabricas.appendChild(d)


    for(let i=1;i<Number(cantFabricas)+1;i++){
        const data=document.createElement('td')
        data.innerText=(f[i-1].value)
        dataFabricas.appendChild(data)
    }

    table.appendChild(headsFabricas)

    for (let i=1;i<Number(cantBodegas)+1;i++){
        const b=document.createElement('tr');
        const strong=document.createElement('strong')
        strong.innerText='Bodega '+(almacenamiento[i-1].id)
        b.appendChild(strong)
        for(let u=0;u<Number(cantFabricas);u++){
            const td=document.createElement('td')
            td.className='tdInput'
            const inputCosto=document.createElement('input')
            inputCosto.className='input cost'
            inputCosto.placeholder='Ingrese el costo'
            inputCosto.type='number'
            const inputCantidad=document.createElement('input')
            inputCantidad.className='input cant'
            inputCantidad.placeholder='Ingrese cantidad'
            inputCantidad.type='number'
            td.appendChild(inputCosto)
            td.appendChild(inputCantidad)
            b.appendChild(td)
        }
        const prod=document.createElement('td')
        prod.innerText=(almacenamiento[i-1].value)
        b.appendChild(prod)
        table.appendChild(b)
    }
    table.appendChild(dataFabricas)

    View.appendChild(table)
}


function Inputs(amount,id,entity,container){
    for (var i=1; i<Number(amount)+1;i++){
        var div=document.createElement('div')
        const label=document.createElement('h5');
        label.innerText=entity+' n '+i;
        const input=document.createElement('input')
        input.type='number'
        input.className="inputs"
        input.id=id+i;
        div.appendChild(label);
        div.appendChild(input);
        container.appendChild(div)
    }
}