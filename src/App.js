// routes
import Router from './routes';
// theme
import ThemeProvider from './theme';
// components
import ScrollToTop from './components/ScrollToTop';
import ThemeColorPresets from './components/ThemeColorPresets';
import MotionLazyContainer from './components/animate/MotionLazyContainer';

function App() {
  return (
    <>
      <ThemeProvider>
        <ThemeColorPresets>
          <MotionLazyContainer>
            {/* <ProgressBarStyle />
                <ChartStyle />
                <Settings /> */}
            <ScrollToTop />
            <h1>Hello world</h1>
            <Router />
          </MotionLazyContainer>
        </ThemeColorPresets>
      </ThemeProvider>
    </>
  );
}

export default App;
