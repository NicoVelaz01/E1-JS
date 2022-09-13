/*  Crear el array de objetos "Pizzas". 🍕
👉 Debemos crear 6 objetos como mínimo.
👉 Cada objeto debe tener definido su id (1,2,3,etc), nombre, ingredientes (Sobre la base) y precio. (Ingredientes debe ser una lista). 

🔥 Crear una iteración del array que imprima en consola:
a) Las pizzas que tengan un id impar.
b) ¿Hay alguna pizza que valga menos de $600?
c) El nombre de cada pizza con su respectivo precio.
d) Todos los ingredientes de cada pizza (En cada iteración imprimir los ingredientes de la pizza actual). Ayuda: van a tener que realizar dos recorridos, ya que cada pizza del array de pizzas tiene un array de ingredientes.

TODAS  las respuestas deben ser USER-FRIENDLY. 
Si (como en el punto B), la respuesta es un booleano (true o false), no imprimir el booleano , imprimir en consola una respuesta que toda persona pueda entender, sepa o no de programación (Es decir, no podemos imprimir un array o un objeto en consola, por ejemplo.). 
Manejemos esa respuesta, pensando en que un usuario promedio va a leer eso. 

Por ejemplo: "La pizza X, tiene un valor de $XXXX”. 💸

 */
const Pizzas = [
    {
        id: 1,
        nombre: "Muzzarella",
        ingredientes: ["salsa de tomate"," queso muzzarella"," aceitunas"],
        precio: 550
    },
    {
       id: 2,
       nombre: "Jamon y Morrones",
       ingredientes: ["salsa de tomates", " queso muzzarella", " jamon", " morrones", " aceitunas"],
       precio: 750
    },
    {
        id: 3,
        nombre: "Napolitana",
        ingredientes: ["salsa de tomates", " queso muzzarella ", " rodajas de tomates", " aceitunas"],
        precio: 700
    },
    {
        id: 4,
        nombre: "4 Quesos",
        ingredientes: ["salsa de tomates", " queso gorgonsola", " queso parmesano", " queso fontina", " aceitunas"],
        precio: 1000
    },
    {
        id: 5,
        nombre: "Peperoni",
        ingredientes: ["salsa de tomates", " queso muzzarella", " salame", " aceitunas"],
        precio: 800
    },
    {
        id: 6,
        nombre: "Fugazzeta",
        ingredientes: ["salsa de tomates", " queso muzzarella", " ajo", " cebollas"],
        precio: 700
    }
]

 Pizzas.map((arrPizzas)=> {
    console.log(arrPizzas)
})


/* a) */
const pizzasIdImpar = Pizzas.filter(Pizzas => Pizzas.id % 2 == 0) 
     pizzasIdImpar.forEach((Pizzas) => {
     console.log(`La pizza ${Pizzas.nombre} tiene id impar.`)
});
 

/* b) */
const pizzasPrecioMenos = Pizzas.some(p => p.precio < 600)?console.log("Si, hay una pizza con precio menor a 600."):console.log("No, no hay una pizza con precio menor a 600.");


/* c) */
Pizzas.forEach((p)=>{
    console.log(`La pizza ${p.nombre} cuesta $${p.precio}.`)
})


/* d) */
Pizzas.forEach((p)=>{
    console.log(`La Pizza ${p.nombre} tiene de ingredientes: ${p.ingredientes}`)
})




