/*  I know that I should do this with a json file, but since
    I couldn't find a way to reference the languages dictionary in projects,
    with json I kept myself to this idea
 */
const languages = {
  py: { name: "Python", colour: "#306998" },
  html: { name: "HTML", colour: "#E44D26" },
  js: { name: "Javascript", colour: "#F0DB4F" },
  php: { name: "PHP", colour: "#787CB5" },
  css: { name: "CSS", colour: "#3C99DC" },
}
const projects = {
  reaper: {
    title: "Reaper",
    date: "19 December 2020",
    lang: languages["py"]["name"],
    colour: languages["py"]["colour"],
    image: "./assets/images/reaper.png",
    desc: "A simple ransomware.",
    url: "https://github.com/IVBecy/reaper",
  },
  project_anon: {
    title: "Project anon",
    date: "10 December 2020",
    lang: languages["php"]["name"],
    colour: languages["php"]["colour"],
    image: "./assets/images/project_anon.png",
    desc: "A social media platform.",
    url: "https://github.com/IVBecy/project_anon",
  },
  networkScan: {
    title: "Scanner",
    date: "16 September 2020",
    lang: languages["py"]["name"],
    colour: languages["py"]["colour"],
    image: "./assets/images/scanner.png",
    desc: "An NMAP like scanner",
    url: "https://github.com/IVBecy/network_scanner",
  },
  reverseShell: {
    title: "Reverse Shell",
    date: "12 September",
    lang: languages["py"]["name"],
    colour: languages["py"]["colour"],
    image: "./assets/images/shell.png",
    desc: "Basic reverse shell.",
    url: "https://github.com/IVBecy/reverse_shell",
  },
  notepad: {
    title: "Notepad",
    date: "6 September 2020",
    lang: languages["py"]["name"],
    colour: languages["py"]["colour"],
    image: "./assets/images/notepad.png",
    desc: "A copy of windows notepad",
    url: "https://github.com/IVBecy/notepad",
  },
  cardDesign: {
    title: "Card Designs",
    date: "24 August 2020",
    lang: languages["css"]["name"],
    colour: languages["css"]["colour"],
    image: "./assets/images/css_cards.png",
    desc: "Some css card designs.",
    url: "https://github.com/IVBecy/css_cards",
  },
  passManager: {
    title: "Password manager",
    date: "20 August 2020",
    lang: languages["php"]["name"],
    colour: languages["php"]["colour"],
    image: "./assets/images/php_pass.png",
    desc: "A generic password manager.",
    url: "https://github.com/IVBecy/php_password_manager",
  },
  usernameLookup: {
    title: "Username lookup",
    date: "10 August 2020",
    lang: languages["py"]["name"],
    colour: languages["py"]["colour"],
    image: "./assets/images/uname.png",
    desc: "Username lookup tool",
    url: "https://github.com/IVBecy/username_lookup",
  },
  template3: {
    title: "Template (3)",
    date: "24 July 2020",
    lang: languages["php"]["name"],
    colour: languages["php"]["colour"],
    image: "./assets/images/design_3.png",
    desc: "Website template",
    url: "https://github.com/IVBecy/website_template_3",
  },
  beatMaker: {
    title: "Beat Maker",
    date: "19 July 2020",
    lang: languages["html"]["name"],
    colour: languages["html"]["colour"],
    image: "./assets/images/beat.png",
    desc: "Music maker app",
    url: "https://github.com/IVBecy/beatmaker",
  },
  todo: {
    title: "To-Do List",
    date: "21 June 2020",
    lang: languages["js"]["name"],
    colour: languages["js"]["colour"],
    image: "./assets/images/todo.png",
    desc: "To do list app.",
    url: "https://github.com/IVBecy/todo_list",
  },
  template2: {
    title: "Template (2)",
    date: "19 June 2020",
    lang: languages["html"]["name"],
    colour: languages["html"]["colour"],
    image: "./assets/images/design_2.png",
    desc: "Website template",
    url: "https://github.com/IVBecy/website_template_2",
  },
  hashCracker: {
    title: "Hash Cracker",
    date: "12 June 2020",
    lang: languages["py"]["name"],
    colour: languages["py"]["colour"],
    image: "./assets/images/crack.png",
    desc: "Simple hash cracker script",
    url: "https://github.com/IVBecy/hash_cracker",
  },
  template1: {
    title: "Template (1)",
    date: "8 June 2020",
    lang: languages["html"]["name"],
    colour: languages["html"]["colour"],
    image: "./assets/images/design_1.png",
    desc: "Website template",
    url: "https://github.com/IVBecy/website_template_1",
  },
  oldWebsite: {
    title: "Old Website",
    date: "2 June 2020",
    lang: languages["html"]["name"],
    colour: languages["html"]["colour"],
    image: "./assets/images/old_website.png",
    desc: "The old design of my website",
    url: "https://github.com/IVBecy/old_website",
  },
  spaceInvaders: {
    title: "Space Invaders",
    date: "24 May 2020",
    lang: languages["py"]["name"],
    colour: languages["py"]["colour"],
    image: "./assets/images/space_invaders.png",
    desc: "A space invaders-like game.",
    url: "https://github.com/IVBecy/spaceinvaders",
  },
  website: {
    title: "Website",
    date: "2 February 2020",
    lang: languages["html"]["name"],
    colour: languages["html"]["colour"],
    image: "./assets/images/prev.png",
    desc: "My own website.",
    url: "https://github.com/IVBecy/ivbecy.github.io",
  },
  snake: {
    title: "Snake",
    date: "16 September 2019",
    lang: languages["py"]["name"],
    colour: languages["py"]["colour"],
    image: "./assets/images/snake.png",
    desc: "A basic snake game",
    url: "https://github.com/IVBecy/snakegame",
  }
}