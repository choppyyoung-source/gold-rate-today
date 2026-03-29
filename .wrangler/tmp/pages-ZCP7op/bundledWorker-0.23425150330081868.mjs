// _worker.js/index.js
import "cloudflare:workers";
import { w } from "./chunks/worker-entry_npiV1CLA.mjs";
globalThis.process ??= {};
globalThis.process.env ??= {};
export {
  w as default
};
//# sourceMappingURL=bundledWorker-0.23425150330081868.mjs.map
