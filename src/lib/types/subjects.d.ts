declare type Subjects = {
  _id: string;
  name: string;
  icon: string;
  createdAt: string;
}[];

declare type Metadata = {
  currentPage: number;
  numberOfPages: number;
  limit: number;
};

declare type GetAllSubjectsResponse = {
  metadata: Metadata;
  subjects: Subjects;
};

declare type Exams = {
  _id: string;
  title: string;
  duration: number;
  subject: string;
  numberOfQuestions: number;
  active: boolean;
  createdAt: string;
}[];

declare type GetAllExams = {
  metadata: Metadata;
  exams: Exams;
};
