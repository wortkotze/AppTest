// importzone start
import StephanTestComponent from "stephan-test-component"
// importzone end

const test1 = (props) => {
  return(
  <>
  {/*componentzone start*/}
  <StephanTestComponent dynamicContent={{"id":1,"__component":"stephan-test-component.textcomponent","text":"dsfdsfdsf","color":"dsfsadfsdf"}}/>
  <StephanTestComponent dynamicContent={{"id":4,"__component":"stephan-test-component.textcomponent","text":"hjkhfkdgdf","color":"jkhfdgjkhdfgdf"}}/>
  {/*componentzone end*/}
  </>)
};

export default test1;
