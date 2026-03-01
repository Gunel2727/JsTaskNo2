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
    let correctAreaId = "";

    
    if (number >= 1 && number <= 4) {
      correctAreaId = "area1";
    } else if (number >= 5 && number <= 8) {
      correctAreaId = "area2";
    } else if (number >= 9 && number <= 12) {
      correctAreaId = "area3";
    }

    
    if (this.id === correctAreaId) {
      this.appendChild(selectedBox);
    } else {
      alert("Yanlış yer!");
    }
  };

});