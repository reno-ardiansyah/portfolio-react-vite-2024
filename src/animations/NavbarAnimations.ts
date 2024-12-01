export const NavbarHamburgerLinesTopAnimation = {
  closed: {rotate: 0, y: 0,},
  open: {rotate: 45, y: 9}
};

export const NavbarHamburgerLinesMiddleAnimation = {
  closed: {opacity: 1},
  open: {opacity: 0}
};

export const NavbarHamburgerLinesBottomAnimation = {
  closed: {rotate: 0, y: 0},
  open: {rotate: -45, y: -9}
};

export const NavbarOverlayAnimation = {
  initial: { y: "-100%" },
  animate: { y: 0 },
  exit: { y: "-100%" },
  transition: { duration: 0.5, ease: "easeInOut" },
};

export const NavbarMenuAnimation = (delay: number = 0.5) => ({
  initial: { x: -50, opacity: 0 },
  animate: { x: 0, opacity: 1 },
  exit: { x: -50, opacity: 0 },
  transition: { duration: 0.5, ease: "easeInOut", delay },
});
