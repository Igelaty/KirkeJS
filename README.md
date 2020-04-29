# KirkeJS
Javascript Library to add css transitions to your webpage

# KirkeJS!

KirkeJS is a js-library which adds dynamically css-classes to your html-document through **click-events** and also **scroll-events**.  The idea is to add css-classes with keyframe-animations to add these animations dynamically through js based on their events. The script is working through classes and dataset-elements.

## Initialize

To initialize the library you just have to add the kirke.js file into your html document.

    <script  src="path/kirke.js"></script>

## Using Click Events

There are two different kinds of Click Events **multi-events** which are events which are triggering their animation again and again, they only support one animation(css-class). The other kind are the **in/out -events** these are events which also can have out-animation.

How to use them:
Add the class "Kirke_Link" to them additonal you need to set following dataset-attributes

 - data-AnimIn
 - data-Target

also add for

***multi-events***

 - data-MultiAnim
 
 Code-Example:
 
    <a> href="#target" class="Kirke_Link, ....." 
    data-AnimIn="css-class" data-Target="IdOfAnimationObject" data-MultiAnim="true"
    </a>

 

or for

***in/out-events***

 - data-InOut
 - data-AnimOut [additional only needed if a Out-Animation is whished]
 
 Code-Example:

    <a> href="#target" class="Kirke_Link, ....."
    data-AnimIn="css-class" data-Target="id of animationobject" data-AnimOut="css-class" data-InOut="out"  
    </a>
    
## Using Scroll Events

Scroll-Events get triggered when they get in viewport.

How to use them:
Add the class "Kirke_Object" to them additonal you need to set the css-class with the dataset attribute
data-AnimIn to the wished css-class.

Code-Example:

    <a> href="#target" class="Kirke_Object, ....." data-AnimIn="css-class" </a>



