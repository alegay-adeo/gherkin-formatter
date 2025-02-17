import { Examples, TableRow } from "gherkin-ast";
import { getDebugger } from "../debug";
import { FormatOptions } from "../index";
import { indent, lines } from "../utils";
import { format as formatTableRows } from "./tableRowFormatter";
import { format as formatTag } from "./tagFormatter";

const debug = getDebugger("examplesFormatter");

export function format(
  examples: Examples,
  options?: Partial<FormatOptions>
): string {
  debug(
    "format(examples: %s, options: %o)",
    examples?.constructor.name,
    options
  );
  if (!examples) {
    throw new Error("Examples must be set!");
  }
  const l = lines(options);
  if (examples.tags.length > 0) {
    l.add(formatTag(examples.tags, options));
  }
  l.add(indent(`${examples.keyword}: ${examples.name}`));

  const tableRows: TableRow[] = [examples.header, ...examples.body];

  l.add(indent(formatTableRows(tableRows), 4));

  return l.toString();
}
