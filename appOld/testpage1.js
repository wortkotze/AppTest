// importzone start
import StephanTestComponent from "stephan-test-component";
import { Link } from "expo-router";
import { View, Text } from "react-native";
// importzone end

const test1 = (props) => {
  return (
    <>
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        {/*componentzone start*/}
        <StephanTestComponent
          dynamicContent={{
            id: 1,
            __component: "stephan-test-component.textcomponent",
            text: "test1",
            color: "green",
          }}
        />
        <StephanTestComponent
          dynamicContent={{
            id: 2,
            __component: "stephan-test-component.textcomponent",
            text: "test2",
            color: "yellow",
          }}
        />
        <Link href="/test2/nextversion2">
          <Text>Navigate to nested route</Text>
        </Link>
        {/*componentzone end*/}
      </View>
    </>
  );
};

export default test1;
