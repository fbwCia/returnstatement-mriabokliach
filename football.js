let teamPerformance = ["win", "draw", "win", "loss", "draw", "loss", "win"];

function pointsCount(array) {
    let points = 0;
    array.forEach(element => {
        if (element === "win") {
            points += 3;
        } else if (element === "draw") {
            points += 1;
        }
    })
    return points;
}

pointsCount(teamPerformance);