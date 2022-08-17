# Frontend Mentor - FAQ accordion card solution

This is a solution to the [FAQ accordion card challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/faq-accordion-card-XlyjD0Oam). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
 



## Overview

### The challenge

Users should be able to:

- View the optimal layout for the component depending on their device's screen size
- See hover states for all interactive elements on the page
- Hide/Show the answer to a question when the question is clicked




### Links

- Solution URL: [Add solution URL here](https://your-solution-url.com)
- Live Site URL: [Add live site URL here](https://your-live-site-url.com)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox

- Desktop-first workflow
- Javascript



### What I learned

I learned how to handle overflowing elements..

To see how you can add code snippets, see below:


```css
.image{
    width: 50%;
    padding-right:4%;
    position: relative;
    overflow-y: visible;
    overflow-x: clip;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    
}
```
```js

var btn = document.querySelectorAll('.question');
var ans = document.querySelectorAll('.answer');
console.log(btn);
// const g = document.getElementById('my_div');
for (let i = 0, len = btn.length; i < len; i++)
{
    btn[i].onclick = function(){

        if(ans[i].style.display == ""){
            btn[i].style.fontWeight = "700";
            btn[i].children[0].style.transform = "rotate(180deg)";
            ans[i].style.display = "block";
        }else{
            btn[i].style.fontWeight= "normal";
            btn[i].children[0].style.transform = "";
            ans[i].style.display="";
        }
    }
}

```


