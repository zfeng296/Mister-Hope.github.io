import { sidebar } from "vuepress-theme-hope";
import { basic } from "./basic";
import { code } from "./code";
import { design } from "./design";
import { github } from "./github";
import {
  dart,
  javascript,
  language,
  markdown,
  python,
  typescript,
} from "./language";
import { linux } from "./linux";
import { miniapp } from "./mini-app";
import { note } from "./note";
import { physics } from "./physics";
import { comsol, git, software, vscode } from "./software";
import { vue } from "./vue";
import { css, html, jquery, website } from "./website";

export const zhSidebarConig = sidebar({
  "/software/vscode/": vscode,

  "/software/git/": git,

  "/software/comsol/": comsol,

  "/software/": software,

  "/physics/": physics,

  "/note/innenu/": ["", "yaml", "tag-list", "get-started"],

  "/note/": note,

  "/linux/": linux,

  "/design/": design,

  "/code/windows/": [
    "",
    "shortcut-key",
    "hidden-file",
    "add-path",
    "cmd",
    "notepad",
  ],

  "/code/website/jquery/": jquery,

  "/code/website/html/": html,

  "/code/website/css/": css,

  "/code/website/": website,

  "/code/vue/": vue,

  "/code/node-js/": [
    "",
    "intro",
    "install",
    "environment",
    "program",
    "module",
  ],

  "/code/mini-app/": miniapp,

  "/code/language/typescript/": typescript,

  "/code/language/python/": python,

  "/code/language/markdown/": markdown,

  "/code/language/js/": javascript,

  "/code/language/dart/": dart,

  "/code/language/": language,

  "/code/github/": github,

  "/code/basic/": basic,

  "/code/Android/": ["", "intro", "base", "resource"],

  "/code/": code,

  "/about/": ["", "site"],

  // fallback
  "/": ["", "note/", "code/", "software/", "about/"],
});

export const enSidebarConfig = sidebar({
  "/en/note/": [""],

  "/en/code/": [""],

  "/en/about/": ["", "site"],

  // fallback
  "/en/": ["", "code/", "about/"],
});
