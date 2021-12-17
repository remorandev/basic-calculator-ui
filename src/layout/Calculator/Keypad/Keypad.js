import KeypadRow from "./KeypadRow/KeypadRow";
import Button from "../../../components/Button/Button";

const keypad = () => (
  <section className="w-auto m-1 h-auto mb-2">
    <KeypadRow>
      <Button type="clean">C</Button>
      <Button type="operations">(</Button>
      <Button type="operations">)</Button>
      <Button type="operations">/</Button>
    </KeypadRow>

    <KeypadRow>
      <Button type="numeric">7</Button>
      <Button type="numeric">8</Button>
      <Button type="numeric">9</Button>
      <Button type="operations">x</Button>
    </KeypadRow>

    <KeypadRow>
      <Button type="numeric">4</Button>
      <Button type="numeric">5</Button>
      <Button type="numeric">6</Button>
      <Button type="operations">-</Button>
    </KeypadRow>

    <KeypadRow>
      <Button type="numeric">1</Button>
      <Button type="numeric">2</Button>
      <Button type="numeric">3</Button>
      <Button type="operations">+</Button>
    </KeypadRow>

    <KeypadRow>
      <Button type="numeric-2xl">0</Button>
      <div className="flex w-full ml-3 justify-between">
        <Button type="operations">.</Button>
        <Button type="equal">=</Button>
      </div>
    </KeypadRow>

  </section>
);

export default keypad;
