export interface Segment {
  title: string;
  subtitle: string;
}

export interface FormData {
  formTitle: FormTitle;
  segmentInstances: SegmentInstance[];
}

export type FormTitle = string;

export interface TextSegment {
  text: string;
}

export interface ShortQuestionSegment {
  question: string;
  answer: string;
}
export interface LongQuestionSegment {
  question: string;
  answer: string;
}
export interface MultipleChoiseQuestion {
  question: string;
  answers: string[];
}
export interface MultipleAnswerQuestion {
  question: string;
  answers: string[];
}
export type SegmentInstance =
  | TextSegment
  | FormTitle
  | ShortQuestionSegment
  | LongQuestionSegment
  | MultipleAnswerQuestion
  | MultipleChoiseQuestion;
