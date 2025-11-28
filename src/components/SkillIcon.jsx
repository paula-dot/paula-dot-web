import React, { useEffect, useState } from 'react';
import { FaRegQuestionCircle } from 'react-icons/fa';

// Map normalized skill names to Simple Icons component names (strings).
const ICON_NAME_MAP = {
  'qgis': 'SiQgis',
  'grass gis': 'SiGrass',
  'arcgis': 'SiArcgis',
  'openstreetmap': 'SiOpenstreetmap',
  'open street map': 'SiOpenstreetmap',
  'spatial analysis': 'SiOpenstreetmap',
  'pandas': 'SiPandas',
  'numpy': 'SiNumpy',
  'python': 'SiPython',
  'react': 'SiReact',
  'javascript': 'SiJavascript',
  'go': 'SiGo'
};

export default function SkillIcon({ name, size = 24, className = '' }) {
  const [IconComp, setIconComp] = useState(null);

  useEffect(() => {
    let mounted = true;
    if (!name) {
      setIconComp(() => FaRegQuestionCircle);
      return;
    }

    const key = String(name).trim().toLowerCase();
    const iconName = ICON_NAME_MAP[key];

    // If there's no mapped icon name, fall back immediately.
    if (!iconName) {
      setIconComp(() => FaRegQuestionCircle);
      return;
    }

    // Dynamically import the react-icons/si module and pick the named export.
    import('react-icons/si')
      .then((si) => {
        if (!mounted) return;
        const Component = si[iconName];
        if (Component) setIconComp(() => Component);
        else setIconComp(() => FaRegQuestionCircle);
      })
      .catch(() => {
        // If the module import fails (package missing), fall back to the question icon.
        if (!mounted) return;
        setIconComp(() => FaRegQuestionCircle);
      });

    return () => {
      mounted = false;
    };
  }, [name]);

  if (!IconComp) return null; // or a tiny placeholder
  return <IconComp size={size} className={className} aria-label={`${name} logo`} title={name} />;
}