import React from 'react';

export interface NavItem {
  label: string;
  href: string;
}

export interface Feature {
  title: string;
  description: string;
  icon: React.ComponentType<any>;
  gridArea?: string;
}

export interface CandidateProfile {
  role: string;
  summary: string;
  keySkills: string[];
  suggestedQuestions: string[];
}