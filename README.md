Q1: What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?


Ans:
getElementById("idName"):

শুধু id দিয়ে element নেয়।
একটাই element ফেরত দেয়।

getElementsByClassName("className"):

শুধু class দিয়ে element নেয়।
একাধিক element থাকলে HTMLCollection দেয়।


querySelector("CSS-selector"):

যেকোনো CSS selector ব্যবহার করা যায় (#id, .class, tag)।
শুধু প্রথম matching element ফেরত দেয়।


querySelectorAll("CSS-selector"):

সবগুলো matching element ফেরত দেয়।
Output হয় NodeList (forEach loop চালানো যায়)।


Q2: How do you create and insert a new element into the DOM?

Ans:
Element তৈরি → document.createElement("div")
Content যোগ করা → .textContent = "Hello"
Parent element খুঁজে পাওয়া → document.getElementById("container")
DOM এ ঢোকানো → .appendChild(newDiv)


Q3: What is Event Bubbling and how does it work?
Ans:


যখন একটা event (যেমন click) child element এ ঘটে, তখন সেটা ধাপে ধাপে তার parent → grandparent → root পর্যন্ত propagate হয়।
Default behavior হলো event bubbling।


Q4: What is Event Delegation in JavaScript? Why is it useful?

Ans:


Event delegation হলো parent element এ event listener বসানো, তারপর child element এর event detect করা।
যেহেতু events bubble করে, তাই parent থেকে child এর event handle করা যায়।



Q5: What is the difference between preventDefault() and stopPropagation()?

Ans:
preventDefault():
ব্রাউজারের default কাজ বন্ধ করে।
Example: Form submit করলে reload বন্ধ করতে

stopPropagation()

Event bubbling বা capturing থামিয়ে দেয়।
Example: Child element এ click করলে parent এর event চালাতে না চাইলে
