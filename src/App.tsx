import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "./components/ui/toaster";
import NotFound from "./pages/not-found";
import Home from "./pages/Home";
// import React, { useState } from "react";
import ConsultationPage from "./components/ConsultationPage";
// import TourCategories from "./components/TourCategories";
import FullCategories from "./components/FullCategories";
import FullPopularTours from "./components/FullPopularTours";
import AboutUsPage from "./components/AboutUsPage";



function Router() {
  return (
    <>
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/home" component={Home} />
      <Route path="/consultation" component={ConsultationPage} />
      <Route path="/fullcategories" component={FullCategories} />
      <Route path="/fullpopulartours" component={FullPopularTours} />
      <Route path="/aboutuspage" component={AboutUsPage} />
      <Route component={NotFound} />
    </Switch>
    </>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Router />
      <Toaster />
    </QueryClientProvider>
  );
}

export default App;
