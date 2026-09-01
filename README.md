# diegetic-log-sampler

A zero-dependency JavaScript sampler for deterministic sci-fi and containment-horror terminal logs.

```js
import { generateLog } from "diegetic-log-sampler";

console.log(generateLog({ seed: "4519", setting: "scifi" }));
```

Or run the CLI:

```sh
npx diegetic-log-sampler --seed 4519 --setting horror
```

The same seed and setting always produce the same sample.

## Full writing utility

This package is a deliberately constrained sampler. **Diegetic UI Forge** adds five document types, four settings, unlimited generation, copy/export, an offline browser interface, and a commercial-use license for generated output.

Get the full edition: https://kk497055.itch.io/diegetic-ui-forge

## License

The sampler package source is MIT licensed. The paid Diegetic UI Forge package is a separate product and is not covered by this license.

