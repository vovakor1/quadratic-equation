module.exports = function solveEquation(equation) {
    let [a, , b, c] = equation.replace(/\s/g, "").match(/-?\d+/g);
    b /= a;
    c /= a;

    return [
        (-b - Math.sqrt(b * b - 4 * c)) / 2,
        (-b + Math.sqrt(b * b - 4 * c)) / 2,
    ];
};