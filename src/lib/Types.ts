import { JSX } from "react";

export interface Command {
  name: string;
  output: JSX.Element;
}

export interface Files {
  [filename: string]: string | object;
}

export type CommandFunction = (args: string[]) => JSX.Element;

export interface CommandMap {
  [commandName: string]: CommandFunction;
}
