import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/NotFound";
import { Route, Switch } from "wouter";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";
import Layout from "./components/Layout";
import LayoutZh from "./components/LayoutZh";
import Home from "./pages/Home";
import SummerCamp from "./pages/SummerCamp";
import Teachers from "./pages/Teachers";
import Kindness from "./pages/Kindness";
import About from "./pages/About";
import CampusGuide from "./pages/CampusGuide";
import CampusGuideThankYou from "./pages/CampusGuideThankYou";
import HomeZh from "./pages/zh/HomeZh";
import SummerCampZh from "./pages/zh/SummerCampZh";
import TeachersZh from "./pages/zh/TeachersZh";
import KindnessZh from "./pages/zh/KindnessZh";
import AboutZh from "./pages/zh/AboutZh";

function Router() {
  // make sure to consider if you need authentication for certain routes
  return (
    <Switch>
      {/* Campus Guide pages — standalone layout, NOT in main nav */}
      <Route path={"/free-guide"} component={CampusGuide} />
      <Route path={"/free-guide/thank-you"} component={CampusGuideThankYou} />

      {/* Chinese (中文) pages — wrapped in LayoutZh with wouter nest prop */}
      <Route path="/zh" nest>
        <LayoutZh>
          <Switch>
            <Route path="/" component={HomeZh} />
            <Route path="/summer-camp" component={SummerCampZh} />
            <Route path="/teachers" component={TeachersZh} />
            <Route path="/kindness" component={KindnessZh} />
            <Route path="/about" component={AboutZh} />
            <Route component={NotFound} />
          </Switch>
        </LayoutZh>
      </Route>

      {/* Main English site pages — wrapped in shared Layout with nav & footer */}
      <Route>
        <Layout>
          <Switch>
            <Route path={"/"} component={Home} />
            <Route path={"/summer-camp"} component={SummerCamp} />
            <Route path={"/teachers"} component={Teachers} />
            <Route path={"/kindness"} component={Kindness} />
            <Route path={"/about"} component={About} />
            <Route path={"/404"} component={NotFound} />
            <Route component={NotFound} />
          </Switch>
        </Layout>
      </Route>
    </Switch>
  );
}

function App() {
  return (
    <ErrorBoundary>
      <ThemeProvider defaultTheme="light">
        <TooltipProvider>
          <Toaster />
          <Router />
        </TooltipProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;
