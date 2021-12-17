import KeypadRow from "./KeypadRow/KeypadRow";
import Button from "../../../components/Button/Button";

const keypad = props => (
  <section className="w-auto m-1 h-auto mb-2">
    <KeypadRow>
      <Button type="clean" onButtonPress={props.onButtonPress}>C</Button>
      <Button type="operations" onButtonPress={props.onButtonPress}>(</Button>
      <Button type="operations" onButtonPress={props.onButtonPress}>)</Button>
      <Button type="operations" onButtonPress={props.onButtonPress}>/</Button>
    </KeypadRow>

    <KeypadRow>
      <Button type="numeric" onButtonPress={props.onButtonPress}>7</Button>
      <Button type="numeric" onButtonPress={props.onButtonPress}>8</Button>
      <Button type="numeric" onButtonPress={props.onButtonPress}>9</Button>
      <Button type="operations" onButtonPress={props.onButtonPress}>x</Button>
    </KeypadRow>

    <KeypadRow>
      <Button type="numeric" onButtonPress={props.onButtonPress}>4</Button>
      <Button type="numeric" onButtonPress={props.onButtonPress}>5</Button>
      <Button type="numeric" onButtonPress={props.onButtonPress}>6</Button>
      <Button type="operations" onButtonPress={props.onButtonPress}>-</Button>
    </KeypadRow>

    <KeypadRow>
      <Button type="numeric" onButtonPress={props.onButtonPress}>1</Button>
      <Button type="numeric" onButtonPress={props.onButtonPress}>2</Button>
      <Button type="numeric" onButtonPress={props.onButtonPress}>3</Button>
      <Button type="operations" onButtonPress={props.onButtonPress}>+</Button>
    </KeypadRow>

    <KeypadRow>
      <Button type="numeric-2xl" onButtonPress={props.onButtonPress}>0</Button>
      <div className="flex w-full ml-3 justify-between">
        <Button type="operations" onButtonPress={props.onButtonPress}>.</Button>
        <Button type="equal" onButtonPress={props.onButtonPress}>=</Button>
      </div>
    </KeypadRow>

  </section>
);

export default keypad;
