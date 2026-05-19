import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence, useMotionValue, animate } from "framer-motion";
import { LanguageProvider, useLang } from "@/contexts/LanguageContext";
import { SiInstagram, SiLinkedin, SiWhatsapp } from "react-icons/si";
import { articles } from "@/data/articles";
import miltonHobbsLogo from "@assets/Milton_hobbs_logo_1775554832004.png";
import miltonHobbsWordmark from "@assets/image_1776101259071.png";
import imgCorp   from "@assets/expertisecorporate-commercial_2_1779148847133.png";
import imgTax    from "@assets/optimized/phil-desforges-ow1mML1sOi0-unsplash_1776241615811.jpg";
import imgBank   from "@assets/optimized/marc-olivier-jodoin--HIiNFXcbtQ-unsplash_1776241615811.jpg";
import imgTech   from "@assets/optimized/donny-jiang-42gFAgdIUC8-unsplash_1776241615811.jpg";
import imgIp     from "@assets/optimized/simone-hutsch-iDSfeuoxM0o-unsplash_1776241615811.jpg";
import imgEstate from "@assets/optimized/alexander-abero-OypnYfdiQgg-unsplash_1776241615811.jpg";
import imgEmploy from "@assets/optimized/daniele-colucci-Xt48I3ps6Pg-unsplash_1776241615811.jpg";
import imgLitig  from "@assets/optimized/sasha-yudaev-FOYsU4uQqqM-unsplash_1776241615811.jpg";
import heroBg0 from "@assets/verne-ho-0LAJfSNa-xQ-unsplash_1775562755413.jpg";
import heroBg1 from "@assets/tim-stief-dH6IjhWHNQQ-unsplash_1775562755413.jpg";
import heroBg2 from "@assets/joakim-nadell-K67sBVqLLuw-unsplash_1775562755414.jpg";
import heroBg3 from "@assets/maarten-deckers-T5nXYXCf50I-unsplash_1775562755414.jpg";
import heroBg4 from "@assets/anders-jilden-Sc5RKXLBjGg-unsplash_1775562755415.jpg";

const HERO_BG_IMAGES = [heroBg0, heroBg1, heroBg2, heroBg3, heroBg4];

function snapScrollTo(hash: string) {
  const id = hash.replace("#", "");
  const el = document.getElementById(id);
  if (!el) return;
  const container = document.querySelector('.v2-snap-container');
  if (container) {
    el.scrollIntoView({ behavior: "smooth", block: "start" });
  }
}

export default function HomeV2Point2() {
  return null;
}
