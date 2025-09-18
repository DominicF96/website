const extractProps = (props: any) => {
  // Extracts className from props and returns
  // it as first element of an array with the
  // remaining props separately.
  let other = { ...props };
  delete other.className;
  return [props.className, other];
};

export const H1 = (props: any) => {
  const [className, other] = extractProps(props);
  return (
    <h1
      className={`scroll-m-20 text-4xl md:text-6xl font-extrabold tracking-wide uppercase ${
        props.className || ""
      }`}
      style={{ lineHeight: "120%" }}
      {...other}
    />
  );
};

export const H2 = (props: any) => {
  const [className, other] = extractProps(props);
  return (
    <h2
      className={`scroll-m-20 text-4xl md:text-5xl font-semibold tracking-tight transition-colors uppercase ${
        props.className || ""
      }`}
      {...other}
    />
  );
};

export const H3 = (props: any) => {
  const [className, other] = extractProps(props);
  return (
    <h3
      className={`scroll-m-20 text-2xl font-semibold tracking-tight uppercase ${
        props.className || ""
      }`}
      {...props}
    />
  );
};
export const H4 = (props: any) => {
  const [className, other] = extractProps(props);
  return (
    <h4
      className={`scroll-m-20 text-xl font-semibold tracking-tight uppercase ${
        props.className || ""
      }`}
      {...props}
    />
  );
};

// export const H5 = (props: any) => {
//   return (
//     <h1
//       className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl"
//       {...props}
//     >
//       {props.children}
//     </h1>
//   );
// };

// export const H6 = (props: any) => {
//   return (
//     <h1
//       className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl"
//       {...props}
//     />
//   );
// };

export const P = (props: any) => {
  const [className, other] = extractProps(props);
  return (
    <p
      className={`leading-7 [&:not(:first-child)]:mt-6 ${
        props.className || ""
      }`}
      {...other}
    />
  );
};

export const Blockquote = (props: any) => {
  const [className, other] = extractProps(props);
  return (
    <blockquote
      className={`mt-6 border-l-2 pl-6 italic ${props.className || ""}`}
      {...other}
    />
  );
};

export const InlineCode = (props: any) => {
  const [className, other] = extractProps(props);
  return (
    <code
      className={`relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-sm font-semibold ${
        props.className || ""
      }`}
      {...other}
    />
  );
};

export const Lead = (props: any) => {
  const [className, other] = extractProps(props);
  return (
    <p className={`text-lg text-primary ${props.className || ""}`} {...other} />
  );
};

export const Large = (props: any) => {
  const [className, other] = extractProps(props);
  return (
    <div
      className={`text-lg font-semibold ${props.className || ""}`}
      {...other}
    />
  );
};

export const Small = (props: any) => {
  const [className, other] = extractProps(props);
  return (
    <small
      className={`text-sm font-medium leading-none ${props.className || ""}`}
      {...other}
    />
  );
};

export const Muted = (props: any) => {
  const [className, other] = extractProps(props);
  return (
    <div
      className={`text-md text-muted-foreground ${props.className || ""}`}
      {...other}
    />
  );
};
