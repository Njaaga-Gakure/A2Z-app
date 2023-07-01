import { nanoid } from "nanoid";
import {
  BsFillBriefcaseFill,
  BsWrenchAdjustableCircleFill,
  BsCashCoin,
} from "react-icons/bs";
const links = [
  {
    id: nanoid(),
    text: "home",
    url: "/",
  },
  {
    id: nanoid(),
    text: "about",
    url: "/about",
  },
  {
    id: nanoid(),
    text: "products",
    url: "/products",
  },
];
const services = [
  {
    id: nanoid(),
    icon: <BsWrenchAdjustableCircleFill />,
    title: "maintainance",
    info: "We have a team of skilled technicians with a vast knowledge of the products we sell. Therefore, we are more than capable of addressing any malfunction in any of our products.",
  },
  {
    id: nanoid(),
    icon: <BsFillBriefcaseFill />,
    title: "consultancy",
    info: "Do you have a startup business and are having trouble setting up your tech infrastucture? A2Z is here to help you choose the ideal products especially tailored to your company's needs.",
  },
  {
    id: nanoid(),
    icon: <BsCashCoin />,
    title: "sales",
    info: "While we prioritize quality, we also understand the significance of affordability. We believe that everyone should have access to superior products at reasonable prices.",
  },
];
export { links, services };

export const products_url = "/.netlify/functions/products";
export const single_product_url = `/.netlify/functions/single-product?id=`;
