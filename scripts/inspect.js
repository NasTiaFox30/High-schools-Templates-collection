//Intersection Observer API
function onEntry(entry) {
  entry.forEach((change) => {
    if (change.isIntersecting) {
      change.target.classList.add("active");
    } else if (!change.isIntersecting) {
      change.target.classList.remove("active");
    }
  });
}

let options = { threshold: [0.1] };
let elements = document.querySelectorAll("section");

let observer = new IntersectionObserver(onEntry, options);

if (elements.length === 0) {
  console.warn("No elements with class 'anim' found.");
}
else {
    // console.log(`Observing ${elements.length} elements with class 'anim'.`);
    for (let elm of elements) {
    observer.observe(elm);
}
}

