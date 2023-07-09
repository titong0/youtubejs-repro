import React from "react";
import Innertube from "youtubei.js/agnostic";

// this line causes the crash
const client = Innertube.create();

const Index = ({ ctx }) => {
  return <div>Hello world</div>;
};

export default Index;
