# Frontend Mentor - Interactive rating component
Test out my solution here ---> https://megfdev-interactive-rating.netlify.app/

![Design preview for the Interactive rating component coding challenge](./design/desktop-preview.jpg)

## Markup Languages Used

HTML, CSS, JavaScript

## Lessons learned

This project was particularly engaging because I wanted to implement a function that undid the selection of previously selected values. I realized that in order to do this I need only create a variable equal to the DOM element containing the class to be added on click. Originally, I thought to check the class list using .contains() but the solution was much simpler than that. 

```js
const prevVal = document.querySelector('.select')
  if(prevVal){
    preVal.classList.remove('select')
}

e.target.classList.add('select')
```

This is always something I've wondered about and I see it being used everywhere so I'm quite glad to have finally learned how to code this.
