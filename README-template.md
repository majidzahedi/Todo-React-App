# Frontend Mentor - Todo app solution

This is a solution to the [Todo app challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/todo-app-Su1_KokOW). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the app depending on their device's screen size
- See hover states for all interactive elements on the page
- Add new todos to the list
- Mark todos as complete
- Delete todos from the list
- Filter by all/active/complete todos
- Clear all completed todos
- Toggle light and dark mode
- **Bonus**: Drag and drop to reorder items on the list

### Screenshot

# TOOD

![](./screenshot.jpg)

Add a screenshot of your solution. The easiest way to do this is to use Firefox to view your project, right-click the page and select "Take a Screenshot". You can choose either a full-height screenshot or a cropped one based on how long the page is. If it's very long, it might be best to crop it.

Alternatively, you can use a tool like [FireShot](https://getfireshot.com/) to take the screenshot. FireShot has a free option, so you don't need to purchase it.

Then crop/optimize/edit your image however you like, add it to your project, and update the file path in the image above.

**Note: Delete this note and the paragraphs above when you add your screenshot. If you prefer not to add a screenshot, feel free to remove this entire section.**

### Links

- Solution URL: [Add solution URL here](https://github.com/majidzahedi/todo-app)
- Live Site URL: [Add live site URL here](https://your-live-site-url.com)

## My process

I started to build the ui as close to challenge standards using react and tailwindcss and then added basic functionality (add, remove, toggle ... of todos) using hooks.

### Built with

- Semantic HTML5 markup
- Flexbox
- Mobile-first workflow
- [React](https://reactjs.org/) - JS library
- [TailwindCSS](https://styled-components.com/) - For styles
- [React Beutiful DND](https://styled-components.com/) - For Drag&Drop Support

### What I learned

Working with TailwindCSS is Amazing, you can build special looking components as fast as snapping your finger.(Althogh at first glance, the code looks very unclean.)

for customizing the checkbox to hava a gradenit border and backgournd i used code below which is intresting for me.

```html
<div
  className="flex items-center justify-center rounded-full bg-checkBackground1 p-0.5"
>
  <input
    type="checkbox"
    checked="{isDone}"
    className="focus:ring-none group rounded-full border-0 bg-veryLightGray p-3 ring-0 checked:bg-inherit hover:cursor-pointer checked:hover:bg-inherit focus:border-0 focus:outline-none focus:ring-transparent focus:checked:bg-inherit focus-visible:outline-none dark:bg-veryDarkDesaturatedBlue dark:checked:bg-inherit  "
    onChange="{toggleTodo(id)}"
  />
</div>
```

### Continued development

I will continue to refactor my code and maybe use a state management library also drag and drop feature needs some work. storing and reading dark mode and language state to localstorage is another feature that i will wrok on later.

### Useful resources

- [Example resource 1](https://www.example.com) - This helped me for XYZ reason. I really liked this pattern and will use it going forward.
- [Example resource 2](https://www.example.com) - This is an amazing article which helped me finally understand XYZ. I'd recommend it to anyone still learning this concept.

## Author

- Website - [Majid Zahedi](https://www.your-site.com)
- Frontend Mentor - [@majidzahedi](https://www.frontendmentor.io/profile/majidzahedi)
