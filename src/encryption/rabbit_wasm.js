import { generateWasmBytes } from '../utils/wasm-utils';

export const wasmBytes = generateWasmBytes('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');