const observer= new IntersectionObserver((entries)=>{
    entries.forEach((entry)=>{
        console.log(entry);
        if(entry.isIntersecting)
        {
            entry.target.classList.add('show')
        }
    })
})
const hiddenele=document.querySelectorAll(".hidden");
hiddenele.forEach((el)=>observer.observe(el));



