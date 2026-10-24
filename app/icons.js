// Pas de "use client" ici : utilisable côté serveur (page.js) et côté client (components.js)
export const files = {
  HTML: "html5", CSS: "css3", JavaScript: "javascript", PHP: "php", Laravel: "laravel", WordPress: "wordpress",
  Elementor: "elementor", Flutter: "flutter", Dart: "dart", "React Native": "react", Python: "python",
  SQL: "mysql", R: "r", Pandas: "pandas", "Power BI": "powerbi", Excel: "excel",
};
export const hasIcon = (n) => !!files[n];
export const slug = (s) => s.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");