## Document refers to the whole page.

### Few properties :

document.body(); <!-- This is the entire body available on browser -->
document.getElementsByTagName('p'); 
document.getELementById('inp_box');
document.getElementsByClassName('class_para');


<!-- In all the above functions , in response we get a collection of such elements such as tag name or class but we only have getElementbyId() as obviously this would return a single element -->


let p2 = document.getElementsByClassName('para')[1];

<!-- Here p2 is the 2nd element of the collection with class 'para' -->

p2.innerText

p2.innerHTML

<!-- Prints element + content -->
p2.outerHTML 

<!-- changing data of an element in document data -->
p2.innerText = "some new data"

<!-- changing HTML property of element in document data -->
p2.innerHTML = "hello <b>bold</b>"

<!-- get class attribute of html element -->
p2.getAttribute('class); 

<!-- get id attribute of html element -->
p2.getAttribute('id');

<!-- To edit the content on screen -->
p2.setAttribute('contenteditable',true)

<!-- To disable spellcheck for p2 element -->
p2.setAttribute('spellcheck',false);

<!-- Similarily properties of other elements can also be manipulated inside DOM -->


Note : Always reduce the number of times we are calling innerHTML , therefore never append to innerHTML in a 'for' loop because manipulating the innerHTML is a very costly operation and it takes a lot of time in the browser. So, append all the list items at once after the 'for' loop end to the main list but not after every single iteration.


An alternate solution would have been to .appendChild to the list inside the 'for' loop , which can be done by first creating an HTML element and giving itself a value and then appending it to the list.


