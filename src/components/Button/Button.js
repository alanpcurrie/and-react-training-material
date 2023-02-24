// const style = {
//   border: "none",
//   color: "CornflowerBlue",
//   padding: "0.2rem 0.8rem",
//   marginLeft: "1rem",
//   cursor: "pointer"
// };

// const pipe = (...providers) => ({ children }) =>
//   providers.reduceRight((child, Element) => <Element>{child}</Element>, children);

// const Btn = ({children}, props) =>  <button {...props}>{children}</button>
// const Emoji = ({children}, props) =>  <span {...props}> {children}   remove from cart </span>
// const Icon = () => <>❌</>

// const Pipe = pipe(Btn, Emoji, Icon)

export const Button = ({ style, ariaLabel, emoji, children }, props) => {
  return (
    <>
      <button style={style} {...props}>
        <span role="img" aria-label={ariaLabel}>
          {emoji}
        </span>
        {children}
      </button>
    </>
  );
};
