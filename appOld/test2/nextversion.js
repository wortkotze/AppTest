// importzone start
import StephanTestComponent from "stephan-test-component"
// importzone end

const test1 = (props) => {
  return(
  <>
  {/*componentzone start*/}
  <StephanTestComponent dynamicContent={{"id":1,"__component":"stephan-test-component.textcomponent","text":"test1","color":"green"}}/>
  <StephanTestComponent dynamicContent={{"id":2,"__component":"stephan-test-component.textcomponent","text":"test2","color":"yellow"}}/>
  {/*componentzone end*/}
  </>)
};

export default test1;
