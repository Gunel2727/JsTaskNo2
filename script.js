let selectedBox = null;

const boxes = document.querySelectorAll(".box");
const areas = document.querySelectorAll(".area");


boxes.forEach(function(box) {
  box.ondragstart = function() {
    selectedBox = this;
  };
});


areas.forEach(function(area) {

  area.ondragover = function(e) {
    e.preventDefault(); 
  };

  area.ondrop = function() {

    const number = parseInt(selectedBox.textContent);
    const min = parseInt(this.dataset.min);
    const max = parseInt(this.dataset.max);

    if (number >= min && number <= max) {
      this.appendChild(selectedBox);
    } else {
      alert("Yanlış yer!");
    }
  };

});