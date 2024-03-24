let isHeartShown = false; 

function startGame() {
    const container = document.getElementById('container');
    container.innerHTML = `
        <h1 class="title">BEAR-A-GOCCI</h1>
        <div class="icons">
            <img src="regen.png" class="icon" onclick="startRain()" alt="Rain Icon">
            <img src="hartje.png" class="icon" onclick="showHearts()" alt="Heart Icon">
            <img src="maantje.png" class="icon" onclick="closeEyes()" alt="Moon Icon">
        </div>
        <img src="beertje.png" class="bear" id="bear" alt="Bear Image">
    `;
}

function startRain() {
    const bear = document.getElementById('bear');
    if (!isHeartShown) {
    bear.src = "regenbeertje.png";
    isHeartShown = true;
    } else {
    bear.src = "beertje.png"; 
    isHeartShown = false;
    }
}

function showHearts() {
    const bear = document.getElementById('bear');
    if (!isHeartShown) {
        bear.src = "liefdebeertje.png";
        isHeartShown = true;
    } else {
        bear.src = "beertje.png"; 
        isHeartShown = false;
    }
}

function closeEyes() {
    const bear = document.getElementById('bear');
    if (!isHeartShown) {
        bear.src = "slaapbeertje.png";
        isHeartShown = true;
    } else {
        bear.src = "beertje.png"; 
        isHeartShown = false;
    }
}