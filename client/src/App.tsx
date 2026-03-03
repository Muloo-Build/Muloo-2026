import { Home } from "./pages/home";
import { ServicesHub } from "./pages/services/hub";
import { ServicesBuild } from "./pages/services/build";
import { ServicesProduct } from "./pages/services/product";
import { ServicesConsulting } from "./pages/services/consulting";
import { ServicesAi } from "./pages/services/ai";
import { Advisory } from "./pages/advisory";
import { OperatorCircle } from "./pages/advisory/operator-circle";
import { About } from "./pages/about";
import { Contact } from "./pages/contact";
import { Styleguide } from "./pages/styleguide";
import { ResourcesIndex } from "./pages/resources/index";
import { CaseStudies } from "./pages/resources/case-studies";
import { CaseStudyDetail } from "./pages/resources/case-study-detail";
import { Blog } from "./pages/resources/blog";
import { BlogPost } from "./pages/resources/blog-post";
import { MeetingJarrud, MeetingMorne } from "./pages/meetings";
import NotFound from "./pages/not-found";
import { Switch, Route } from "wouter";
import { Layout } from "./components/layout/Layout";
import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "./lib/queryClient";
import { Toaster } from "@/components/ui/toaster";
import { useEffect } from "react";
import { useLocation } from "wouter";

function ScrollToTop() {
  const [location] = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return null;
}

function Router() {
  return (
    <Layout>
      <Switch>
        <Route path="/" component={Home} />
        <Route path="/services/hub" component={ServicesHub} />
        <Route path="/services/build" component={ServicesBuild} />
        <Route path="/services/product" component={ServicesProduct} />
        <Route path="/services/consulting" component={ServicesConsulting} />
        <Route path="/services/ai" component={ServicesAi} />
        <Route path="/advisory/operator-circle" component={OperatorCircle} />
        <Route path="/advisory" component={Advisory} />
        <Route path="/about" component={About} />
        <Route path="/contact" component={Contact} />
        <Route path="/meetings/jarrud" component={MeetingJarrud} />
        <Route path="/meetings/morne" component={MeetingMorne} />
        <Route path="/styleguide" component={Styleguide} />

        <Route path="/resources" component={ResourcesIndex} />
        <Route path="/case-studies" component={CaseStudies} />
        <Route path="/case-studies/:id" component={CaseStudyDetail} />
        <Route path="/blog" component={Blog} />
        <Route path="/blog/:id" component={BlogPost} />

        <Route component={NotFound} />
      </Switch>
    </Layout>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Toaster />
      <ScrollToTop />
      <Router />
    </QueryClientProvider>
  );
}

export default App;
