import styled from "styled-components";

export const StyledBtnNav = styled.button`
  cursor: pointer;
  padding: 0.6rem 1.5rem;
  border-radius: 1.1rem;
  border: transparent;
  background-color: var(--primary-btn-color);
  color: var(--primary-font-color);
  font-weight: bold;
  @media (width < 768px) {
    background-color: var(--secondary-bg-color);
  }
`;
const StyledHamburguerBtn = styled.button`
  display: none;
  @media (width < 768px) {
    display: flex;
    flex-direction: column;
    background-color: transparent;
    border: none;
    cursor: pointer;
    margin: auto 0;
    gap: 0.7rem;

    position: relative;

    & div {
      transition: all 0.5s ease;
      width: 30px;
      height: 4px;
      margin: 0;
      background-color: var(--primary-bg-color);
      border-radius: 10px;
    }
    &.menu-active {
      & div:nth-of-type(1),
      & div:nth-of-type(3) {
        position: absolute;
        background-color: var(--secondary-bg-color);
      }
      & div:nth-last-of-type(1) {
        transform: rotate(45deg);
      }
      & div:nth-last-of-type(2) {
        opacity: 0;
      }
      & div:nth-last-of-type(3) {
        transform: rotate(-45deg);
      }
    }
  }
`;
export function BtnNavMobile() {
  function toggleMenu(e) {
    const BtnMenu = e.currentTarget;
    if (!(BtnMenu instanceof HTMLElement))
      throw new Error(
        "Error in BtnNavMobile of buttons.jsx. ToggleMenu is not reciving an HTML element"
      );
    if (BtnMenu.tagName !== "BUTTON")
      throw new Error(
        "Error in BtnNavMobile of buttons.jsx. ToggleMenu is not reciving a button"
      );
    const toggleClass = (btn) => {
      const currentSection = document.querySelector("div#root > section");
      const navLinks = document.querySelector("nav > div > ul");
      const className = "menu-active";
      const handleLinks = () => {
        const links = document.querySelectorAll("nav > div > ul > li > a");
        links.forEach((link) => {
          link.addEventListener("click", () => {
            currentSection.classList.remove(className);
            btn.classList.remove(className);
            navLinks.classList.remove(className);
          });
        });
      };
      currentSection.classList.toggle(className);
      btn.classList.toggle(className);
      navLinks.classList.toggle(className);
      handleLinks();
    };
    toggleClass(BtnMenu);
  }
  return (
    <StyledHamburguerBtn aria-label="Menu" onClick={(e) => toggleMenu(e)}>
      {" "}
      {/* It transforms to a 'X' when onclick()*/}
      <div></div>
      <div></div>
      <div></div>
    </StyledHamburguerBtn>
  );
}