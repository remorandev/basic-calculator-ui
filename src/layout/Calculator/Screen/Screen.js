import CalculationScreen from './CalculationScreen/CalculationScreen';
import ResultScreen from './ResultScreen/ResultScreen';

const screen = (props) => (
    <section  className="w-auto m-3 h-25 text-right space-y-2 py-2">
        <ResultScreen>{props.result}</ResultScreen>
        <CalculationScreen>{props.equation}</CalculationScreen>
    </section>
);

export default screen;