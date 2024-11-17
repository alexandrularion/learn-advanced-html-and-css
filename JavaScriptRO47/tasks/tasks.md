# Advanced HTML and CSS Tasks

# I. Flexbox Layout System

## Tasks 1: Simple Flex Container
**Objective:** Create a container with three child elements using Flexbox.

- Create a container `<div>` with three child `<div>` elements.
- Apply `display: flex;` to the container.
- Use Flexbox properties to ensure the child elements are displayed in a row.

## Tasks 2: Centering Content Horizontally
**Objective:** Center a single element horizontally within a container.

- Create a container `<div>` with a single child `<div>`.
- Set the width of the child element to be less than the container.
- Use Flexbox properties to horizontally center the child element within the container.

## Tasks 3: Vertical Centering
**Objective:** Center an element vertically within a container.

- Create a container `<div>` with a single child `<div>`.
- Set the height of the container.
- Use Flexbox to center the child element vertically within the container.

## Tasks 4: Centering Content Both Horizontally and Vertically
**Objective:** Center an element both horizontally and vertically within a container.

- Create a container `<div>` with a single child `<div>`.
- Use Flexbox properties to center the child element in both dimensions within the container.

## Tasks 5: Creating Space Between Elements
**Objective:** Distribute space evenly between elements within a container.

- Create a container `<div>` with three child `<div>` elements.
- Use `justify-content: space-between;` to place the first child element at the start, the last one at the end, and the middle one evenly spaced between them.

## Tasks 6: Flex Direction - Column
**Objective:** Change the direction of the flex items from a row to a column.

- Create a container `<div>` with three child `<div>` elements.
- Use `flex-direction: column;` to stack the child elements vertically.

## Tasks 7: Wrapping Flex Items
**Objective:** Allow flex items to wrap onto multiple lines within a container.

- Create a container `<div>` with multiple child `<div>` elements (e.g., six).
- Set a fixed width for the child elements.
- Use `flex-wrap: wrap;` to allow the items to wrap onto multiple lines if the container’s width is too small to fit them in a single row.

## Tasks 8: Aligning Items Along Cross Axis
**Objective:** Align items along the cross axis using `align-items`.

- Create a container `<div>` with three child `<div>` elements of different heights.
- Use `align-items: center;` to align the child elements along the center of the container’s cross axis (vertically, in a row layout).

## Tasks 9: Flexbox Order
**Objective:** Change the order of elements using the `order` property.

- Create a container `<div>` with four child `<div>` elements.
- Assign different `order` values to the child elements to rearrange them without changing the HTML structure.

## Tasks 10: Flex Grow and Shrink
**Objective:** Use `flex-grow` and `flex-shrink` to control the size of flex items.

- Create a container `<div>` with three child `<div>` elements.
- Set different `flex-grow` values to make one child element take up more space than the others.
- Adjust the `flex-shrink` property to ensure that certain elements shrink more than others when the container’s size is reduced.



# II. Grid Layout System

## 1. Basic 2x2 Grid
**Difficulty:** Easy  
**Description:** Create a simple 2x2 grid layout.  
**Goals:** 
- Use `display: grid` to create a grid container.
- Define a 2x2 grid using `grid-template-columns` and `grid-template-rows`.
- Place four items inside the grid.

## 2. Creating a 3x3 Grid with Gap
**Difficulty:** Easy  
**Description:** Build a 3x3 grid with a 10px gap between the rows and columns.  
**Goals:** 
- Define a 3x3 grid layout.
- Add a gap between the grid cells using `grid-gap` or `gap`.

## 3. Grid Template Areas
**Difficulty:** Easy  
**Description:** Use `grid-template-areas` to create a simple webpage layout with a header, sidebar, main content, and footer.  
**Goals:** 
- Use `grid-template-areas` to define different sections.
- Place elements using `grid-area`.

## 4. Responsive Grid Layout
**Difficulty:** Medium  
**Description:** Create a responsive grid layout that adjusts the number of columns based on the viewport width.  
**Goals:** 
- Use `repeat` and `auto-fill` or `auto-fit` for creating a responsive grid.
- Implement media queries to adjust the grid layout on different screen sizes.

## 5. Aligning Items in the Grid
**Difficulty:** Easy  
**Description:** Practice aligning items within the grid cells using various alignment properties.  
**Goals:** 
- Use `align-items`, `justify-items`, `align-content`, and `justify-content`.
- Experiment with different alignment values like `start`, `end`, `center`, and `stretch`.

## 6. Grid Item Placement
**Difficulty:** Medium  
**Description:** Place grid items in non-default positions using `grid-column` and `grid-row` properties.  
**Goals:** 
- Position items to span across multiple rows or columns.
- Use `grid-column-start`, `grid-column-end`, `grid-row-start`, and `grid-row-end`.

## 7. Nested Grids
**Difficulty:** Medium  
**Description:** Create a nested grid layout where one of the grid items is itself a grid container.  
**Goals:** 
- Create a grid within a grid item.
- Define the inner grid’s layout independently of the outer grid.

## 8. Asymmetrical Grid Layout
**Difficulty:** Medium  
**Description:** Design a grid with non-uniform column and row sizes.  
**Goals:** 
- Use fractional units (`fr`), percentages, and fixed units to create asymmetrical grids.
- Combine different sizing units to create a complex layout.

## 9. Grid with Overlapping Items
**Difficulty:** Medium  
**Description:** Create a grid layout where some items overlap others.  
**Goals:** 
- Use `grid-row` and `grid-column` properties to position items.
- Experiment with negative margins or positioning to create overlaps.

## 10. CSS Grid and Flexbox Hybrid Layout
**Difficulty:** Medium  
**Description:** Combine CSS Grid and Flexbox to create a complex layout.  
**Goals:** 
- Use CSS Grid for the overall page layout.
- Apply Flexbox to align and distribute items within individual grid cells.



# III. Motion - Animations, transformations and transitions

## 1. Simple Hover Transition
**Objective**: Create a button that smoothly changes its background color, scales up slightly, and adds a box-shadow when hovered.

- **CSS Concepts**: `transition`, `transform: scale()`, `box-shadow`
- **Instructions**:
  1. Create a button with some basic styling.
  2. Add a transition to smoothly change the background color, scale, and box-shadow on hover.

## 2. Slide-In Sidebar
**Objective**: Build a sidebar menu that slides in from the left when a button is clicked.

- **CSS Concepts**: `transform: translateX()`, `transition`
- **Instructions**:
  1. Create a hidden sidebar.
  2. Use CSS transitions to slide it in when a button is clicked.

## 3. Spinning Loader Animation
**Objective**: Create a loading spinner using CSS animations.

- **CSS Concepts**: `@keyframes`, `transform: rotate()`
- **Instructions**:
  1. Create a circular element.
  2. Use `@keyframes` to rotate it infinitely.

## 4. Flip Card Animation
**Objective**: Create a flip card that rotates 180 degrees on hover to reveal the back side.

- **CSS Concepts**: `transform: rotateY()`, `perspective`, `transition`
- **Instructions**:
  1. Create a card element with front and back sides.
  2. Add a 3D flip effect using `rotateY()` and `perspective`.

## 5. Bouncing Ball Animation
**Objective**: Animate a ball to bounce up and down infinitely.

- **CSS Concepts**: `@keyframes`, `transform: translateY()`
- **Instructions**:
  1. Create a ball element.
  2. Use `@keyframes` to animate its vertical position to simulate bouncing.

## 6. Text Fade-In Effect
**Objective**: Apply a fade-in effect to text when it comes into view.

- **CSS Concepts**: `opacity`, `transition`
- **Instructions**:
  1. Create a block of text.
  2. Use a transition to change the opacity from 0 to 1 on hover or scroll.

## 7. Pulsing Effect
**Objective**: Create a pulsing effect on a button or icon.

- **CSS Concepts**: `@keyframes`, `transform: scale()`
- **Instructions**:
  1. Create a button or icon element.
  2. Use `@keyframes` to create a pulsing effect by scaling the element up and down.

## 8. Rotating Image Gallery
**Objective**: Create an image gallery where images rotate when hovered over.

- **CSS Concepts**: `transform: rotate()`, `transition`
- **Instructions**:
  1. Create a gallery of images.
  2. Apply a rotation effect on hover with a smooth transition.

## 9. Expanding Search Bar
**Objective**: Create a search bar that expands when clicked.

- **CSS Concepts**: `width`, `transition`
- **Instructions**:
  1. Create a search input field.
  2. Use CSS transitions to smoothly expand its width when focused.

## 10. Moving Background Animation
**Objective**: Animate the background position of a div to create a scrolling effect.

- **CSS Concepts**: `background-position`, `@keyframes`
- **Instructions**:
  1. Create a div with a background image.
  2. Use `@keyframes` to animate the background position, giving the illusion of a scrolling background.



# IV. Selectors - Pseudo-classes, Pseudo-elements

## 1. Basic Selectors
**Objective**: Use basic CSS selectors to style elements on a webpage.

- **CSS Concepts**: Element selector, class selector, ID selector
- **Instructions**:
  1. Create an HTML document with different elements (e.g., `<div>`, `<p>`, `<h1>`).
  2. Use basic selectors to apply different styles to these elements.

## 2. Descendant and Child Selectors
**Objective**: Style elements using descendant and child combinator selectors.

- **CSS Concepts**: Descendant selector (` `), Child selector (`>`)
- **Instructions**:
  1. Create nested HTML elements (e.g., a list inside a div).
  2. Use descendant and child selectors to style specific elements within the hierarchy.

## 3. Attribute Selectors
**Objective**: Style elements based on their attributes.

- **CSS Concepts**: Attribute selectors (`[attr=value]`, `[attr^=value]`, `[attr$=value]`)
- **Instructions**:
  1. Create HTML elements with different attributes (e.g., links with `href`, inputs with `type`).
  2. Use attribute selectors to style elements based on their attributes.

## 4. Pseudo-Classes: Hover, Focus, and Active
**Objective**: Style elements using the `:hover`, `:focus`, and `:active` pseudo-classes.

- **CSS Concepts**: `:hover`, `:focus`, `:active`
- **Instructions**:
  1. Create a button and an input field.
  2. Apply different styles when the button is hovered, focused, or active.

## 5. Pseudo-Classes: nth-child and nth-of-type
**Objective**: Use the `:nth-child` and `:nth-of-type` pseudo-classes to style specific elements in a list or table.

- **CSS Concepts**: `:nth-child`, `:nth-of-type`
- **Instructions**:
  1. Create an HTML list or table.
  2. Use `:nth-child` and `:nth-of-type` to style specific items (e.g., every other row).

## 6. Pseudo-Elements: Before and After
**Objective**: Use `::before` and `::after` pseudo-elements to add content or styling before or after an element.

- **CSS Concepts**: `::before`, `::after`, `content`
- **Instructions**:
  1. Create an HTML heading or paragraph.
  2. Use `::before` and `::after` to add decorative content before and after the element.

## 7. Pseudo-Classes: First and Last Child
**Objective**: Style the first and last child elements within a container.

- **CSS Concepts**: `:first-child`, `:last-child`
- **Instructions**:
  1. Create a list of items or divs within a container.
  2. Use `:first-child` and `:last-child` to apply different styles to the first and last elements.

## 8. Pseudo-Classes: Only Child and Only of Type
**Objective**: Apply styles to elements that are the only child or the only type of their parent.

- **CSS Concepts**: `:only-child`, `:only-of-type`
- **Instructions**:
  1. Create different HTML elements with varying numbers of children.
  2. Use `:only-child` and `:only-of-type` to style elements that meet these conditions.

## 9. Styling Form Elements with Pseudo-Classes
**Objective**: Style form elements using various pseudo-classes such as `:checked`, `:disabled`, and `:enabled`.

- **CSS Concepts**: `:checked`, `:disabled`, `:enabled`
- **Instructions**:
  1. Create a form with checkboxes, radio buttons, and input fields.
  2. Apply styles based on whether the elements are checked, disabled, or enabled.

## 10. Combining Selectors and Pseudo-Classes
**Objective**: Combine different selectors and pseudo-classes to target and style specific elements.

- **CSS Concepts**: Combining selectors (e.g., `.class:hover`, `#id:focus`), pseudo-classes
- **Instructions**:
  1. Create a complex HTML structure with various elements and classes.
  2. Combine selectors and pseudo-classes to apply advanced styles to specific elements (e.g., `.container > ul > li:first-child:hover`).