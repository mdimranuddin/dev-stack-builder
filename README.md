# 🧱 Dev Stack Builder

A modern web application that helps developers explore, compare, and build their ideal technology stack.

## 🔗 Live Site
[Visit Dev Stack Builder](https://mdimranuddin.github.io/dev-stack-builder/)

## 🔧 Technologies Used

- React.js
- TypeScript
- Tailwind CSS
- React-Toastify
- Vite
- JSON

## ✨ Features

- 🔍 Browse 12+ technologies across Frontend, Backend, Database, and more
- ➕ Add technologies to your personal stack and remove them anytime
- 🔔 Toast notifications for add, duplicate, remove, and remove-all actions

---

## 💡 React Questions & Answers

**i. What is JSX, and why is it used in React?**
JSX is basically a way to write HTML inside JavaScript. At first it looks weird but it actually makes things easier. Instead of creating elements manually, I can just write something like `<h1>Hello</h1>` directly in my JS file. React then converts it to real JavaScript behind the scenes. 

**ii. What is the difference between props and state?**
Think of props like arguments you pass to a function — the parent gives data to the child and the child just uses it, can't change it. State is different — it lives inside the component itself and when it changes, the component re-renders. Like in this project, the stack list is a state because it changes when I add or remove things.

**iii. What does the useState hook do, and where did you use it in this project?**
useState lets me store a value and update it later. When I update it, React automatically re-renders the component. In this project I used it in TechGrid to store three things — the list of technologies, the current stack, and whether data is still loading or not.

**iv. What does the useEffect hook do, and why did you need it to load the JSON data?**
useEffect runs some code after the component appears on screen. I needed it because I can't fetch data before the component loads. So I used useEffect to fetch the technologies.json file right after the page opens, then saved the result in state so the cards show up.

**v. Why does every item in a .map() list need a unique key prop?**
When React renders a list, it needs to know which item is which — especially when something changes. The key helps React figure that out. Without it, React gets confused and might re-render the wrong item or show bugs. I used the technology id as the key since each one is unique.

**vi. What is conditional rendering? Show one place you used it.**
Conditional rendering just means showing different things based on a condition — like an if/else but in JSX. In the YourStack component, if the stack is empty I show a "Your stack is empty" message. But if there are items, I show the list instead. Simple as that.

**vii. How do you pass data from a parent component to a child component, and how does a child send something back to the parent?**
To pass data down, the parent just adds it as a prop on the child component. To send something back up, the parent passes a function as a prop and the child calls that function when something happens. For example, TechGrid passes the onAdd function to TechCard, and when someone clicks "Add to Stack", TechCard calls onAdd and sends the tech data back up to TechGrid.
