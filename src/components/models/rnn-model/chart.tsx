"use client";
import React from 'react';
import mermaid from 'mermaid';

type MermaidProps = {
  chart: string;
};

mermaid.initialize({
  startOnLoad: true,
  theme: "default", 
  securityLevel: "loose",
});

export default class Mermaid extends React.Component<MermaidProps> {
  componentDidMount() {
    mermaid.contentLoaded();
  }

  render() {
    return <div className="mermaid dynamic-mermaid">{this.props.chart}</div>;
  }
}
