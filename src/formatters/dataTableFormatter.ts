import { DataTable } from "gherkin-ast";
import { getDebugger } from "../debug";
import { FormatOptions } from "../index";
import { lines } from "../utils";
import { format as formatTableRows } from "./tableRowFormatter";

const debug = getDebugger("dataTableFormatter");

export function format(
  dataTable: DataTable,
  options?: Partial<FormatOptions>
): string {
  debug(
    "format(dataTable: %s, options: %o)",
    dataTable?.constructor.name,
    options
  );
  if (!dataTable) {
    throw new Error("DataTable must be set!");
  }
  return lines(options).add(formatTableRows(dataTable.rows)).toString();
}
