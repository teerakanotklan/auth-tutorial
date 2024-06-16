"use client";

interface HeaderProps {
  label: string;
}

export const Header = ({ label }: HeaderProps) => {
  return (
    <div>
      <h1 className="text-3xl text-center">{label}</h1>
    </div>
  );
};
