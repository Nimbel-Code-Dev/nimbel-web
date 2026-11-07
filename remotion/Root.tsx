import { Composition } from "remotion";
import { RagFlow, RAG_FLOW_DURATION } from "./RagFlow";

export const RemotionRoot = () => (
  // Artículo /blog/base-de-datos-vectorial/: flujo de RAG en cuatro pasos
  <Composition
    id="RagFlow"
    component={RagFlow}
    durationInFrames={RAG_FLOW_DURATION}
    fps={30}
    width={1200}
    height={900}
  />
);
