import { Tag } from "gherkin-ast";
import { getDebugger } from "../debug";
import { FormatOptions } from "../index";
import { config, lines } from "../utils";

const debug = getDebugger("tagFormatter");

export function format(tags: Tag[], options?: Partial<FormatOptions>): string {
  debug("format(tags: %s, options: %o)", tags?.constructor.name, options);
  if (!tags) {
    throw new Error("Tags must be set!");
  }
  options = config(options);
  if (!options.oneTagPerLine) {
    return tags.map((tag) => tag.toString()).join(" ");
  }
  const l = lines(options);
  tags.forEach((tag) => {
    l.add(tag.toString());
  });
  return l.toString();
}
