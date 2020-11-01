export const toggleElements = (element, className, parent) => {
    const parentElement = parent ? document.querySelectorAll(parent) : document
    const setClass = arr => {
        if(arr) {
            arr.forEach(el => {
                el.addEventListener('click', function() {
                    for (const i of arr) i.classList.remove(className)
                    this.classList.add(className)
                })
            })
        }
    }
    
    if(parentElement.length) {
        parentElement.forEach(elem => {
            const items = elem.querySelectorAll(element);
            setClass(items)
        })
    }else{
        const items = parentElement.querySelectorAll(element);
        setClass(items)
    }

    
}