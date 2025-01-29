## **Task 1: Static Position (Default Positioning)**  
**Objective:** Understand the default position of elements.  

- Create a container `<div>` with three child `<div>` elements.  
- Do not apply any `position` property; observe how elements flow naturally.  
- Adjust margins and padding to see how spacing affects their position.  

---

## **Task 2: Relative Positioning**  
**Objective:** Move an element relative to its normal position.  

- Create a container `<div>` with three child `<div>` elements.  
- Set `position: relative;` on one of the child elements.  
- Use `top`, `bottom`, `left`, or `right` to shift it slightly from its original position.  

---

## **Task 3: Absolute Positioning**  
**Objective:** Position an element relative to its nearest positioned ancestor.  

- Create a container `<div>` with `position: relative;`.  
- Add a child `<div>` with `position: absolute;`.  
- Use `top`, `left`, `right`, or `bottom` to position the absolute child within the container.  

---

## **Task 4: Fixed Positioning**  
**Objective:** Keep an element fixed in place while scrolling.  

- Create a `<div>` at the top of the page with `position: fixed;`.  
- Use `top: 0; left: 0; width: 100%;` to make it a fixed header.  
- Add content below and observe how the fixed element remains visible while scrolling.  

---

## **Task 5: Sticky Positioning**  
**Objective:** Make an element stick to the top when scrolling.  

- Create a container with multiple content sections.  
- Add a `<div>` with `position: sticky; top: 0;`.  
- Scroll the page to see how it sticks when reaching the top.  

---

## **Task 6: Z-Index (Layering Elements)**  
**Objective:** Control the stacking order of elements.  

- Create three overlapping `<div>` elements with `position: absolute;`.  
- Apply different `z-index` values to move one element in front of another.  
- Experiment with negative `z-index` to send elements behind.  

---

## **Task 7: Centering with Absolute Positioning**  
**Objective:** Use `position: absolute;` to center an element.  

- Create a container `<div>` with `position: relative;`.  
- Add a child `<div>` with `position: absolute; top: 50%; left: 50%;`.  
- Use `transform: translate(-50%, -50%);` to perfectly center it.  

---

## **Task 8: Full-Screen Overlay (Absolute + Z-Index)**  
**Objective:** Create a full-screen overlay using absolute positioning.  

- Create a `<div>` with `position: absolute; top: 0; left: 0; width: 100vw; height: 100vh; background: rgba(0, 0, 0, 0.5); z-index: 1000;`.  
- Place it inside a relative parent to simulate a modal overlay.  
- Add a close button inside the overlay and style it.  

---

## **Task 9: Sidebar with Fixed Positioning**  
**Objective:** Create a fixed sidebar navigation.  

- Create a sidebar `<div>` with `position: fixed; left: 0; top: 0; width: 250px; height: 100vh; background: #333; color: white;`.  
- Add links inside and style them.  
- Ensure the sidebar stays visible while scrolling.  

---

## **Task 10: Tooltip with Absolute Positioning**  
**Objective:** Create a tooltip that appears on hover.  

- Create a button `<button>` with a tooltip `<div>` inside.  
- Set `position: absolute;` on the tooltip and `position: relative;` on the button.  
- Hide the tooltip by default and show it on hover using CSS.  
