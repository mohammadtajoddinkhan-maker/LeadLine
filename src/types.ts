export interface PipelineStage {
  id: string;
  number: string;
  title: string;
  subtitle: string;
  description: string;
  deliverables: string[];
  metric: string;
  iconName: string;
}

export interface ComparisonItem {
  id: string;
  category: string;
  before: {
    title: string;
    description: string;
    sentiment: 'negative';
  };
  after: {
    title: string;
    description: string;
    sentiment: 'positive';
  };
}

export interface TimelineStep {
  step: string;
  title: string;
  duration: string;
  description: string;
  milestones: string[];
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
}
