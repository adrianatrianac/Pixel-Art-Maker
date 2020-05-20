(function() {
    'use strict';
    const $colorPicker = document.getElementById("colorPicker");
    const $table = document.getElementById("pixelCanvas");
    const $inputWidth = document.getElementById("inputWidth");
    const $inputHeight = document.getElementById("inputHeight");
    
    $sizePicker.submit(event => {
        event.preventDefault();
        
        let width = $inputWidth.value;
        let height = $inputHeight.value;
        
        $table.innerHTML = '';

    makeGrid(width, height);
    
    function makeGrid(height, width) {
        for (let a = 0; a < width; a++){
            let extraRow = $table.insertRow(); 
    };

    for (let b = 0; b < height; b++){
        let extraCell = extraRow.insertCell();
        extraCell.onClick = ColorChange;
    };  
    function ColorChange() {
        this.style.background = $colorPicker.value;
}
}

