export function padStats(stat, val, sep, len) {
    val = val || "xx";
    let output = `
    ${stat.toString()}${sep.repeat(len - (val.toString().length + stat.toString().length))}${val.toString()}`;
    return output;
}