const input = document.getElementById("input")
const btn = document.getElementById("button")
const list = document.getElementById("list")


btn.addEventListener("click", () => {
    const li = document.createElement("li")
    const p = document.createElement("p")
    const iconDiv = document.createElement("div")
    const check = document.createElement("i")
    const trash = document.createElement("i")

    li.classList.add("d-flex","justify-content-between", "align-content-center")
    iconDiv.classList.add("d-flex" , "gap-3")
    check.classList.add("fa-solid", "fa-check","fa-lg")
    trash.classList.add("fa-solid","fa-trash","fa-lg")

    const todo = input.value.trim()


    if(input.value != ""){
        p.textContent = todo
        iconDiv.appendChild(check)
        iconDiv.appendChild(trash)
        li.appendChild(p)
        li.appendChild(iconDiv)
        list.appendChild(li)

        check.addEventListener("click",function(){
           let yazi = this.parentElement.previousElementSibling
            yazi.classList.toggle("text-decoration-line-through")
            yazi.classList.toggle("text-secondary")
        })


        trash.addEventListener("click", function(){
            let sil = this.parentElement.parentElement
            sil.remove()
        })

    }else{
        alert("Bir Todo Giriniz Boş Bırakmayınız")
    }

    input.value = ""

})