import CalculationScreen from './CalculationScreen/CalculationScreen';
import ResultScreen from './ResultScreen/ResultScreen';

const screen = () => (
    <section  className="w-auto m-3 h-25 text-right space-y-2 py-2">
        <ResultScreen />
        <CalculationScreen />
    </section>
);

export default screen;