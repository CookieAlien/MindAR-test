const exampleTarget = document.querySelector('example-target')

exampleTarget.addEventListener("targetFound", event => {
    console.log("target found");
  });

exampleTarget.addEventListener("targetLost", event => {
    console.log("target lost");
  });