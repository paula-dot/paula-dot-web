import React from 'react';
import { SiQgis, SiGrass, SiOpenstreetmap, SiPandas, SiNumpy, SiPython, SiReact, SiJavascript, SiGo } from 'react-icons/si';
import {FaRegQuestionCircle} from "react-icons/fa";

const ICON_MAP = {
    'qgis': SiQgis,
    'grass gis': SiGrass,
    'spatial analysis': SiOpenstreetmap,
    'pandas': SiPandas,
    'numpy': SiNumpy,
    'python': SiPython,
    'react': SiReact,
    'javascript': SiJavascript,
    'go': SiGo
}

export default function SkillIcon({ name, size = 24 }) {
    if (!name) return null;
    const key = String(name).trim().toLowerCase();
    const Icon = ICON_MAP[key];
    return Icon
        ? <Icon size={size} aria-label={`${name} logo`} title={name} />
        : <FaRegQuestionCircle size={size} aria-label={`${name} logo`} title={name} />;
}