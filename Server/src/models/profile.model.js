import mongoose from 'mongoose'

const personalInfoSchema = new mongoose.Schema(
  {
    fullName: { type: String, trim: true },
    email: { type: String, trim: true, lowercase: true },
    phone: { type: String, trim: true },
    location: { type: String, trim: true },
    website: { type: String, trim: true },
    linkedin: { type: String, trim: true },
    github: { type: String, trim: true },
    portfolio: { type: String, trim: true },
    profileImage: { type: String, trim: true },
  },
  { _id: false },
);

const experienceSchema = new mongoose.Schema(
  {
    company: { type: String, trim: true },
    role: { type: String, trim: true },
    location: { type: String, trim: true },

    startDate: Date,
    endDate: Date,

    isCurrent: {
      type: Boolean,
      default: false,
    },

    description: String,

    technologies: {
      type: [String],
      default: [],
    },
  },
  { _id: false },
);

const projectSchema = new mongoose.Schema(
  {
    name: { type: String, trim: true },

    description: String,

    liveUrl: String,
    githubUrl: String,

    technologies: {
      type: [String],
      default: [],
    },
  },
  { _id: false },
);

const educationSchema = new mongoose.Schema(
  {
    institution: { type: String, trim: true },
    degree: { type: String, trim: true },
    fieldOfStudy: { type: String, trim: true },

    startDate: Date,
    isCurrent: {
      type: Boolean,
      default: false,
    },
    endDate: {
      type: Date,
      required: function () {
        return !this.isCurrent;
      },
    },

    grade: { type: String, trim: true },
    location: { type: String, trim: true },
    description: { type: String, trim: true },
  },
  { _id: false },
);

const certificationSchema = new mongoose.Schema(
  {
    name: { type: String, trim: true },
    issuer: { type: String, trim: true },
    issueDate: Date,
    url: { type: String, trim: true },
  },
  { _id: false },
);

const languageSchema = new mongoose.Schema(
  {
    name: { type: String, trim: true },

    proficiency: {
      type: String,
      enum: ["basic", "intermediate", "fluent", "native"],
    },
  },
  { _id: false },
);

const skillsSchema = new mongoose.Schema(
  {
    technical: {
      type: [String],
      default: [],
    },

    soft: {
      type: [String],
      default: [],
    },

    tools: {
      type: [String],
      default: [],
    },
  },
  { _id: false },
);

const profileSchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
      unique: true,
      index: true,
    },

    personalInfo: {
      type: personalInfoSchema,
      default: () => ({}),
    },

    experience: {
      type: [experienceSchema],
      default: [],
    },

    projects: {
      type: [projectSchema],
      default: [],
    },

    education: {
      type: [educationSchema],
      default: [],
    },

    skills: {
      type: skillsSchema,
      default: () => ({}),
    },

    certifications: {
      type: [certificationSchema],
      default: [],
    },

    languages: {
      type: [languageSchema],
      default: [],
    },
    lastResumeGeneratedAt: {
      type: Date,
      default: null,
    },
  },
  {
    timestamps: true,
  },
);

const profileModel = mongoose.model("Profile", profileSchema);

export default profileModel;