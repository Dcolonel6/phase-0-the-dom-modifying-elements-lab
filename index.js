// Write your code here!
function removeElement(element){
    const ele = document.querySelector(element);
    return ele.remove();
}
function createElementWithAttr(elementTag,attrObj){
    const ele = document.createElement(elementTag);
    ele.textContent = 'YOUR-NAME is the champion';
    for(const key in attrObj){
        ele.setAttribute(key,attrObj[key]);
    }
    return ele;

}
function appendElement(elementToAppendTo, elementToAppend){
    elementToAppendTo.append(elementToAppend);

    return elementToAppendTo;
}
const newHeader = createElementWithAttr('h1', {'id':'victory'});
removeElement('main#main');

