import { View } from "react-native";

interface ContainerViewProps {
  children: React.ReactNode;
}
const ContainerView = (props: ContainerViewProps) => {
  return (
    <View className="flex justify-center items-center flex-1 bg-slate-900">
      {props.children}
    </View>
  );
};

export default ContainerView;
