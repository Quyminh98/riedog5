import clsx from "clsx";
import "./style.css";

const Container = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return <div className={clsx("container", className)}>{children}</div>;
};

export default Container;
