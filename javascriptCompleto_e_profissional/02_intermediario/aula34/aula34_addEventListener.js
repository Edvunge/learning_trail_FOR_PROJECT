// const c1 = document.getElementById("c1")
// const c1 = document.getElementById("#c1")
//const c1 = document.getElementById("c1")
const cursos=[...document.querySelectorAll(".curso")]

/*const msg = () => {
    alert("clicou")
}*/
cursos.map((el)=>{
    el.addEventListener("click",(evt)=>{
        const el = evt.target
        el.classList.add("destaque")
    })
})

c1.addEventListener("click", (evet)=>{
    console.log(evet)
})

