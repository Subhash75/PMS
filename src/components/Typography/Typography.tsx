import React from "react";

function StyledHeading({
  children,
  css = "",
}: {
  children: React.ReactNode;
  css?: string;
}) {
  return (
    <h1
      className={`font-Montserrat text-lg md:text-xl lg:text-3xl tracking-wider mb-4 text-primary ${css}`}
    >
      {children}
    </h1>
  );
}

function Error({ children }: { children: React.ReactNode }) {
  return (
    <p className="absolute bottom-0 left-0 font-Montserrat text-primary text-xs">
      {children}
    </p>
  );
}

export { StyledHeading, Error };
