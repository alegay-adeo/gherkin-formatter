import { Document } from "gherkin-ast";
import { getDebugger } from "../debug";
import { FormatOptions } from "../index";
import { format as formatFeature } from "./featureFormatter";

const debug = getDebugger("gherkinDocumentFormatter");

export function format(
  document: Document,
  options?: Partial<FormatOptions>
): string {
  debug(
    "format(document: %s, options: %o)",
    document?.constructor.name,
    options
  );
  if (!document) {
    throw new Error("Document must be set!");
  }
  return formatFeature(document.feature, options);
}
