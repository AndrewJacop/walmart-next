

/**
 * @bref this is a left side bar 
 * @children (caregory accordion or filter bar)
 */
export default function SideBar(props: { children: JSX.Element }) {
  return (
    <div className="lg:px-3 px-2 w-1/4 flex justify-end m-1">
      <div className="h-full flex-col flex ">
        <div className="h-full relative">{props.children}</div>
      </div>
    </div>
  );
}
