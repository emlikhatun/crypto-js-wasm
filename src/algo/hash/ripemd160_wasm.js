import { generateWasmBytes } from '../../utils/wasm-utils';

export const wasmBytes = generateWasmBytes('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');