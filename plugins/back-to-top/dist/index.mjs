import { h } from "preact"

export function BackToTop() {
  const component = ({ cfg }) =>
    h(
      "div",
      { class: "back-to-top" },
      h(
        "a",
        { href: "#", "data-router-ignore": "" },
        cfg.locale === "zh-CN" ? "回到顶部⬆️" : "Scroll to top⬆️",
      ),
    )
  component.css = ".back-to-top { margin-top: 1rem; }"
  return component
}
