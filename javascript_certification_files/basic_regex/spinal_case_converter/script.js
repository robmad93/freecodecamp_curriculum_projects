/*
User Stories:

You should create a function named spinalCase.
The spinalCase function should take a single argument, a string.
The spinalCase function should return the string in spinal case format. For example, if the argument is ProductLanding page, the function should return product-landing-page.
*/

function spinalCase(str) {
  return str.replace(/([a-z])([A-Z])/g, "$1-$2").replace(/[\s_]+/g, "-").toLowerCase();
  }
