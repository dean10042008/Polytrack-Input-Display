const [left, up, down, right] = document.querySelectorAll("span");

document.addEventListener("keydown", (e) => {
    const pressedKey = e.key;

    if (pressedKey === "a" || pressedKey === "ArrowLeft") {
        left.className = "active";
    }

    if (pressedKey === "w" || pressedKey === "ArrowUp") {
        up.className = "active";
    }

    if (pressedKey === "s" || pressedKey === "ArrowDown") {
        down.className = "active";
    }

    if (pressedKey === "d" || pressedKey === "ArrowRight") {
        right.className = "active";
    }
});

document.addEventListener("keyup", (e) => {
    const pressedKey = e.key;

    if (pressedKey === "a" || pressedKey === "ArrowLeft") {
        left.className = "";
    }

    if (pressedKey === "w" || pressedKey === "ArrowUp") {
        up.className = "";
    }

    if (pressedKey === "s" || pressedKey === "ArrowDown") {
        down.className = "";
    }

    if (pressedKey === "d" || pressedKey === "ArrowRight") {
        right.className = "";
    }
});