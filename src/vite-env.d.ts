/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_HELIX_LLM_ENDPOINT?: string;
  readonly VITE_HELIX_LLM_MODEL?: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
