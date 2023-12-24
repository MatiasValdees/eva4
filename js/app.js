
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

// CLASS FUNCIONALIDAD FABRICAS

class ControllerFabricaAndProduccion{
    controllerFabricaAndProduccion(){
        p.produccion=0;
        f.fabricas=[]
        for( let i=1; i<Number(cantFabricas)+1;i++){
            if(validation.validateNumberPositive(Number(document.getElementById('fab'+i).value))===null)return
            p.calculateProduccionTotal(Number(document.getElementById('fab'+i).value));
            f.addFabricaToList(new fabrica(i,Number(document.getElementById('fab'+i).value)))
        }
        changeModalFab.changeModalFabricasToBodegas()
    }
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

class ChangeModalFabricasToBodegas{
    changeModalFabricasToBodegas(){
        containerModalRootFab.style.display='none'
        cantFab.style.display='none'
        containerModalRootBod.style.display='block'
    }
}

//CLASS FUNCIONALIDAD BODEGAS

class ControllerBodegaAndAlmacenamiento{
    ControllerBodegaAndAlmacenamiento(){
        a.almacenamiento=0;
        b.bodegas=[]
        for( let i=1; i<Number(cantBodegas)+1;i++){
            if(validation.validateNumberPositive(Number(document.getElementById('bod'+i).value))===null)return
            a.calculateAlmacenamientoTotal(Number(document.getElementById('bod'+i).value))
            b.addBodegaToList(new bodega(i,Number(document.getElementById('bod'+i).value)))
        }
        emparejar();
    }
}

class BodegasTotales{
    bodegas=[]
    addBodegaToList(bodega){
        this.bodegas.push(bodega)
    }
}

class AlmacenamientoTotal{
    almacenamiento=0;
    calculateAlmacenamientoTotal(almacenamientoPlus){
        this.almacenamiento=this.almacenamiento+almacenamientoPlus;
    }
}




//CLASS ENTIDADES 
class bodega{
    constructor(id,value){
        this.id=id;
        this.value=value
    }
}
class fabrica{
    constructor(id,value){
        this.id=id;
        this.value=value
    }
}

class EntidadImaginaria{
    addEntidadImaginaria(){
        if (p.produccion>a.almacenamiento){
            cantBodegas++
            b.addBodegaToList(new bodega('imaginaria',p.produccion-a.almacenamiento))
    
        }else if(p.produccion<a.almacenamiento){
            cantFabricas++
            f.addFabricaToList(new fabrica('imaginaria',a.almacenamiento-p.produccion))
        }
    }
}

const validation=new ValidateMayor();
const f=new FabricasTotales();
const p=new ProduccionTotal();
const changeModalFab=new ChangeModalFabricasToBodegas();
const controllerFP=new ControllerFabricaAndProduccion()
const b= new BodegasTotales();
const a=new AlmacenamientoTotal();
const controllerBA=new ControllerBodegaAndAlmacenamiento()
const entidadImaginaria=new EntidadImaginaria();


class Controller{
    constructor(controller){
        this.controller=controller;
    }
}


okFab.addEventListener('click',(e)=>{
    e.preventDefault();
    const c=new Controller(controllerFP);
    c.controller.controllerFabricaAndProduccion();
    
})

okBod.addEventListener('click',(e)=>{
    e.preventDefault();
    const c= new Controller(controllerBA)
    c.controller.ControllerBodegaAndAlmacenamiento()
})



btnAddAsignacion.addEventListener('click',()=>{
    f.fabricas=[]
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

returnFab.addEventListener('click',(e)=>{
    e.preventDefault();
    cantFab.style.display="none"
    containerModalRootFab.style.display="block";

})

var cantFabricas=0;

function getInputsFab(button){
    containerFab.innerHTML=""
    cantFab.style.display="block"
    containerModalRootFab.style.display="none";
    cantFabricas=button.value;
    Inputs(cantFabricas,'fab','Fábrica',containerFab)
}

var cantBodegas=0;

function getInputsBod(button){
    containerBod.innerHTML=""
    cantFab.style.display="none"
    cantBod.style.display="block"
    containerModalRootBod.style.display="none";
    cantBodegas=button.value;
    Inputs(cantBodegas,'bod','Bodega',containerBod)
}


returnBod.addEventListener('click',(e)=>{
    e.preventDefault();
    cantBod.style.display="none"
    containerModalRootBod.style.display="block";
})


function emparejar(){
    View.innerHTML=''
    table.innerHTML=""
    const divTotal=document.createElement('div')
    divTotal.className="divtotal"
    const pTotal=document.createElement('h2')
    pTotal.innerHTML='Produccion Total: '+p.produccion;
    const aTotal=document.createElement('h2')
    aTotal.innerHTML='Almacenamiento Total: '+a.almacenamiento;
    const buttonRandom=document.createElement('button')
    buttonRandom.className='btn btnRandom'
    buttonRandom.innerText='Ingresar datos Random'
    divTotal.appendChild(pTotal)
    divTotal.appendChild(aTotal)
    divTotal.appendChild(buttonRandom)

    const headsFabricas=document.createElement('tr')
    const number=document.createElement('th')
    headsFabricas.appendChild(number)
    table.appendChild(headsFabricas)
    const dataFabricas=document.createElement('tr')
    containerModal.style.display="none"



    entidadImaginaria.addEntidadImaginaria()


    for(let i=1;i<Number(cantFabricas)+1;i++){
        const headFab=document.createElement('th');
        headFab.innerText='Fabrica '+(f.fabricas[i-1].id)
        headsFabricas.appendChild(headFab)
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
        data.innerText=(f.fabricas[i-1].value)
        dataFabricas.appendChild(data)
    }

    table.appendChild(headsFabricas)

    for (let i=1;i<Number(cantBodegas)+1;i++){
        const bod=document.createElement('tr');
        const strong=document.createElement('strong')
        strong.innerText='Bodega '+(b.bodegas[i-1].id)
        bod.appendChild(strong)
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
            bod.appendChild(td)
        }
        const prod=document.createElement('td')
        prod.innerText=(b.bodegas[i-1].value)
        bod.appendChild(prod)
        table.appendChild(bod)
    }
    table.appendChild(dataFabricas)
    const divButton=document.createElement('div')
    divButton.className='divButton'
    const buttonNWC=document.createElement('button')
    buttonNWC.innerText='Aplicar Método NWC'
    buttonNWC.className='btn btnNWC'
    const buttonMc=document.createElement('button')
    buttonMc.innerText='Aplicar Método Minimos Costos'
    buttonMc.className='btn btnMc'
    const buttonVoguel=document.createElement('button')
    buttonVoguel.innerText='Aplicar Método Voguel'
    buttonVoguel.className='btn btnVoguel'
    
    divButton.appendChild(buttonNWC)
    divButton.appendChild(buttonMc)
    divButton.appendChild(buttonVoguel)


    View.appendChild(divTotal)
    View.appendChild(table)
    View.appendChild(divButton)
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



