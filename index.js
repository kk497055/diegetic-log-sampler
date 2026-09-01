const DATA = {
  scifi: {
    org: ["Helix Orbital", "Cinderline Freight", "Aster Vale Systems"],
    place: ["Dock 7", "Kepler Relay", "Habitat K-19"],
    asset: ["coolant manifold", "navigation lattice", "oxygen recycler"]
  },
  horror: {
    org: ["Orison Biologics", "Blackglass Institute", "Wardell Research"],
    place: ["Sublevel C", "Isolation Wing", "Observation 4"],
    asset: ["containment seal", "specimen cradle", "thermal camera"]
  }
};

function hash(value) {
  let result = 2166136261;
  for (const char of String(value)) {
    result ^= char.charCodeAt(0);
    result = Math.imul(result, 16777619);
  }
  return result >>> 0;
}

function random(seed) {
  let state = hash(seed) || 1;
  return () => {
    state ^= state << 13;
    state ^= state >>> 17;
    state ^= state << 5;
    return (state >>> 0) / 4294967296;
  };
}

function pick(items, rng) {
  return items[Math.floor(rng() * items.length)];
}

function timestamp(rng, offset = 0) {
  const hour = String(Math.floor(rng() * 24)).padStart(2, "0");
  const minute = String((Math.floor(rng() * 60) + offset) % 60).padStart(2, "0");
  const second = String(Math.floor(rng() * 60)).padStart(2, "0");
  return `${hour}:${minute}:${second}`;
}

export function generateLog({ seed = "4519", setting = "scifi" } = {}) {
  if (!DATA[setting]) {
    throw new TypeError(`Unknown setting: ${setting}. Use "scifi" or "horror".`);
  }

  const rng = random(`${seed}:${setting}`);
  const data = DATA[setting];
  const org = pick(data.org, rng);
  const place = pick(data.place, rng);
  const asset = pick(data.asset, rng);
  const id = Math.floor(rng() * 8999) + 1000;

  return `BOOT/TRACE ${org.toUpperCase()} NODE-${id}\n${timestamp(rng)}  handshake ............... OK\n${timestamp(rng, 3)}  ${asset} ........ ONLINE\n${timestamp(rng, 7)}  telemetry drift .... ${Math.floor(rng() * 18) + 4}.${Math.floor(rng() * 9)}%\n${timestamp(rng, 9)}  route ........... ${place.toUpperCase()}\n${timestamp(rng, 12)}  WARNING: unsolicited control packet\n${timestamp(rng, 14)}  origin ................. UNKNOWN\n\n> sampler output truncated by design\n> _`;
}

