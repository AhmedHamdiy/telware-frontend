import styled, { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
:root {
  &.light-mode{
    --color-text: #000000fd;
    --color-text-secondary: rgb(112, 117, 121);
    --color-text-secondary-rgb: 112, 117, 121;

    --color-interactive-element-hover: rgba(var(--color-text-secondary-rgb), 0.08);
    
    --accent-color: #4c90b2;
    --accent-color-shade: #447f9c;

    --color-chat-wallpaper-1: linear-gradient(
        90deg,
        #d6d46c,
        #5e924e,
        #509751,
        #4c8446,
        #335c26
      );
      --color-chat-wallpaper-2:linear-gradient(
          90deg,
          #53826a,
          #59854e,
          #406a50,
          #4a7a51,
          #b7b89c
        );

    --chat-wallpaper-bg: url("/assets/bg-light.png");
    --bg-image-opacity: 30%;

    --theme-background-color: #E0E0E4;
    
    --color-background: #ffffff;
    --color-background-secondary: rgb(240, 240, 240, 255);
    --color-background-secondary-accent: rgb(228, 228, 229);
    
    --color-text-button: var(--color-background);
    
    --color-chat-active: #c6deeb;
    --color-chat-hover: #f5f5f5;

    --color-default-shadow: rgb(114, 114, 114, 0.251);
    
    
    --color-item-hover: rgb(244, 244, 245);
    --color-item-active: rgb(237, 237, 237);
    
    --color-icon-secondary: rgb(112, 117, 121);
    
    --pattern-color: #c3bfc5a6;
  
    --new-chat-color: #ffffff;
    --color-background-compact-menu: #4c90b218;
    --color-background-compact-menu-hover: #4c90b23b;
    
    --color-border: #dfe1e5;
    --color-border-hover: #c1c1c1;
    --color-borders-input: rgb(218, 220, 224);
    
    --color-search-border: #3390ec;
    
    --image-grayscale: 0;
    --image-opacity: 30%;

    --scrollbar-color: rgba(0, 0, 0, .2);
    --color-avatar: linear-gradient(135deg, #d6d46c, #5e924e);
    --color-avatar-shadow:linear-gradient(135deg,#d6d46c, #5e924e);
    --admin-sidebar-bg: #56a2c9;
    --admin-sidebar-bg-hover: #447f9c;

    --admin-main-bg: #fff;
    --admin-main-bg-hover: #f5f5f5;

    --admin-header-bg:  #f5f5f5;
    --admin-header-bg-hover: #e5e5e5;


    --admin-nav-menu-item-hover-text: #56a2c9;
  --admin-nav-menu-item-hover: rgba(213, 213, 216, 0.666);
  --admin-card-active: #f0f0f0;

  }
  
  &.dark-mode {
    --color-text: #f5f5f5;
    --color-text-secondary: rgb(170, 170, 170);
    --color-text-secondary-rgb: 170, 170, 170;
    --color-text-button: var(--color-text);
    --color-background: #050709;
    --color-interactive-element-hover: rgba(var(--color-text-secondary-rgb), 0.08);

    --chat-background-left: #0E141A;
    --chat-background-mid-left: #0F171E;
    --chat-background-mid-right: #141C2B;
    --chat-background-right: #1d2d3d;
    
    --accent-color: #56a2c9;
    --accent-color-shade: #447f9c;

    --color-chat-wallpaper-1: linear-gradient(90deg,
      var(--chat-background-left),
      var(--chat-background-mid-left),
      var(--chat-background-mid-right),
      var(--chat-background-right)
    );
    --color-chat-wallpaper-2: linear-gradient(90deg,
      var(--chat-background-right),
      var(--chat-background-mid-right), 
      var(--chat-background-mid-left)
    );

    
    --bg-image-opacity: 100%;
    
    --chat-wallpaper-bg: url("/assets/bg-dark.png");
    
    --new-chat-color: #36373a;
    --color-background: #192b35;
    --color-background-secondary: #24343e;
    --color-background-secondary-accent: #22313a;
    --color-chat-hover: #2c2c2c;
    
    --scrollbar-color:rgba(255, 255, 255, .2);
    --color-default-shadow: rgb(16, 16, 16, 0.612);
    --color-light-shadow: rgb(16, 16, 16, 0.212);
    
    --color-chat-active: #1e4454;
    --color-chat-hover: #25353f;
    
    --color-icon-secondary:  rgb(170, 170, 170);
    --pattern-color: #2d394ecc;
    
    --color-background-compact-menu: #ffffff13;
    --color-background-compact-menu-hover: #ffffff36;
 
    --color-border: #09182299;
    --color-border-hover: #091822;

    --admin-card-active: #56a2c9;
    --color-borders-input: var(--color-text-secondary);

    --color-search-border: #7644CB;
    
    --image-grayscale: 10%;
    --image-opacity: 90%;

    --color-item-hover: var(--color-chat-hover);
    --color-item-active: rgb(237, 237, 237);

    --scrollbar-color: rgba(255, 255, 255, .2);
    --color-avatar: linear-gradient(135deg, #72C6EF, #004E92);
    --color-avatar-shadow:linear-gradient(135deg, #72C6EF, #004E92);

    --admin-sidebar-bg: #192b35;
    --admin-sidebar-bg-hover: #25353f;

    --admin-main-bg: #24343e;
    --admin-main-bg-hover: #25353f;

    --admin-header-bg:  #25353f;
    --admin-header-bg-hover: #203030;

    --admin-nav-menu-item-hover-text: #24343e79;
  --admin-nav-menu-item-hover: rgba(213, 213, 216, 0.466);
  --admin-card-active: #4c90b2;

  }

  --story-views-background: #181a1b;
  --story-views-background-hover: #1e2021;

  --color-background-own-1: #6573F8;
  --color-background-own-2: #7644CB;
  --color-background-own-3: #8849B4;
  --color-background-own-4: #A751A8;
  
  --color-peer-1: var(--accent-color);
  
  --color-peer-2: #a695e7;
  --color-peer-bg-2: #a695e71a;
  --color-peer-bg-active-2: #a695e72b;
  
  --color-peer-3: #7bc862;
  --color-peer-bg-3: #7bc8621a;
  --color-peer-bg-active-3: #7bc8622b;
  
  --color-peer-4: #6ec9cb;
  --color-peer-bg-4: #6ec9cb1a;
  --color-peer-bg-active-4: #6ec9cb2b;
  
  --color-peer-5: #65aadd;
  --color-peer-bg-5: #65aadd1a;
  --color-peer-bg-active-5: #65aadd2b;
  

  --color-peer-6: #ee7aae;
  --color-peer-bg-6: #ee7aae1a;
  --color-peer-bg-active-6: #ee7aae2b;
  
  --backdrop-filter: 10px;
  --box-shadow: 0 0 0.5rem 0.1rem rgba(0, 0, 0, 0.215);
  
  --border-radius-modal: 1rem;
  --border-radius-default: 0.75rem;
  --border-radius-default-small: 0.625rem;
  --border-radius-default-tiny: 0.375rem;
  --border-radius-searchbar: 1.4rem;
  --border-radius-messages: 0.9375rem;
  --border-radius-messages-small: 0.375rem;
  --border-radius-forum-avatar: 25%;
  --border-radius-circle: 50%;
  --border-radius-one-sided: 50px 0 0 50px;
  --border-radius-left-sided-small: 0.625rem 0 0 0.625rem;
  --border-radius-right-sided-small: 0 0.625rem 0.625rem 0;

  
  --color-borders-input: rgb(218, 220, 224);

  
  --color-error: #e53935;
  --color-error-shade: #c628282f;
  --color-success: rgb(0, 199, 62);
  font-size: 16px;
}

input:-webkit-autofill,
input:-webkit-autofill:hover, 
input:-webkit-autofill:focus,
textarea:-webkit-autofill,
textarea:-webkit-autofill:hover,
textarea:-webkit-autofill:focus,
select:-webkit-autofill,
select:-webkit-autofill:hover,
select:-webkit-autofill:focus {
  -webkit-text-fill-color: var(--color-text);
  -webkit-box-shadow: 0 0 0px 1000px var(--color-background) inset;
  transition: background-color 5000s ease-in-out 0s;
  caret-color: var(--color-text)
}

*,
*::before,
*::after {
  box-sizing: border-box;
  padding: 0;
  margin: 0;

  transition: background-color 0.3s, border 0.3s;

  user-select: none;
}

body {
  font-family: "Poppins", sans-serif;
  background-color: var(--color-background);

  transition: color 0.3s, background-color 0.3s;
  min-height: 100vh;
}

input,
button,
textarea,
select {
  font: inherit;
  color: inherit;
}

input,
textarea,
select {
  background-color: inherit;
}

button {  
  cursor: pointer;
}

*:disabled {
  cursor: not-allowed;
}
`;

const ScrollContainer = styled.div`
  width: 100%;
  overflow-y: auto;
  position: relative;

  &::-webkit-scrollbar {
    width: 10px;
    border: 1px solid black;
  }

  &::-webkit-scrollbar-track {
    background: rgba(220, 220, 220, 0.6);
    border-radius: 10px;
  }

  &::-webkit-scrollbar-thumb {
    background: linear-gradient(180deg, #4c8bf5, #8ccef2); /* gradient effect */
    border-radius: 10px;
    border: 2px solid rgba(220, 220, 220, 0.6);
  }

  &::-webkit-scrollbar-thumb:hover {
    background: linear-gradient(180deg, #4c8bf5, #66b5ff);
  }

  scroll-behavior: smooth;
`;

export default GlobalStyles;

export { ScrollContainer };
