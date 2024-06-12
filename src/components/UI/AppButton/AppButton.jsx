import cls from "./AppButton.module.css";

export default function AppButton({ children, icon = "", ...props }) {
  return (
    <button className={cls.AppButton} {...props}>
      <div>{ icon ? icon : "" }</div>
      {children}
    </button>
  );
}
