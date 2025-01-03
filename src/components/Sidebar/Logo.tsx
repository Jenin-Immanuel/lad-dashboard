import React from "react";

interface LogoProps {
  className?: string;
}
const Logo = (props: LogoProps) => {
  return (
    <svg
      id="Icons"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 512 512"
      className={props.className}
    >
      <defs>
        <style>
          {`
            .cls-3 { fill: #c2aacf; }
            .cls-4 { fill: #decee5; }
            .cls-5 { fill: #f4e6f4; }
            .cls-8 { fill: #fb626e; }
            .cls-13 { fill: #c44a1a; }
          `}
        </style>
      </defs>
      <circle cx="256" cy="256" r="255.98" style={{ fill: "#8d00af" }} />
      <path
        d="M0 255.76A255.63 255.63 0 0 1 103.44 50.44c113.54-84.25 273.87-60.52 358.12 53a254.76 254.76 0 0 1 49.93 136 76.89 76.89 0 0 0-14.24 6.88c-23.84 14.74-42 41.9-69.91 44.44-19.15 1.75-37.29-9.24-51.1-22.62s-24.87-29.51-39.4-42.12a112.53 112.53 0 0 0-157.7 10c-14.17 15.89-26.53 37.44-47.68 40-28.75 3.44-51.22-31.63-80-28.95-9.3.87-17.72 5.66-26.73 8a54.5 54.5 0 0 1-24.73.69z"
        style={{ fill: "#aa0dd1" }}
      />
      <path
        className="cls-3"
        d="M342.15 426.47v7.14a6.63 6.63 0 0 1-6.63 6.63h-159a6.63 6.63 0 0 1-6.63-6.63v-7.14a6.63 6.63 0 0 1 6.63-6.63h159a6.63 6.63 0 0 1 6.63 6.63z"
      />
      <path
        className="cls-4"
        d="M342.15 426.47v7.14a6.63 6.63 0 0 1-6.63 6.63H198.6a6.63 6.63 0 0 1-6.63-6.63v-7.14a6.63 6.63 0 0 1 6.63-6.63h136.92a6.63 6.63 0 0 1 6.63 6.63z"
      />
      <ellipse className="cls-5" cx="260.63" cy="428.08" rx="21.85" ry="6.59" />
      <ellipse className="cls-5" cx="301.64" cy="428.08" rx="15.59" ry="4.27" />
      <path
        d="M356.85 173.56V353a92.67 92.67 0 0 1-9.58 41.06l-12.69 25.76H177.42l-12.69-25.76a92.67 92.67 0 0 1-9.58-41.06V173.56a92.67 92.67 0 0 1 9.58-41.06l12.69-25.76h157.16l12.69 25.76a92.67 92.67 0 0 1 9.58 41.06z"
        style={{ fill: "#e52e44" }}
      />
      <ellipse
        className="cls-8"
        cx="293.42"
        cy="138.67"
        rx="22.71"
        ry="36.56"
        transform="rotate(-73.74 293.427 138.665)"
      />
    </svg>
  );
};

export default Logo;
