import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/NotFound";
import { Route, Switch } from "wouter";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";
import Layout from "./components/Layout";
import LayoutZh from "./components/LayoutZh";
import { lazy, Suspense } from "react";

// Pages are split into their own chunks so each route only downloads its own code.
// Prerendered HTML stays on screen while a chunk loads (see main.tsx hydration).
const Home = lazy(() => import("./pages/Home"));
const SummerCamp = lazy(() => import("./pages/SummerCamp"));
const Teachers = lazy(() => import("./pages/Teachers"));
const Kindness = lazy(() => import("./pages/Kindness"));
const About = lazy(() => import("./pages/About"));
const CampusGuide = lazy(() => import("./pages/CampusGuide"));
const CampusGuideThankYou = lazy(() => import("./pages/CampusGuideThankYou"));
const HomeZh = lazy(() => import("./pages/zh/HomeZh"));
const SummerCampZh = lazy(() => import("./pages/zh/SummerCampZh"));
const TeachersZh = lazy(() => import("./pages/zh/TeachersZh"));
const KindnessZh = lazy(() => import("./pages/zh/KindnessZh"));
const AboutZh = lazy(() => import("./pages/zh/AboutZh"));

function Router() {
  // make sure to consider if you need authentication for certain routes
  return (
    <Switch>
      {/* Campus Guide pages — standalone layout, NOT in main nav */}
      <Route path={"/free-guide"}>
        <Suspense fallback={null}>
          <CampusGuide />
        </Suspense>
      </Route>
      <Route path={"/free-guide/thank-you"}>
        <Suspense fallback={null}>
          <CampusGuideThankYou />
        </Suspense>
      </Route>

      {/* Chinese (中文) pages — wrapped in LayoutZh with wouter nest prop */}
      <Route path="/zh" nest>
        <LayoutZh>
          <Suspense fallback={<div className="min-h-[60vh]" />}>
          <Switch>
            <Route path="/" component={HomeZh} />
            <Route path="/summer-camp" component={SummerCampZh} />
            <Route path="/teachers" component={TeachersZh} />
            <Route path="/kindness" component={KindnessZh} />
            <Route path="/about" component={AboutZh} />
            <Route component={NotFound} />
          </Switch>
          </Suspense>
        </LayoutZh>
      </Route>

      {/* Main English site pages — wrapped in shared Layout with nav & footer */}
      <Route>
        <Layout>
          <Suspense fallback={<div className="min-h-[60vh]" />}>
          <Switch>
            <Route path={"/"} component={Home} />
            <Route path={"/summer-camp"} component={SummerCamp} />
            <Route path={"/teachers"} component={Teachers} />
            <Route path={"/kindness"} component={Kindness} />
            <Route path={"/about"} component={About} />
            <Route path={"/404"} component={NotFound} />
            <Route component={NotFound} />
          </Switch>
          </Suspense>
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
