import {
  createContext,
  useContext,
  useState,
  useCallback,
  useMemo,
} from "react";

/**
 * Default Resume Data
 */
const defaultResumeData = {
  template: "template1",
  name: "",
  role: "",
  email: "",
  phone: "",
  address: "",
  skills: "",
  experience: "",
  projects: "",
  certifications: "",
  profilePic: "",
};

/**
 * Create Context
 */
const ResumeContext = createContext();

/**
 * Provider Component
 */
export const ResumeProvider = ({ children }) => {
  const [resumeData, setResumeData] = useState(defaultResumeData);

  /**
   * Update Single Field
   */
  const updateResumeField = useCallback((field, value) => {
    setResumeData((prev) => ({
      ...prev,
      [field]: value,
    }));
  }, []);

  /**
   * Update Multiple Fields
   */
  const updateResumeData = useCallback((newData) => {
    setResumeData((prev) => ({
      ...prev,
      ...newData,
    }));
  }, []);

  /**
   * Reset Resume
   */
  const resetResume = useCallback(() => {
    setResumeData(defaultResumeData);
  }, []);

  /**
   * Change Template
   */
  const changeTemplate = useCallback((template) => {
    setResumeData((prev) => ({
      ...prev,
      template,
    }));
  }, []);

  /**
   * Context Value
   */
  const value = useMemo(
    () => ({
      resumeData,
      setResumeData,
      updateResumeField,
      updateResumeData,
      resetResume,
      changeTemplate,
    }),
    [
      resumeData,
      updateResumeField,
      updateResumeData,
      resetResume,
      changeTemplate,
    ]
  );

  return (
    <ResumeContext.Provider value={value}>
      {children}
    </ResumeContext.Provider>
  );
};

/**
 * Custom Hook
 */
export const useResume = () => {
  const context = useContext(ResumeContext);

  if (!context) {
    throw new Error(
      "useResume must be used within a ResumeProvider"
    );
  }

  return context;
};