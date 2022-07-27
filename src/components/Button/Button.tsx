import React from "react";

interface Props {
  label: string;
}

export const Button: React.FC<Props> = ({ label }: Props): JSX.Element => {
  const clickHandler = React.useCallback(() => {
    console.log("React button from npm clicked", label);
  }, [label]);
  return (
    <>
      <button className="new-button" onClick={clickHandler}>{label}</button>
    </>
  );
};
