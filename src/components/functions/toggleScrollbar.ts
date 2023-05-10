export const toggleScrollbar =  () =>{
    const element = document.getElementsByTagName("body")[0];
           
    if(element.classList.contains('overflow-hidden')){
        element.classList.remove('overflow-hidden')
    }
    else  element.classList.add('overflow-hidden')
}
