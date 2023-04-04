interface ContentViewProps {
  children: React.ReactNode;
}

const ContentView = (props: ContentViewProps) => {
  return (
    <div className="flex flex-col rounded-md bg-slate-600 flex-1">
      {props.children}
    </div>
  );
};

export default ContentView;
