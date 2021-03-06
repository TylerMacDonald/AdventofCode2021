const file = require("../utils/import");
const _ = require("../utils/customAssert");
const p = require("../utils/packetUtils");
const input = file.getInput("day16.txt");

function part1(input) {
  const binary = p.hexToBinary(input);
  const packets = p.parsePackets(binary);
  return p.sumVersions(packets);
}

console.log("Part 1:", part1(input));

function part2(input) {
  const binary = p.hexToBinary(input);
  const packets = p.parsePackets(binary);
  return packets[0].value;
}

console.log("Part 2:",part2(input));